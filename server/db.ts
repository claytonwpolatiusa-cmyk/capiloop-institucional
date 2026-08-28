/**
 * CapiLoop — consultas públicas de sacolas e persistência de pré-cadastros.
 */
import { and, desc, eq, gt } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { nanoid } from "nanoid";
import { InsertPartnerLead, InsertUser, partnerLeads, surpriseBags, users } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function listAvailableSurpriseBags() {
  const db = await getDb();
  if (!db) return [];

  return db
    .select()
    .from(surpriseBags)
    .where(and(eq(surpriseBags.isAvailable, true), gt(surpriseBags.quantityAvailable, 0)))
    .orderBy(desc(surpriseBags.createdAt))
    .limit(6);
}

export async function createPartnerLead(lead: Omit<InsertPartnerLead, "id" | "status" | "referralCode" | "createdAt" | "updatedAt">) {
  const db = await getDb();
  if (!db) throw new Error("Banco de dados indisponível para receber o pré-cadastro.");

  if (lead.referredByCode) {
    const referrer = await db.select({ id: partnerLeads.id }).from(partnerLeads).where(eq(partnerLeads.referralCode, lead.referredByCode)).limit(1);
    if (referrer.length === 0) throw new Error("O código de indicação informado não é válido.");
  }

  const referralCode = `CAPI-${nanoid(8).toUpperCase()}`;
  await db.insert(partnerLeads).values({ ...lead, referralCode, status: "new" });
  return { success: true, referralCode } as const;
}

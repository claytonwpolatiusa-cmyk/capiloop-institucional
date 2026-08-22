/**
 * CapiLoop — dados públicos de sacolas do dia e leads de parceiros para o site institucional.
 */
import { boolean, int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const surpriseBags = mysqlTable("surpriseBags", {
  id: int("id").autoincrement().primaryKey(),
  partnerName: varchar("partnerName", { length: 160 }).notNull(),
  title: varchar("title", { length: 160 }).notNull(),
  category: varchar("category", { length: 80 }).notNull(),
  city: varchar("city", { length: 120 }).notNull(),
  neighborhood: varchar("neighborhood", { length: 120 }),
  priceCents: int("priceCents").notNull(),
  originalPriceCents: int("originalPriceCents"),
  quantityAvailable: int("quantityAvailable").notNull(),
  pickupStart: varchar("pickupStart", { length: 5 }).notNull(),
  pickupEnd: varchar("pickupEnd", { length: 5 }).notNull(),
  imageUrl: text("imageUrl"),
  isAvailable: boolean("isAvailable").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const partnerLeads = mysqlTable("partnerLeads", {
  id: int("id").autoincrement().primaryKey(),
  businessName: varchar("businessName", { length: 160 }).notNull(),
  contactName: varchar("contactName", { length: 160 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 32 }).notNull(),
  city: varchar("city", { length: 120 }).notNull(),
  category: varchar("category", { length: 80 }).notNull(),
  availabilityDescription: text("availabilityDescription").notNull(),
  notes: text("notes"),
  agreesToContact: boolean("agreesToContact").notNull(),
  status: mysqlEnum("status", ["new", "contacted", "approved", "archived"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SurpriseBag = typeof surpriseBags.$inferSelect;
export type PartnerLead = typeof partnerLeads.$inferSelect;
export type InsertPartnerLead = typeof partnerLeads.$inferInsert;

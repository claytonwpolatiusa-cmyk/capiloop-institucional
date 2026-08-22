import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { z } from "zod";
import * as db from "./db";
import { publicProcedure, router } from "./_core/trpc";

const partnerLeadInput = z.object({
  businessName: z.string().trim().min(2, "Informe o nome do estabelecimento.").max(160),
  contactName: z.string().trim().min(2, "Informe seu nome.").max(160),
  email: z.string().trim().email("Informe um e-mail válido.").max(320),
  phone: z.string().trim().min(8, "Informe um telefone válido.").max(32),
  city: z.string().trim().min(2, "Informe a cidade.").max(120),
  category: z.string().trim().min(2, "Selecione a categoria.").max(80),
  availabilityDescription: z.string().trim().min(8, "Conte um pouco sobre a disponibilidade de alimentos.").max(1200),
  notes: z.string().trim().max(1200).optional(),
  agreesToContact: z.literal(true, { error: "É necessário autorizar o contato da CapiLoop." }),
});

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),
  marketplace: router({
    listAvailableBags: publicProcedure.query(() => db.listAvailableSurpriseBags()),
  }),
  partnerLeads: router({
    submit: publicProcedure.input(partnerLeadInput).mutation(({ input }) => db.createPartnerLead(input)),
  }),
});

export type AppRouter = typeof appRouter;

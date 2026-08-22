/**
 * CapiLoop — contratos públicos da vitrine de sacolas e do pré-cadastro de parceiros.
 */
import { beforeEach, describe, expect, it, vi } from "vitest";

const dbMocks = vi.hoisted(() => ({
  listAvailableSurpriseBags: vi.fn(),
  createPartnerLead: vi.fn(),
}));

vi.mock("./db", () => ({
  listAvailableSurpriseBags: dbMocks.listAvailableSurpriseBags,
  createPartnerLead: dbMocks.createPartnerLead,
}));

import { appRouter } from "./routers";

describe("marketplace e pré-cadastro de parceiros", () => {
  beforeEach(() => {
    dbMocks.listAvailableSurpriseBags.mockReset();
    dbMocks.createPartnerLead.mockReset();
  });

  it("expõe somente os registros retornados pela fonte dinâmica de sacolas", async () => {
    const realBags = [{ id: 71, partnerName: "Padaria Real", quantityAvailable: 2 }];
    dbMocks.listAvailableSurpriseBags.mockResolvedValue(realBags);

    const caller = appRouter.createCaller({} as never);
    await expect(caller.marketplace.listAvailableBags()).resolves.toEqual(realBags);
  });

  it("recusa um pré-cadastro sem autorização de contato", async () => {
    const caller = appRouter.createCaller({} as never);
    await expect(caller.partnerLeads.submit({
      businessName: "Café Capi",
      contactName: "Ana",
      email: "ana@cafecapi.com",
      phone: "11999999999",
      city: "São Paulo",
      category: "Café",
      availabilityDescription: "Bolos e pães do dia.",
      agreesToContact: false,
    })).rejects.toThrow();
  });

  it("persiste um pré-cadastro válido", async () => {
    dbMocks.createPartnerLead.mockResolvedValue({ success: true });
    const caller = appRouter.createCaller({} as never);
    await expect(caller.partnerLeads.submit({
      businessName: "Café Capi",
      contactName: "Ana",
      email: "ana@cafecapi.com",
      phone: "11999999999",
      city: "São Paulo",
      category: "Café",
      availabilityDescription: "Bolos e pães do dia.",
      agreesToContact: true,
    })).resolves.toEqual({ success: true });
  });
});

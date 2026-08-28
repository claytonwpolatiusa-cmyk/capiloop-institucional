/**
 * CapiLoop — validação do estado pós-pré-cadastro e das ações de indicação.
 */
import { renderToStaticMarkup } from "react-dom/server";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { ReferralSuccessCard } from "./ForBusinesses";

describe("ReferralSuccessCard", () => {
  it("exibe o código de indicação e as ações de compartilhamento após o pré-cadastro", () => {
    const html = renderToStaticMarkup(
      <ReferralSuccessCard referralCode="CAPI-REFER123" copied={false} onShare={vi.fn()} onCopy={vi.fn()} onAnother={vi.fn()} />,
    );

    expect(html).toContain("CAPI-REFER123");
    expect(html).toContain("Compartilhar");
    expect(html).toContain("Copiar link");
    expect(html).toContain("cinco meses");
  });

  it("confirma visualmente quando o link foi copiado", () => {
    const html = renderToStaticMarkup(
      <ReferralSuccessCard referralCode="CAPI-REFER123" copied onShare={vi.fn()} onCopy={vi.fn()} onAnother={vi.fn()} />,
    );

    expect(html).toContain("Link copiado");
  });
});

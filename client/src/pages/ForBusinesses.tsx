/**
 * CapiLoop — Horta Escultural: comércio local em primeiro plano, com calidez e precisão.
 */
import { ArrowRight, ChartNoAxesCombined, CircleDollarSign, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const partnerVisual = "/manus-storage/capiloop-partners-3d_d22bb6f8.png";

const benefits = [
  { icon: UsersRound, title: "Presença no bairro", text: "Sua marca aparece para pessoas que já estão descobrindo novas rotas e decisões perto de você." },
  { icon: CircleDollarSign, title: "Benefícios com contexto", text: "Crie incentivos que façam sentido para o seu ritmo, sua margem e o relacionamento que você quer construir." },
  { icon: ChartNoAxesCombined, title: "Leitura mais humana", text: "Acompanhe o que desperta interesse e use esses sinais para testar novas ideias para o seu negócio." },
];

export default function ForBusinesses() {
  return (
    <div className="page-surface business-surface">
      <SiteHeader />
      <main>
        <PageHero
          index="02"
          eyebrow="Para estabelecimentos"
          title={<>Seu balcão pode<br />virar <em>ponto de encontro.</em></>}
          description="A CapiLoop aproxima sua marca das pessoas certas, na hora em que elas estão escolhendo por onde passar."
          guideVariant="guide-business"
        />

        <section className="section partner-intro">
          <div className="partner-image-wrap">
            <div className="image-orbit image-orbit-partner" aria-hidden="true" />
            <img src={partnerVisual} alt="Miniatura 3D de um estabelecimento parceiro CapiLoop" />
          </div>
          <div className="partner-intro-copy">
            <p className="eyebrow">De porta aberta para a cidade</p>
            <h2>Mais descobertas.<br /><em>Mais vínculo.</em></h2>
            <p>Você oferece uma experiência real. A CapiLoop ajuda essa experiência a encontrar pessoas abertas a voltar, recomendar e fazer parte do movimento local.</p>
            <Link href="/contato?assunto=parcerias" className="button button-ink">Quero conversar sobre parceria <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="section benefits-section">
          <div className="benefits-header">
            <p className="eyebrow">Uma parceria que circula</p>
            <h2>Chegue perto sem<br />deixar de ser <em>você.</em></h2>
          </div>
          <div className="benefits-list">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="benefit-row">
                  <span className="benefit-count">0{index + 1}</span>
                  <span className="benefit-icon"><Icon size={24} strokeWidth={1.6} /></span>
                  <div><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="quote-panel">
          <p className="quote-mark">“</p>
          <blockquote>Parceria boa não interrompe a rotina de um negócio. Ela <em>entra no fluxo</em> e encontra um jeito de somar.</blockquote>
          <span>— Manifesto CapiLoop</span>
        </section>

        <CtaBand title="Vamos fazer o seu lugar entrar no loop?" body="Conte um pouco sobre o seu estabelecimento. A conversa começa por aqui." primaryHref="/contato?assunto=parcerias" primaryLabel="Cadastrar meu estabelecimento" secondaryHref="/como-funciona" secondaryLabel="Entender como funciona" />
      </main>
      <SiteFooter />
    </div>
  );
}

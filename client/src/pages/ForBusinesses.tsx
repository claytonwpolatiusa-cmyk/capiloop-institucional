/**
 * CapiLoop — Horta Escultural: comércio local em primeiro plano, com calidez e precisão.
 */
import { ArrowRight, ChartNoAxesCombined, CircleDollarSign, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const partnerVisual = "/manus-storage/capiloop-partners-3d_d22bb6f8.png";

const benefits = [
  { icon: CircleDollarSign, title: "Receita de uma disponibilidade real", text: "Transforme alimentos do dia que não entraram no ritmo normal de vendas em uma nova oportunidade comercial." },
  { icon: UsersRound, title: "Novos clientes do bairro", text: "Apareça para pessoas que estão procurando uma boa sacola perto de casa, do trabalho ou da faculdade." },
  { icon: ChartNoAxesCombined, title: "Operação simples e controlada", text: "Publique quantidade, preço e janela de retirada. Acompanhe reservas e confirme entregas por código." },
];

export default function ForBusinesses() {
  return (
    <div className="page-surface business-surface">
      <SiteHeader />
      <main>
        <PageHero
          index="02"
          eyebrow="Para estabelecimentos"
          title={<>O alimento do dia<br />pode ganhar <em>uma nova saída.</em></>}
          description="A CapiLoop ajuda padarias, cafés, restaurantes, confeitarias e mercados a transformar uma disponibilidade variável em receita, descoberta e menos desperdício."
          guideVariant="guide-business"
        />

        <section className="section partner-intro">
          <div className="partner-image-wrap">
            <div className="image-orbit image-orbit-partner" aria-hidden="true" />
            <img src={partnerVisual} alt="Miniatura 3D de um estabelecimento parceiro CapiLoop" />
          </div>
          <div className="partner-intro-copy">
            <p className="eyebrow">Uma saída melhor para bons alimentos</p>
            <h2>O que ainda está bom<br />pode continuar <em>circulando.</em></h2>
            <p>Você monta sacolas surpresa de acordo com o que está disponível, define uma janela de retirada e alcança pessoas dispostas a descobrir seu estabelecimento.</p>
            <Link href="/contato?assunto=parcerias" className="button button-ink">Quero vender sacolas <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="section benefits-section">
          <div className="benefits-header">
            <p className="eyebrow">Uma operação que acompanha o seu ritmo</p>
            <h2>Você decide a sacola.<br />A CapiLoop faz <em>ela chegar.</em></h2>
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
          <blockquote>O que não entrou no ritmo normal do dia ainda pode encontrar um <em>bom destino.</em></blockquote>
          <span>— Manifesto CapiLoop</span>
        </section>

        <CtaBand title="Vamos colocar as suas sacolas em circulação?" body="Conte um pouco sobre o seu estabelecimento. A conversa começa por aqui." primaryHref="/contato?assunto=parcerias" primaryLabel="Cadastrar estabelecimento" secondaryHref="/como-funciona" secondaryLabel="Entender a experiência" />
      </main>
      <SiteFooter />
    </div>
  );
}

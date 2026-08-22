/**
 * CapiLoop — Horta Escultural: percurso aberto, conteúdo editorial e acentos verde-lima.
 */
import { ArrowRight, BadgeCheck, MapPinned, ShoppingBag, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const steps = [
  {
    number: "01",
    icon: MapPinned,
    title: "Descubra uma sacola surpresa",
    text: "Veja opções próximas, compare preço, disponibilidade e janela de retirada de padarias, cafés, mercados e restaurantes.",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Reserve e pague pelo app",
    text: "Escolha a sacola disponível, confirme a reserva e selecione o horário que funciona para a sua retirada.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Retire no local e aproveite",
    text: "Apresente o código do pedido na janela escolhida. A sacola é surpresa, mas a experiência é simples e transparente.",
  },
];

export default function HowItWorks() {
  return (
    <div className="page-surface">
      <SiteHeader />
      <main>
        <PageHero
          index="01"
          eyebrow="Como funciona"
          title={<>Descubra.<br /><em>Reserve. Retire.</em></>}
          description="A CapiLoop transforma alimentos do dia em sacolas surpresa. Você encontra uma boa oportunidade perto, reserva pelo app e retira direto no estabelecimento."
          guideVariant="guide-steps"
        />

        <section className="section section-route">
          <div className="route-header">
            <p className="eyebrow">Simples desde a primeira sacola</p>
            <h2>Três passos.<br />Uma boa <em>surpresa.</em></h2>
          </div>
          <div className="steps-journey">
            <div className="journey-line" aria-hidden="true"><span /><span /><span /></div>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className={`step-item step-${index + 1}`} key={step.number}>
                  <div className="step-icon"><Icon size={25} strokeWidth={1.6} /></div>
                  <p className="step-number">{step.number}</p>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section app-glimpse-section">
          <div className="glimpse-copy">
            <p className="eyebrow">Tudo que você precisa saber, antes de reservar</p>
            <h2>Surpresa no sabor.<br /><em>Clareza</em> na compra.</h2>
            <p>Antes de confirmar, você vê o estabelecimento, o valor, a disponibilidade e a janela de retirada. Depois, basta chegar no horário e apresentar seu código.</p>
            <Link href="/contato?assunto=acesso-app" className="text-action text-action-ink">Quero encontrar sacolas <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="phone-scene" aria-label="Representação conceitual da tela do aplicativo CapiLoop">
            <div className="phone-shadow" aria-hidden="true" />
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-map-dot dot-one" />
                <div className="phone-map-dot dot-two" />
                <div className="phone-map-dot dot-three" />
                <div className="phone-route" />
                <div className="phone-top"><span>Bom dia, Marina</span><span className="phone-avatar">C</span></div>
                <div className="phone-card"><BadgeCheck size={19} /><div><strong>Tem sacola perto</strong><small>Retirada hoje até 18h</small></div></div>
                <div className="phone-bottom"><span>Descobrir</span><span>Pedidos</span><span>Perfil</span></div>
              </div>
            </div>
          </div>
        </section>
        <CtaBand title="Uma boa surpresa pode estar logo ali." body="Encontre as sacolas disponíveis perto de você e dê uma nova chance aos alimentos do dia." />
      </main>
      <SiteFooter />
    </div>
  );
}

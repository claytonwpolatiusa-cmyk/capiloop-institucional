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
    title: "Encontre um ponto no seu caminho",
    text: "Abra a CapiLoop, escolha onde passar e descubra os estabelecimentos que fazem parte da sua rota.",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Faça uma escolha que volta para você",
    text: "Ao circular pela rede, você encontra benefícios pensados para transformar pequenas escolhas em experiências melhores.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Continue o loop",
    text: "Aproveite a jornada, compartilhe novos lugares e siga conectando o que acontece no bairro com o seu dia.",
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
          title={<>Uma volta boa<br /><em>muda o dia todo.</em></>}
          description="A CapiLoop organiza pequenas descobertas para você circular, encontrar e aproveitar o que existe perto — no seu ritmo."
          guideVariant="guide-steps"
        />

        <section className="section section-route">
          <div className="route-header">
            <p className="eyebrow">Simples por natureza</p>
            <h2>Três movimentos.<br />Um <em>loop</em> inteiro.</h2>
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
            <p className="eyebrow">Feito para acompanhar</p>
            <h2>Um app que mostra<br />o que <em>vale a pena</em><br />pelo caminho.</h2>
            <p>A experiência é direta: menos procura, mais presença. A CapiLoop conecta você aos lugares que deixam a cidade mais viva.</p>
            <Link href="/contato?assunto=acesso-app" className="text-action text-action-ink">Quero receber o acesso ao app <ArrowRight size={16} aria-hidden="true" /></Link>
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
                <div className="phone-card"><BadgeCheck size={19} /><div><strong>Tem loop perto</strong><small>Escolhas que rendem mais</small></div></div>
                <div className="phone-bottom"><span>Descobrir</span><span>Rotas</span><span>Perfil</span></div>
              </div>
            </div>
          </div>
        </section>
        <CtaBand title="Comece pelo seu caminho." body="Diga para a Capi qual cidade e que tipo de descoberta você quer encontrar." />
      </main>
      <SiteFooter />
    </div>
  );
}

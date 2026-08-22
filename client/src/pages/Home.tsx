/**
 * CapiLoop — Horta Escultural: hero assimétrico, capivara 3D e percurso em verde-lima.
 */
import { ArrowRight, ArrowUpRight, CircleCheck, MapPin, MoveUpRight, ShoppingBag, Store } from "lucide-react";
import { Link } from "wouter";
import { CtaBand, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const heroCapybara = "/manus-storage/capiloop-hero-capybara_c3d14477.png";

const values = [
  { icon: MapPin, kicker: "Descubra", title: "Sacolas surpresa perto de você.", text: "Padarias, cafés, restaurantes e mercados com bons alimentos disponíveis no dia." },
  { icon: ShoppingBag, kicker: "Reserve", title: "Uma boa surpresa por um preço mais leve.", text: "Veja a disponibilidade, escolha o horário e garanta a sua sacola pelo app." },
  { icon: CircleCheck, kicker: "Retire", title: "Passe no local e aproveite.", text: "A retirada é simples, presencial e acontece na janela definida por cada parceiro." },
];

export default function Home() {
  return (
    <div className="page-surface home-surface">
      <SiteHeader />
      <main>
        <section className="home-hero">
          <div className="hero-route hero-route-one" aria-hidden="true" />
          <div className="hero-route hero-route-two" aria-hidden="true" />
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" />Sacolas surpresa perto de você</p>
            <h1>Boas <em>surpresas.</em><br />Menos <span>desperdício.</span></h1>
            <p className="hero-description">Descubra alimentos do dia em lugares que você gosta, reserve pelo app e retire no local por um preço mais leve.</p>
            <div className="hero-actions">
              <Link href="/contato?assunto=acesso-app" className="button button-lime">Encontrar sacolas <ArrowUpRight size={17} aria-hidden="true" /></Link>
              <Link href="/como-funciona" className="text-action text-action-ink">Como funciona <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <div className="hero-mini-proof"><span className="proof-pip" /><span>Reserve no app. Retire no local.</span></div>
          </div>
          <div className="hero-mascot-wrap">
            <div className="hero-glass-tag tag-top"><span>Boa surpresa</span><span className="tag-pin"><ShoppingBag size={14} /></span></div>
            <div className="hero-glass-tag tag-bottom"><span className="tag-lime-dot" />retirada no local</div>
            <div className="mascot-disc" aria-hidden="true" />
            <img className="hero-mascot" src={heroCapybara} alt="Capivara 3D da CapiLoop em uma rota verde-lima" />
          </div>
          <div className="hero-meta"><span>alimentos do dia <i /> em circulação</span><span>deslize para descobrir ↓</span></div>
        </section>

        <section className="home-manifesto">
          <p className="eyebrow">Uma escolha simples para o dia a dia</p>
          <div className="manifesto-layout">
            <h2>Boa comida merece<br />mais uma <em>volta.</em></h2>
            <div className="manifesto-copy"><p>A CapiLoop aproxima alimentos que ainda estão bons para consumo de pessoas abertas a descobrir algo gostoso, perto de casa, do trabalho ou da faculdade.</p><Link href="/impacto" className="text-action text-action-ink">Entender o impacto <ArrowRight size={16} aria-hidden="true" /></Link></div>
          </div>
          <div className="home-values">
            {values.map((value, index) => {
              const Icon = value.icon;
              return <article className={`home-value value-${index + 1}`} key={value.kicker}><span className="value-index">0{index + 1}</span><div className="value-icon"><Icon size={23} strokeWidth={1.55} /></div><p className="eyebrow">{value.kicker}</p><h3>{value.title}</h3><p>{value.text}</p></article>;
            })}
          </div>
        </section>

        <section className="home-partner-bridge">
          <div className="bridge-orbit" aria-hidden="true" />
          <div className="bridge-card bridge-card-one"><span className="bridge-card-kicker">Para parceiros</span><strong>Bom alimento.<br />Boa saída.</strong><span className="bridge-card-line" /></div>
          <div className="bridge-copy"><p className="eyebrow eyebrow-dark">Para estabelecimentos</p><h2>O alimento do dia<br />pode virar uma <em>boa oportunidade.</em></h2><p>Publique sacolas conforme a sua disponibilidade, gere receita adicional e apresente o seu negócio a novos clientes do bairro.</p><Link href="/para-estabelecimentos" className="button button-ink">Quero vender sacolas <MoveUpRight size={17} aria-hidden="true" /></Link></div>
          <div className="bridge-card bridge-card-two"><span className="dot-cluster"><i /><i /><i /></span><strong>Alimento em<br />circulação.</strong><span className="bridge-card-point" /></div>
        </section>
        <CtaBand title="A sua próxima boa surpresa pode estar por perto." body="Entre no loop para encontrar sacolas ou publicar as do seu estabelecimento." />
      </main>
      <SiteFooter />
    </div>
  );
}

/**
 * CapiLoop — Horta Escultural: hero assimétrico, capivara 3D e percurso em verde-lima.
 */
import { ArrowRight, ArrowUpRight, CircleCheck, MapPin, MoveUpRight, Store } from "lucide-react";
import { Link } from "wouter";
import { CtaBand, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const heroCapybara = "/manus-storage/capiloop-hero-capybara_c3d14477.png";

const values = [
  { icon: MapPin, kicker: "Descobrir", title: "O que combina com o seu caminho.", text: "Lugares, escolhas e novas possibilidades onde a cidade já acontece." },
  { icon: Store, kicker: "Aproximar", title: "Quem faz o bairro ficar vivo.", text: "Estabelecimentos com histórias reais e portas abertas para você entrar." },
  { icon: CircleCheck, kicker: "Voltar", title: "Para o que fez sentido hoje.", text: "Um loop que transforma boas experiências em vontade de seguir por perto." },
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
            <p className="eyebrow hero-eyebrow"><span className="eyebrow-dot" />A cidade cabe no seu loop</p>
            <h1>O caminho<br />fica <em>mais leve</em><br />quando <span>volta</span><br />para você.</h1>
            <p className="hero-description">Descubra lugares, benefícios e conexões que deixam cada volta pela cidade mais gostosa de fazer.</p>
            <div className="hero-actions">
              <Link href="/contato?assunto=acesso-app" className="button button-lime">Quero baixar o app <ArrowUpRight size={17} aria-hidden="true" /></Link>
              <Link href="/como-funciona" className="text-action text-action-ink">Ver como funciona <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <div className="hero-mini-proof"><span className="proof-pip" /><span>Seu próximo ponto de encontro pode estar logo ali.</span></div>
          </div>
          <div className="hero-mascot-wrap">
            <div className="hero-glass-tag tag-top"><span>Nova rota</span><span className="tag-pin"><MapPin size={14} /></span></div>
            <div className="hero-glass-tag tag-bottom"><span className="tag-lime-dot" />perto de você</div>
            <div className="mascot-disc" aria-hidden="true" />
            <img className="hero-mascot" src={heroCapybara} alt="Capivara 3D da CapiLoop em uma rota verde-lima" />
          </div>
          <div className="hero-meta"><span>brasil <i /> em movimento</span><span>deslize para descobrir ↓</span></div>
        </section>

        <section className="home-manifesto">
          <p className="eyebrow">Feito para a cidade real</p>
          <div className="manifesto-layout">
            <h2>Um app que deixa<br />você <em>mais perto</em><br />do que importa.</h2>
            <div className="manifesto-copy"><p>Na CapiLoop, cada escolha pelo caminho pode abrir uma nova possibilidade. Você encontra o que existe perto, apoia o que faz sentido e continua a volta com mais história para contar.</p><Link href="/impacto" className="text-action text-action-ink">Conhecer nosso impacto <ArrowRight size={16} aria-hidden="true" /></Link></div>
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
          <div className="bridge-card bridge-card-one"><span className="bridge-card-kicker">Comércio local</span><strong>Mais perto<br />de quem passa.</strong><span className="bridge-card-line" /></div>
          <div className="bridge-copy"><p className="eyebrow eyebrow-dark">Para estabelecimentos</p><h2>O seu lugar faz<br />a cidade <em>acontecer.</em></h2><p>A CapiLoop cria caminhos para novos encontros entre a sua marca e as pessoas que estão por perto.</p><Link href="/para-estabelecimentos" className="button button-ink">Conhecer as parcerias <MoveUpRight size={17} aria-hidden="true" /></Link></div>
          <div className="bridge-card bridge-card-two"><span className="dot-cluster"><i /><i /><i /></span><strong>Encontros<br />em loop.</strong><span className="bridge-card-point" /></div>
        </section>
        <CtaBand title="A próxima volta pode começar agora." body="Entre no loop para descobrir o app ou trazer o seu estabelecimento para perto." />
      </main>
      <SiteFooter />
    </div>
  );
}

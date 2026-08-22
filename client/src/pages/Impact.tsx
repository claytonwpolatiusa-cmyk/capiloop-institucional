/**
 * CapiLoop — Horta Escultural: impacto como ecossistema tangível, nunca como promessa abstrata.
 */
import { ArrowRight, HeartHandshake, Leaf, Store } from "lucide-react";
import { Link } from "wouter";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const impactVisual = "/manus-storage/capiloop-impact-ecosystem_54a4dbe1.png";

const pillars = [
  { icon: Store, number: "A", title: "Economia de perto", text: "Quando mais pessoas descobrem o que existe ao redor, pequenos estabelecimentos ganham novas chances de fazer parte da rotina." },
  { icon: HeartHandshake, number: "B", title: "Relações que retornam", text: "Uma recompensa pode ser só o começo: o loop existe para tornar a cidade mais convidativa para quem chega, fica e volta." },
  { icon: Leaf, number: "C", title: "Caminhos conscientes", text: "Valorizar decisões locais é olhar com mais atenção para os percursos que já fazemos todos os dias." },
];

export default function Impact() {
  return (
    <div className="page-surface impact-surface">
      <SiteHeader />
      <main>
        <PageHero
          index="03"
          eyebrow="Impacto"
          title={<>A cidade melhora quando<br /><em>o valor circula.</em></>}
          description="Para a CapiLoop, impacto é construir um jeito mais próximo de descobrir, escolher e voltar a frequentar o que faz sentido."
          guideVariant="guide-impact"
        />
        <section className="section impact-visual-section">
          <div className="impact-visual-copy">
            <p className="eyebrow">Cada volta importa</p>
            <h2>O impacto cabe nas<br /><em>pequenas escolhas.</em></h2>
            <p>Uma rota, um café, uma conversa no balcão. A CapiLoop desenha conexões para que esses encontros continuem acontecendo.</p>
          </div>
          <div className="impact-image-wrap"><img src={impactVisual} alt="Ecossistema 3D de rotas, lojas locais e pontos de encontro" /></div>
        </section>

        <section className="section pillar-section">
          <div className="pillar-aside">
            <span className="round-stamp">feito<br />em<br />loop</span>
            <p>Não existe impacto isolado. Tudo o que entra em circulação encontra alguém do outro lado.</p>
          </div>
          <div className="pillars">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article className="pillar" key={pillar.number}>
                  <div className="pillar-letter">{pillar.number}</div>
                  <Icon size={26} strokeWidth={1.5} />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="manifesto-strip">
          <p>Menos distância entre <em>quem procura</em> e quem já está fazendo a cidade acontecer.</p>
          <Link href="/para-estabelecimentos" className="text-action text-action-ink">Conhecer a rede de parceiros <ArrowRight size={16} aria-hidden="true" /></Link>
        </section>
        <CtaBand title="Faça parte de um caminho que volta para todo mundo." body="Você pode entrar no loop como pessoa usuária ou como estabelecimento parceiro." />
      </main>
      <SiteFooter />
    </div>
  );
}

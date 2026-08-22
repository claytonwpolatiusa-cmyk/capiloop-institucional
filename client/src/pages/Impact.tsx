/**
 * CapiLoop — Horta Escultural: impacto como ecossistema tangível, nunca como promessa abstrata.
 */
import { ArrowRight, HeartHandshake, Leaf, Store } from "lucide-react";
import { Link } from "wouter";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const impactVisual = "/manus-storage/capiloop-impact-ecosystem_54a4dbe1.png";

const pillars = [
  { icon: Leaf, number: "A", title: "Mais alimento aproveitado", text: "Sacolas surpresa criam uma oportunidade concreta para que alimentos próprios para consumo encontrem novos compradores." },
  { icon: HeartHandshake, number: "B", title: "Economia mais acessível", text: "Pessoas encontram uma boa surpresa por um preço mais leve, sem abrir mão de qualidade percebida ou clareza na compra." },
  { icon: Store, number: "C", title: "Valor que fica no bairro", text: "Estabelecimentos locais ganham um canal para converter parte da disponibilidade do dia em receita e descoberta." },
];

export default function Impact() {
  return (
    <div className="page-surface impact-surface">
      <SiteHeader />
      <main>
        <PageHero
          index="03"
          eyebrow="Impacto"
          title={<>Mais aproveitamento.<br /><em>Menos desperdício.</em></>}
          description="A CapiLoop conecta bons alimentos disponíveis no dia a pessoas que querem uma escolha mais acessível, prática e próxima."
          guideVariant="guide-impact"
        />
        <section className="section impact-visual-section">
          <div className="impact-visual-copy">
            <p className="eyebrow">Uma escolha prática, sem moralizar a rotina</p>
            <h2>Quando uma sacola<br />encontra alguém, o alimento<br /><em>continua seu caminho.</em></h2>
            <p>A CapiLoop não promete resolver o desperdício sozinha. Ela oferece uma ferramenta simples para que pessoas e negócios façam uma escolha melhor no dia a dia.</p>
          </div>
          <div className="impact-image-wrap"><img src={impactVisual} alt="Ecossistema 3D de rotas, lojas locais e pontos de encontro" /></div>
        </section>

        <section className="section pillar-section">
          <div className="pillar-aside">
            <span className="round-stamp">boa<br />comida<br />em loop</span>
            <p>O impacto acontece quando o que ainda está bom encontra alguém pronto para aproveitar.</p>
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
          <p>Uma escolha gostosa para <em>quem compra</em>, uma nova oportunidade para quem prepara.</p>
          <Link href="/para-estabelecimentos" className="text-action text-action-ink">Quero vender sacolas <ArrowRight size={16} aria-hidden="true" /></Link>
        </section>
        <CtaBand title="Entre no loop de boas surpresas." body="Encontre uma sacola perto de você ou cadastre seu estabelecimento para publicar as do dia." />
      </main>
      <SiteFooter />
    </div>
  );
}

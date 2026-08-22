/**
 * CapiLoop — Horta Escultural: hero assimétrico, capivara 3D e percurso em verde-lima.
 */
import { ArrowRight, ArrowUpRight, CircleCheck, Clock3, MapPin, MoveUpRight, PackageOpen, RefreshCw, ShoppingBag, Store } from "lucide-react";
import { Link } from "wouter";
import { CtaBand, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { trpc } from "@/lib/trpc";

const heroCapybara = "/manus-storage/capiloop-hero-capybara_c3d14477.png";

const values = [
  { icon: MapPin, kicker: "Descubra", title: "Sacolas surpresa perto de você.", text: "Padarias, cafés, restaurantes e mercados com bons alimentos disponíveis no dia." },
  { icon: ShoppingBag, kicker: "Reserve", title: "Uma boa surpresa por um preço mais leve.", text: "Veja a disponibilidade, escolha o horário e garanta a sua sacola pelo app." },
  { icon: CircleCheck, kicker: "Retire", title: "Passe no local e aproveite.", text: "A retirada é simples, presencial e acontece na janela definida por cada parceiro." },
];

function formatPrice(cents: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(cents / 100);
}

export default function Home() {
  const { data: bags = [], isLoading, isError, isFetching, refetch } = trpc.marketplace.listAvailableBags.useQuery();

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

        <section className="available-bags-section" aria-labelledby="available-bags-title">
          <div className="available-bags-head">
            <div>
              <p className="eyebrow"><span className="eyebrow-dot" />Disponibilidade do dia</p>
              <h2 id="available-bags-title">Sacolas que estão<br /><em>no loop agora.</em></h2>
            </div>
            <div className="available-bags-side">
              <span className="live-bags-pill"><i />Atualizado pela plataforma</span>
              <button type="button" className="bags-refresh" onClick={() => refetch()} disabled={isFetching}>
                <RefreshCw size={15} className={isFetching ? "spin-icon" : ""} aria-hidden="true" /> Atualizar
              </button>
            </div>
          </div>
          {isLoading ? (
            <div className="bags-grid" aria-label="Carregando sacolas disponíveis">
              {[0, 1, 2].map((item) => <div key={item} className="bag-card bag-card-skeleton"><span /><span /><span /></div>)}
            </div>
          ) : isError ? (
            <div className="bags-feedback" role="status">
              <PackageOpen size={31} strokeWidth={1.5} />
              <div><h3>Não foi possível consultar as sacolas agora.</h3><p>Tente atualizar em instantes para ver a disponibilidade real do dia.</p></div>
              <button type="button" onClick={() => refetch()} className="button button-ink">Tentar novamente</button>
            </div>
          ) : bags.length === 0 ? (
            <div className="bags-feedback bags-empty" role="status">
              <PackageOpen size={34} strokeWidth={1.5} />
              <div><h3>Ainda não há sacolas publicadas neste momento.</h3><p>As ofertas entram no loop conforme os parceiros atualizam a disponibilidade do dia.</p></div>
              <Link href="/contato?assunto=acesso-app" className="text-action text-action-ink">Quero receber novidades <ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
          ) : (
            <div className="bags-grid">
              {bags.map((bag) => (
                <article className="bag-card" key={bag.id}>
                  <div className="bag-card-top"><span className="bag-category">{bag.category}</span><span className="bag-quantity">{bag.quantityAvailable} {bag.quantityAvailable === 1 ? "sacola" : "sacolas"}</span></div>
                  <div className="bag-card-body">
                    <p className="bag-partner">{bag.partnerName}</p>
                    <h3>{bag.title}</h3>
                    <p className="bag-location"><MapPin size={14} aria-hidden="true" />{bag.neighborhood ? `${bag.neighborhood} · ` : ""}{bag.city}</p>
                  </div>
                  <div className="bag-card-bottom">
                    <div><span className="bag-price">{formatPrice(bag.priceCents)}</span>{bag.originalPriceCents ? <del>{formatPrice(bag.originalPriceCents)}</del> : null}</div>
                    <span className="bag-pickup"><Clock3 size={14} aria-hidden="true" />{bag.pickupStart}–{bag.pickupEnd}</span>
                  </div>
                </article>
              ))}
            </div>
          )}
          <p className="available-bags-note">As sacolas exibidas refletem somente a disponibilidade publicada pelos parceiros. Itens e quantidades podem variar.</p>
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

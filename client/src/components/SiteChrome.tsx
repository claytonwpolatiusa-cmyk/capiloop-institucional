/**
 * CapiLoop — Horta Escultural: navegação editorial, verde-lima pontual e volumes orgânicos.
 */
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";

const logoUrl = "/manus-storage/capiloop-symbol_4510fc36.png";
const guideCapybaraUrl = "/manus-storage/capiloop-hero-capybara_c3d14477.png";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/para-estabelecimentos", label: "Para estabelecimentos" },
  { href: "/impacto", label: "Impacto" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
];

export function BrandLockup({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="brand-lockup" aria-label="CapiLoop — Página inicial">
      <span className={`brand-symbol ${light ? "brand-symbol-light" : ""}`}>
        <img src={logoUrl} alt="Símbolo CapiLoop" />
      </span>
      <span className={light ? "wordmark wordmark-light" : "wordmark"}>capi<span className="wordmark-loop">loop</span></span>
    </Link>
  );
}

export function CapiGuide({ className = "", label = "CapiLoop em rota" }: { className?: string; label?: string }) {
  return (
    <div className={`capi-guide ${className}`} aria-label={label}>
      <span className="capi-guide-route" aria-hidden="true" />
      <img src={guideCapybaraUrl} alt="" />
      <span className="capi-guide-spark" aria-hidden="true" />
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <BrandLockup />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => {
            const active = item.href === "/" ? location === "/" : location.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={active ? "nav-link nav-link-active" : "nav-link"}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/contato?assunto=parcerias" className="partner-nav-cta">
          Vender sacolas <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <div id="mobile-navigation" className={open ? "mobile-nav mobile-nav-open" : "mobile-nav"}>
        <div className="mobile-nav-panel">
          <p className="eyebrow">Boas surpresas. Menos desperdício.</p>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
              {item.label}<ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
          <Link href="/contato?assunto=parcerias" className="button button-lime button-full" onClick={() => setOpen(false)}>
            Quero vender sacolas
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-orbit" aria-hidden="true" />
      <div className="footer-main">
        <div className="footer-intro">
          <BrandLockup light />
          <p>Boas surpresas para você. Novas oportunidades para bons alimentos do dia.</p>
          <Link href="/contato?assunto=acesso-app" className="button button-lime footer-download">
            Encontrar sacolas <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="footer-links" aria-label="Links do rodapé">
          <div>
            <p className="footer-label">Descobrir</p>
            <Link href="/como-funciona">Como resgatar</Link>
            <Link href="/impacto">Por que importa</Link>
            <Link href="/faq">Dúvidas frequentes</Link>
          </div>
          <div>
            <p className="footer-label">Para parceiros</p>
            <Link href="/para-estabelecimentos">Vender sacolas</Link>
            <Link href="/contato?assunto=parcerias">Cadastrar estabelecimento</Link>
            <Link href="/contato">Falar com a Capi</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} CapiLoop. Boas surpresas. Menos desperdício.</span>
        <span>Brasil</span>
      </div>
    </footer>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  index,
  guideVariant = "",
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  index: string;
  guideVariant?: string;
}) {
  return (
    <section className={`page-hero page-hero-${guideVariant}`}>
      <div className="page-hero-orbit orbit-one" aria-hidden="true" />
      <div className="page-hero-orbit orbit-two" aria-hidden="true" />
      <div className="page-hero-index" aria-hidden="true">{index}</div>
      <CapiGuide className={`page-hero-guide ${guideVariant}`} />
      <div className="page-hero-content">
        <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-copy">{description}</p>
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  body,
  primaryHref = "/contato?assunto=acesso-app",
  primaryLabel = "Encontrar sacolas",
  secondaryHref = "/contato?assunto=parcerias",
  secondaryLabel = "Quero vender sacolas",
}: {
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="cta-band">
      <div className="cta-band-orbit" aria-hidden="true" />
      <CapiGuide className="cta-guide" />
      <div>
        <p className="eyebrow eyebrow-dark">Boas oportunidades por perto</p>
        <h2>{title}</h2>
      </div>
      <div className="cta-band-actions">
        <p>{body}</p>
        <div className="action-row">
          <Link href={primaryHref} className="button button-ink">{primaryLabel} <ArrowUpRight size={17} aria-hidden="true" /></Link>
          <Link href={secondaryHref} className="text-action">{secondaryLabel} <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}

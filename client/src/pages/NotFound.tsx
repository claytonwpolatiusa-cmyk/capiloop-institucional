/**
 * CapiLoop — Horta Escultural: uma saída clara que preserva calor e presença da marca.
 */
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { BrandLockup } from "@/components/SiteChrome";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <BrandLockup />
      <div className="not-found-orbit" aria-hidden="true" />
      <p className="eyebrow">rota não encontrada</p>
      <h1>Essa volta<br />não deu <em>loop.</em></h1>
      <p>Talvez o caminho tenha mudado. A página inicial continua por aqui.</p>
      <Link href="/" className="button button-lime"><ArrowLeft size={17} aria-hidden="true" /> Voltar ao início</Link>
    </main>
  );
}

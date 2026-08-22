/**
 * CapiLoop — Horta Escultural: contato leve, direto e humano com ferramenta estática mailto.
 */
import { ArrowRight, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { useLocation } from "wouter";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

type ContactKind = "app" | "partner" | "other";

function getKindFromSearch(search: string): ContactKind {
  if (search.includes("parcerias")) return "partner";
  if (search.includes("acesso-app")) return "app";
  return "other";
}

export default function Contact() {
  const [location] = useLocation();
  const initialKind = useMemo(() => getKindFromSearch(location.split("?")[1] || ""), [location]);
  const [kind, setKind] = useState<ContactKind>(initialKind);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = kind === "partner" ? "Quero vender sacolas na CapiLoop" : kind === "app" ? "Quero encontrar sacolas CapiLoop" : "Mensagem pelo site CapiLoop";
    const body = `Nome: ${name}\nE-mail: ${email}\nInteresse: ${kind === "partner" ? "Vender sacolas" : kind === "app" ? "Encontrar sacolas" : "Outro"}\n\nMensagem:\n${message}`;
    window.location.href = `mailto:ola@capiloop.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="page-surface contact-surface">
      <SiteHeader />
      <main>
        <PageHero
          index="05"
          eyebrow="Contato"
          title={<>Vamos colocar<br /><em>uma boa oportunidade</em><br />em circulação?</>}
          description="Quer encontrar uma sacola surpresa, publicar as do seu estabelecimento ou tirar uma dúvida? Conte para a gente o que você procura."
          guideVariant="guide-contact"
        />
        <section className="section contact-layout">
          <aside className="contact-aside">
            <p className="eyebrow">Escolha o que você quer fazer</p>
            <h2>Comece pela<br />sua <em>boa oportunidade.</em></h2>
            <div className="contact-route-list">
              <button type="button" onClick={() => setKind("app")} className={kind === "app" ? "contact-route active" : "contact-route"}><MapPin size={19} /><span><strong>Quero encontrar sacolas</strong><small>Receber acesso ao app</small></span></button>
              <button type="button" onClick={() => setKind("partner")} className={kind === "partner" ? "contact-route active" : "contact-route"}><MessageCircle size={19} /><span><strong>Quero vender sacolas</strong><small>Falar sobre meu estabelecimento</small></span></button>
              <button type="button" onClick={() => setKind("other")} className={kind === "other" ? "contact-route active" : "contact-route"}><Mail size={19} /><span><strong>Quero falar com a Capi</strong><small>Enviar outra mensagem</small></span></button>
            </div>
          </aside>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading"><span className="form-index">01</span><div><p className="eyebrow">Sua mensagem</p><h3>{kind === "partner" ? "Vamos falar das suas sacolas." : kind === "app" ? "Vamos encontrar boas surpresas." : "Estamos por aqui."}</h3></div></div>
            <label>Como podemos chamar você?<input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Seu nome" /></label>
            <label>Qual é o seu e-mail?<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="voce@email.com" /></label>
            <label>{kind === "partner" ? "Conte sobre seu estabelecimento" : "O que você procura?"}<textarea required value={message} onChange={(event) => setMessage(event.target.value)} placeholder={kind === "partner" ? "Nome do estabelecimento, cidade e tipo de alimento disponível..." : "Em qual cidade você quer encontrar sacolas?"} rows={5} /></label>
            <p className="form-note">Ao enviar, seu aplicativo de e-mail será aberto com a mensagem pronta para o time Capi.</p>
            <button type="submit" className="button button-lime button-submit">Enviar mensagem <Send size={16} aria-hidden="true" /></button>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

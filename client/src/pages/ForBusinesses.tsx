/**
 * CapiLoop — Horta Escultural: comércio local em primeiro plano, com calidez e precisão.
 */
import { ArrowRight, ChartNoAxesCombined, CheckCircle2, CircleDollarSign, Loader2, Send, UsersRound } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link } from "wouter";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { trpc } from "@/lib/trpc";

const partnerVisual = "/manus-storage/capiloop-partners-3d_d22bb6f8.png";

const benefits = [
  { icon: CircleDollarSign, title: "Receita de uma disponibilidade real", text: "Transforme alimentos do dia que não entraram no ritmo normal de vendas em uma nova oportunidade comercial." },
  { icon: UsersRound, title: "Novos clientes do bairro", text: "Apareça para pessoas que estão procurando uma boa sacola perto de casa, do trabalho ou da faculdade." },
  { icon: ChartNoAxesCombined, title: "Operação simples e controlada", text: "Publique quantidade, preço e janela de retirada. Acompanhe reservas e confirme entregas por código." },
];

export default function ForBusinesses() {
  const [form, setForm] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    city: "",
    category: "",
    availabilityDescription: "",
    notes: "",
    agreesToContact: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const submitLead = trpc.partnerLeads.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      setForm({ businessName: "", contactName: "", email: "", phone: "", city: "", category: "", availabilityDescription: "", notes: "", agreesToContact: false });
    },
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);
    if (!form.agreesToContact) return;
    submitLead.mutate({ ...form, agreesToContact: true });
  }

  return (
    <div className="page-surface business-surface">
      <SiteHeader />
      <main>
        <PageHero
          index="02"
          eyebrow="Para estabelecimentos"
          title={<>O alimento do dia<br />pode ganhar <em>uma nova saída.</em></>}
          description="A CapiLoop ajuda padarias, cafés, restaurantes, confeitarias e mercados a transformar uma disponibilidade variável em receita, descoberta e menos desperdício."
          guideVariant="guide-business"
        />

        <section className="section partner-intro">
          <div className="partner-image-wrap">
            <div className="image-orbit image-orbit-partner" aria-hidden="true" />
            <img src={partnerVisual} alt="Miniatura 3D de um estabelecimento parceiro CapiLoop" />
          </div>
          <div className="partner-intro-copy">
            <p className="eyebrow">Uma saída melhor para bons alimentos</p>
            <h2>O que ainda está bom<br />pode continuar <em>circulando.</em></h2>
            <p>Você monta sacolas surpresa de acordo com o que está disponível, define uma janela de retirada e alcança pessoas dispostas a descobrir seu estabelecimento.</p>
            <Link href="/contato?assunto=parcerias" className="button button-ink">Quero vender sacolas <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
        </section>

        <section className="section benefits-section">
          <div className="benefits-header">
            <p className="eyebrow">Uma operação que acompanha o seu ritmo</p>
            <h2>Você decide a sacola.<br />A CapiLoop faz <em>ela chegar.</em></h2>
          </div>
          <div className="benefits-list">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="benefit-row">
                  <span className="benefit-count">0{index + 1}</span>
                  <span className="benefit-icon"><Icon size={24} strokeWidth={1.6} /></span>
                  <div><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="partner-lead-section" id="pre-cadastro">
          <div className="partner-lead-copy">
            <p className="eyebrow eyebrow-dark">Pré-cadastro rápido</p>
            <h2>Vamos entender<br />o que pode entrar<br /><em>no seu loop.</em></h2>
            <p>Preencha em poucos minutos. O time Capi usa estas informações para avaliar o encaixe operacional e retornar a conversa.</p>
            <div className="lead-step-list">
              <span><i>01</i> Conte sobre o estabelecimento</span>
              <span><i>02</i> Descreva sua disponibilidade do dia</span>
              <span><i>03</i> Receba o contato do time Capi</span>
            </div>
          </div>
          <div className="partner-lead-form-wrap">
            {submitted ? (
              <div className="lead-success" role="status">
                <CheckCircle2 size={40} strokeWidth={1.5} />
                <p className="eyebrow">Pré-cadastro enviado</p>
                <h3>Recebemos suas informações.</h3>
                <p>O time Capi vai analisar o seu contato e retornar para conversar sobre a publicação de sacolas.</p>
                <button type="button" className="text-action text-action-ink" onClick={() => setSubmitted(false)}>Enviar outro pré-cadastro <ArrowRight size={16} aria-hidden="true" /></button>
              </div>
            ) : (
              <form className="partner-lead-form" onSubmit={handleSubmit}>
                <div className="lead-form-heading"><span>01</span><div><p className="eyebrow">Dados do estabelecimento</p><h3>Comece por aqui.</h3></div></div>
                <div className="lead-form-grid">
                  <label>Nome do estabelecimento<input required value={form.businessName} onChange={(event) => setForm({ ...form, businessName: event.target.value })} placeholder="Ex.: Padaria do Bairro" /></label>
                  <label>Seu nome<input required value={form.contactName} onChange={(event) => setForm({ ...form, contactName: event.target.value })} placeholder="Como podemos chamar você?" /></label>
                  <label>E-mail profissional<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="voce@estabelecimento.com" /></label>
                  <label>Telefone<input required value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="(00) 00000-0000" /></label>
                  <label>Cidade<input required value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })} placeholder="Sua cidade" /></label>
                  <label>Tipo de estabelecimento<select required value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}><option value="">Selecione</option><option value="Padaria">Padaria</option><option value="Café">Café</option><option value="Restaurante">Restaurante</option><option value="Confeitaria">Confeitaria</option><option value="Mercado">Mercado</option><option value="Outro">Outro</option></select></label>
                </div>
                <label className="lead-textarea">Que tipo de alimento costuma ficar disponível ao longo do dia?<textarea required value={form.availabilityDescription} onChange={(event) => setForm({ ...form, availabilityDescription: event.target.value })} placeholder="Ex.: pães, bolos, refeições prontas, salgados..." rows={3} /></label>
                <label className="lead-textarea">Algo mais que devemos saber? <span>(opcional)</span><textarea value={form.notes} onChange={(event) => setForm({ ...form, notes: event.target.value })} placeholder="Conte sobre horários, volume ou uma particularidade da operação." rows={2} /></label>
                <label className="lead-consent"><input required type="checkbox" checked={form.agreesToContact} onChange={(event) => setForm({ ...form, agreesToContact: event.target.checked })} /><span>Autorizo a CapiLoop a entrar em contato sobre este pré-cadastro.</span></label>
                {submitLead.error ? <p className="lead-error" role="alert">{submitLead.error.message}</p> : null}
                <button className="button button-ink lead-submit" type="submit" disabled={submitLead.isPending}>{submitLead.isPending ? <><Loader2 className="spin-icon" size={16} /> Enviando</> : <>Enviar pré-cadastro <Send size={16} aria-hidden="true" /></>}</button>
              </form>
            )}
          </div>
        </section>

        <section className="quote-panel">
          <p className="quote-mark">“</p>
          <blockquote>O que não entrou no ritmo normal do dia ainda pode encontrar um <em>bom destino.</em></blockquote>
          <span>— Manifesto CapiLoop</span>
        </section>

        <CtaBand title="Vamos colocar as suas sacolas em circulação?" body="Comece pelo pré-cadastro e conte um pouco sobre o seu estabelecimento." primaryHref="#pre-cadastro" primaryLabel="Preencher pré-cadastro" secondaryHref="/como-funciona" secondaryLabel="Entender a experiência" />
      </main>
      <SiteFooter />
    </div>
  );
}

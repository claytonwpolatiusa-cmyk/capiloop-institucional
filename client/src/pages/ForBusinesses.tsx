/**
 * CapiLoop — jornada de parceiros, atuação no Sul e pré-cadastro em circulação.
 */
import { ArrowRight, ChartNoAxesCombined, CheckCircle2, CircleDollarSign, Copy, Loader2, MapPinned, Send, Share2, UsersRound } from "lucide-react";
import React, { FormEvent, useState } from "react";
import { Link } from "wouter";
import { CtaBand, PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { trpc } from "@/lib/trpc";

const partnerVisual = "/manus-storage/capiloop-partners-3d_d22bb6f8.png";

const benefits = [
  { icon: CircleDollarSign, title: "Uma nova oportunidade para o dia", text: "Transforme alimentos bons que não seguiram o ritmo normal de vendas em uma nova oportunidade comercial." },
  { icon: UsersRound, title: "Pessoas do bairro descobrem você", text: "Apareça para pessoas que estão procurando uma boa sacola perto de casa, do trabalho ou da faculdade." },
  { icon: ChartNoAxesCombined, title: "Operação simples, apoio de verdade", text: "Você publica quantidade, preço e retirada. Nosso time entra em contato para ajudar a organizar os próximos passos." },
];

const coveredStates = [
  { code: "PR" as const, name: "Paraná", tag: "Em operação", description: "Parcerias em cidades de todo o estado." },
  { code: "SC" as const, name: "Santa Catarina", tag: "Em operação", description: "Parcerias em cidades de todo o estado." },
];

type CoveredState = "PR" | "SC";

function makeReferralUrl(code: string) {
  return `${window.location.origin}/para-estabelecimentos?indicadoPor=${encodeURIComponent(code)}`;
}

export function ReferralSuccessCard({ referralCode, copied, onShare, onCopy, onAnother }: { referralCode: string; copied: boolean; onShare: () => void; onCopy: () => void; onAnother: () => void }) {
  return (
    <div className="lead-success" role="status">
      <CheckCircle2 size={40} strokeWidth={1.5} />
      <p className="eyebrow">Pré-cadastro enviado</p>
      <h3>Recebemos suas informações.</h3>
      <p>O time Capi vai entrar em contato para conversar sobre a sua operação. Agora, indique outros restaurantes: se uma empresa indicada concluir o cadastro e for aprovada, sua empresa terá condições especiais de parceria por cinco meses, conforme regulamento da campanha.</p>
      <div className="referral-card"><span>SEU LINK DE INDICAÇÃO</span><strong>{referralCode}</strong><p>Compartilhe com restaurantes que também querem aproveitar melhor os alimentos do dia.</p><div><button type="button" className="button button-ink" onClick={onShare}><Share2 size={15} aria-hidden="true" />Compartilhar</button><button type="button" className="referral-copy" onClick={onCopy}><Copy size={14} aria-hidden="true" />{copied ? "Link copiado" : "Copiar link"}</button></div></div>
      <button type="button" className="text-action text-action-ink" onClick={onAnother}>Enviar outro pré-cadastro <ArrowRight size={16} aria-hidden="true" /></button>
    </div>
  );
}

export default function ForBusinesses() {
  const initialReferralCode = new URLSearchParams(window.location.search).get("indicadoPor")?.trim().toUpperCase() || undefined;
  const previewReferralCode = import.meta.env.DEV ? new URLSearchParams(window.location.search).get("previewIndicacao")?.trim().toUpperCase() || null : null;
  const previewCopied = import.meta.env.DEV && new URLSearchParams(window.location.search).get("previewCopia") === "1";
  const [form, setForm] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    state: "PR" as CoveredState,
    city: "",
    category: "",
    availabilityDescription: "",
    notes: "",
    referredByCode: initialReferralCode,
    agreesToContact: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const activeReferralCode = referralCode ?? previewReferralCode;
  const citiesQuery = trpc.coverage.cities.useQuery({ state: form.state });
  const submitLead = trpc.partnerLeads.submit.useMutation({
    onSuccess: (result) => {
      setReferralCode(result.referralCode);
      setSubmitted(true);
      setForm({ businessName: "", contactName: "", email: "", phone: "", state: "PR", city: "", category: "", availabilityDescription: "", notes: "", referredByCode: undefined, agreesToContact: false });
    },
  });

  function chooseState(state: CoveredState) {
    setForm({ ...form, state, city: "" });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);
    if (!form.agreesToContact) return;
    submitLead.mutate({ ...form, agreesToContact: true });
  }

  async function handleCopyReferral() {
    if (!activeReferralCode) return;
    await navigator.clipboard.writeText(makeReferralUrl(activeReferralCode));
    setCopied(true);
  }

  async function handleShareReferral() {
    if (!activeReferralCode) return;
    const url = makeReferralUrl(activeReferralCode);
    if (navigator.share) {
      try {
        await navigator.share({ title: "CapiLoop para parceiros", text: "Entre no loop da CapiLoop e dê uma nova oportunidade aos alimentos do dia.", url });
        return;
      } catch {
        return;
      }
    }
    await handleCopyReferral();
  }

  return (
    <div className="page-surface business-surface">
      <SiteHeader />
      <main>
        <PageHero
          index="02"
          eyebrow="Para estabelecimentos"
          title={<>O alimento do dia<br />pode ganhar <em>uma nova saída.</em></>}
          description="A CapiLoop ajuda padarias, cafés, restaurantes, confeitarias e mercados a transformar uma disponibilidade variável em novas oportunidades e menos desperdício."
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
            <a href="#pre-cadastro" className="button button-ink">Quero vender sacolas <ArrowRight size={17} aria-hidden="true" /></a>
          </div>
        </section>

        <section className="section benefits-section">
          <div className="benefits-header">
            <p className="eyebrow">Uma operação que acompanha o seu ritmo</p>
            <h2>Você decide a sacola.<br />A CapiLoop ajuda <em>ela a girar.</em></h2>
          </div>
          <div className="benefits-list">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return <article key={benefit.title} className="benefit-row"><span className="benefit-count">0{index + 1}</span><span className="benefit-icon"><Icon size={24} strokeWidth={1.6} /></span><div><h3>{benefit.title}</h3><p>{benefit.text}</p></div></article>;
            })}
          </div>
        </section>

        <section className="coverage-section" aria-labelledby="coverage-title">
          <div className="coverage-copy">
            <p className="eyebrow eyebrow-dark"><span className="eyebrow-dot" />Onde já estamos</p>
            <h2 id="coverage-title">O nosso primeiro loop<br />já está no <em>Sul.</em></h2>
            <p>A CapiLoop já recebe parceiros no Paraná e em Santa Catarina. Escolha o seu estado para ver as cidades e iniciar seu pré-cadastro.</p>
            <div className="coverage-states">
              {coveredStates.map((state) => <button type="button" key={state.code} onClick={() => chooseState(state.code)} className={form.state === state.code ? "coverage-state coverage-state-active" : "coverage-state"}><span><MapPinned size={16} aria-hidden="true" /><strong>{state.name}</strong></span><small>{state.tag} · {state.description}</small></button>)}
            </div>
          </div>
          <div className="coverage-city-panel">
            <p className="coverage-city-index">CIDADES DE {form.state}</p>
            <h3>Escolha a cidade<br />do seu negócio.</h3>
            <label>Estado<select value={form.state} onChange={(event) => chooseState(event.target.value as CoveredState)}>{coveredStates.map((state) => <option key={state.code} value={state.code}>{state.name}</option>)}</select></label>
            <label>Cidade<select value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })} disabled={citiesQuery.isLoading || citiesQuery.isError}><option value="">{citiesQuery.isLoading ? "Carregando cidades..." : citiesQuery.isError ? "Tente novamente" : "Selecione a cidade"}</option>{(citiesQuery.data ?? []).map((city) => <option key={city.id} value={city.name}>{city.name}</option>)}</select></label>
            {citiesQuery.isError ? <button type="button" className="text-action text-action-ink city-retry" onClick={() => citiesQuery.refetch()}>Atualizar lista <ArrowRight size={15} aria-hidden="true" /></button> : <p>Selecione sua cidade aqui; ela seguirá para o seu pré-cadastro abaixo.</p>}
          </div>
        </section>

        <section className="partner-lead-section" id="pre-cadastro">
          <div className="partner-lead-copy">
            <p className="eyebrow eyebrow-dark">Pré-cadastro rápido</p>
            <h2>Vamos entender<br />o que pode entrar<br /><em>no seu loop.</em></h2>
            <p>Preencha em poucos minutos. A equipe Capi entra em contato para entender sua operação e ajudar a transformar alimentos do dia em novas oportunidades.</p>
            <div className="lead-step-list"><span><i>01</i> Conte sobre o estabelecimento</span><span><i>02</i> Descreva sua disponibilidade do dia</span><span><i>03</i> Receba o contato do time Capi</span></div>
          </div>
          <div className="partner-lead-form-wrap">
            {(submitted && referralCode) || previewReferralCode ? (
              <ReferralSuccessCard referralCode={activeReferralCode!} copied={referralCode ? copied : previewCopied} onShare={handleShareReferral} onCopy={handleCopyReferral} onAnother={() => { setSubmitted(false); setReferralCode(null); }} />
            ) : (
              <form className="partner-lead-form" onSubmit={handleSubmit}>
                <div className="lead-form-heading"><span>01</span><div><p className="eyebrow">Dados do estabelecimento</p><h3>Comece por aqui.</h3></div></div>
                {initialReferralCode ? <p className="referral-arrival">Você chegou por uma indicação. O código será aplicado ao pré-cadastro.</p> : null}
                <div className="lead-form-grid">
                  <label>Nome do estabelecimento<input required value={form.businessName} onChange={(event) => setForm({ ...form, businessName: event.target.value })} placeholder="Ex.: Padaria do Bairro" /></label>
                  <label>Seu nome<input required value={form.contactName} onChange={(event) => setForm({ ...form, contactName: event.target.value })} placeholder="Como podemos chamar você?" /></label>
                  <label>E-mail profissional<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="voce@estabelecimento.com" /></label>
                  <label>Telefone<input required value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="(00) 00000-0000" /></label>
                  <label>Estado<select required value={form.state} onChange={(event) => chooseState(event.target.value as CoveredState)}>{coveredStates.map((state) => <option key={state.code} value={state.code}>{state.name}</option>)}</select></label>
                  <label>Cidade<select required value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })} disabled={citiesQuery.isLoading || citiesQuery.isError}><option value="">{citiesQuery.isLoading ? "Carregando cidades..." : "Selecione a cidade"}</option>{(citiesQuery.data ?? []).map((city) => <option key={city.id} value={city.name}>{city.name}</option>)}</select></label>
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

        <section className="quote-panel"><p className="quote-mark">“</p><blockquote>O que não entrou no ritmo normal do dia ainda pode encontrar um <em>bom destino.</em></blockquote><span>— Manifesto CapiLoop</span></section>
        <CtaBand title="Vamos colocar as suas sacolas em circulação?" body="Comece pelo pré-cadastro e conte um pouco sobre o seu estabelecimento." primaryHref="#pre-cadastro" primaryLabel="Preencher pré-cadastro" secondaryHref="/como-funciona" secondaryLabel="Entender a experiência" />
      </main>
      <SiteFooter />
    </div>
  );
}

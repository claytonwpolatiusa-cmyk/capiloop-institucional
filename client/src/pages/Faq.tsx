/**
 * CapiLoop — Horta Escultural: clareza generosa, com FAQ arejado e elementos táteis.
 */
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { Link } from "wouter";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const faqs = [
  { question: "O que é a CapiLoop?", answer: "A CapiLoop é uma plataforma para descobrir lugares, benefícios e novas possibilidades perto de você. Ela aproxima pessoas de uma rede local de estabelecimentos parceiros." },
  { question: "Como faço para acessar o app?", answer: "Use o botão “Quero baixar o app” e conte para a gente onde você está. O time Capi orienta os próximos passos para acesso à experiência na sua cidade." },
  { question: "Quem pode participar como parceiro?", answer: "Estabelecimentos que desejam criar mais conexão com o público local podem iniciar uma conversa. Conte sobre seu negócio e sobre a experiência que você oferece." },
  { question: "A parceria exige uma estrutura complicada?", answer: "A proposta é entrar no fluxo do seu negócio, não criar uma camada extra de complexidade. O formato é conversado de acordo com o contexto de cada estabelecimento." },
  { question: "Em quais cidades a CapiLoop está disponível?", answer: "A disponibilidade depende da expansão da rede. Pelo contato, você pode indicar a sua cidade e receber novidades sobre novos loops." },
  { question: "Como posso falar com o time?", answer: "Na página de contato, escolha se você quer acessar o app, cadastrar um estabelecimento ou conversar sobre a CapiLoop. A mensagem vai direto para o time responsável." },
];

export default function Faq() {
  return (
    <div className="page-surface faq-surface">
      <SiteHeader />
      <main>
        <PageHero
          index="04"
          eyebrow="FAQ"
          title={<>Dúvidas também<br /><em>fazem parte da rota.</em></>}
          description="Reunimos aqui as perguntas que ajudam você a entender a CapiLoop antes de dar a primeira volta."
          guideVariant="guide-faq"
        />
        <section className="section faq-layout">
          <aside className="faq-aside">
            <div className="faq-orb"><MessageCircleQuestion size={39} strokeWidth={1.35} /></div>
            <h2>Quer uma resposta<br /><em>mais sua?</em></h2>
            <p>Se a sua pergunta não aparece aqui, o time Capi está a uma mensagem de distância.</p>
            <Link href="/contato" className="text-action text-action-ink">Ir para contato <ArrowRight size={16} aria-hidden="true" /></Link>
          </aside>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question} open={index === 0}>
                <summary><span>{faq.question}</span><span className="faq-plus" aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

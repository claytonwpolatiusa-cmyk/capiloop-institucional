/**
 * CapiLoop — Horta Escultural: clareza generosa, com FAQ arejado e elementos táteis.
 */
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { Link } from "wouter";
import { PageHero, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const faqs = [
  { question: "O que é uma sacola surpresa?", answer: "É uma seleção de alimentos do dia, preparada pelo estabelecimento de acordo com a disponibilidade real. Os itens podem variar, mas você sempre vê preço, local e janela de retirada antes de reservar." },
  { question: "Como funciona a retirada?", answer: "Depois de reservar e pagar pelo app, você escolhe um horário dentro da janela disponível. No local, apresenta o código do pedido para que o parceiro confirme a retirada." },
  { question: "Posso escolher todos os itens da sacola?", answer: "Não. A surpresa é parte da experiência e permite que cada parceiro monte a sacola com os alimentos disponíveis naquele dia. A compra é informada de forma clara antes da confirmação." },
  { question: "Quais estabelecimentos podem vender sacolas?", answer: "Padarias, cafés, restaurantes, confeitarias, mercados e outros negócios com disponibilidade variável de alimentos próprios para consumo podem iniciar o cadastro como parceiros." },
  { question: "A CapiLoop é delivery?", answer: "Não. As sacolas são sempre retiradas presencialmente no estabelecimento, dentro da janela de horário definida pelo parceiro." },
  { question: "Como posso falar com o time?", answer: "Na página de contato, escolha se quer encontrar sacolas, vender sacolas no seu estabelecimento ou conversar sobre outra necessidade. A mensagem é direcionada ao time responsável." },
];

export default function Faq() {
  return (
    <div className="page-surface faq-surface">
      <SiteHeader />
      <main>
        <PageHero
          index="04"
          eyebrow="FAQ"
          title={<>Tudo claro antes<br />da <em>boa surpresa.</em></>}
          description="Aqui você entende como funcionam as sacolas surpresa, a reserva, a retirada no local e a experiência para parceiros."
          guideVariant="guide-faq"
        />
        <section className="section faq-layout">
          <aside className="faq-aside">
            <div className="faq-orb"><MessageCircleQuestion size={39} strokeWidth={1.35} /></div>
            <h2>Quer uma resposta<br /><em>mais específica?</em></h2>
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

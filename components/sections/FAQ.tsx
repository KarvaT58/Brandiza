"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle } from "lucide-react"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const faqItems = [
  {
    question: "Quanto tempo leva para desenvolver meu site?",
    answer: "O prazo varia conforme o pacote escolhido. Nossa Landing Page fica pronta em até 7 dias úteis. O Site Detalhado leva de 15 a 20 dias úteis, e o Site Profissional de 25 a 30 dias úteis. Todos os prazos são contados após a aprovação do briefing e pagamento da entrada.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer: "Sim! Todos os nossos pacotes podem ser parcelados em até 3x sem juros no cartão de crédito. Para pagamentos à vista, oferecemos desconto especial. Entre em contato para conhecer as condições.",
  },
  {
    question: "E se eu não gostar do resultado?",
    answer: "Trabalhamos com garantia de satisfação! Durante o processo de desenvolvimento, você terá acesso a revisões e ajustes. Se após a entrega final você não estiver satisfeito, oferecemos até 2 rodadas de ajustes gratuitas. Nosso objetivo é que você fique 100% satisfeito com seu site.",
  },
  {
    question: "O que acontece se eu não quiser pagar a mensalidade?",
    answer: "A mensalidade é obrigatória  para todos os pacotes Landing Page, Site Detalhado e Site Profissional, pois inclui hospedagem, segurança, atualizações e suporte. Se você optar pelo pacote Landing Page, a mensalidade é opcional. Caso cancele a mensalidade em qualquer pacote, você receberá um aviso prévio e poderá exportar seus dados antes do encerramento do serviço.",
  },
  {
    question: "Meu site ficará no ar mesmo sem pagar mensalidade?",
    answer: "Para os pacotes com mensalidade obrigatória (Landing Page, Site Detalhado e Site Profissional), o site precisa da mensalidade para permanecer no ar, pois ela cobre hospedagem, domínio, segurança e atualizações. Para a Landing Page, você pode optar por manter apenas o pagamento único, mas recomendamos a manutenção mensal para garantir segurança e atualizações.",
  },
  {
    question: "Vocês fazem alterações no site depois de pronto?",
    answer: "Sim! No pacote Landing Page, oferecemos suporte por 30 dias após a entrega. Nos pacotes Site Detalhado e Site Profissional, a mensalidade inclui pequenas alterações mensais (atualização de textos, imagens, produtos). Alterações maiores podem ser cotadas separadamente.",
  },
  {
    question: "O site funciona em celular e tablet?",
    answer: "Sim! Todos os nossos sites são 100% responsivos, ou seja, se adaptam perfeitamente a qualquer dispositivo: celular, tablet e desktop. Isso é essencial para o SEO do Google e para a experiência do usuário.",
  },
  {
    question: "Meu site aparecerá no Google?",
    answer: "Sim! Todos os nossos sites incluem otimização básica de SEO (Search Engine Optimization). Para os pacotes Site Detalhado e Site Profissional, incluímos otimização SEO avançada. Além disso, fornecemos orientações sobre como melhorar ainda mais o posicionamento no Google.",
  },
  {
    question: "Preciso ter conhecimento técnico para usar o site?",
    answer: "Não! Todos os nossos sites são desenvolvidos para serem fáceis de usar. No caso do Site Profissional, incluímos um painel administrativo (CMS) intuitivo onde você pode atualizar conteúdos, adicionar produtos e gerenciar seu site sem precisar de conhecimento técnico.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer: "Sim! No pacote Landing Page, oferecemos 30 dias de suporte gratuito. Nos pacotes Site Detalhado e Site Profissional, o suporte é contínuo e está incluído na mensalidade. Você pode entrar em contato via WhatsApp ou e-mail sempre que precisar.",
  },
  {
    question: "Posso mudar de pacote depois?",
    answer: "Sim! Você pode fazer upgrade do seu pacote a qualquer momento. Por exemplo, se começou com uma Landing Page e quer evoluir para um Site Detalhado, fazemos a migração e você paga apenas a diferença. Entre em contato para conhecer as condições de upgrade.",
  },
  {
    question: "O que está incluído na hospedagem?",
    answer: "A hospedagem incluída na mensalidade oferece servidor rápido e seguro, certificado SSL (site com cadeado verde), backup automático, proteção contra ataques, e suporte técnico. Tudo isso para garantir que seu site fique sempre no ar, seguro e funcionando perfeitamente.",
  },
]

export function FAQ() {
  const { elementRef: headerRef, isRevealed: headerRevealed } = useScrollReveal(0.2)

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-background section-pattern relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-12 sm:mb-16 ${headerRevealed ? "scroll-reveal" : ""}`} style={{ opacity: headerRevealed ? 1 : 0 }}>
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 mb-4 sm:mb-6">
            <HelpCircle className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Perguntas Frequentes
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos serviços e processos. Se não encontrar sua resposta, entre em contato conosco!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border border-b rounded-lg px-4 sm:px-6 bg-card hover:bg-muted/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:no-underline py-4 sm:py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-6 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-base sm:text-lg text-foreground mb-4">
            Ainda tem dúvidas?
          </p>
          <p className="text-sm sm:text-base text-muted-foreground mb-6">
            Nossa equipe está pronta para ajudar você a encontrar a melhor solução para seu negócio.
          </p>
          <Button
            size="lg"
            onClick={() => {
              const message = encodeURIComponent("Olá! Tenho algumas dúvidas sobre os serviços.")
              window.open(`https://wa.me/5545998228660?text=${message}`, "_blank")
            }}
            className="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift-enhanced smooth-transition ripple-effect pulse-glow relative overflow-hidden group"
          >
            <span className="shimmer absolute inset-0"></span>
            <span className="relative z-10 flex items-center">
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Falar no WhatsApp
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}


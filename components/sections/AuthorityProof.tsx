"use client"

import { CheckCircle2, Globe, Zap, Award, Users, TrendingUp, Shield, Clock, Star } from "lucide-react"

const authorityItems = [
  {
    icon: CheckCircle2,
    text: "+20 sites entregues com sucesso",
  },
  {
    icon: Globe,
    text: "Atendendo empresas em todo o Brasil",
  },
  {
    icon: Zap,
    text: "Sites rápidos, responsivos e otimizados para o Google",
  },
  {
    icon: Award,
    text: "Qualidade profissional garantida",
  },
  {
    icon: Users,
    text: "Clientes satisfeitos em todo o país",
  },
  {
    icon: TrendingUp,
    text: "Aumento de vendas comprovado",
  },
  {
    icon: Shield,
    text: "Suporte completo e garantia de funcionamento",
  },
  {
    icon: Clock,
    text: "Entrega rápida e eficiente",
  },
  {
    icon: Star,
    text: "Avaliação 5 estrelas dos clientes",
  },
]

export function AuthorityProof() {
  // Duplicar os itens para criar loop infinito
  const duplicatedItems = [...authorityItems, ...authorityItems]

  return (
    <section className="py-4 sm:py-6 bg-black border-y border-white/10 overflow-hidden">
      <div className="relative">
        {/* Faixa animada */}
        <div className="flex animate-scroll">
          <div className="flex gap-4 sm:gap-6 md:gap-8 items-center whitespace-nowrap">
            {duplicatedItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 flex-shrink-0"
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm md:text-base font-medium">
                    {item.text}
                  </span>
                  <div className="h-3 sm:h-4 w-px bg-white/30 mx-1 sm:mx-2"></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


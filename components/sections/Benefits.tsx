"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Zap, Users, Award } from "lucide-react"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const benefits = [
  {
    icon: TrendingUp,
    metric: "67%",
    description: "Aumento na procura dos serviços",
    detail: "Clientes aumentaram a procura dos serviços após o site",
  },
  {
    icon: Zap,
    metric: "3x",
    description: "Mais rápido que sites tradicionais",
    detail: "Sites otimizados e responsivos",
  },
  {
    icon: Users,
    metric: "98%",
    description: "Taxa de satisfação dos clientes",
    detail: "Clientes recomendam nossos serviços",
  },
  {
    icon: Award,
    metric: "20+",
    description: "Sites entregues com sucesso",
    detail: "Resultados reais e comprovados",
  },
]

export function Benefits() {
  const { elementRef, isRevealed } = useScrollReveal(0.1)

  return (
    <section className="py-12 sm:py-16 bg-black section-pattern relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={elementRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className={`border-white/20 hover:border-white/40 smooth-transition hover-lift-enhanced bg-black/50 backdrop-blur-sm gradient-border relative overflow-hidden ${
                  isRevealed ? "scroll-reveal" : ""
                }`}
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  opacity: isRevealed ? 1 : 0
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
                <CardContent className="p-4 sm:p-6 text-center relative z-10">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-1 sm:mb-2 number-pop relative">
                    <span>
                      {benefit.metric}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white mb-1">
                    {benefit.description}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-300">
                    {benefit.detail}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}



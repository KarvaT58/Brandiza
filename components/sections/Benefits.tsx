"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Zap, Users, Award } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    metric: "250%",
    description: "Aumento médio de vendas online",
    detail: "Clientes aumentaram vendas após o site",
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
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={index}
                className="border-border hover:border-primary/50 smooth-transition hover-lift bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 mb-3 sm:mb-4">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 sm:mb-2">
                    {benefit.metric}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground mb-1">
                    {benefit.description}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">
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


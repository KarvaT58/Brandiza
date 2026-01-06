"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check, MessageCircle, Code2, Server, Database, Shield, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const pricingPlans = [
  {
    name: "Landing Page",
    price: "R$ 250",
    priceNote: "Pagamento único",
    maintenancePrice: "+ R$ 99/mês",
    maintenanceNote: "Manutenção opcional",
    deliveryTime: "7 dias",
    description: "Perfeito para começar sua presença online agora mesmo.",
    features: [
      "Design moderno e responsivo",
      "Até 5 seções",
      "Formulário de contato",
      "Integração com WhatsApp",
      "Otimização básica SEO",
      "Suporte por 30 dias",
    ],
    popular: false,
    hasRecurrence: false,
    showOptionalMaintenance: true,
    cta: "Quero este plano",
  },
  {
    name: "Site Detalhado",
    price: "R$ 750",
    priceNote: "Desenvolvimento (setup)",
    maintenancePrice: "+ R$ 350/mês",
    maintenanceNote: "Manutenção mensal",
    deliveryTime: "15 dias",
    description: "Ideal para empresas que querem crescer online com suporte contínuo",
    siteFeatures: [
      "Design profissional personalizado",
      "Até 10 páginas",
      "Galeria de imagens",
      "Blog integrado",
      "Formulários avançados",
      "Integração com redes sociais",
      "Otimização SEO completa",
    ],
    maintenanceFeatures: [
      "Hospedagem",
      "Suporte contínuo",
      "Atualizações de segurança",
      "Pequenas alterações mensais",
      "Monitoramento básico",
    ],
    popular: true,
    hasRecurrence: true,
    cta: "Quero este plano",
  },
  {
    name: "Site Profissional",
    price: "R$ 1.500",
    priceNote: "Setup inicial",
    maintenancePrice: "+ R$ 750/mês",
    maintenanceNote: "Gestão contínua",
    deliveryTime: "30+ dias",
    description: "Solução completa para empresas que precisam de performance e tranquilidade",
    siteFeatures: [
      "Design exclusivo e premium",
      "Páginas ilimitadas",
      "Sistema de gerenciamento (CMS)",
      "E-commerce básico",
      "Integrações personalizadas",
      "Painel administrativo",
      "Otimização SEO avançada",
    ],
    maintenanceFeatures: [
      "Hospedagem premium",
      "Suporte prioritário",
      "Backup diário",
      "Monitoramento avançado",
      "Otimizações mensais",
      "Relatório básico de desempenho",
    ],
    popular: false,
    hasRecurrence: true,
    cta: "Contratar plano profissional",
  },
]

export function Pricing() {
  const handleWhatsApp = (planName: string, cta: string) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no pacote ${planName}. ${cta}`
    )
    window.open(`https://wa.me/5545999854508?text=${message}`, "_blank")
  }

  return (
    <section id="pacotes" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Nossos Pacotes
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o pacote ideal para suas necessidades. Soluções profissionais com tecnologias modernas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 px-4 sm:px-0">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative flex flex-col h-full hover-lift smooth-transition ${
                plan.popular
                  ? "border-primary border-2 shadow-xl hover-glow bg-primary/5 scale-105 lg:scale-110"
                  : "hover:border-primary/50"
              }`}
              style={{ 
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs sm:text-sm font-bold px-3 py-1 shadow-lg">
                  ⭐ Mais Popular
                </Badge>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl sm:text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm">{plan.description}</CardDescription>
                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {plan.priceNote}
                  </p>
                  {plan.deliveryTime && (
                    <p className="text-[10px] sm:text-xs text-primary font-semibold mt-1.5">
                      ⏱️ Prazo: {plan.deliveryTime}
                    </p>
                  )}
                  {(plan.hasRecurrence || plan.showOptionalMaintenance) && plan.maintenancePrice && (
                    <>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-xl sm:text-2xl font-bold text-primary">
                          {plan.maintenancePrice}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {plan.maintenanceNote}
                      </p>
                    </>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4 flex flex-col">
                {/* Tecnologias */}
                <div className="bg-muted/50 rounded-md p-2 sm:p-3 border border-border/50 hover:bg-muted/70 smooth-transition">
                  <p className="text-[10px] sm:text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                    Tecnologias Utilizadas
                  </p>
                  <div className="space-y-1.5 sm:space-y-2">
                    {plan.name === "Landing Page" ? (
                      <div className="flex items-center gap-2 group/item hover:translate-x-1 smooth-transition">
                        <div className="p-1 sm:p-1.5 rounded bg-background border border-border/50 group-hover/item:bg-primary/10 group-hover/item:border-primary smooth-transition flex-shrink-0">
                          <Code2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover/item:scale-110 transition-transform" />
                        </div>
                        <span className="text-xs sm:text-sm text-foreground">React (Frontend)</span>
                      </div>
                    ) : plan.name === "Site Detalhado" ? (
                      <>
                        <div className="flex items-center gap-2 group/item hover:translate-x-1 smooth-transition">
                          <div className="p-1 sm:p-1.5 rounded bg-background border border-border/50 group-hover/item:bg-primary/10 group-hover/item:border-primary smooth-transition flex-shrink-0">
                            <Code2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover/item:scale-110 transition-transform" />
                          </div>
                          <span className="text-xs sm:text-sm text-foreground">React (Frontend)</span>
                        </div>
                        <div className="flex items-center gap-2 group/item hover:translate-x-1 smooth-transition">
                          <div className="p-1 sm:p-1.5 rounded bg-background border border-border/50 group-hover/item:bg-primary/10 group-hover/item:border-primary smooth-transition flex-shrink-0">
                            <Server className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover/item:scale-110 transition-transform" />
                          </div>
                          <span className="text-xs sm:text-sm text-foreground">Node.js (Backend)</span>
                        </div>
                        <div className="flex items-center gap-2 group/item hover:translate-x-1 smooth-transition">
                          <div className="p-1 sm:p-1.5 rounded bg-background border border-border/50 group-hover/item:bg-primary/10 group-hover/item:border-primary smooth-transition flex-shrink-0">
                            <Database className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover/item:scale-110 transition-transform" />
                          </div>
                          <span className="text-xs sm:text-sm text-foreground">Supabase (Banco de Dados)</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-2 group/item hover:translate-x-1 smooth-transition">
                          <div className="p-1 sm:p-1.5 rounded bg-background border border-border/50 group-hover/item:bg-primary/10 group-hover/item:border-primary smooth-transition flex-shrink-0">
                            <Code2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover/item:scale-110 transition-transform" />
                          </div>
                          <span className="text-xs sm:text-sm text-foreground">React (Frontend)</span>
                        </div>
                        <div className="flex items-center gap-2 group/item hover:translate-x-1 smooth-transition">
                          <div className="p-1 sm:p-1.5 rounded bg-background border border-border/50 group-hover/item:bg-primary/10 group-hover/item:border-primary smooth-transition flex-shrink-0">
                            <Server className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover/item:scale-110 transition-transform" />
                          </div>
                          <span className="text-xs sm:text-sm text-foreground">Node.js (Backend)</span>
                        </div>
                        <div className="flex items-center gap-2 group/item hover:translate-x-1 smooth-transition">
                          <div className="p-1 sm:p-1.5 rounded bg-background border border-border/50 group-hover/item:bg-primary/10 group-hover/item:border-primary smooth-transition flex-shrink-0">
                            <Database className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover/item:scale-110 transition-transform" />
                          </div>
                          <span className="text-xs sm:text-sm text-foreground">Supabase (Banco de Dados)</span>
                        </div>
                        <div className="flex items-center gap-2 group/item hover:translate-x-1 smooth-transition">
                          <div className="p-1 sm:p-1.5 rounded bg-background border border-border/50 group-hover/item:bg-primary/10 group-hover/item:border-primary smooth-transition flex-shrink-0">
                            <Shield className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover/item:scale-110 transition-transform" />
                          </div>
                          <span className="text-xs sm:text-sm text-foreground">Autenticação</span>
                        </div>
                        <div className="flex items-center gap-2 group/item hover:translate-x-1 smooth-transition">
                          <div className="p-1 sm:p-1.5 rounded bg-background border border-border/50 group-hover/item:bg-primary/10 group-hover/item:border-primary smooth-transition flex-shrink-0">
                            <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary group-hover/item:scale-110 transition-transform" />
                          </div>
                          <span className="text-xs sm:text-sm text-foreground">CDN & Cache</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Features do Site */}
                <div className="flex-grow">
                  <h4 className="text-sm font-semibold mb-2 text-foreground">
                    O que está incluído:
                  </h4>
                  <ul className="space-y-2">
                    {(plan.siteFeatures || plan.features).map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features da Manutenção */}
                {plan.hasRecurrence && plan.maintenanceFeatures ? (
                  <>
                    <Separator className="my-0" />
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-foreground">
                        Com a mensalidade você tem:
                      </h4>
                      <ul className="space-y-2">
                        {plan.maintenanceFeatures.map((feature, index) => (
                          <li key={index} className="flex items-start group/item hover:translate-x-1 smooth-transition">
                            <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                            <span className="text-sm group-hover/item:text-foreground transition-colors">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <div className="min-h-[60px]"></div>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full hover-scale smooth-transition group"
                  onClick={() => handleWhatsApp(plan.name, plan.cta)}
                >
                  <MessageCircle className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


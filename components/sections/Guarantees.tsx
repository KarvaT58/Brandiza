"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle2, RefreshCw, Settings } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const guarantees = [
  {
    icon: CheckCircle2,
    title: "Garantia de Satisfação",
    description: "Nosso compromisso é que você fique 100% satisfeito com seu site.",
    details: [
      "Durante todo o processo de desenvolvimento, você terá acesso a revisões e ajustes ilimitados até a aprovação final.",
      "Após a entrega do site, oferecemos até 2 rodadas de ajustes gratuitas dentro de 30 dias.",
      "Trabalhamos até que o resultado atenda completamente às suas expectativas.",
      "Se após todas as revisões você ainda não estiver satisfeito, podemos discutir alternativas personalizadas.",
    ],
  },
  {
    icon: RefreshCw,
    title: "Política de Reembolso",
    description: "Transparência e segurança em todas as transações.",
    details: [
      "Para pagamentos à vista: oferecemos reembolso de 100% se você cancelar até 48 horas após a contratação, antes do início do desenvolvimento.",
      "Após o início do desenvolvimento: o reembolso será proporcional ao trabalho já realizado, descontando os custos de desenvolvimento já aplicados.",
      "Para pagamentos parcelados: o cancelamento segue as mesmas regras, e as parcelas já pagas serão consideradas no cálculo do reembolso proporcional.",
      "Em caso de cancelamento por nossa parte (impossibilidade técnica ou mudança de escopo inviável), oferecemos reembolso integral.",
      "Todas as solicitações de reembolso devem ser feitas por escrito via e-mail ou WhatsApp.",
    ],
  },
  {
    icon: Settings,
    title: "Garantia de Funcionamento",
    description: "Seu site sempre funcionando, seguro e atualizado.",
    details: [
      "Garantimos que seu site ficará no ar e funcionando 99,9% do tempo (uptime).",
      "Incluímos monitoramento 24/7 para detectar e resolver problemas rapidamente.",
      "Backup automático diário de todos os dados e conteúdos do seu site.",
      "Atualizações de segurança aplicadas automaticamente para proteger contra vulnerabilidades.",
      "Certificado SSL (cadeado verde) incluído para garantir conexão segura.",
      "Suporte técnico rápido: respondemos em até 4 horas úteis para problemas críticos.",
      "Se o site ficar fora do ar por mais de 24 horas consecutivas por falha nossa, oferecemos compensação proporcional na mensalidade.",
    ],
  },
]

export function Guarantees() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 mb-4 sm:mb-6">
            <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Garantias e Políticas
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparência, segurança e compromisso com a sua satisfação. Conheça todas as nossas garantias e políticas.
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon
            return (
              <Card
                key={index}
                className="relative flex flex-col h-full hover-lift smooth-transition group hover:border-primary/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 smooth-transition">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl mb-2 text-foreground">
                    {guarantee.title}
                  </CardTitle>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {guarantee.description}
                  </p>
                </CardHeader>
                
                <CardContent className="flex-grow flex flex-col space-y-4">
                  <Separator />
                  
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                      Detalhes:
                    </h3>
                    <ul className="space-y-2.5">
                      {guarantee.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <Card className="bg-muted/50 border-border">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-foreground">
                Informações Importantes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                <strong className="text-foreground">Validade das Garantias:</strong> Todas as garantias são válidas enquanto o contrato de serviços estiver ativo e os pagamentos estiverem em dia.
              </p>
              <p>
                <strong className="text-foreground">Alterações nas Políticas:</strong> Qualquer alteração nas políticas será comunicada com pelo menos 30 dias de antecedência.
              </p>
              <p>
                <strong className="text-foreground">Dúvidas:</strong> Se tiver qualquer dúvida sobre nossas garantias e políticas, entre em contato conosco. Estamos sempre à disposição para esclarecer.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


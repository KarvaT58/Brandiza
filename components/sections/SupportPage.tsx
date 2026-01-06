"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Phone, HelpCircle, CheckCircle2, Copy, Check } from "lucide-react"

export function SupportPage() {
  const [copied, setCopied] = useState(false)
  const phoneNumber = "(45) 99985-4508"
  const phoneNumberRaw = "5545999854508"

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Preciso de suporte técnico.")
    window.open(`https://wa.me/${phoneNumberRaw}?text=${message}`, "_blank")
  }

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Erro ao copiar:", err)
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Suporte Técnico
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos aqui para ajudar você. Entre em contato conosco através dos canais abaixo.
          </p>
        </div>

        {/* Canais de Contato */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
          <Card className="hover-lift smooth-transition">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">WhatsApp</CardTitle>
              </div>
              <CardDescription>
                Resposta rápida e direta pelo WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Atendimento prioritário via WhatsApp. Resolvemos sua dúvida em minutos.
              </p>
              <Button
                size="lg"
                className="w-full hover-scale smooth-transition group"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Abrir WhatsApp
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                (45) 99985-4508
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift smooth-transition">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Telefone</CardTitle>
              </div>
              <CardDescription>
                Copie o número para ligar quando quiser
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Copie o número e ligue quando preferir durante o horário de atendimento.
              </p>
              <Button
                size="lg"
                className="w-full bg-white text-black hover:bg-gray-100 hover-scale smooth-transition group"
                onClick={handleCopyPhone}
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-5 w-5 text-green-600 group-hover:scale-110 transition-transform" />
                    Número Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Copiar Número
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                {phoneNumber}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Perguntas Frequentes */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="h-8 w-8 text-primary" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Perguntas Frequentes
              </h2>
            </div>
            <p className="text-muted-foreground">
              Tire suas dúvidas mais comuns
            </p>
          </div>

          <div className="space-y-4">
            <Card className="hover-lift smooth-transition">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-lg">Como funciona o suporte?</CardTitle>
                    <CardDescription className="mt-2">
                      Oferecemos suporte completo via WhatsApp e telefone durante o horário de atendimento. 
                      Resolvemos dúvidas técnicas, problemas e questões sobre seu site.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover-lift smooth-transition">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-lg">Qual o tempo de resposta?</CardTitle>
                    <CardDescription className="mt-2">
                      No WhatsApp, respondemos em até 1 hora durante o horário comercial. 
                      Por telefone, o atendimento é imediato quando disponível.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover-lift smooth-transition">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-lg">O suporte é gratuito?</CardTitle>
                    <CardDescription className="mt-2">
                      Sim! O suporte básico está incluído nos pacotes com mensalidade. 
                      Para clientes de landing page, oferecemos suporte por 30 dias após a entrega.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="hover-lift smooth-transition">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-lg">Preciso de ajuda urgente, o que fazer?</CardTitle>
                    <CardDescription className="mt-2">
                      Para questões urgentes, entre em contato pelo WhatsApp. 
                      Priorizamos atendimentos de emergência durante o horário comercial.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* CTA Final */}
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Ainda precisa de ajuda?</CardTitle>
              <CardDescription className="text-base">
                Não encontrou o que procurava? Entre em contato conosco!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                size="lg"
                className="w-full sm:w-auto text-lg px-8 py-6 hover-scale smooth-transition group"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Falar com Suporte
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


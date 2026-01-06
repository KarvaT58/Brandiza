"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ContactSection() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de entrar em contato sobre desenvolvimento de sites.")
    window.open(`https://wa.me/5545999854508?text=${message}`, "_blank")
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Entre em Contato
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudar você a criar seu site profissional
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
          <Card className="hover-lift smooth-transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Telefone
              </CardTitle>
              <CardDescription>
                Ligue para nós
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="tel:5545999854508"
                className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors break-all"
              >
                (45) 99985-4508
              </a>
            </CardContent>
          </Card>

          <Card className="hover-lift smooth-transition">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                WhatsApp
              </CardTitle>
              <CardDescription>
                Fale conosco pelo WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                size="lg"
                className="w-full text-sm sm:text-base hover-scale smooth-transition group"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                Abrir WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-center">
          <Card className="bg-background/50">
            <CardHeader>
              <CardTitle>Horário de Atendimento</CardTitle>
              <CardDescription>
                Estamos disponíveis para você
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 9h às 13h<br />
                Domingo: Fechado
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


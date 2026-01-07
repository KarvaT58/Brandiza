"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, Copy, Check } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const phoneNumber = "(45) 9-9822-8660"

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de entrar em contato sobre desenvolvimento de sites.")
    window.open(`https://wa.me/5545998228660?text=${message}`, "_blank")
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
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
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
                    <Check className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-green-600 group-hover:scale-110 transition-transform" />
                    Número Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                    Copiar Número
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                {phoneNumber}
              </p>
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
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Entre em contato pelo WhatsApp para uma resposta rápida e direta.
              </p>
              <Button
                size="lg"
                className="w-full text-sm sm:text-base hover-scale smooth-transition group"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                Abrir WhatsApp
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                {phoneNumber}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


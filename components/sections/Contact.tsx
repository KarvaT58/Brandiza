"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Contact() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de entrar em contato sobre desenvolvimento de sites.")
    window.open(`https://wa.me/5545998228660?text=${message}`, "_blank")
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
            Suporte
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Precisa de ajuda? Entre em contato conosco pelo WhatsApp
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 hover-scale smooth-transition group"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Falar no WhatsApp: </span>
            <span>(45) 9-9822-8660</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

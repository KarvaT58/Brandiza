"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    // Criar partículas animadas
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
    }))
    setParticles(newParticles)
  }, [])

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os pacotes de sites.")
    window.open(`https://wa.me/5545998228660?text=${message}`, "_blank")
  }

  const scrollToSection = (section: string) => {
    const element = document.querySelector(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Video de Fundo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback silencioso se o vídeo não carregar
            e.currentTarget.style.display = 'none'
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
        </video>
        {/* Overlay com gradiente animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
        {/* Fallback: fundo sólido caso o vídeo não carregue */}
        <div className="absolute inset-0 bg-black -z-10"></div>
      </div>

      {/* Partículas animadas */}
      <div className="particles absolute inset-0 z-[5]">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Conteúdo sobre o vídeo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-6xl mx-auto pt-20 sm:pt-24 md:pt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg animate-fade-in-up px-2">
            Sites profissionais que geram clientes todos os dias
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up px-4" style={{ animationDelay: '0.2s', opacity: 0 }}>
            Criamos sites modernos, rápidos e otimizados para empresas, profissionais liberais e negócios locais que precisam vender mais pela internet.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up px-4" style={{ animationDelay: '0.4s', opacity: 0 }}>
            <Button
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-white text-black hover:bg-gray-100 shadow-lg hover-lift-enhanced smooth-transition group ripple-effect pulse-glow relative overflow-hidden"
              onClick={() => scrollToSection("#pacotes")}
            >
              <span className="shimmer absolute inset-0"></span>
              <span className="relative z-10 flex items-center">
                Quero meu site profissional
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-transparent border-2 border-white text-white hover:bg-white/10 shadow-lg hover-glow smooth-transition group relative overflow-hidden"
              onClick={handleWhatsApp}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10 flex items-center">
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Falar com um especialista </span>
                <span className="sm:hidden">WhatsApp</span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


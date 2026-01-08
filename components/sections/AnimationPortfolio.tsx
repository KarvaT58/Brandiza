"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react"
import { useScrollReveal } from "@/hooks/useScrollReveal"
import AnimatedList from "@/components/AnimatedList"
import BounceCards from "@/components/BounceCards"
import DomeGallery from "@/components/DomeGallery"
import CircularGallery from "@/components/CircularGallery"
import Lanyard from "@/components/Lanyard"
import Stack from "@/components/Stack"
import GooeyNav from "@/components/GooeyNav"
import Stepper, { Step } from "@/components/Stepper"
import LogoLoop from "@/components/LogoLoop"
import Particles from "@/components/Particles"

// Imagens bonitas para BounceCards (precisa de exatamente 5 imagens)
const bounceCardImages: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop'
]

// Imagens para DomeGallery (galeria 3D em formato de domo)
const domeGalleryImages = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=800&fit=crop',
  'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e4?w=800&h=800&fit=crop'
]

// Imagens para CircularGallery (galeria circular 3D)
const circularGalleryItems = [
  { image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop', text: 'Montanhas' },
  { image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop', text: 'Pôr do Sol' },
  { image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop', text: 'Paisagem' },
  { image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop', text: 'Aurora' },
  { image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop', text: 'Céu Estrelado' },
  { image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop', text: 'Neve' },
  { image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop', text: 'Floresta' },
  { image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop', text: 'Natureza' },
  { image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop', text: 'Paisagem Natural' },
  { image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop', text: 'Praia' }
]

// Imagens para Stack (card 3)
const stackImages = [
  "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
]

// Itens para GooeyNav (card 4) - em português
const gooeyNavItems = [
  { label: "Início", href: "#" },
  { label: "Sobre", href: "#" },
  { label: "Contato", href: "#" },
]

// Logos para LogoLoop (card 5) - logos de tecnologias
const logoLoopItems = [
  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", alt: "React" },
  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg", alt: "GitHub" },
  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", alt: "Docker" },
  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg", alt: "Svelte" },
  { src: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vercel.svg", alt: "Vercel" },
  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  { src: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/turborepo.svg", alt: "Turborepo" },
]

// Array com 6 cards - todos os cards têm animações
const animationCards = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: i === 0 ? "Circular Gallery" : i === 1 ? "Bounce Cards" : i === 2 ? "Stack" : i === 3 ? "Stepper" : i === 4 ? "Logo Loop" : i === 5 ? "Particles" : `Animação ${i + 1}`,
  subtitle: i === 0 ? "Animations" : i === 1 ? "Animations" : i === 2 ? "Animations" : i === 3 ? "Animations" : i === 4 ? "Animations" : i === 5 ? "Animations" : "Animations",
  description: i === 0 
    ? "Galeria circular 3D interativa com efeito de curvatura. Arraste ou use a roda do mouse para navegar pelas imagens em um formato circular único."
    : i === 1
    ? "Cards interativos com efeito bounce e animação elástica. Ao passar o mouse, os cards se reorganizam de forma suave e elegante."
    : i === 2
    ? "Pilha de cards interativa com efeito 3D. Arraste os cards para enviá-los para trás ou deixe o autoplay fazer a mágica. Rotação e escala dinâmicas."
    : i === 3
    ? "Stepper interativo com múltiplos passos. Navegue entre os passos com animações suaves e indicadores visuais. Perfeito para formulários e processos passo a passo."
    : i === 4
    ? "Loop infinito de logos com animação suave. Perfeito para exibir parceiros, tecnologias ou marcas. Efeito de fade nas bordas e escala no hover."
    : i === 5
    ? "Partículas 3D animadas com WebGL. Efeito visual imersivo com partículas que se movem e rotacionam. Interação com o mouse para uma experiência única."
    : "Descrição da animação será adicionada aqui",
  hasAnimation: i === 0 || i === 1 || i === 2 || i === 3 || i === 4 || i === 5,
  animationType: i === 0 ? 'circularGallery' : i === 1 ? 'bounceCards' : i === 2 ? 'stack' : i === 3 ? 'stepper' : i === 4 ? 'logoLoop' : i === 5 ? 'particles' : null,
}))

export function AnimationPortfolio() {
  const [showAll, setShowAll] = useState(false)
  const { elementRef, isRevealed } = useScrollReveal(0.1)
  const { elementRef: headerRef, isRevealed: headerRevealed } = useScrollReveal(0.2)

  // Mostrar apenas 3 cards inicialmente, ou todos os 6 se showAll for true
  const visibleCards = showAll ? animationCards : animationCards.slice(0, 3)

  return (
    <section id="portfolio-animacoes" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-gray-900 to-black section-pattern relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className={`text-center mb-12 sm:mb-16 ${headerRevealed ? "scroll-reveal" : ""}`} style={{ opacity: headerRevealed ? 1 : 0 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Portfólio de Animações
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Explore nossa coleção de animações e efeitos visuais que podem transformar seu projeto
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={elementRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleCards.map((card, index) => (
            <Card
              key={card.id}
              className={`relative flex flex-col h-full hover-lift-enhanced smooth-transition group hover:border-primary/50 gradient-border overflow-hidden bg-white/5 backdrop-blur-sm ${
                isRevealed ? "scroll-reveal" : ""
              } ${showAll && index >= 3 ? "animate-fade-in-up" : ""}`}
              style={{ 
                animationDelay: showAll && index >= 3 ? `${(index - 3) * 0.1}s` : `${index * 0.15}s`,
                opacity: isRevealed ? 1 : 0
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="pb-4 relative z-10">
                {/* Icon with decoration */}
                <div className="mb-2 relative">
                  <div className="quote-decoration text-foreground/5">
                    <Sparkles className="h-8 w-8 text-primary/20" />
                  </div>
                  <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <Badge className="bg-primary/20 text-primary border-primary/30 text-xs sm:text-sm font-semibold">
                    {card.subtitle}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow flex flex-col space-y-4 relative z-10">
                {/* Demonstration Area - renderiza animações nos cards */}
                <div className="w-full h-48 sm:h-64 bg-black/50 rounded-lg border border-white/10 group-hover:border-primary/30 transition-colors overflow-hidden relative flex items-center justify-center">
                  {card.hasAnimation && card.animationType === 'circularGallery' ? (
                    <div className="w-full h-full absolute inset-0">
                      <CircularGallery
                        // @ts-ignore
                        items={circularGalleryItems}
                        bend={3}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        scrollSpeed={2}
                        scrollEase={0.05}
                      />
                    </div>
                  ) : card.hasAnimation && card.animationType === 'bounceCards' ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <BounceCards
                        // @ts-ignore - BounceCards is a JSX component without TypeScript definitions
                        images={bounceCardImages}
                        containerWidth={280}
                        containerHeight={240}
                        className="scale-75 sm:scale-100"
                        enableHover={true}
                      />
                    </div>
                  ) : card.hasAnimation && card.animationType === 'stack' ? (
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <div style={{ width: '100%', height: '100%', maxWidth: '208px', maxHeight: '208px' }}>
                        <Stack
                          // @ts-ignore - Stack is a JSX component without TypeScript definitions
                          cards={stackImages.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt={`card-${idx + 1}`}
                              className="card-image"
                            />
                          ))}
                          randomRotation
                          sensitivity={300}
                          autoplay
                          autoplayDelay={5000}
                        />
                      </div>
                    </div>
                  ) : card.hasAnimation && card.animationType === 'stepper' ? (
                    <div className="w-full h-full absolute inset-0 flex items-center justify-center p-1">
                      <div className="w-full h-full flex flex-col" style={{ maxHeight: '100%', overflow: 'hidden' }}>
                        <Stepper
                          initialStep={1}
                          // @ts-ignore - Stepper is a JSX component without TypeScript definitions
                          onStepChange={(step) => {
                            console.log(step);
                          }}
                          onFinalStepCompleted={() => console.log("Todos os passos concluídos!")}
                          backButtonText="Anterior"
                          nextButtonText="Próximo"
                          stepCircleContainerClassName="stepper-compact"
                          contentClassName="stepper-content-compact"
                          footerClassName="stepper-footer-compact"
                        >
                          <Step>
                            <h2 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.25rem', color: 'white' }}>Bem-vindo ao Stepper!</h2>
                            <p style={{ color: '#a3a3a3', fontSize: '0.875rem' }}>Confira o próximo passo!</p>
                          </Step>
                          <Step>
                            <h2 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.25rem', color: 'white' }}>Passo 2</h2>
                            <img 
                              style={{ 
                                height: '60px', 
                                width: '100%', 
                                objectFit: 'cover', 
                                objectPosition: 'center', 
                                borderRadius: '8px', 
                                marginTop: '0.5rem' 
                              }} 
                              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop" 
                              alt="Paisagem"
                            />
                            <p style={{ color: '#a3a3a3', marginTop: '0.5rem', fontSize: '0.875rem' }}>Conteúdo personalizado!</p>
                          </Step>
                          <Step>
                            <h2 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.25rem', color: 'white' }}>Que tal um input?</h2>
                            <input 
                              style={{
                                width: '100%',
                                padding: '0.375rem',
                                borderRadius: '0.375rem',
                                border: '1px solid #52525b',
                                backgroundColor: '#1a1a1a',
                                color: 'white',
                                marginTop: '0.5rem',
                                fontSize: '0.875rem'
                              }}
                              placeholder="Seu nome?" 
                            />
                          </Step>
                          <Step>
                            <h2 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.25rem', color: 'white' }}>Passo Final</h2>
                            <p style={{ color: '#a3a3a3', fontSize: '0.875rem' }}>Você conseguiu!</p>
                          </Step>
                        </Stepper>
                      </div>
                    </div>
                  ) : card.hasAnimation && card.animationType === 'logoLoop' ? (
                    <div className="w-full h-full flex items-center justify-center" style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
                      <LogoLoop
                        // @ts-ignore
                        logos={logoLoopItems}
                        speed={120}
                        direction="left"
                        logoHeight={48}
                        gap={40}
                        hoverSpeed={0}
                        scaleOnHover
                        fadeOut
                        fadeOutColor="#000000"
                        ariaLabel="Parceiros e tecnologias"
                      />
                    </div>
                  ) : card.hasAnimation && card.animationType === 'particles' ? (
                    <div className="w-full h-full absolute inset-0" style={{ position: 'relative' }}>
                      {/* @ts-ignore - Particles is a JSX component without TypeScript definitions */}
                      <Particles
                        particleColors={['#ffffff', '#ffffff']}
                        particleCount={200}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                      />
                    </div>
                  ) : card.hasAnimation && card.animationType === 'gooeyNav' ? (
                    <div className="w-full h-full flex items-center justify-center" style={{ height: '100%', position: 'relative' }}>
                      {/* @ts-ignore - GooeyNav is a JSX component without TypeScript definitions */}
                      <GooeyNav
                        items={gooeyNavItems}
                        particleCount={15}
                        particleDistances={[90, 10]}
                        particleR={100}
                        initialActiveIndex={0}
                        animationTime={600}
                        timeVariance={300}
                        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                      />
                    </div>
                  ) : card.hasAnimation && card.animationType === 'domeGallery' ? (
                    <div className="w-full h-full absolute inset-0">
                      <DomeGallery
                        // @ts-ignore
                        images={domeGalleryImages}
                        fit={0.4}
                        minRadius={200}
                        maxRadius={300}
                        segments={35}
                        grayscale={false}
                        className="w-full h-full"
                      />
                    </div>
                  ) : card.hasAnimation && card.animationType === 'animatedList' ? (
                    <div className="w-full h-full absolute inset-0 p-2" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
                      <div className="w-full h-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                        {/* @ts-ignore - AnimatedList is a JSX component without TypeScript definitions */}
                        <AnimatedList
                          items={[
                            'Item 1',
                            'Item 2',
                            'Item 3',
                            'Item 4',
                            'Item 5',
                            'Item 6',
                            'Item 7',
                            'Item 8',
                            'Item 9',
                            'Item 10',
                            'Item 11',
                            'Item 12',
                            'Item 13',
                            'Item 14',
                            'Item 15'
                          ]}
                          className="w-full h-full"
                          showGradients={true}
                          enableArrowNavigation={true}
                          displayScrollbar={true}
                        />
                      </div>
                    </div>
                  ) : card.hasAnimation && card.animationType === 'lanyard' ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <Lanyard
                        // @ts-ignore
                        image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop"
                        width={150}
                        height={250}
                        stiffness={0.15}
                        damping={0.85}
                        className="w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">
                        {/* Aqui você vai adicionar: imagem, vídeo, ou componente de animação */}
                        <p className="text-center">Área de Demonstração</p>
                        <p className="text-xs text-center mt-2 text-gray-600">
                          Adicione sua animação aqui
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ver Mais / Ver Menos Button */}
        <div className="text-center mt-12 sm:mt-16">
          {!showAll ? (
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary text-white hover:bg-primary hover:text-black shadow-lg hover-glow smooth-transition group relative overflow-hidden px-8 py-6"
              onClick={() => {
                setShowAll(true)
                // Scroll suave para os novos cards após um pequeno delay
                setTimeout(() => {
                  const buttonElement = document.getElementById("portfolio-animacoes")
                  if (buttonElement) {
                    const cardsGrid = buttonElement.querySelector(".grid")
                    if (cardsGrid) {
                      cardsGrid.scrollIntoView({ behavior: "smooth", block: "nearest" })
                    }
                  }
                }, 100)
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10 flex items-center">
                Ver mais animações
                <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
          ) : (
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary text-white hover:bg-primary hover:text-black shadow-lg hover-glow smooth-transition group relative overflow-hidden px-8 py-6"
              onClick={() => {
                setShowAll(false)
                // Scroll suave para o topo da seção após um pequeno delay
                setTimeout(() => {
                  const sectionElement = document.getElementById("portfolio-animacoes")
                  if (sectionElement) {
                    sectionElement.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }, 100)
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="relative z-10 flex items-center">
                Ver menos animações
                <ChevronUp className="ml-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
              </span>
            </Button>
          )}
        </div>

        {/* Info Section */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-base sm:text-lg text-gray-300 mb-4">
            Todas as animações são personalizáveis e podem ser adaptadas ao seu projeto
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-400">
            <span className="font-semibold text-gray-300">6 animações e muito mais disponíveis</span>
            <span>•</span>
            <span>Efeitos modernos</span>
            <span>•</span>
            <span>Performance otimizada</span>
          </div>
        </div>
      </div>
    </section>
  )
}


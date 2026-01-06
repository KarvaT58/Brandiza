"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Carlos Mendes",
    company: "Construtora Horizonte",
    role: "Diretor",
    image: "https://ui-avatars.com/api/?name=Carlos+Mendes&background=000000&color=ffffff&size=128&bold=true",
    result: "Aumentei 300% em vendas online após o site",
    testimonial: "O site profissional que a Brandiza criou transformou completamente nosso negócio. Em apenas 3 meses, nossas vendas online triplicaram. O design é impecável e o suporte é excepcional!",
    rating: 5,
  },
  {
    name: "Ana Paula Silva",
    company: "Escritório Jurídico Premium",
    role: "Advogada",
    image: "https://ui-avatars.com/api/?name=Ana+Paula+Silva&background=000000&color=ffffff&size=128&bold=true",
    result: "Recebo 5x mais clientes pelo site",
    testimonial: "Como advogada, precisava de um site que transmitisse profissionalismo e confiança. A Brandiza superou todas as expectativas. Agora recebo mais de 20 contatos por semana através do site!",
    rating: 5,
  },
  {
    name: "Roberto Alves",
    company: "Consultoria Estratégica",
    role: "CEO",
    image: "https://ui-avatars.com/api/?name=Roberto+Alves&background=000000&color=ffffff&size=128&bold=true",
    result: "ROI de 450% em 6 meses",
    testimonial: "Investir no site profissional foi a melhor decisão que tomei. O retorno sobre investimento foi impressionante. O site é rápido, moderno e gera leads qualificados todos os dias.",
    rating: 5,
  },
  {
    name: "Mariana Costa",
    company: "Beleza & Bem-Estar",
    role: "Proprietária",
    image: "https://ui-avatars.com/api/?name=Mariana+Costa&background=000000&color=ffffff&size=128&bold=true",
    result: "Agenda lotada em 2 meses",
    testimonial: "Meu salão de estética estava precisando de mais visibilidade. O site que a Brandiza criou é lindo e funcional. Minha agenda ficou lotada em apenas 2 meses após o lançamento!",
    rating: 5,
  },
  {
    name: "João Santos",
    company: "Imobiliária Prime",
    role: "Corretor",
    image: "https://ui-avatars.com/api/?name=Joao+Santos&background=000000&color=ffffff&size=128&bold=true",
    result: "Vendi 12 imóveis em 4 meses pelo site",
    testimonial: "O site profissional aumentou muito minha credibilidade no mercado imobiliário. Já fechei 12 negócios diretamente através do site. A equipe da Brandiza é muito competente!",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    company: "Lima Nutrição",
    role: "Nutricionista",
    image: "https://ui-avatars.com/api/?name=Fernanda+Lima&background=000000&color=ffffff&size=128&bold=true",
    result: "Aumento de 200% em novos pacientes",
    testimonial: "Como nutricionista, o site me ajudou a alcançar muito mais pessoas. O design é moderno e o formulário de contato funciona perfeitamente. Recomendo de olhos fechados!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 sm:py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            O que nossos clientes dizem
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Resultados reais de empresas que confiaram na Brandiza para transformar sua presença online
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative flex flex-col h-full hover-lift smooth-transition group hover:border-primary/50 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                {/* Quote Icon */}
                <div className="mb-2">
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow flex flex-col space-y-4">
                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-foreground leading-relaxed flex-grow">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>

                {/* Result Badge */}
                <div>
                  <Badge className="bg-primary text-primary-foreground text-xs sm:text-sm font-semibold">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5 fill-primary-foreground text-primary-foreground" />
                    {testimonial.result}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 sm:h-4 sm:w-4 fill-foreground text-foreground"
                    />
                  ))}
                </div>

                <Separator className="my-2" />

                {/* Author Info */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm sm:text-base text-foreground truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">
                      {testimonial.role} - {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-base sm:text-lg text-foreground mb-4">
            Seja o próximo caso de sucesso!
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">+20 clientes satisfeitos</span>
            <span>•</span>
            <span>98% de aprovação</span>
            <span>•</span>
            <span>Resultados comprovados</span>
          </div>
        </div>
      </div>
    </section>
  )
}


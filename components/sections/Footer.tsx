"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Brandiza Logo"
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
              <h3 className="text-lg font-semibold">Brandiza</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              Desenvolvimento de sites profissionais e modernos para sua empresa.
            </p>
            <p className="text-xs text-muted-foreground">
              CNPJ: 51.465.561/0001-05
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Informações</h3>
            <div className="space-y-2 text-sm">
              <Link
                href="/"
                className="block text-muted-foreground hover:text-foreground transition-colors hover-scale smooth-transition"
              >
                Início
              </Link>
              <Link
                href="/faq"
                className="block text-muted-foreground hover:text-foreground transition-colors hover-scale smooth-transition"
              >
                Perguntas Frequentes
              </Link>
              <Link
                href="/garantias"
                className="block text-muted-foreground hover:text-foreground transition-colors hover-scale smooth-transition"
              >
                Garantias e Políticas
              </Link>
              <Link
                href="/suporte"
                className="block text-muted-foreground hover:text-foreground transition-colors hover-scale smooth-transition"
              >
                Suporte
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="https://wa.me/5545999854508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors hover-scale smooth-transition"
                >
                  (45) 99985-4508
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Horário de Atendimento</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 9h às 13h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Brandiza. Todos os direitos reservados.</p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 hover:text-foreground transition-colors"
          >
            Voltar ao topo ↑
          </button>
        </div>
      </div>
    </footer>
  )
}


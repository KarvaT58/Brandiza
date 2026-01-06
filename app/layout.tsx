import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Brandiza - Desenvolvimento de Sites Profissionais",
  description: "Desenvolvimento de sites profissionais. Landing pages, sites detalhados e soluções completas para seu negócio.",
  keywords: ["desenvolvimento de sites", "landing page", "site profissional", "criação de sites", "web design"],
  authors: [{ name: "Brandiza" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Site de Demonstração - Desenvolvimento Profissional",
    description: "Desenvolvimento de sites profissionais. Landing pages, sites detalhados e soluções completas para seu negócio.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Site de Demonstração - Desenvolvimento Profissional",
    description: "Desenvolvimento de sites profissionais. Landing pages, sites detalhados e soluções completas para seu negócio.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


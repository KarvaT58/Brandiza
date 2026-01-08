import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/sections/Footer"
import { SupportPage } from "@/components/sections/SupportPage"

export default function SuportePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <SupportPage />
      </div>
      <Footer />
    </main>
  )
}


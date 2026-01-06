import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/sections/Footer"
import { ContactSection } from "@/components/sections/ContactSection"

export default function ContatoPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}




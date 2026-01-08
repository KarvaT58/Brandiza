import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/sections/Hero"
import { AuthorityProof } from "@/components/sections/AuthorityProof"
import { Benefits } from "@/components/sections/Benefits"
import { Pricing } from "@/components/sections/Pricing"
import { Testimonials } from "@/components/sections/Testimonials"
import { AnimationPortfolio } from "@/components/sections/AnimationPortfolio"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AuthorityProof />
      <Benefits />
      <Testimonials />
      <AnimationPortfolio />
      <Pricing />
      <Footer />
    </main>
  )
}


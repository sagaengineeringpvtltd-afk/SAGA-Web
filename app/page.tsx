import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { Footer } from "@/components/footer"
import WhoWeAre from "@/components/WhoAreWe";
import WhatWeOffer from "@/components/WhatWeOffer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <WhoWeAre />
      <WhatWeOffer />
      <Footer />
    </main>
  )
}

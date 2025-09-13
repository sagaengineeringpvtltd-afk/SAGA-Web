import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { Footer } from "@/components/footer"
import WhoWeAre from "@/components/WhoAreWe";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider />
      <WhoWeAre />
      <Footer />
    </main>
  )
}

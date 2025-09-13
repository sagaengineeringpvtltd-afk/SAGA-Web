import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - SAGA Engineering | Industrial Equipment Specialists",
  description:
    "Learn about SAGA Engineering's expertise in mechanical engineering services, industrial equipment solutions, and our commitment to delivering reliable, efficient, and sustainable solutions.",
  keywords:
    "about saga engineering, mechanical engineering, industrial equipment, engineering services, company history",
  openGraph: {
    title: "About SAGA Engineering - Industrial Equipment Specialists",
    description:
      "Discover SAGA Engineering's comprehensive mechanical engineering services and expertise in industrial equipment solutions.",
    url: "/about",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}

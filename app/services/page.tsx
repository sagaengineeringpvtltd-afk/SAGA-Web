import { Header } from "@/components/header"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services - SAGA Engineering",
  description:
    "Explore SAGA Engineering's comprehensive services including machinery import & supply, design & installation, maintenance & support for industrial equipment and engineering solutions.",
  keywords:
    "engineering services, machinery import, industrial equipment supply, design installation, maintenance support, pumps, compressors, conveyors, motors",
  openGraph: {
    title: "SAGA Engineering Services",
    description:
      "Comprehensive engineering services including machinery import, design & installation, and maintenance support for industrial equipment.",
    url: "https://sagaengineering.lk/services",
    type: "website",
  },
  alternates: {
    canonical: "https://sagaengineering.lk/services",
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  )
}

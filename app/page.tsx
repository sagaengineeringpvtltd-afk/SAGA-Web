import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { Footer } from "@/components/footer"
import WhoWeAre from "@/components/WhoAreWe"
import WhatWeOffer from "@/components/WhatWeOffer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SAGA Engineering (Pvt) Ltd",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  description:
    "SAGA Engineering specializes in the import and supply of industrial machinery, pumps, compressors, conveyors, motors, and electrical systems. Professional engineering services with comprehensive maintenance support.",
  keywords:
    "machinery import, industrial equipment, pumps, compressors, conveyors, motors, electrical systems, engineering services, maintenance, installation",
  authors: [{ name: "SAGA Engineering (Pvt) Ltd" }],
  creator: "SAGA Engineering (Pvt) Ltd",
  publisher: "SAGA Engineering (Pvt) Ltd",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sagaengineering.lk/",
    title: "SAGA Engineering (Pvt) Ltd",
    description:
      "Professional industrial machinery import and supply services with comprehensive engineering solutions.",
    siteName: "SAGA Engineering (Pvt) Ltd",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAGA Engineering (Pvt) Ltd",
    description:
      "Professional industrial machinery import and supply services with comprehensive engineering solutions.",
  },
  verification: {
    google: "MlaII3HRwKyXP_ox1HcnH54B97brHC2thjHIVXT68TI",
  },
  alternates: {
    canonical: "https://www.sagaengineering.lk/",
  },
} // ✅ FIXED: added missing closing curly brace

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

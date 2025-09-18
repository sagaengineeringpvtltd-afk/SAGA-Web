import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - SAGA Engineering | Get In Touch",
  description:
    "Contact SAGA Engineering for industrial equipment solutions, machinery import & supply services. Located in Colombo, Sri Lanka. Call +94 71 70 70 30 or email us today.",
  keywords:
    "contact saga engineering, industrial equipment contact, machinery supply contact, engineering services sri lanka, colombo engineering company",
  openGraph: {
    title: "Contact SAGA Engineering",
    description:
      "Get in touch with SAGA Engineering for all your industrial equipment and machinery needs. Professional engineering services in Sri Lanka.",
    url: "https://www.sagaengineering.lk/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://www.sagaengineering.lk/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { icons } from "lucide-react"

export const metadata: Metadata = {
  title: "SAGA Engineering - Machinery Import & Supply | Industrial Equipment Solutions",
  icons:{
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  description:
    "SAGA Engineering specializes in the import and supply of industrial machinery, pumps, compressors, conveyors, motors, and electrical systems. Professional engineering services with comprehensive maintenance support.",
  keywords:
    "machinery import, industrial equipment, pumps, compressors, conveyors, motors, electrical systems, engineering services, maintenance, installation",
  authors: [{ name: "SAGA Engineering" }],
  creator: "SAGA Engineering",
  publisher: "SAGA Engineering",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sagaengineering.lk/",
    title: "SAGA Engineering - Machinery Import & Supply",
    description:
      "Professional industrial machinery import and supply services with comprehensive engineering solutions.",
    siteName: "SAGA Engineering",
  },
  twitter: {
    card: "summary_large_image",
    title: "SAGA Engineering - Machinery Import & Supply",
    description:
      "Professional industrial machinery import and supply services with comprehensive engineering solutions.",
  },
  verification: {
    google: "ERnScZFGanFENVOOM7CCokcgOHQeKIEJpSshBEthzvQ",
  },
  alternates: {
    canonical: "https://sagaengineering.lk/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="google-site-verification" content="ERnScZFGanFENVOOM7CCokcgOHQeKIEJpSshBEthzvQ" />
        <link rel="canonical" href="https://sagaengineering.lk/" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="icon" href="/favicon-32x32.png?v=2" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png?v=2" sizes="16x16" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SAGA Engineering",
              description:
                "Industrial machinery import and supply company specializing in pumps, compressors, conveyors, motors, and electrical systems.",
              url: "https://sagaengineering.lk/",
              logo: "https://sagaengineering.lk/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+94711707030",
                contactType: "customer service",
                availableLanguage: "English",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "8/A, Kahathuduwa, Polgasowita",
                addressLocality: "Colombo",
                addressCountry: "LK",
              },
              // sameAs: ["https://linkedin.com/company/saga-engineering", "https://facebook.com/sagaengineering"],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { icons } from "lucide-react"
import Head from "next/head";
export const metadata: Metadata = {
  title: "SAGA Engineering (Pvt) Ltd",
  other:{
    site_name: "SAGA Engineering (Pvt) Ltd"

  },
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
  creator: "SAGA Engineering (Pvt) Ltd",
  publisher: "SAGA Engineering (Pvt) Ltd",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sagaengineering.lk/",
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

   function addOrganizationJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SAGA Engineering (Pvt) Ltd",
        "alternateName": "SAGA Engineering",
        "description": "Industrial machinery import and supply company specializing in pumps, compressors, conveyors, motors, and electrical systems.",
        "url": "https://sagaengineering.lk/",
        "logo": "https://sagaengineering.lk/Logo.webp",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+94711707030",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "8/A, Kahathuduwa, Polgasowita",
          "addressLocality": "Colombo",
          "addressCountry": "LK",
          "postalCode": "10230"
        }
      }`,
    };
  }

  function addWebsiteJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "SAGA Engineering (Pvt) Ltd",
        "alternateName": "SAGA Engineering",
        "url": "https://sagaengineering.lk/",
        "description": "Your business is our passion - Professional industrial engineering solutions",
        "publisher": {
          "@type": "Organization",
          "name": "SAGA Engineering (Pvt) Ltd",
          "logo": "https://sagaengineering.lk/Logo.webp"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://sagaengineering.lk/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }`,
    };
  }
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta property="og:site_name" content="SAGA Engineering (Pvt) Ltd" />
        <meta property="og:url" content="https://sagaengineering.lk/" />
        <meta property="og:title" content="SAGA Engineering (Pvt) Ltd" />
        <meta property="og:description" content="Professional industrial machinery import and supply services with comprehensive engineering solutions." />
        <meta property="og:image" content="https://sagaengineering.lk/Logo.webp" />
        <meta name="google-site-verification" content="ERnScZFGanFENVOOM7CCokcgOHQeKIEJpSshBEthzvQ" />
        <link rel="canonical" href="https://sagaengineering.lk/" />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="icon" href="/favicon-32x32.png?v=2" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png?v=2" sizes="16x16" />
           <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addOrganizationJsonLd()}
          key="organization-jsonld"
        />
          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addWebsiteJsonLd()}
          key="website-jsonld"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SAGA Engineering (Pvt) Ltd",
              alternateName: "SAGA Engineering",
              description:
                "Industrial machinery import and supply company specializing in pumps, compressors, conveyors, motors, and electrical systems.",
              url: "https://sagaengineering.lk/",
              logo: "https://sagaengineering.lk/Logo.webp",
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
                postalCode: "10230",
              },
              // sameAs: ["https://linkedin.com/company/saga-engineering", "https://facebook.com/sagaengineering"],
            }),
          }}
        />

          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SAGA Engineering (Pvt) Ltd",
              alternateName: "SAGA Engineering",
              url: "https://sagaengineering.lk/",
              description: "Your business is our passion - Professional industrial engineering solutions",
              publisher: {
                "@type": "Organization",
                name: "SAGA Engineering (Pvt) Ltd",
                logo: "https://sagaengineering.lk/Logo.webp"
              },
              
              // Search functionality
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://sagaengineering.lk/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              
              // Main pages for sitelinks - Critical for Google understanding
              mainEntity: [
                {
                  "@type": "WebPage",
                  "@id": "https://sagaengineering.lk/contact",
                  name: "Contact Us",
                  description: "Address: 8/A, Kahathuduwa, Polgasowita, Colombo Email: sales@sagaengineering.lk, Phone: +94711707030",
                  url: "https://sagaengineering.lk/contact"
                },
               
                {
                  "@type": "WebPage",
                  "@id": "https://sagaengineering.lk/about",
                  name: "Company Profile", 
                  description: "SAGA Engineering expertise in innovation, products and technology to provide comprehensive engineering solutions",
                  url: "https://sagaengineering.lk/about"
                },
                {
                  "@type": "WebPage",
                  "@id": "https://sagaengineering.lk/services",
                  name: "Our Services",
                  description: "Innovative Solutions focused on helping every business with industrial machinery and comprehensive engineering support",
                  url: "https://sagaengineering.lk/services"
                }
              ]
            }),
          }}
        />
        
        {/* Breadcrumb Schema for navigation structure */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://sagaengineering.lk/"
                },
                {
                  "@type": "ListItem", 
                  position: 2,
                  name: "Contact Us",
                  item: "https://sagaengineering.lk/contact"
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Company Profile",
                  item: "https://sagaengineering.lk/about"
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Services", 
                  item: "https://sagaengineering.lk/services"
                }
              ]
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

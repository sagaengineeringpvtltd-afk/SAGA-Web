import { Separator } from "@/components/ui/separator"
import { Linkedin, Facebook, Twitter, Youtube, Instagram, Play } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Play, href: "#", label: "Play Store" },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ]

  return (
      <footer className="bg-gray-800 text-white">
      {/* Top section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12  max-w-[90%] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/Logo2.png"
              alt="Company Logo"
              width={96}
              height={96}
              className="mb-6"
            />
            <h3 className="text-lg font-semibold mb-4">Contact Us:</h3>
            <div className="text-gray-100">
         <p className="mb-2 text-center md:text-left">
              Whatsapp : +94 71 11 70 70 30
            </p>
            <p className="mb-2 text-center md:text-left">
              Location : 8/A, Kahathuduwa, Polgasowita
            </p>
            <p className="text-center md:text-left">
              Email : sales@sagaengineering.lk
            </p>
            </div>
   
          </div>

          {/* Short Links */}
          <div className="flex flex-col items-center md:items-start lg:col-start-3 md:py-10">
            <h3 className="text-lg font-semibold mb-4">SHORT LINKS</h3>
            <ul className="text-center md:text-left text-gray-100">
              <li className="mb-2">
                <Link href="/" className="hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="hover:text-blue-400">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          {/* <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">FOLLOW</h3>
                        <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-900 py-4 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm max-w-[90%]">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 mb-4 md:mb-0 text-center">
            <Link href="/terms" className="hover:text-blue-400">
              TERMS & CONDITIONS
            </Link>
            <Link href="/privacy" className="hover:text-blue-400">
              PRIVACY POLICY
            </Link>
          </div>
          <p className="text-center md:text-right text-gray-300">
            Copyright © {new Date().getFullYear()} SAGA Engineering
            <br /> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

import { Separator } from "@/components/ui/separator"
import { Linkedin, Facebook, Twitter, Youtube, Instagram, Play } from "lucide-react"

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
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-2xl font-bold">SAGA Engineering</h3>
            </div>

            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-white mb-2">WhatsApp: +94 711 70 70 30</p>
              </div>
              <div>
                <p className="mb-1">No. 14, Sir Baron Jayatilaka Mawatha,</p>
                <p>Colombo 01, Western 00100, LK</p>
              </div>
              <div>
                <p>info@sagaengineering.lk</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">SHORT LINKS</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-400">FOLLOW</h4>
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
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              TERMS & CONDITIONS
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors duration-200">
              PRIVACY POLICY
            </a>
          </div>

          <div className="text-sm text-gray-400 text-center">
            <p>Copyright © {currentYear} SAGA Engineering.</p>
            <p>All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

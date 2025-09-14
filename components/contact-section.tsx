// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { Phone, Mail, MapPin, Clock } from "lucide-react"

// export function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle form submission here
//     console.log("Form submitted:", formData)
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   return (
//     <section id="contact" className="py-16 lg:py-24 bg-muted/30">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Get In Touch</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
//             Ready to discuss your industrial engineering needs? Contact us today for expert consultation.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
//               <div className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
//                     <Phone className="w-6 h-6 text-primary-foreground" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground mb-1">Phone</h4>
//                     <p className="text-muted-foreground">+94 711 70 70 30</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
//                     <Mail className="w-6 h-6 text-primary-foreground" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground mb-1">Email</h4>
//                     <p className="text-muted-foreground">info@sagaengineering.lk</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
//                     <MapPin className="w-6 h-6 text-primary-foreground" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground mb-1">Address</h4>
//                     <p className="text-muted-foreground">
//                       No. 14, Sir Baron Jayatilaka Mawatha,
//                       <br />
//                       Colombo 01, Western 00100, LK
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
//                     <Clock className="w-6 h-6 text-primary-foreground" />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
//                     <p className="text-muted-foreground">
//                       Monday - Friday: 8:00 AM - 6:00 PM
//                       <br />
//                       Saturday: 9:00 AM - 4:00 PM
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Send us a Message</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="name">Full Name *</Label>
//                     <Input
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       placeholder="Your full name"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="email">Email Address *</Label>
//                     <Input
//                       id="email"
//                       name="email"
//                       type="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="phone">Phone Number</Label>
//                     <Input
//                       id="phone"
//                       name="phone"
//                       type="tel"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="+94 XXX XXX XXX"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="subject">Subject *</Label>
//                     <Input
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                       placeholder="How can we help you?"
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="message">Message *</Label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={5}
//                     placeholder="Tell us about your project requirements..."
//                   />
//                 </div>

//                 <Button type="submit" className="w-full">
//                   Send Message
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   )
// }
'use client';
import Head from "next/head";

export function ContactSection() {
  return (
    <>
      <Head>
        <title>Contact Us | SAGA Engineering</title>
        <meta
          name="description"
          content="Get in touch with SAGA Engineering using our contact form, phone, email, or visit us at our location."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="bg-white font-inter">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <header className="bg-[#000094] text-white p-12 rounded-3xl relative overflow-hidden mb-8">
            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4">
              <div className="w-64 h-64 border-8 border-white/20 rounded-full"></div>
            </div>
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
              <div className="w-64 h-64 border-8 border-white/20 rounded-full"></div>
            </div>
            <div className="relative z-10 text-center">
              <span className="inline-block bg-white text-indigo-800 text-sm font-semibold px-4 py-2 rounded-md mb-4">
                WRITE TO US
              </span>
              <h1 className="text-5xl font-semibold">Get In Touch</h1>
            </div>
          </header>

          <main className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-2">Let's Talk!</h2>
              <p className="text-gray-600 mb-6">
                Get in touch with us using the enquiry form or contact details below.
              </p>
              <form action="#" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Type Something..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-indigo-700 text-white font-bold py-3 px-8 rounded-md hover:bg-indigo-800 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info & Image */}
            <div className="space-y-8">
              <div className="flex justify-center items-center">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCrCEAJHopVccqWMJ1W0bLbkAqj5C91ZepBxmuHUbgs-WdLh8PniT1qafjCWURjYi-5TWIU7gSaZ8QCeP1CSNTJNS74Rk28emt2e4FhGKzGvLRUsRt48DvBCkRbRiy1ID3AsPm4qoWXvU-QQjb077dHQhmN4hN9aSvY7Q61Wrg9sOMq81kP8cHcLxMFXHbP6d2IZNw05IEkscNRUFhvRalRrSVte0ZkEAIntu2m2g2vfrp5WiKOkVbc5gcGbVLMcsk99MJ8kPDeWA"
                  alt="Customer support agent"
                  className="max-w-md w-full"
                />
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                    <span className="material-icons text-indigo-600">call</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Call us :</h3>
                    <p className="text-gray-600">+94711 70 70 30</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                    <span className="material-icons text-indigo-600">email</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email us :</h3>
                    <p className="text-gray-600">sales@sagaengineering.lk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                    <span className="material-icons text-indigo-600">location_on</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Locate us :</h3>
                    <p className="text-gray-600">8/A, Kahathuduwa, Polgasowita</p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </main>
    </>
  );
}

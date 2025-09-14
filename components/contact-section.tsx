'use client';
import Head from "next/head";
import Lottie from "lottie-react";
import React, { useState } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
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
        <div className="container mx-auto px-4 mb-10 py-4 max-w-[90%]">
          {/* Header */}
          <header className="bg-[#000094] text-white p-12 rounded-3xl relative overflow-hidden mb-8 shadow-lg">
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
              <h2 className="text-2xl font-bold mb-2">Let's Talk!</h2>
              <p className="text-gray-600 mb-6">
                Ready to discuss your industrial engineering needs? Contact us today for expert consultation.
              </p>

              <form action="#" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                         id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      type="text"
   
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+94 XXX XXX XXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  </div>
                </div>

                <div>
                                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                           id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  
                </div>

                <div>
                  
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                     id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full md:w-auto text-center bg-[#101828] text-white font-bold py-3 px-8 rounded-md hover:bg-[#000094] transition-colors cursor-pointer"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info & Image */}
            <div className="space-y-8">
    

              <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
                         <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Contact Information</h3>
                        <div className="flex justify-center items-center">
          <Lottie
            animationData={require("../public//contact us.json")}
            loop={true}
            className="w-[50%] max-w-md"
          />
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#000094] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">+94 711 70 70 30</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#000094] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">sales@sagaengineering.lk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#000094] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                       8/A, Kahathuduwa, Polgasowita
                     
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#000094] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
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

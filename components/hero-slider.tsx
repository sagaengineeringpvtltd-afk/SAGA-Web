"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Machinery Import & Supply",
    description:
      "We specialize in the import and supply of a wide range of industrial and engineering equipment, including pumps, compressors, conveyors, motors, and electrical systems.",
    image: "/Machinery Import & Supply.jpeg",
    cta: "See More",
  },
  {
    id: 2,
    title: "Design, installation & maintenance",
    description:
      "Our expert team provides comprehensive installation and commissioning services for all industrial equipment, ensuring optimal performance and safety.",
    image: "/Design, installation & maintenance.jpeg",
    cta: "See More",
  },
  {
    id: 3,
    title: "General Maintenance & Support",
    description:
      "Our General Maintenance and Support services cover preventive and corrective maintenance for industrial machinery, electrical systems, and mechanical components.",
    image: "/General Maintenance & Support.jpeg",
    cta: "See More",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section id="home" className="relative h-[80vh] overflow-hidden">
  {slides.map((slide, index) => (
    <div
      key={slide.id}
      className={cn(
        "absolute inset-0 transition-opacity duration-1000",
        index === currentSlide ? "opacity-100" : "opacity-0"
      )}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Background Image */}
      <img
        src={slide.image || "/placeholder.svg"}
        alt={slide.title}
        className="w-full h-[80vh] object-cover"
      />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
       {/* Content */}
<div className="absolute inset-0 z-20 flex items-center justify-center text-center">
  <div className=" text-center ">
    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-white mb-6 leading-tight">
      {slide.title}
    </h1>
    <div className="flex flex-col items-center">
      <p className="text-base max-w-4xl sm:text-lg lg:text-xl text-white/90 mb-8 leading-relaxed text-center ">
        {slide.description}
      </p>
    </div>

    <button
      className="text-lg px-10 py-2 bg-[#000094] rounded-full font-medium text-white cursor-pointer transition"
      onClick={() => {
        if (slide.cta === "Contact Us") {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        } else if (slide.cta === "Our Services") {
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
        } else {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
      }}
    >
      {slide.cta}
    </button>
  </div>
</div>

      </div>
    </div>
  ))}

  {/* Navigation Arrows */}
  <button
    onClick={prevSlide}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
    aria-label="Previous slide"
  >
    <ChevronLeft className="w-6 h-6 text-white" />
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
    aria-label="Next slide"
  >
    <ChevronRight className="w-6 h-6 text-white" />
  </button>

  {/* Slide Indicators */}
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)}
        className={cn(
          "w-3 h-3 rounded-full transition-all duration-200",
          index === currentSlide
            ? "bg-white scale-125"
            : "bg-white/50 hover:bg-white/75"
        )}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
</section>

  )
}

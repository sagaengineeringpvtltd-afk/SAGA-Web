"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Machinery Import & Supply",
    description:
      "We specialize in the import and supply of a wide range of industrial and engineering equipment, including pumps, compressors, conveyors, motors, and electrical systems.",
    image: "/placeholder-whl9j.png",
    cta: "Learn More",
  },
  {
    id: 2,
    title: "Professional Installation Services",
    description:
      "Our expert team provides comprehensive installation and commissioning services for all industrial equipment, ensuring optimal performance and safety.",
    image: "/placeholder-233on.png",
    cta: "Our Services",
  },
  {
    id: 3,
    title: "Maintenance & Support",
    description:
      "We offer ongoing maintenance and technical support services to keep your industrial equipment running at peak efficiency and minimize downtime.",
    image: "/placeholder-24afu.png",
    cta: "Contact Us",
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
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
                  {slide.title}
                </h1>
                <p className="text-lg sm:text-xl text-white/90 mb-8 text-pretty leading-relaxed">{slide.description}</p>
                <Button
                  size="lg"
                  className="text-lg px-8 py-3"
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
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-200",
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

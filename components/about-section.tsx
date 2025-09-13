import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">Who Are We</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                We specialize in providing comprehensive mechanical engineering services, with a focus on delivering
                reliable, efficient, and sustainable solutions. Our expertise spans from concept design to project
                execution, covering detailed engineering, installation, and maintenance support.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                By integrating innovative technologies with industry best practices, we ensure optimized performance,
                cost-effectiveness, and long-term value for our clients. We are committed to addressing complex
                engineering challenges while prioritizing safety, quality, and environmental responsibility.
              </p>
            </div>
          </div>

          <div className="relative">
            <Card className="overflow-hidden">
              <img
                src="/modern-industrial-engineering-facility-with-blue-m.jpg"
                alt="SAGA Engineering facility"
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

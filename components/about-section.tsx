import Image from "next/image";
import Link from "next/link";

export function AboutSection() {
  return (
    <div className="bg-white">


      {/* Main */}
      <section
        id="about"
        className="py-4 lg:py-4 px-4 sm:px-6 lg:px-20 bg-white"
      >
        
        <div className="max-w-7xl mx-auto">
          {/* Image */}
          {/* <div className="mb-20">
            <div className="w-full flex flex-col justify-end overflow-hidden rounded-3xl min-h-[40vh] relative">
              <Image
                src="/AboutUs.jpeg"
                alt="SAGA Engineering"
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </div>
          </div> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-16">
          {/* Image */}
             <div className="w-full flex flex-col justify-end overflow-hidden rounded-3xl min-h-[50vh] relative">
              <Image
                src="/AboutUs.jpeg"
                alt="SAGA Engineering"
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
            </div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[] leading-tight">
              Comprehensive Engineering Solutions
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              From concept design to project execution, we provide detailed
              technical support, industry expertise, cost-effective optimized
              long-term solutions, ensuring safety, quality, and client
              satisfaction.
            </p>
          </div>
        </div>
          {/* Vision */}
          <div className="flex justify-center items-center">
            <div className="w-full border-2 border-dashed border-[#B5B5FF] rounded-lg p-8 mb-12 relative">
              <h2 className="text-3xl font-semibold text-[#000094] bg-white px-4 absolute -top-4 left-1/2 transform -translate-x-1/2">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 text-center mx-auto mt-8">
                Our vision is to redefine engineering excellence by delivering
                smart, sustainable, and future-ready solutions that empower
                industries, transform communities, and drive global progress.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="flex justify-center items-center">
            <div className="w-full border-2 border-dashed border-[#B5B5FF] rounded-lg p-8 mb-12 relative">
              <h2 className="text-3xl font-semibold text-[#000094] bg-white px-4 absolute -top-4 left-1/2 transform -translate-x-1/2">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 text-center mx-auto mt-8">
                We are committed to engineering solutions that go beyond
                expectations by combining innovation, precision, and
                collaboration. Through advanced technologies, scalable designs,
                and environmentally responsible practices, we create reliable
                and cost-effective solutions tailored to each client&apos;s
                needs. By fostering strong partnerships, investing in talent,
                and championing sustainability, we strive to deliver lasting
                value and contribute to building a better future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

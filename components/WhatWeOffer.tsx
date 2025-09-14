'use client'
import Head from "next/head";
import { Settings, Truck, Wrench } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Services() {
  // Services array
  const router = useRouter();
  const services = [
    {
      icon: Settings,
      title: "Design, Installation & Maintenance",
      description:
        "Our vision is to redefine engineering excellence by delivering smart, sustainable solutions that drive innovation and efficiency.",
        
    },
    {
      icon: Truck,
      title: "Machinery Import & Supply",
      description:
        "Comprehensive import and supply services for industrial equipment, ensuring quality and reliability in every delivery.",
    },
    {
      icon: Wrench,
      title: "General Maintenance & Support",
      description:
        "Ongoing technical support and maintenance services to ensure optimal performance and minimize operational downtime."
    },
  ];

  return (
    <>
      <Head>
        <title>Our Services | Mechanical Engineering Solutions</title>
        <meta
          name="description"
          content="Explore our mechanical engineering services including design, installation, maintenance, machinery import, and general support. We deliver smart and sustainable solutions for optimized performance."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="bg-white font-poppins">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="text-[#000094] bg-[#0044FF]/20 text-sm font-medium px-4 py-2 rounded-full">
                Our Services
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-black mt-4">
                What We Offer
              </h1>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="relative group hover:shadow-lg transition-shadow duration-300 bg-white border-2 border-[#000094] rounded-2xl p-8 flex flex-col items-center text-center"
                  >
                    {/* Icon */}
                    <div className="absolute -top-6 bg-[#000094] rounded-full p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white w-10 h-10" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6">{service.description}</p>


                    {/* Button */}
                    <button onClick={() => router.push(`/services?service=${index}`)} className="w-[50%] cursor-pointer bg-transparent border border-[#000094] text-[#000094] font-medium py-2 rounded-lg hover:bg-[#000094] hover:text-white transition-colors">
                      View More
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

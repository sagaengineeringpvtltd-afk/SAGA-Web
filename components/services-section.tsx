// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Settings, Truck, Wrench } from "lucide-react"

// const services = [
//   {
//     icon: Settings,
//     title: "Design, Installation & Maintenance",
//     description:
//       "Our vision is to redefine engineering excellence by delivering smart, sustainable solutions that drive innovation and efficiency.",
//     features: [
//       "Custom engineering design",
//       "Professional installation",
//       "Preventive maintenance",
//       "System optimization",
//     ],
//   },
//   {
//     icon: Truck,
//     title: "Machinery Import & Supply",
//     description:
//       "Comprehensive import and supply services for industrial equipment, ensuring quality and reliability in every delivery.",
//     features: ["Global sourcing network", "Quality assurance", "Logistics management", "Technical documentation"],
//   },
//   {
//     icon: Wrench,
//     title: "General Maintenance & Support",
//     description:
//       "Ongoing technical support and maintenance services to ensure optimal performance and minimize operational downtime.",
//     features: ["24/7 technical support", "Emergency repairs", "Performance monitoring", "Spare parts supply"],
//   },
// ]

// export function ServicesSection() {
//   return (
//     <section id="services" className="py-16 lg:py-24">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">What We Offer</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
//             Comprehensive engineering solutions tailored to meet your industrial needs
//           </p>
//         </div>

        // <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        //   {services.map((service, index) => (
        //     <Card key={index} className="relative group hover:shadow-lg transition-shadow duration-300">
        //       <CardHeader className="text-center pb-4">
        //         <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        //           <service.icon className="w-8 h-8 text-primary-foreground" />
        //         </div>
        //         <CardTitle className="text-xl font-bold text-balance">{service.title}</CardTitle>
        //       </CardHeader>
        //       <CardContent className="text-center">
        //         <CardDescription className="text-muted-foreground mb-6 text-pretty leading-relaxed">
        //           {service.description}
        //         </CardDescription>
        //         <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
        //           {service.features.map((feature, featureIndex) => (
        //             <li key={featureIndex} className="flex items-center justify-center">
        //               <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
        //               {feature}
        //             </li>
        //           ))}
        //         </ul>
        //         <Button variant="outline" className="w-full bg-transparent">
        //           View More
        //         </Button>
        //       </CardContent>
        //     </Card>
        //   ))}
        // </div>
//       </div>
//     </section>
//   )
// }
'use client';
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
const servicesData = [
  {
    title: "Design, Installation & Maintenance",
    description:
      "Our expertise covers a wide range of mechanical engineering systems, including HVAC solutions such as chillers, air handling units, and ducting systems, as well as water supply and drainage networks, pump rooms, and chambers. We also provide design and installation of water and sewerage treatment plants, boilers, gas supply systems, and chlorination systems. With a focus on efficiency, safety, and sustainability, we deliver end-to-end solutions tailored to meet diverse project requirements.",
    subServices: [
      { category: "HVAC Systems", description: "Includes chillers, air handling units, ducting systems" },
      { category: "Pump Rooms & Chambers", description: "" },
      { category: "Boilers", description: "" },
      { category: "Drainage Systems", description: "" },
      { category: "Water supply systems", description: "" },
      { category: "Gas Supply Systems", description: "" },
      { category: "Water Treatment plants", description: "" },
      { category: "Sewerage Treatment plants", description: "" },
    ],
    image: "/Design, installation & maintenance.jpeg",
  },
  {
    title: "Machinery Import & Supply",
    description:
      "We also specialize in the import and supply of a wide range of industrial and engineering equipment, including pumps, compressors, conveyors, motors, and electrical systems such as distribution panels and switchgear. Our supply capabilities extend to HVAC equipment, power tools, safety and measuring instruments, as well as spare parts and consumables, ensuring reliable support for diverse industrial and construction needs.",
    subServices: [
      { category: "Industrial Machinery", description: "e.g., pumps, compressors, conveyors, motors" },
      { category: "Electrical equipment", description: "e.g., distribution panels, switchgear" },
      { category: "HVAC equipment", description: "e.g., chillers, air handling units, ducting systems" },
      { category: "Power tools and industrial tools", description: "" },
      { category: "Safety and measuring instruments", description: "" },
      { category: "Spare parts and consumables", description: "" },
    ],
    image: "/Machinery Import & Supply.jpeg",
  },
  {
    title: "General Maintenance & Support",
    description:
      "Our General Maintenance and Support services cover preventive and corrective maintenance for industrial machinery, electrical systems, and mechanical components. We provide specialized HVAC maintenance, including chillers, AC systems, and duct cleaning, along with on-site troubleshooting and repairs. Through annual maintenance contracts, we ensure long-term reliability, efficiency, and smooth operation of all critical systems.",
    subServices: [
      { category: "Preventive and corrective maintenance for industrial machines", description: "" },
      { category: "Electrical system maintenance", description: "(wiring, panels, lighting, motor controls)" },
      { category: "Mechanical maintenance", description: "(bearings, gearboxes, lubrication, alignment)" },
      { category: "HVAC maintenance", description: "(AC systems, chillers, duct cleaning)" },
      { category: "On-site troubleshooting and repairs", description: "" },
      { category: "Annual maintenance contracts (AMC)", description: "" },
    ],
    image: "/General Maintenance & Support.jpeg",
  },
];

export function ServicesSection() {

    const searchParams = useSearchParams();
    console.log("search params", searchParams);
  const cardIndex = Number(searchParams.get("service") ?? 0);
  console.log("card index", cardIndex);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

useEffect(() => {
  // Only scroll if cardIndex is not null and valid
  if (searchParams.size !== 0 && cardRefs.current[cardIndex]) {
    cardRefs.current[cardIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  } 

}, [cardIndex]);

  return (
    <section className="py-4 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-black mb-4">Our Major Services</h2>
      </div>

      {/* Card 1 */}
      <div className="bg-white rounded-3xl mb-20 shadow-lg border border-[#6666FF] overflow-hidden" ref={el => cardRefs.current[0] = el}>
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Content */}
          <div className="p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{servicesData[0].title}</h3>
            <p className="text-gray-600 leading-relaxed mb-8">{servicesData[0].description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servicesData[0].subServices.map((sub, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{sub.category}</h4>
                    {sub.description && <p className="text-xs text-gray-500 mt-1">{sub.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-96 lg:h-auto lg:flex hidden">
            <Image
              src={servicesData[0].image}
              alt={servicesData[0].title}
              fill
              className="object-cover rounded-t-full md:rounded-t-full lg:rounded-l-full lg:rounded-t-none"
              priority
            />
          </div>
        </div>
      </div>

      {/* Card 2 (image left, content right) */}
      <div className="bg-white rounded-3xl mb-20 shadow-lg border border-[#6666FF] overflow-hidden" ref={el => cardRefs.current[1] = el}>
        <div className="grid lg:grid-cols-2 gap-0 lg:flex-row-reverse">
          {/* Content */}


          {/* Image */}
          <div className="relative w-full h-96 lg:h-auto lg:flex hidden">
            <Image
              src={servicesData[1].image}
              alt={servicesData[1].title}
              fill
              className="object-cover rounded-t-full md:rounded-t-full lg:rounded-r-full lg:rounded-t-none"
              priority
            />
          </div>
                    <div className="p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{servicesData[1].title}</h3>
            <p className="text-gray-600 leading-relaxed mb-8">{servicesData[1].description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servicesData[1].subServices.map((sub, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{sub.category}</h4>
                    {sub.description && <p className="text-xs text-gray-500 mt-1">{sub.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-3xl mb-20 shadow-lg border border-[#6666FF] overflow-hidden" ref={el => cardRefs.current[2] = el}>
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Content */}
          <div className="p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">{servicesData[2].title}</h3>
            <p className="text-gray-600 leading-relaxed mb-8">{servicesData[2].description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servicesData[2].subServices.map((sub, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">{sub.category}</h4>
                    {sub.description && <p className="text-xs text-gray-500 mt-1">{sub.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-96 lg:h-auto lg:flex hidden">
            <Image
              src={servicesData[2].image}
              alt={servicesData[2].title}
              fill
              className="object-cover rounded-t-full md:rounded-t-full lg:rounded-l-full lg:rounded-t-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

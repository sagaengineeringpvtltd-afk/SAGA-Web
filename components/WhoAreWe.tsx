'use client';
import Image from "next/image";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>About Our Company | Mechanical Engineering Experts</title>
        <meta
          name="description"
          content="We specialize in mechanical engineering services: design, project execution, installation, and maintenance. Delivering reliable, efficient, and sustainable solutions."
        />
        <meta name="keywords" content="Mechanical Engineering, Industrial Solutions, Installation, Maintenance, Project Execution, Engineering Company" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Our Company | Mechanical Engineering Experts" />
        <meta
          property="og:description"
          content="We deliver comprehensive mechanical engineering services with a focus on sustainability, safety, and innovation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
      </Head>

      {/* Page Section */}
      <section className="px-8 py-12 md:py-20 bg-white ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div  className=" justify-center">
            <span className="inline-block px-3 py-1 text-sm font-medium text-[#000094] bg-[#0044FF]/20 rounded-full mb-4">
              About Our Company
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who Are We
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We specialize in providing comprehensive mechanical engineering
              services, with a focus on delivering reliable, efficient, and
              sustainable solutions. Our expertise spans from concept design to
              project execution, covering detailed engineering, installation,
              and maintenance support.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              By integrating innovative technologies with industry best
              practices, we ensure optimized performance, cost-effectiveness,
              and long-term value for our clients. We are committed to addressing
              complex engineering challenges while prioritizing safety, quality,
              and environmental responsibility.
            </p>
          </div>

    <div className="flex justify-center md:justify-end w-full">
      <div className="relative w-[80%] max-w-md">
<div className="absolute w-full inset-0 bg-[#000094] rounded-3xl transform -rotate-3"></div>
        <img
          alt="Industrial pipes and valves"
          src="/modern-industrial-engineering-facility-with-blue-m.jpg"
          className="relative w-full h-auto rounded-3xl shadow-lg"
        />
      </div>
    </div>

        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

type Service = {
  title: string;
  code: string;
  description: string;
  href: string;
  image: string;
};

export default function InteractiveServices({
  services,
}: {
  services: Service[];
}) {
  const [selectedImage, setSelectedImage] = useState(
    "/images/hero-ship.jpg"
  );

  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-20"
      style={{
        backgroundImage: `url('${selectedImage}')`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#E8EEF5]/90"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <p className="mb-3 text-2xl font-bold uppercase tracking-widest text-yellow-500">
              What We Do
            </p>

            <h2 className="text-4xl font-extrabold text-blue-900 md:text-5xl">
              Comprehensive Maritime Services
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              From vessel arrival and port operations to crew changes,
              logistics, technical support, and departure, our team provides
              responsive coordination throughout the vessel&apos;s port call.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => (
              <div
                key={service.title}
                onClick={() => setSelectedImage(service.image)}
                className="group flex h-full cursor-pointer flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-yellow-400 bg-blue-900 text-sm font-extrabold tracking-wider text-yellow-400 transition duration-300 group-hover:bg-yellow-400 group-hover:text-blue-900">
                  {service.code}
                </div>

                <h3 className="text-2xl font-bold leading-tight text-blue-900">
                  {service.title}
                </h3>

                <p className="mt-4 flex-grow leading-7 text-gray-600">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  onClick={(event) => event.stopPropagation()}
                  className="mt-6 inline-flex items-center font-bold text-blue-900 transition hover:text-yellow-500"
                >
                  Learn More
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
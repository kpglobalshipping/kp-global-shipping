"use client";

import Image from "next/image";
import Link from "next/link";

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
  return (
    <section className="relative bg-[#E8EEF5] py-20">
      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">

          {/* Section Heading */}
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

          {/* Service Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service) => (
              <div
                key={service.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-2xl"
              >

                {/* Service Image */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-grow flex-col p-8">

                  {/* Service Code */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-yellow-400 bg-blue-900 text-sm font-extrabold tracking-wider text-yellow-400 transition duration-300 group-hover:bg-yellow-400 group-hover:text-blue-900">
                    {service.code}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold leading-tight text-blue-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 flex-grow leading-7 text-gray-600">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center font-bold text-blue-900 transition hover:text-yellow-500"
                  >
                    Learn More
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
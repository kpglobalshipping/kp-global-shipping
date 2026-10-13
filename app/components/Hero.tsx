import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#EAF1F8]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-2 md:gap-12 md:py-16 lg:py-20">

        {/* LEFT: TEXT */}
        <div className="max-w-xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-blue-700">
            KP GLOBAL SHIPPING INC.
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl lg:text-6xl">
            Your Philippine
            <br />
            Shipping Partner
          </h1>

          <p className="mt-6 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
            Reliable port agency and maritime support throughout the
            Philippines, serving vessel owners, operators, charterers,
            and international principals.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center rounded-lg bg-blue-950 px-7 py-4 font-bold text-white transition hover:bg-blue-800"
          >
            Request a Quote
            <span className="ml-3" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        {/* RIGHT: FULL SHIP IMAGE */}
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-5xl">
            <Image
              src="/images/hero-ship.jpg"
unoptimized
alt="Cargo vessel representing KP Global Shipping's maritime services"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full rounded-2xl object-contain transition-transform duration-500 ease-in-out hover:-translate-y-2 hover:scale-[1.03] cursor-pointer"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
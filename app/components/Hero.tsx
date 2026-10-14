
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-start overflow-hidden bg-blue-950">

      {/* FULL-BACKGROUND SHIP IMAGE */}
      <Image
        src="/images/hero-ship.jpg"
        alt="Cargo vessel representing KP Global Shipping's maritime services"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* DARK OVERLAY FOR READABLE TEXT */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/60 to-blue-950/10" />

      {/* HERO TEXT - UPPER LEFT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-16 sm:px-10 sm:pt-20 md:pt-24 lg:px-12 lg:pt-28">

        <div className="max-w-2xl">

          <p className="mb-5 text-sm font-bold uppercase tracking-[3px] text-sky-300 sm:text-base">
            KP GLOBAL SHIPPING INC.
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Your Philippine
            <br />
            Shipping Partner
          </h1>

          <div className="mb-6 mt-6 h-1 w-20 rounded-full bg-sky-400" />

          <p className="max-w-xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
            Reliable port agency and maritime support throughout the
            Philippines, serving vessel owners, operators, charterers,
            and international principals.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center rounded-lg bg-sky-500 px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-sky-400"
          >
            Request a Quote
            <span className="ml-3" aria-hidden="true">
              →
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}

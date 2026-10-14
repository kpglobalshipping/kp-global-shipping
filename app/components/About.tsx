
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-start overflow-hidden bg-blue-950"
    >
      {/* FULL-BACKGROUND OFFICE PHOTO */}
      <Image
        src="/images/office.jpg"
        alt="KP Global Shipping Office"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/80 to-blue-950/35" />

      {/* LEFT-SIDE COMPANY INFORMATION */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        <div className="max-w-4xl">

          <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-sky-300">
            WHO WE ARE
          </p>

          <h2 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Maritime & Ship Agency
            <br />
            Services in the Philippines
          </h2>

          <div className="mb-7 mt-6 h-1 w-20 rounded-full bg-sky-400" />

          <p className="max-w-3xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
            KP Global Shipping Inc. provides professional maritime and
            shipping services throughout the Philippines.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            We enhance <strong className="text-white">
              corporate competitiveness
            </strong>{" "}
            by providing reliable outsourcing solutions for vessel owners,
            operators, charterers, and international principals operating
            throughout the Philippines.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            Combining Korean maritime expertise with experienced Philippine
            operations, KP delivers professional port agency, owner's
            protective agency, crew change, technical services, husbandry,
            customs coordination, marine logistics, and operational support
            for vessels calling Philippine ports.
          </p>

          {/* COMPANY HIGHLIGHTS */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl border border-white/20 bg-blue-950/60 p-5 backdrop-blur-sm">
              <h3 className="font-bold text-sky-300">
                24/7 Support
              </h3>
              <p className="mt-2 text-sm leading-6 text-white">
                Fast operational response anytime.
              </p>
            </div>

            <div className="rounded-xl border border-white/20 bg-blue-950/60 p-5 backdrop-blur-sm">
              <h3 className="font-bold text-sky-300">
                Nationwide Coverage
              </h3>
              <p className="mt-2 text-sm leading-6 text-white">
                Major ports across the Philippines.
              </p>
            </div>

            <div className="rounded-xl border border-white/20 bg-blue-950/60 p-5 backdrop-blur-sm">
              <h3 className="font-bold text-sky-300">
                Korean Expertise
              </h3>
              <p className="mt-2 text-sm leading-6 text-white">
                Supporting Korean and international principals.
              </p>
            </div>

            <div className="rounded-xl border border-white/20 bg-blue-950/60 p-5 backdrop-blur-sm">
              <h3 className="font-bold text-sky-300">
                One-Stop Solution
              </h3>
              <p className="mt-2 text-sm leading-6 text-white">
                Agency, crew change, technical & logistics.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

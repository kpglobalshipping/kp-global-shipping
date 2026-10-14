
const services = [
  {
    icon: "⚓",
    title: "Port Agency",
    description: "Vessel coordination from arrival to departure.",
    href: "/services/port-agency",
  },
  {
    icon: "🛡️",
    title: "Owner's Protective Agency",
    description: "Independent representation and owner protection.",
    href: "/services/protective-agency",
  },
  {
    icon: "👨‍✈️",
    title: "Crew Change",
    description: "Crew transfers, immigration and airport coordination.",
    href: "/services/crew-change",
  },
  {
    icon: "🚢",
    title: "Husbandry Services",
    description: "Provisions, fresh water, spares and vessel support.",
    href: "/services/husbandry-services",
  },
  {
    icon: "📦",
    title: "Marine Logistics",
    description: "Customs clearance and marine delivery coordination.",
    href: "/services/marine-logistics",
  },
  {
    icon: "📄",
    title: "Customs & Immigration",
    description: "Coordination with relevant port authorities.",
    href: "/services/customs-clearance",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative isolate min-h-screen overflow-hidden bg-blue-950"
    >
      {/* FULL-BACKGROUND PHOTO */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/port-agency.jpg')",
        }}
        aria-hidden="true"
      />

      {/* LIGHTER OVERLAY: KEEP THE SHIP VISIBLE */}
      <div
        className="absolute inset-0 -z-10 bg-blue-950/15"
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-5 py-12 sm:px-8 lg:justify-center lg:px-10 lg:py-16">

        {/* HEADING */}
        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-sky-200 drop-shadow-md">
            KP GLOBAL SHIPPING INC.
          </p>

          <h2 className="text-4xl font-extrabold text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
            Our Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl rounded-lg bg-blue-950/45 px-4 py-2 text-base leading-7 text-white drop-shadow-md sm:text-lg">
            Dependable maritime solutions throughout the Philippines.
          </p>
        </div>

        {/* LEFT CARDS — OPEN CENTER — RIGHT CARDS */}
        <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[minmax(220px,1fr)_minmax(180px,0.8fr)_minmax(220px,1fr)] lg:gap-6">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-3">
            {services.slice(0, 3).map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group flex min-h-[88px] items-center gap-3 rounded-xl border border-white/50 bg-blue-950/65 p-3 shadow-lg backdrop-blur-[3px] transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-blue-950/85 sm:p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-400/20 text-xl">
                  {service.icon}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold leading-5 text-white group-hover:text-sky-200 sm:text-base">
                    {service.title}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-white">
                    {service.description}
                  </span>
                  <span className="mt-1 block text-xs font-bold text-sky-200">
                    Explore →
                  </span>
                </span>
              </a>
            ))}
          </div>

          {/* CENTER: OPEN AREA TO SHOW THE SHIP */}
          <div
            className="hidden lg:block"
            aria-hidden="true"
          />

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-3">
            {services.slice(3, 6).map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group flex min-h-[88px] items-center gap-3 rounded-xl border border-white/50 bg-blue-950/65 p-3 shadow-lg backdrop-blur-[3px] transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-blue-950/85 sm:p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-400/20 text-xl">
                  {service.icon}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold leading-5 text-white group-hover:text-sky-200 sm:text-base">
                    {service.title}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-white">
                    {service.description}
                  </span>
                  <span className="mt-1 block text-xs font-bold text-sky-200">
                    Explore →
                  </span>
                </span>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}


const services = [
  {
    icon: "⚙️",
    title: "Marine Engineering",
    items: [
      "Main Engine Repair",
      "Generator Repair",
      "Auxiliary Machinery",
      "Turbocharger Overhaul",
      "Electrical Works",
    ],
  },
  {
    icon: "🏗️",
    title: "Deck Machinery",
    items: [
      "Cargo Crane Repair",
      "Steel Works",
      "Hydraulic Systems",
      "Welding",
      "Deck Equipment",
    ],
  },
  {
    icon: "🚢",
    title: "Marine Logistics",
    items: [
      "Spare Parts Supply",
      "Customs Clearance",
      "Delivery & Installation",
      "Ship Chandler",
      "Marine Transportation",
    ],
  },
  {
    icon: "📋",
    title: "Classification & Surveys",
    items: [
      "Dry Dock Assistance",
      "Annual Survey",
      "PSC Assistance",
      "LSA / FFE",
      "Ship Inspection",
    ],
  },
];

export default function TechnicalServices() {
  return (
    <section
      id="technical"
      className="relative isolate min-h-screen overflow-hidden bg-blue-950"
    >
      {/* FULL-BACKGROUND PHOTO */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/marine-services.jpg')",
        }}
        aria-hidden="true"
      />

      {/* LIGHT OVERLAY */}
      <div
        className="absolute inset-0 -z-10 bg-blue-950/20"
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-screen w-full max-w-[1800px] flex-col justify-center px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        {/* SECTION HEADING */}
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[4px] text-sky-200 drop-shadow-md">
            TECHNICAL EXCELLENCE
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
            Marine Technical Services
          </h2>

          <p className="mx-auto mt-4 max-w-3xl rounded-lg bg-blue-950/35 px-4 py-2 text-sm leading-6 text-white sm:text-base sm:leading-7">
            Comprehensive marine technical support through experienced
            engineers, repair specialists and maritime partners throughout
            the Philippines.
          </p>
        </div>

        {/* LEFT CARDS – OPEN CENTER – RIGHT CARDS */}
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[minmax(250px,1fr)_minmax(180px,0.75fr)_minmax(250px,1fr)] lg:gap-6">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-4">
            {services.slice(0, 2).map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-white/40 bg-blue-950/75 p-4 shadow-lg backdrop-blur-[3px] transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-blue-950/85 sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-400/15 text-2xl">
                    {service.icon}
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start text-sm leading-5 text-white"
                    >
                      <span className="mr-2 font-bold text-sky-300">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* OPEN CENTER TO SHOW THE BACKGROUND IMAGE */}
          <div
            className="hidden min-h-[380px] lg:block"
            aria-hidden="true"
          />

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4">
            {services.slice(2, 4).map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-white/40 bg-blue-950/75 p-4 shadow-lg backdrop-blur-[3px] transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-blue-950/85 sm:p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-400/15 text-2xl">
                    {service.icon}
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {service.title}
                  </h3>
                </div>

                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start text-sm leading-5 text-white"
                    >
                      <span className="mr-2 font-bold text-sky-300">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

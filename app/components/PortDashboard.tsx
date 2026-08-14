import {
  Anchor,
  Ship,
  Clock3,
  Globe,
  MapPin,
  Plane,
  Truck,
  Droplets,
  Fuel,
  Trash2,
  Package,
  Users,
  Wrench,
  ClipboardCheck,
  LifeBuoy,
  Warehouse,
  Navigation,
} from "lucide-react";

type PortDashboardProps = {
  port: {
    hero: {
      title: string;
      subtitle: string;
      image: string;
    };

    stats: {
      icon: "anchor" | "ship" | "clock" | "globe";
      title: string;
      value: string;
    }[];

    overview: {
      title: string;
      description: string;
    };

    quickFacts: {
      label: string;
      value: string;
    }[];

    facilities: string[];

    services: string[];

    restrictions: string[];

    airport: {
      name: string;
      distance: string;
    };

    hotels: string[];

    map: {
      title: string;
      url: string;
    };

    cta: {
      title: string;
      description: string;
    };
  };
};

const statIcons = {
  anchor: Anchor,
  ship: Ship,
  clock: Clock3,
  globe: Globe,
};

function getFactIcon(label: string) {
  switch (label) {
    case "Province":
      return MapPin;

    case "Port Authority":
      return Anchor;

    case "Nearest Airport":
      return Plane;

    case "Travel Time":
      return Truck;

    case "Pilotage":
      return Ship;

    case "Tug Assistance":
      return Navigation;

    case "Fresh Water":
      return Droplets;

    case "Bunkering":
      return Fuel;

    case "Garbage Disposal":
      return Trash2;

    default:
      return MapPin;
  }
}

function getFacilityIcon(facility: string) {
  if (facility.includes("Container")) return Package;
  if (facility.includes("Bulk")) return Warehouse;
  if (facility.includes("RoRo")) return Truck;
  if (facility.includes("Passenger")) return Users;
  if (facility.includes("Water")) return Droplets;
  if (facility.includes("Waste")) return Trash2;
  if (facility.includes("Bunkering")) return Fuel;

  return Ship;
}

function getServiceIcon(service: string) {
  if (service.includes("Port Agency")) return Anchor;
  if (service.includes("Protective")) return Ship;
  if (service.includes("Crew")) return Users;
  if (service.includes("Ship Supply")) return Package;
  if (service.includes("Marine")) return Truck;
  if (service.includes("Technical")) return Wrench;
  if (service.includes("Customs")) return ClipboardCheck;
  if (service.includes("Offshore")) return LifeBuoy;

  return Anchor;
}

export default function PortDashboard({
  port,
}: PortDashboardProps) {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="relative h-[360px] md:h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url('${port.hero.image}')`,
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6">

          <div className="max-w-2xl">

            <p className="text-blue-900 font-bold text-sm md:text-base uppercase tracking-widest mb-3">
              Philippine Port Information Center
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-950 uppercase leading-tight">
              {port.hero.title}
            </h1>

            <p className="mt-4 text-sm md:text-base text-gray-700 font-medium max-w-xl leading-6">
              {port.hero.subtitle}
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          PORT STATS
      ===================================================== */}

      <section className="bg-blue-950 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {port.stats.map((stat, index) => {

              const Icon = statIcons[stat.icon];

              return (
                <div
                  key={index}
                  className="flex items-center gap-3 px-5 py-4 border-r border-blue-800 last:border-r-0"
                >

                  <Icon className="w-8 h-8 text-yellow-400 shrink-0" />

                  <div>

                    <p className="text-[10px] md:text-xs uppercase tracking-wide font-bold text-white">
                      {stat.title}
                    </p>

                    <p className="text-[10px] md:text-xs text-blue-200 mt-1">
                      {stat.value}
                    </p>

                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN INFORMATION GRID
      ===================================================== */}

      <section className="py-5">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-4 gap-0 bg-white border border-gray-200 shadow-sm">


            {/* PORT OVERVIEW */}

            <div className="p-5 border-b lg:border-b-0 lg:border-r border-gray-200">

              <h2 className="text-sm font-extrabold text-blue-950 uppercase border-b-2 border-yellow-500 pb-2 mb-4">
                Port Overview
              </h2>

              <p className="text-xs text-gray-600 leading-5">
                {port.overview.description}
              </p>

            </div>


            {/* QUICK FACTS */}

            <div className="p-5 border-b lg:border-b-0 lg:border-r border-gray-200">

              <h2 className="text-sm font-extrabold text-blue-950 uppercase border-b-2 border-yellow-500 pb-2 mb-4">
                Quick Facts
              </h2>

              <div className="space-y-2">

                {port.quickFacts.map((fact, index) => {

                  const Icon = getFactIcon(fact.label);

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-2"
                    >

                      <Icon className="w-3.5 h-3.5 text-red-600 mt-0.5 shrink-0" />

                      <div className="text-[11px] leading-4">

                        <span className="font-bold text-gray-700">
                          {fact.label}:
                        </span>{" "}

                        <span className="text-gray-600">
                          {fact.value}
                        </span>

                      </div>

                    </div>
                  );

                })}

              </div>

            </div>


            {/* FACILITIES */}

            <div className="p-5 border-b lg:border-b-0 lg:border-r border-gray-200">

              <h2 className="text-sm font-extrabold text-blue-950 uppercase border-b-2 border-yellow-500 pb-2 mb-4">
                Port Facilities
              </h2>

              <div className="space-y-2">

                {port.facilities.map((facility, index) => {

                  const Icon = getFacilityIcon(facility);

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-2"
                    >

                      <Icon className="w-3.5 h-3.5 text-red-600 mt-0.5 shrink-0" />

                      <span className="text-[11px] leading-4 text-gray-600">
                        {facility}
                      </span>

                    </div>
                  );

                })}

              </div>

            </div>


            {/* SERVICES */}

            <div className="p-5">

              <h2 className="text-sm font-extrabold text-blue-950 uppercase border-b-2 border-yellow-500 pb-2 mb-4">
                Port Services
              </h2>

              <div className="space-y-2">

                {port.services.map((service, index) => {

                  const Icon = getServiceIcon(service);

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-2"
                    >

                      <Icon className="w-3.5 h-3.5 text-red-600 mt-0.5 shrink-0" />

                      <span className="text-[11px] leading-4 text-gray-600">
                        {service}
                      </span>

                    </div>
                  );

                })}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECOND INFORMATION ROW
      ===================================================== */}

      <section className="pb-5">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-4 gap-0 bg-white border border-gray-200 shadow-sm">


            {/* RESTRICTIONS */}

            <div className="p-5 lg:col-span-1 border-b lg:border-b-0 lg:border-r border-gray-200">

              <h2 className="text-sm font-extrabold text-blue-950 uppercase border-b-2 border-yellow-500 pb-2 mb-4">
                Port Restrictions
              </h2>

              <div className="space-y-2">

                {port.restrictions.map((restriction, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-2"
                  >

                    <span className="text-red-600 text-xs">
                      ●
                    </span>

                    <p className="text-[11px] text-gray-600 leading-4">
                      {restriction}
                    </p>

                  </div>

                ))}

              </div>

            </div>


            {/* AIRPORT */}

            <div className="p-5 border-b lg:border-b-0 lg:border-r border-gray-200">

              <h2 className="text-sm font-extrabold text-blue-950 uppercase border-b-2 border-yellow-500 pb-2 mb-4">
                Nearby Airport
              </h2>

              <div className="flex items-start gap-3">

                <div className="w-9 h-9 rounded-full bg-blue-950 flex items-center justify-center shrink-0">

                  <Plane className="w-4 h-4 text-yellow-400" />

                </div>

                <div>

                  <p className="text-xs font-bold text-blue-950 leading-4">
                    {port.airport.name}
                  </p>

                  <p className="text-[11px] text-gray-600 leading-4 mt-2">
                    {port.airport.distance}
                  </p>

                </div>

              </div>

            </div>


            {/* HOTELS */}

            <div className="p-5 border-b lg:border-b-0 lg:border-r border-gray-200">

              <h2 className="text-sm font-extrabold text-blue-950 uppercase border-b-2 border-yellow-500 pb-2 mb-4">
                Nearby Hotels
              </h2>

              <div className="space-y-2">

                {port.hotels.map((hotel, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-2"
                  >

                    <span className="text-blue-900 text-xs">
                      🏨
                    </span>

                    <span className="text-[11px] text-gray-600 leading-4">
                      {hotel}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* MAP */}

            <div className="p-5">

              <h2 className="text-sm font-extrabold text-blue-950 uppercase border-b-2 border-yellow-500 pb-2 mb-4">
                Port Location
              </h2>

              <div className="rounded-lg overflow-hidden border border-gray-200">

                <iframe
                  src={port.map.url}
                  width="100%"
                  height="150"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-blue-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-7">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div>

              <h2 className="text-2xl md:text-3xl font-extrabold">
                {port.cta.title}
              </h2>

              <p className="text-xs md:text-sm text-blue-200 mt-2 max-w-3xl leading-5">
                {port.cta.description}
              </p>

            </div>

            <a
              href="/contact"
              className="shrink-0 bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-extrabold text-sm px-6 py-3 rounded-lg transition"
            >
              REQUEST ASSISTANCE ↗
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}
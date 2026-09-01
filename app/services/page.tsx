import Link from "next/link";
import InteractiveServices from "../components/InteractiveServices";

const services = [
  {
    title: "Port Agency",
    code: "PA",
    description:
      "Comprehensive port agency services covering every stage of a vessel's port call, from pre-arrival coordination through departure.",
    href: "/services/port-agency",
    image: "/images/port-agency.jpg",
  },
  {
    title: "Owner's Protective Agency",
    code: "OPA",
    description:
      "Independent representation safeguarding the owner's interests throughout the vessel's port stay.",
    href: "/services/protective-agency",
    image: "/images/protective-agency.jpg",
  },
  {
    title: "Crew Change",
    code: "CC",
    description:
      "Professional crew embarkation and disembarkation services, including airport, transportation, accommodation, immigration coordination, and local assistance.",
    href: "/services/crew-change",
    image: "/images/crew-change.jpg",
  },
  {
    title: "Technical Services",
    code: "TS",
    description:
      "Marine technical support including dry docking assistance, repairs, inspections, surveys, and technical attendance.",
    href: "/services/technical-services",
    image: "/images/technical-services.jpg",
  },
  {
    title: "Marine Logistics",
    code: "ML",
    description:
      "End-to-end logistics support for ship spares and marine equipment, including customs clearance, delivery coordination, and specialized transportation.",
    href: "/services/marine-logistics",
    image: "/images/marine-logistics.jpg",
  },
  {
    title: "Customs Clearance",
    code: "CC",
    description:
      "Professional coordination of customs documentation, clearance procedures, import requirements, and regulatory matters for vessel-related shipments.",
    href: "/services/customs-clearance",
    image: "/images/customs-clearance.jpg",
  },
  {
    title: "Ship Supply",
    code: "SS",
    description:
      "Reliable supply coordination for provisions, bonded stores, spare parts, deck and engine supplies, and other vessel requirements.",
    href: "/services/ship-supply",
    image: "/images/ship-supply.jpg",
  },
  {
    title: "Offshore Support",
    code: "OS",
    description:
      "Offshore vessel support, project logistics, and specialized marine services coordinated according to operational requirements.",
    href: "/services/offshore-support",
    image: "/images/offshore-support.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-sky-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-2xl font-bold text-yellow-400">
            KP Global Shipping Inc.
          </p>

          <h1 className="mt-4 text-5xl font-extrabold md:text-6xl">
            Maritime Services
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-blue-100">
            Delivering dependable maritime services with professionalism,
            transparency, and operational excellence throughout the Philippines.
          </p>
        </div>
      </section>

      {/* Services */}
<InteractiveServices services={services} />

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-900 to-sky-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-2xl font-bold text-yellow-400">
            Ready to Work with Us?
          </p>

          <h2 className="text-4xl font-extrabold md:text-5xl">
            Your Reliable Partner in Philippine Port Operations
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-blue-100">
            Whether you require port agency, owner&apos;s protective agency,
            crew change, husbandry, marine logistics, customs coordination, or
            technical support, our experienced team is ready to assist with
            your vessel&apos;s requirements throughout the Philippines.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-blue-900 transition hover:bg-yellow-300"
            >
              Contact Us
            </Link>

            <Link
              href="/company"
              className="rounded-xl border-2 border-white px-8 py-4 font-bold transition hover:bg-white hover:text-blue-900"
            >
              Learn About KP
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
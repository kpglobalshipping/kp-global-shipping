const services = [
  {
    icon: "⚓",
    title: "Port Agency",
    description:
      "Complete port agency services from vessel arrival to departure at major Philippine ports.",
    href: "/services/port-agency",
  },
  {
    icon: "🛡️",
    title: "Owner's Protective Agency",
    description:
      "Independent representation protecting owners' interests throughout the vessel's port stay.",
    href: "/services/protective-agency",
  },
  {
    icon: "👨‍✈️",
    title: "Crew Change",
    description:
      "Professional crew embarkation, disembarkation, immigration, visa and airport coordination.",
    href: "/services/crew-change",
  },
  {
    icon: "🚢",
    title: "Husbandry Services",
    description:
      "Fresh water, provisions, bunkers, spare parts, cash to master, launch boats and logistics.",
    href: "/services/husbandry-services",
  },
  {
    icon: "📦",
    title: "Marine Logistics",
    description:
      "Ship spares customs clearance, delivery coordination and specialized marine transportation.",
    href: "/services/marine-logistics",
  },
  {
    icon: "📄",
    title: "Customs & Immigration",
    description:
      "Efficient coordination with Customs, Immigration, Quarantine and Port Authorities.",
    href: "/services/customs-clearance",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900 mb-6">
          Our Services
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
          Delivering dependable maritime support solutions with professionalism,
          transparency and operational excellence throughout the Philippines.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group block bg-white border border-gray-200 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 hover:border-yellow-400 transition-all duration-300"
            >

              {/* Icon */}

              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}

              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>

              {/* Learn More */}

              <div className="mt-6 inline-flex items-center text-blue-900 font-bold group-hover:text-yellow-500 transition">
                Learn More
                <span className="ml-2">→</span>
              </div>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}
const services = [
  {
    icon: "⚓",
    title: "Port Agency",
    description:
      "Complete port agency services from vessel arrival to departure at major Philippine ports.",
  },
  {
    icon: "🛡️",
    title: "Owner's Protective Agency",
    description:
      "Independent representation protecting owners' interests throughout the vessel's port stay.",
  },
  {
    icon: "👨‍✈️",
    title: "Crew Change",
    description:
      "Professional crew embarkation, disembarkation, immigration, visa and airport coordination.",
  },
  {
    icon: "🚢",
    title: "Husbandry Services",
    description:
      "Fresh water, provisions, bunkers, spare parts, cash to master, launch boats and logistics.",
  },
  {
    icon: "📦",
    title: "Marine Logistics",
    description:
      "Ship spares customs clearance, delivery coordination and specialized marine transportation.",
  },
  {
    icon: "📄",
    title: "Customs & Immigration",
    description:
      "Efficient coordination with Customs, Immigration, Quarantine and Port Authorities.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-white"
    >
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
            <div
              key={service.title}
              className="bg-white border rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
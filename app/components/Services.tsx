import {
  Anchor,
  ShieldCheck,
  Users,
  Wrench,
  Ship,
  FileText,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Anchor,
      title: "Port Agency",
      desc: "Complete vessel attendance, port clearance, documentation and coordination.",
    },
    {
      icon: ShieldCheck,
      title: "Protective Agency",
      desc: "Independent representation protecting owners' interests during port calls.",
    },
    {
      icon: Users,
      title: "Crew Change",
      desc: "Airport transfers, immigration, visas, hotel bookings and crew logistics.",
    },
    {
      icon: Wrench,
      title: "Husbandry Services",
      desc: "Cash to Master, spare parts, provisions, repairs and technical assistance.",
    },
    {
      icon: Ship,
      title: "Marine Logistics",
      desc: "Launch boats, tug assistance, survey arrangements and operational support.",
    },
    {
      icon: FileText,
      title: "Documentation",
      desc: "Port permits, customs, immigration and government documentation.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-blue-900">
          Our Services
        </h2>

        <div className="w-24 h-1 bg-yellow-400 mx-auto mt-5 rounded-full"></div>

        <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto">
          KP Global Shipping provides comprehensive marine agency services
          throughout the Philippines with fast response and reliable support.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6">
                <service.icon
                  size={48}
                  className="text-yellow-500"
                />
              </div>

              <h3 className="text-2xl font-bold text-blue-900">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
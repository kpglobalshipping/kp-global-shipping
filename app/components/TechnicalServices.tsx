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
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-yellow-500 font-bold">
            TECHNICAL EXCELLENCE
          </p>

          <h2 className="text-5xl font-extrabold text-blue-900 mt-4">
            Marine Technical Services
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            KP Global Shipping Inc. provides comprehensive marine technical
            support through our network of experienced engineers,
            repair specialists and maritime partners throughout the Philippines.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
            >

              <div className="text-5xl mb-6">

                {service.icon}

              </div>

              <h3 className="text-2xl font-bold text-blue-900 mb-6">

                {service.title}

              </h3>

              <ul className="space-y-3">

                {service.items.map((item) => (

                  <li
                    key={item}
                    className="flex items-center text-gray-700"
                  >

                    <span className="text-green-600 mr-3">
                      ✔
                    </span>

                    {item}

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
export default function WhyChooseUs() {
  const whyChooseUs = [
  {
    title: "24/7 Operations Support",
    description:
      "Continuous operational coordination and responsive support throughout the vessel's port stay.",
  },
  {
    title: "Nationwide Philippine Port Coverage",
    description:
      "Reliable local coordination across major Philippine ports and terminals.",
  },
  {
    title: "Experienced Marine Professionals",
    description:
      "A dedicated team with experience in ship agency, port operations, logistics, and maritime services.",
  },
  {
    title: "Fast Response Time",
    description:
      "Prompt communication and practical solutions when vessel operations require immediate action.",
  },
  {
    title: "Reliable Crew Change Services",
    description:
      "Efficient coordination of crew embarkation, disembarkation, airport, transportation, accommodation, and immigration requirements.",
  },
  {
    title: "Strong International Network",
    description:
      "Established relationships with shipowners, charterers, technical service providers, manning partners, and maritime stakeholders.",
  },
];

  return (
    <section className="py-24 bg-[#D5E2EF]/90">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Why Choose KP Global Shipping
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Delivering dependable maritime solutions with professionalism and commitment.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {whyChooseUs.map((item) => (
            <div
              key={item.title}
              className="bg-blue-900 text-white rounded-xl p-8 shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="text-4xl mb-4">⚓</div>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>
              <p className="text-gray-300 mt-4">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

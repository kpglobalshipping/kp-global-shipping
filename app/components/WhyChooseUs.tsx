export default function WhyChooseUs() {
  const reasons = [
    "24/7 Operations Support",
    "Nationwide Philippine Port Coverage",
    "Experienced Marine Professionals",
    "Fast Response Time",
    "Reliable Crew Change Services",
    "Strong International Network",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Why Choose KP Global Shipping
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Delivering dependable maritime solutions with professionalism and commitment.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {reasons.map((reason) => (
            <div
              key={reason}
              className="bg-blue-900 text-white rounded-xl p-8 shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="text-4xl mb-4">⚓</div>

              <h3 className="text-xl font-bold">
                {reason}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
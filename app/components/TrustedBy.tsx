export default function TrustedBy() {
  const clients = [
    "Ship Owners",
    "Ship Managers",
    "Charterers",
    "Cargo Operators",
    "Marine Surveyors",
    "Government Agencies",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Trusted By
        </h2>

        <p className="text-center text-gray-600 mt-4">
          Supporting maritime clients across the Philippines.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">

          {clients.map((client) => (
            <div
              key={client}
              className="border rounded-lg p-6 text-center bg-gray-50 hover:bg-blue-900 hover:text-white transition"
            >
              {client}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
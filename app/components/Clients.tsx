export default function Clients() {
  const clients = [
    "Ship Owners",
    "Ship Managers",
    "Charterers",
    "Marine Contractors",
    "Trading Companies",
    "Government Agencies",
    "Classification Societies",
    "International Principals",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Clients & Partners
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Trusted by local and international maritime organizations.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {clients.map((client) => (
            <div
              key={client}
              className="bg-gray-100 rounded-xl shadow p-8 text-center hover:bg-blue-900 hover:text-white transition"
            >
              <div className="text-4xl mb-4">🤝</div>

              <h3 className="font-bold">
                {client}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
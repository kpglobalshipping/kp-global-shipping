export default function Coverage() {
  const ports = [
    "Manila",
    "Batangas",
    "Subic",
    "Cebu",
    "Davao",
    "General Santos",
    "Surigao",
    "Cagayan de Oro",
    "Iloilo",
    "Bacolod",
    "Zamboanga",
    "Pagbilao",
  ];

  return (
    <section id="about"className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Nationwide Port Coverage
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Supporting vessels at major commercial and industrial ports across the Philippines.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {ports.map((port) => (
            <div
              key={port}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:bg-blue-900 hover:text-white transition"
            >
              <div className="text-3xl mb-3">📍</div>

              <h3 className="font-bold text-lg">
                {port}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
import Image from "next/image";

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
    <section id="ports" className="py-24 bg-[#D5E2EF]/90">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Nationwide Port Coverage
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12 max-w-3xl mx-auto">
          KP Global Shipping provides professional port agency, husbandry,
          protective agency, and crew change services at major commercial and
          industrial ports throughout the Philippines.
        </p>

        {/* Philippines Map */}
        <div className="flex justify-center mb-16">
          <Image
            src="/images/philippines-map.jpg"
            alt="Philippines Port Coverage Map"
            width={600}
            height={850}
            priority
            className="rounded-2xl shadow-2xl border border-gray-200"
          />
        </div>

        {/* Port List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {ports.map((port) => (
            <div
              key={port}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:bg-blue-900 hover:text-white transition-all duration-300 hover:-translate-y-1"
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

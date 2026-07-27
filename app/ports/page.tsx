export default function PortsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 to-sky-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-yellow-400 font-bold text-2xl">
            KP Global Shipping Inc.
          </p>

          <h1 className="text-6xl font-extrabold mt-4">
            Port Coverage
          </h1>

          <p className="mt-8 text-xl text-blue-100 max-w-3xl mx-auto">
            Nationwide maritime services covering major commercial ports,
            terminals and offshore locations throughout the Philippines.
          </p>

        </div>

      </section>

      {/* Nationwide Coverage */}

      <section className="py-24 bg-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-yellow-500 font-bold text-3xl mb-3">
              Nationwide Coverage
              {/* Coverage Statistics */}
            </p>
            <section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-4 gap-8 text-center">

      <div>
        <h3 className="text-5xl font-extrabold text-blue-900">40+</h3>
        <p className="mt-3 text-gray-600">Philippine Ports</p>
      </div>

      <div>
        <h3 className="text-5xl font-extrabold text-blue-900">17</h3>
        <p className="mt-3 text-gray-600">Regions Covered</p>
      </div>

      <div>
        <h3 className="text-5xl font-extrabold text-blue-900">24/7</h3>
        <p className="mt-3 text-gray-600">Operations Support</p>
      </div>

      <div>
        <h3 className="text-5xl font-extrabold text-blue-900">365</h3>
        <p className="mt-3 text-gray-600">Days of Service</p>
      </div>

    </div>

  </div>

</section>

            <h2 className="text-5xl font-extrabold text-blue-900">
              Major Philippine Ports
            </h2>

            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              KP Global Shipping provides maritime services across major commercial
              ports and terminals throughout the Philippines.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {/* Luzon */}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-10 hover:shadow-2xl transition duration-300">

              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                Luzon Region
              </h3>

              <ul className="space-y-3 text-gray-700">

                <li>⚓ Manila</li>
                <li>⚓ Batangas</li>
                <li>⚓ Subic</li>
                <li>⚓ Bataan</li>
                <li>⚓ Pagbilao</li>
                <li>⚓ Poro Point</li>

              </ul>

            </div>

            {/* Visayas */}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-10 hover:shadow-2xl transition duration-300">

              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                Visayas Region
              </h3>

              <ul className="space-y-3 text-gray-700">

                <li>⚓ Cebu</li>
                <li>⚓ Balamban</li>
                <li>⚓ Iloilo</li>
                <li>⚓ Bacolod</li>
                <li>⚓ Tacloban</li>

              </ul>

            </div>

            {/* Mindanao */}

            <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-10 hover:shadow-2xl transition duration-300">

              <h3 className="text-3xl font-bold text-blue-900 mb-6">
                Mindanao Region
              </h3>

              <ul className="space-y-3 text-gray-700">

                <li>⚓ Cagayan de Oro</li>
                <li>⚓ Davao</li>
                <li>⚓ General Santos</li>
                <li>⚓ Surigao</li>
                <li>⚓ Zamboanga</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
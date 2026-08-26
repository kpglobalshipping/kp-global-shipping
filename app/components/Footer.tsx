export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">

        <div>
          <h2 className="text-2xl font-bold">
            KP GLOBAL SHIPPING INC.
          </h2>

          <p className="mt-5 text-gray-300 leading-7">
            Professional Shipping Agency providing
            Port Agency, Protective Agency,
            Crew Change and Husbandry Services
            throughout the Philippines.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-5">
            Contact
          </h3>

          <p>📞 +63 2 8801 4753</p>

          <p className="mt-3">
            📧 agent@kp-smt.com
          </p>

          <p className="mt-3">
            📍 Taguig City, Metro Manila
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-5">
            Operations
          </h3>

          <p>24 Hours / 7 Days</p>

          <p className="mt-3">
            Nationwide Philippine Coverage
          </p>
        </div>

      </div>

      <div className="border-t border-blue-800 mt-12 pt-8 text-center text-gray-400">
        © 2026 KP Global Shipping Inc. All Rights Reserved.
      </div>

    </footer>
  );
}

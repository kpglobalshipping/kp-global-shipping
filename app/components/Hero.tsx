export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero-ship.jpg')",
      }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-950/70"></div>

      <div className="relative z-10 text-center text-white px-6">

        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
          Your Trusted
          <br />
          Philippine Shipping Agency
        </h1>

        <p className="mt-8 text-2xl text-gray-200">
          Port Agency • Protective Agency • Crew Change • Husbandry Services
        </p>

        <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-300">
          KP Global Shipping Inc. delivers professional shipping agency services
          with Korean and Filipino maritime expertise, providing reliable
          support for vessel owners, operators and charterers throughout the Philippines.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-yellow-300 hover:scale-105 transition duration-300 text-blue-900 px-8 py-4 rounded-lg font-bold shadow-xl"
          >
            Request a Quote
          </a>

          <a
            href="#services"
            className="border-2 border-white hover:bg-white hover:text-blue-900 hover:scale-105 transition duration-300 px-8 py-4 rounded-lg font-bold"
          >
            Explore Our Services
          </a>

        </div>

        <p className="mt-12 text-lg italic text-gray-300">
          "Committed to Excellence in Every Port Call."
        </p>

      </div>
    </section>
  );
}
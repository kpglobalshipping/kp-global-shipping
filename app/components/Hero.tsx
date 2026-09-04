export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero-ship.jpg')",
      }}
    >
      <div className="relative z-10 text-center text-blue-700 px-6">

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Your Trusted
          <br />
          Philippine Shipping Agency
        </h1>

        <p className="mt-6 text-lg md:text-xl font-bold text-blue-900">
          Port Agency • Protective Agency • Crew Change • Husbandry Services
        </p>
<p className="mt-6 max-w-2xl mx-auto text-base md:text-lg leading-7 text-blue-950">
  KP Global Shipping Inc. delivers professional shipping agency services
  with extensive maritime expertise and a global network of trusted partners
  across Asia, Europe, and America, providing reliable support for vessel owners,
  operators, and charterers throughout the Philippines.
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

        <p className="mt-12 text-lg italic text-white">
  "Committed to Excellence in Every Port Call."
</p>

      </div>
    </section>
  );
}
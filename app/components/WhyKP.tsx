const features = [
  {
    icon: "🇰🇷🇵🇭",
    title: "Korean & Philippine Maritime Expertise",
    description:
      "Connecting Korean principals with dependable Philippine maritime operations through decades of industry experience and local expertise.",
  },
  {
    icon: "⚓",
    title: "Nationwide Port Coverage",
    description:
      "Supporting vessel operations at major commercial, industrial and private ports throughout the Philippines.",
  },
  {
    icon: "🚢",
    title: "One-Stop Maritime Platform",
    description:
      "Port Agency, Protective Agency, Crew Change, Technical Services, Logistics and Marine Support under one trusted partner.",
  },
  {
    icon: "⏰",
    title: "24/7 Operations Support",
    description:
      "Quick, prompt and reliable assistance from experienced operations professionals whenever your vessel requires support.",
  },
  {
    icon: "🔧",
    title: "Technical Service Network",
    description:
      "Marine engineers, repair specialists, class attendance, spare parts logistics and drydock support across the Philippines.",
  },
  {
    icon: "🤝",
    title: "Trusted Long-Term Partnership",
    description:
      "We value lasting relationships built on integrity, responsiveness and consistently reliable service.",
  },
];

export default function WhyKP() {
  return (
    <section className="py-24 bg-blue-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[2px] sm:tracking-[4px] text-yellow-400 font-bold text-sm sm:text-base leading-6">
            WHY KP GLOBAL SHIPPING INC.
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 sm:mt-5 leading-tight">
            Quick. Prompt. Stand-beside YOU.
          </h2>

          <p className="mt-6 sm:mt-8 max-w-4xl mx-auto text-blue-100 text-base sm:text-lg leading-7 sm:leading-8">
            More than a shipping agency, KP Global Shipping Inc. is a maritime
            service platform delivering reliable port agency, technical support,
            crew change coordination and marine logistics throughout the Philippines.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="bg-white/10 backdrop-blur rounded-2xl p-8 hover:bg-white/20 transition duration-300 border border-white/10"
            >

              <div className="text-5xl mb-6">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-bold mb-4">

                {feature.title}

              </h3>

              <p className="text-blue-100 leading-7">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

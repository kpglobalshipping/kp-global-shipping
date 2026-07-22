export default function Highlights() {
  const items = [
    {
      title: "24/7 Operations",
      desc: "Round-the-clock support for vessel operations.",
    },
    {
      title: "Nationwide Coverage",
      desc: "Supporting vessels at major Philippine ports.",
    },
    {
      title: "Experienced Team",
      desc: "Korean and Filipino professionals with maritime expertise.",
    },
    {
      title: "Fast Response",
      desc: "Quick communication and reliable operational support.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          Why Shipowners Trust KP Global Shipping
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-lg p-8 hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
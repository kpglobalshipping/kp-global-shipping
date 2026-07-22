export default function Achievements() {
  const items = [
    {
      value: "24/7",
      title: "Operations Support",
    },
    {
      value: "100+",
      title: "Philippine Ports",
    },
    {
      value: "365",
      title: "Days Available",
    },
    {
      value: "Fast",
      title: "Response Time",
    },
  ];

  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">

        {items.map((item) => (
          <div key={item.title}>
            <h2 className="text-5xl font-bold text-yellow-400">
              {item.value}
            </h2>

            <p className="mt-3 text-xl">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
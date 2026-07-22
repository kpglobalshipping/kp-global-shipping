export default function Statistics() {
  const stats = [
    {
      value: "24/7",
      label: "Operations Support",
    },
    {
      value: "100+",
      label: "Ports Served",
    },
    {
      value: "365",
      label: "Days Available",
    },
    {
      value: "100%",
      label: "Customer Commitment",
    },
  ];

  return (
    <section className="bg-blue-950 text-white py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center">

        {stats.map((item) => (

          <div key={item.label}>

            <h2 className="text-5xl font-bold text-yellow-400">
              {item.value}
            </h2>

            <p className="mt-3 text-lg">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
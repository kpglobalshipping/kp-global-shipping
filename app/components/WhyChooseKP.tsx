type WhyChooseKPProps = {
  heading: string;
  subtitle: string;
  reasons: string[];
};

export default function WhyChooseKP({
  heading,
  subtitle,
  reasons,
}: WhyChooseKPProps) {
  return (
    <section className="py-20 bg-[#D5E2EF]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-yellow-500 font-bold text-2xl">
            {subtitle}
          </p>

          <h2 className="text-5xl font-extrabold text-blue-900 mt-4">
            {heading}
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-8"
            >
              <p className="text-lg text-gray-700">
                ✅ {reason}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}


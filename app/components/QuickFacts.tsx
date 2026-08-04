type QuickFactsProps = {
  facts: {
    label: string;
    value: string;
  }[];
};

export default function QuickFacts({
  facts,
}: QuickFactsProps) {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-yellow-500 font-bold text-xl">
            Quick Facts
          </p>

          <h2 className="text-4xl font-extrabold text-blue-900 mt-3">
            Essential Port Information
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {facts.map((fact, index) => (

            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >

              <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                {fact.label}
              </p>

              <p className="text-xl font-bold text-blue-900">
                {fact.value}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
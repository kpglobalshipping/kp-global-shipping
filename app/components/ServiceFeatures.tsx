type Feature = {
  title: string;
  description: string;
};

type ServiceFeaturesProps = {
  heading: string;
  subheading: string;
  features: Feature[];
};

export default function ServiceFeatures({
  heading,
  subheading,
  features,
}: ServiceFeaturesProps) {
  return (
    <section className="py-20 bg-[#D5E2EF]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-yellow-500 font-bold text-2xl">
            {subheading}
          </p>

          <h2 className="text-5xl font-extrabold text-blue-900 mt-4">
            {heading}
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-blue-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

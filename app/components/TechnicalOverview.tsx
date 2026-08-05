type TechnicalOverviewProps = {
  title: string;
  description: string;
};

export default function TechnicalOverview({
  title,
  description,
}: TechnicalOverviewProps) {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="text-yellow-500 font-bold text-xl mb-4">
          Maritime Resources
        </p>

        <h2 className="text-4xl font-extrabold text-blue-900 mb-8">
          {title}
        </h2>

        <p className="text-xl leading-9 text-gray-600">
          {description}
        </p>

      </div>

    </section>
  );
}
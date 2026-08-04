type PortOverviewProps = {
  title: string;
  description: string;
};

export default function PortOverview({
  title,
  description,
}: PortOverviewProps) {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          {title}
        </h2>

        <p className="text-lg text-gray-700 leading-8">
          {description}
        </p>

      </div>

    </section>
  );
}
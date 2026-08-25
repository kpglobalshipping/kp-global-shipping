type ServiceOverviewProps = {
  title: string;
  subtitle: string;
  description: string;
};

export default function ServiceOverview({
  title,
  subtitle,
  description,
}: ServiceOverviewProps) {
  return (
    <section className="py-20 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-4xl">

          <p className="text-yellow-500 font-bold text-2xl mb-3">
            {subtitle}
          </p>

          <h2 className="text-5xl font-extrabold text-blue-900">
            {title}
          </h2>

          <p className="mt-8 text-xl text-gray-600 leading-9">
            {description}
          </p>

        </div>

      </div>

    </section>
  );
}
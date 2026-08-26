type AgencyGridProps = {
  title: string;
  agencies: string[];
};

export default function AgencyGrid({
  title,
  agencies,
}: AgencyGridProps) {
  return (
    <section className="my-14">

      <h2 className="text-3xl font-bold text-blue-900 mb-8">
        {title}
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {agencies.map((agency) => (

          <div
            key={agency}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-900 hover:shadow-lg"
          >
            <h3 className="text-lg font-bold text-blue-900">
              {agency}
            </h3>
          </div>

        ))}

      </div>

    </section>
  );
}

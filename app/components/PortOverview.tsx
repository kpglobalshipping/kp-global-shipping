type PortOverviewProps = {
  title: string;
  description: string;
};

export default function PortOverview({
  title,
  description,
}: PortOverviewProps) {
  return (
    <section className="bg-gray-50 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-7">

          <div className="flex items-center gap-3 mb-4">

            <div className="w-2 h-8 bg-yellow-400 rounded-full"></div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900">
              {title}
            </h2>

          </div>

          <p className="text-gray-700 leading-7 text-base md:text-lg">
            {description}
          </p>

        </div>

      </div>

    </section>
  );
}
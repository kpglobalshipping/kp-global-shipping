type TimelineStep = {
  title: string;
  description: string;
};

type TimelineProps = {
  title: string;
  steps: TimelineStep[];
};

export default function Timeline({
  title,
  steps,
}: TimelineProps) {
  return (
    <section className="my-14 rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">

      <h2 className="flex items-center gap-3 bg-blue-900 px-8 py-5 text-2xl font-bold text-white">
        <span className="text-3xl">🕒</span>

{title}
      </h2>

      <div className="p-8 space-y-8">

        {steps.map((step, index) => (

          <div
            key={index}
className="group flex gap-6"
          >

            {/* Number */}

            <div className="flex-shrink-0">

              <div
  className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-900 text-lg font-bold text-white shadow-md">

                {index + 1}

              </div>

            </div>

            {/* Content */}

            <div className="flex-1 border-l-2 border-blue-200 pb-10 pl-8 transition-all duration-300 group-hover:border-yellow-400">

              <h3 className="text-2xl font-bold text-blue-900">

                {step.title}

              </h3>

              <p className="mt-3 leading-8 text-gray-700">

                {step.description}

              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

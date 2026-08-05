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
    <section className="my-14">

      <h2 className="text-3xl font-bold text-blue-900 mb-10">
        {title}
      </h2>

      <div className="space-y-8">

        {steps.map((step, index) => (

          <div
            key={index}
            className="flex gap-6"
          >

            {/* Number */}

            <div className="flex-shrink-0">

              <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">

                {index + 1}

              </div>

            </div>

            {/* Content */}

            <div className="pb-8 border-l-2 border-gray-200 pl-6">

              <h3 className="text-xl font-bold text-blue-900">

                {step.title}

              </h3>

              <p className="text-gray-600 mt-2 leading-7">

                {step.description}

              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
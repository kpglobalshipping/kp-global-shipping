type DownloadCardProps = {
  title: string;
  description: string;
  fileType: string;
  available?: boolean;
};

export default function DownloadCard({
  title,
  description,
  fileType,
  available = false,
}: DownloadCardProps) {
  return (
    <section className="my-16">

      <div className="overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-xl">

        <div className="flex flex-col items-center justify-between gap-8 p-10 md:flex-row">

          <div>

            <p className="tracking-widest text-sm font-bold uppercase text-yellow-600">

              Download

            </p>

            <h3 className="mt-3 text-3xl font-extrabold text-blue-900">

              {title}

            </h3>

            <p className="mt-4 max-w-2xl leading-8 text-gray-700">

              {description}

            </p>

          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-md">

            <span className="block text-lg font-bold text-blue-900">

              {fileType}

            </span>

            <button
              disabled={!available}
              className={`mt-5 rounded-xl px-8 py-3 font-semibold transition-all duration-300 ${
                available
                  ? "bg-blue-900 text-white shadow-lg hover:-translate-y-1 hover:bg-blue-800"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              {available ? "Download PDF" : "Coming Soon"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

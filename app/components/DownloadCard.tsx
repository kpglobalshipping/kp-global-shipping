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
    <section className="my-12">

      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">

        <div className="flex items-center justify-between flex-col md:flex-row gap-6">

          <div>

            <p className="text-sm uppercase font-bold text-blue-700">

              Download

            </p>

            <h3 className="text-2xl font-bold text-blue-900 mt-2">

              {title}

            </h3>

            <p className="text-gray-700 mt-3">

              {description}

            </p>

          </div>

          <div className="text-center">

            <span className="block font-bold text-blue-900">

              {fileType}

            </span>

            <button
              disabled={!available}
              className={`mt-4 px-6 py-3 rounded-xl font-semibold transition ${
                available
                  ? "bg-blue-900 text-white hover:bg-blue-800"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
            >
              {available ? "Download" : "Coming Soon"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
type PortMapProps = {
  title: string;
  mapUrl: string;
};

export default function PortMap({
  title,
  mapUrl,
}: PortMapProps) {
  return (
    <section className="bg-slate-100 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-6">

          <div className="w-2 h-8 bg-yellow-400 rounded-full"></div>

          <div>

            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest">
              Location
            </p>

            <h2 className="text-2xl font-extrabold text-blue-900">
              {title}
            </h2>

          </div>

        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">

          <iframe
            src={mapUrl}
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="block"
          />

        </div>

      </div>

    </section>
  );
}
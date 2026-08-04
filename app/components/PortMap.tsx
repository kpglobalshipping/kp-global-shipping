type PortMapProps = {
  title: string;
  mapUrl: string;
};

export default function PortMap({
  title,
  mapUrl,
}: PortMapProps) {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="text-yellow-500 font-bold text-xl">
            Port Location
          </p>

          <h2 className="text-4xl font-extrabold text-blue-900 mt-3">
            {title}
          </h2>

        </div>

        <div className="rounded-3xl overflow-hidden shadow-xl">

          <iframe
            src={mapUrl}
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </div>

    </section>
  );
}
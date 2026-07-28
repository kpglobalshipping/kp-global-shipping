type ServiceCTAProps = {
  title: string;
  description: string;
};

export default function ServiceCTA({
  title,
  description,
}: ServiceCTAProps) {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 to-sky-700 text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="text-yellow-400 font-bold text-2xl mb-4">
          Ready to Partner with KP Global Shipping?
        </p>

        <h2 className="text-5xl font-extrabold">
          {title}
        </h2>

        <p className="mt-8 text-xl text-blue-100 leading-9">
          {description}
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <a
            href="/contact"
            className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition"
          >
            Contact Us
          </a>

          <a
            href="/services"
            className="border-2 border-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-900 transition"
          >
            View All Services
          </a>

        </div>

      </div>

    </section>
  );
}
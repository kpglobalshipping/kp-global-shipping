type PortCTAProps = {
  title: string;
  description: string;
};

export default function PortCTA({
  title,
  description,
}: PortCTAProps) {
  return (
    <section className="py-24 bg-blue-900 text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          {title}
        </h2>

        <p className="text-xl text-blue-100 leading-8 mb-10">
          {description}
        </p>

        <a
          href="/contact"
          className="inline-block bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-full transition duration-300"
        >
          Contact KP Global Shipping
        </a>

      </div>

    </section>
  );
}
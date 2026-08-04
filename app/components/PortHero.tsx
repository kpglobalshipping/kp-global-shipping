type PortHeroProps = {
  title: string;
  subtitle: string;
};

export default function PortHero({
  title,
  subtitle,
}: PortHeroProps) {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-sky-700 text-white py-24">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-6xl font-extrabold">
          {title}
        </h1>

        <p className="mt-6 text-xl max-w-3xl mx-auto text-blue-100">
          {subtitle}
        </p>

      </div>

    </section>
  );
}
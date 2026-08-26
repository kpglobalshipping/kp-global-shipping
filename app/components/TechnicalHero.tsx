type TechnicalHeroProps = {
  title: string;
  subtitle: string;
};

export default function TechnicalHero({
  title,
  subtitle,
}: TechnicalHeroProps) {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-28">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="text-yellow-400 font-bold uppercase tracking-[0.3em] mb-5">
          Maritime Knowledge Center
        </p>

        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
          {title}
        </h1>

        <p className="max-w-4xl mx-auto text-xl leading-9 text-blue-100">
          {subtitle}
        </p>

      </div>

    </section>
  );
}

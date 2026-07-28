type ServiceHeroProps = {
  title: string;
  subtitle: string;
};

export default function ServiceHero({
  title,
  subtitle,
}: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-sky-700 text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-yellow-400 font-bold text-2xl">
          KP Global Shipping Inc.
        </p>

        <h1 className="text-6xl font-extrabold mt-4">
          {title}
        </h1>

        <p className="mt-8 text-xl text-blue-100 max-w-3xl">
          {subtitle}
        </p>

      </div>

    </section>
  );
}
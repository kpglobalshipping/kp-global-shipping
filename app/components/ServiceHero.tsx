type ServiceHeroProps = {
  title: string;
  subtitle: string;
  image?: string;
};

export default function ServiceHero({
  title,
  subtitle,
  image,
}: ServiceHeroProps) {
  return (
    <section
      className="relative min-h-[520px] bg-cover bg-center bg-fixed text-white"
      style={
        image
          ? {
              backgroundImage: `url('${image}')`,
            }
          : undefined
      }
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-blue-950/20"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[520px] items-center">
        <div className="mx-auto w-full max-w-7xl px-6">

          <p className="text-2xl font-bold text-yellow-400">
            KP Global Shipping Inc.
          </p>

          <h1 className="mt-4 text-6xl font-extrabold">
            {title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-white">
            {subtitle}
          </p>

        </div>
      </div>
    </section>
  );
}
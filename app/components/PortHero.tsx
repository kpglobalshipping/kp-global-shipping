type PortHeroProps = {
  title: string;
  subtitle: string;
};

export default function PortHero({
  title,
  subtitle,
}: PortHeroProps) {
  return (
    <section
      className="relative h-[75vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/batangas-port.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

        <span className="inline-block bg-yellow-500 text-blue-900 font-bold px-5 py-2 rounded-full mb-6 tracking-wide uppercase">
          Philippine Port Information Center
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          {title}
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-blue-100 leading-9 max-w-4xl mx-auto">
          {subtitle}
        </p>

      </div>
    </section>
  );
}
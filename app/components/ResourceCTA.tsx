import Link from "next/link";

type ResourceCTAProps = {
  title: string;
  description: string;
  services: string[];
  buttonText?: string;
  buttonLink?: string;
};

export default function ResourceCTA({
  title,
  description,
  services,
  buttonText = "Contact KP Global Shipping",
  buttonLink = "/contact",
}: ResourceCTAProps) {
  return (
    <section className="mt-20 rounded-3xl bg-blue-900 text-white p-10 shadow-xl">

      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <p className="mt-4 text-blue-100 leading-8 max-w-3xl">
        {description}
      </p>

      <div className="grid md:grid-cols-2 gap-3 mt-8 text-blue-100">

        {services.map((service) => (

          <p key={service}>
            ✔ {service}
          </p>

        ))}

      </div>

      <div className="mt-10">

        <Link
          href={buttonLink}
          className="inline-block bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition"
        >
          {buttonText}
        </Link>

      </div>

    </section>
  );
}

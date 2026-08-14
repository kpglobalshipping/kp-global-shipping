import { ArrowRight } from "lucide-react";

type PortCTAProps = {
  title: string;
  description: string;
};

export default function PortCTA({
  title,
  description,
}: PortCTAProps) {
  return (
    <section className="bg-blue-900 py-14 text-white">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm mb-3">
          KP Global Shipping Inc.
        </p>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          {title}
        </h2>

        <p className="text-blue-100 leading-7 max-w-3xl mx-auto mb-8">
          {description}
        </p>

        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold px-7 py-3.5 rounded-full transition-all shadow-lg"
        >
          Request Port Assistance
          <ArrowRight className="w-5 h-5" />
        </a>

      </div>

    </section>
  );
}
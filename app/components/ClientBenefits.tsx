import {
  Clock3,
  DollarSign,
  ShieldCheck,
  Globe2,
  Users,
  CheckCircle,
} from "lucide-react";

type Benefit = {
  title: string;
  description: string;
};

type ClientBenefitsProps = {
  title: string;
  subtitle: string;
  benefits: Benefit[];
};

const icons = [
  Clock3,
  DollarSign,
  ShieldCheck,
  Globe2,
  Users,
  CheckCircle,
];

export default function ClientBenefits({
  title,
  subtitle,
  benefits,
}: ClientBenefitsProps) {
  return (
    <section className="py-20 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-yellow-500 font-bold text-2xl">
            {subtitle}
          </p>

          <h2 className="text-5xl font-extrabold text-blue-900 mt-4">
            {title}
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {benefits.map((benefit, index) => {

            const Icon = icons[index % icons.length];

            return (

              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
              >

                <Icon
                  size={40}
                  className="text-blue-900 mb-6"
                />

                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {benefit.description}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
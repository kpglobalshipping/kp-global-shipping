import {
  FileCheck,
  Ship,
  Users,
  Anchor,
  CheckCircle,
} from "lucide-react";
type ServiceProcessProps = {
  title: string;
  subtitle: string;
  steps: string[];
};

export default function ServiceProcess({
  title,
  subtitle,
  steps,
}: ServiceProcessProps) {
     const icons = [
    FileCheck,
    Ship,
    Users,
    Anchor,
    CheckCircle,
  ];
  return (
    <section className="py-20 bg-blue-50">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-yellow-500 font-bold text-2xl">
            {subtitle}
          </p>

          <h2 className="text-5xl font-extrabold text-blue-900 mt-4">
            {title}
          </h2>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center flex-1"
            >

              <div className="w-16 h-16 rounded-full bg-blue-900 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                {index + 1}
              </div>

              <h3 className="mt-6 text-xl font-bold text-blue-900">
                {step}
              </h3>

              {index < steps.length - 1 && (
                <div className="hidden md:block w-full h-1 bg-yellow-400 mt-8"></div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
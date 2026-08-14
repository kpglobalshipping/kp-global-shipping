import { AlertTriangle } from "lucide-react";

type PortRestrictionsProps = {
  restrictions: string[];
};

export default function PortRestrictions({
  restrictions,
}: PortRestrictionsProps) {
  return (
    <section className="bg-gray-50 py-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-6">

          <div className="w-2 h-8 bg-yellow-400 rounded-full"></div>

          <div>

            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest">
              Important
            </p>

            <h2 className="text-2xl font-extrabold text-blue-900">
              Port Restrictions
            </h2>

          </div>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

          {restrictions.map((restriction, index) => (

            <div
              key={index}
              className="bg-white border border-orange-200 rounded-xl p-5 flex gap-3 shadow-sm"
            >

              <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />

              <p className="text-sm text-gray-700 leading-6">
                {restriction}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
import {
  MapPin,
  Anchor,
  Plane,
  Truck,
  Ship,
  Droplets,
  Fuel,
  Trash2,
} from "lucide-react";

type QuickFactsProps = {
  facts: {
    label: string;
    value: string;
  }[];
};

function getIcon(label: string) {
  switch (label) {
    case "Province":
      return MapPin;

    case "Port Authority":
      return Anchor;

    case "Nearest Airport":
      return Plane;

    case "Travel Time":
      return Truck;

    case "Pilotage":
      return Ship;

    case "Tug Assistance":
      return Anchor;

    case "Fresh Water":
      return Droplets;

    case "Bunkering":
      return Fuel;

    case "Garbage Disposal":
      return Trash2;

    default:
      return MapPin;
  }
}

export default function QuickFacts({
  facts,
}: QuickFactsProps) {
  return (
    <section className="bg-[#D5E2EF] py-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-6">

          <div className="w-2 h-8 bg-yellow-400 rounded-full"></div>

          <div>
            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest">
              Quick Facts
            </p>

            <h2 className="text-2xl font-extrabold text-blue-900">
              Essential Port Information
            </h2>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

          {facts.map((fact, index) => {

            const Icon = getIcon(fact.label);

            return (
              <div
                key={index}
                className="bg-[#E0EAF4] border border-gray-200 rounded-xl p-4 hover:border-yellow-400 hover:shadow-md transition-all"
              >

                <div className="flex items-center gap-3 mb-3">

                  <div className="w-9 h-9 rounded-lg bg-blue-900 flex items-center justify-center">

                    <Icon className="w-5 h-5 text-yellow-400" />

                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {fact.label}
                  </p>

                </div>

                <p className="text-sm md:text-base font-bold text-blue-900 leading-5">
                  {fact.value}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}

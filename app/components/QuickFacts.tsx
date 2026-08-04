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
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-yellow-500 font-bold text-xl">
            Quick Facts
          </p>

          <h2 className="text-4xl font-extrabold text-blue-900 mt-3">
            Essential Port Information
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {facts.map((fact, index) => {

            const Icon = getIcon(fact.label);

            return (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
              >

                <Icon
                  className="w-10 h-10 text-yellow-500 mb-4"
                />

                <p className="text-sm uppercase tracking-wide text-gray-500">
                  {fact.label}
                </p>

                <p className="text-xl font-bold text-blue-900 mt-2">
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
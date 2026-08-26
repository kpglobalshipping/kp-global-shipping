import { Plane, Clock } from "lucide-react";

type NearbyAirportProps = {
  name: string;
  distance: string;
};

export default function NearbyAirport({
  name,
  distance,
}: NearbyAirportProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-full">

      <div className="flex items-center gap-3 mb-5">

        <div className="w-11 h-11 rounded-lg bg-blue-900 flex items-center justify-center">

          <Plane className="w-6 h-6 text-yellow-400" />

        </div>

        <div>

          <p className="text-xs font-bold uppercase tracking-widest text-yellow-500">
            Nearest Airport
          </p>

          <h2 className="text-xl font-extrabold text-blue-900">
            Airport Information
          </h2>

        </div>

      </div>

      <h3 className="font-bold text-blue-900 mb-3">
        {name}
      </h3>

      <div className="flex items-start gap-2 text-sm text-gray-600">

        <Clock className="w-4 h-4 mt-0.5 text-blue-900" />

        <span>{distance}</span>

      </div>

    </div>
  );
}

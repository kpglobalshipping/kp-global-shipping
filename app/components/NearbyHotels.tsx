import { Hotel } from "lucide-react";

type NearbyHotelsProps = {
  hotels: string[];
};

export default function NearbyHotels({
  hotels,
}: NearbyHotelsProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-full">

      <div className="flex items-center gap-3 mb-5">

        <div className="w-11 h-11 rounded-lg bg-yellow-400 flex items-center justify-center">

          <Hotel className="w-6 h-6 text-blue-900" />

        </div>

        <div>

          <p className="text-xs font-bold uppercase tracking-widest text-yellow-500">
            Accommodation
          </p>

          <h2 className="text-xl font-extrabold text-blue-900">
            Recommended Hotels
          </h2>

        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        {hotels.map((hotel, index) => (

          <div
            key={index}
            className="bg-gray-50 border border-gray-100 rounded-lg px-4 py-3"
          >

            <p className="text-sm font-semibold text-gray-700">
              {hotel}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}
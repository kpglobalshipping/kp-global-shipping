type NearbyAirportProps = {
  name: string;
  distance: string;
};

export default function NearbyAirport({
  name,
  distance,
}: NearbyAirportProps) {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-yellow-500 font-bold text-xl">
            Nearest Airport
          </p>

          <h2 className="text-4xl font-extrabold text-blue-900 mt-3">
            Airport Information
          </h2>

        </div>

        <div className="bg-blue-50 rounded-2xl shadow-lg p-8">

          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            ✈️ {name}
          </h3>

          <p className="text-lg text-gray-700">
            Distance / Travel Time: {distance}
          </p>

        </div>

      </div>

    </section>
  );
}
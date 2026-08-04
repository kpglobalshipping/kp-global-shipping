type NearbyHotelsProps = {
  hotels: string[];
};

export default function NearbyHotels({
  hotels,
}: NearbyHotelsProps) {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-yellow-500 font-bold text-xl">
            Accommodation
          </p>

          <h2 className="text-4xl font-extrabold text-blue-900 mt-3">
            Recommended Hotels
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {hotels.map((hotel, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <p className="text-lg font-medium text-gray-700">
                🏨 {hotel}
              </p>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
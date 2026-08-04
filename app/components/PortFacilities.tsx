type PortFacilitiesProps = {
  facilities: string[];
};

export default function PortFacilities({
  facilities,
}: PortFacilitiesProps) {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-yellow-500 font-bold text-xl">
            Port Facilities
          </p>

          <h2 className="text-4xl font-extrabold text-blue-900 mt-3">
            Available Port Facilities
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {facilities.map((facility, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <p className="text-gray-700 font-medium">
                ⚓ {facility}
              </p>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
type PortServicesProps = {
  services: string[];
};

export default function PortServices({
  services,
}: PortServicesProps) {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-yellow-500 font-bold text-xl">
            KP Global Shipping Services
          </p>

          <h2 className="text-4xl font-extrabold text-blue-900 mt-3">
            Services Available at this Port
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-blue-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <p className="font-semibold text-blue-900">
                🚢 {service}
              </p>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
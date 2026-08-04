import {
  Anchor,
  Users,
  Package,
  Truck,
  Wrench,
  ClipboardCheck,
  Ship,
  LifeBuoy,
} from "lucide-react";

type PortServicesProps = {
  services: string[];
};

function getIcon(service: string) {
  if (service.includes("Port Agency")) return Anchor;
  if (service.includes("Protective")) return Ship;
  if (service.includes("Crew")) return Users;
  if (service.includes("Ship Supply")) return Package;
  if (service.includes("Marine")) return Truck;
  if (service.includes("Technical")) return Wrench;
  if (service.includes("Customs")) return ClipboardCheck;
  if (service.includes("Offshore")) return LifeBuoy;

  return Anchor;
}

export default function PortServices({
  services,
}: PortServicesProps) {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-yellow-500 font-bold text-xl">
            Port Services
          </p>

          <h2 className="text-4xl font-extrabold text-blue-900 mt-3">
            Complete Agency & Marine Support
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => {

            const Icon = getIcon(service);

            return (

              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
              >

                <div className="w-14 h-14 rounded-full bg-blue-900 flex items-center justify-center mb-5">

                  <Icon className="w-7 h-7 text-yellow-400" />

                </div>

                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  {service}
                </h3>

                <p className="text-gray-600 text-sm leading-6">
                  Professional operational support provided by KP Global Shipping Inc.
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
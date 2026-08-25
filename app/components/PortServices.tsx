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
    <section className="bg-slate-100 py-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-6">

          <div className="w-2 h-8 bg-yellow-400 rounded-full"></div>

          <div>

            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest">
              KP Global Shipping
            </p>

            <h2 className="text-2xl font-extrabold text-blue-900">
              Port Services
            </h2>

          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          {services.map((service, index) => {

            const Icon = getIcon(service);

            return (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:border-blue-900 hover:shadow-md transition-all"
              >

                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-blue-900 flex items-center justify-center">

                  <Icon className="w-6 h-6 text-yellow-400" />

                </div>

                <h3 className="text-sm md:text-base font-bold text-blue-900 leading-5">
                  {service}
                </h3>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}
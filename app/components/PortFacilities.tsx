import {
  Ship,
  Package,
  Truck,
  Users,
  Droplets,
  Fuel,
  Trash2,
  Warehouse,
} from "lucide-react";

type PortFacilitiesProps = {
  facilities: string[];
};

function getIcon(facility: string) {
  if (facility.includes("Container")) return Package;
  if (facility.includes("Bulk")) return Warehouse;
  if (facility.includes("RoRo")) return Truck;
  if (facility.includes("Passenger")) return Users;
  if (facility.includes("Water")) return Droplets;
  if (facility.includes("Waste")) return Trash2;
  if (facility.includes("Bunkering")) return Fuel;

  return Ship;
}

export default function PortFacilities({
  facilities,
}: PortFacilitiesProps) {
  return (
    <section className="bg-gray-50 py-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center gap-3 mb-6">

          <div className="w-2 h-8 bg-yellow-400 rounded-full"></div>

          <div>

            <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest">
              Infrastructure
            </p>

            <h2 className="text-2xl font-extrabold text-blue-900">
              Port Facilities
            </h2>

          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          {facilities.map((facility, index) => {

            const Icon = getIcon(facility);

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 hover:border-yellow-400 hover:shadow-md transition-all"
              >

                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-yellow-400 flex items-center justify-center">

                  <Icon className="w-6 h-6 text-blue-900" />

                </div>

                <h3 className="text-sm md:text-base font-bold text-blue-900 leading-5">
                  {facility}
                </h3>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}
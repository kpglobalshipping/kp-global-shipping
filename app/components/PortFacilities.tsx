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
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-yellow-500 font-bold text-xl">
            Port Facilities
          </p>

          <h2 className="text-4xl font-extrabold text-blue-900 mt-3">
            Available Port Infrastructure
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {facilities.map((facility, index) => {

            const Icon = getIcon(facility);

            return (

              <div
                key={index}
                className="bg-gray-50 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
              >

                <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center mb-5">

                  <Icon className="w-7 h-7 text-blue-900" />

                </div>

                <h3 className="text-lg font-bold text-blue-900">

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
import { Ship, Wrench, Users } from "lucide-react";

const companies = [
  {
    icon: <Ship size={42} />,
    name: "KP Global Shipping Inc.",
    subtitle: "Philippine Shipping Agency",
    services: [
      "Port Agency",
      "Owner's Protective Agency",
      "Crew Change",
      "Husbandry Services",
      "Marine Logistics",
    ],
    color: "border-blue-900",
  },
  {
    icon: <Wrench size={42} />,
    name: "KP Korea",
    subtitle: "Technical Service Platform",
    services: [
      "Ship Repair",
      "Marine Engineering",
      "Dry Docking Support",
      "Class Attendance",
      "Spare Parts Supply",
    ],
    color: "border-yellow-500",
  },
  {
    icon: <Users size={42} />,
    name: "KP Ocean",
    subtitle: "Crew Manning",
    services: [
      "Crew Recruitment",
      "Crew Management",
      "Training Support",
      "Documentation",
      "Deployment",
    ],
    color: "border-green-600",
  },
];

export default function KPGroup() {
  return (
    <section id="company-profile" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-yellow-500 font-bold">
            OUR GROUP
          </p>

          <h2 className="text-5xl font-extrabold text-blue-900 mt-4">
            One Group.
            <br />
            Complete Maritime Solutions.
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            KP Global Shipping Inc. is part of the KP Group, providing integrated
            maritime services through specialized companies in shipping agency,
            technical services, and crew management.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {companies.map((company) => (

            <div
              key={company.name}
              className={`rounded-2xl border-t-8 ${company.color} shadow-xl p-8 hover:-translate-y-2 transition duration-300`}
            >

              <div className="text-blue-900 mb-6">
                {company.icon}
              </div>

              <h3 className="text-2xl font-bold text-blue-900">
                {company.name}
              </h3>

              <p className="text-yellow-600 font-semibold mt-2 mb-6">
                {company.subtitle}
              </p>

              <ul className="space-y-3 text-gray-700">
                {company.services.map((service) => (
                  <li key={service}>✓ {service}</li>
                ))}
              </ul>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
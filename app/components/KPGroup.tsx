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
  },
];

export default function KPGroup() {
  return (
    <section id="company-profile" className="py-24 bg-[#D5E2EF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION INTRODUCTION */}
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

        {/* GROUP COMPANIES */}
        <div className="grid md:grid-cols-3 gap-8">

          {companies.map((company) => (

            <div
              key={company.name}
              className="
                bg-blue-900
                rounded-2xl
                p-8
                border
                border-blue-800
                shadow-[0_12px_30px_rgba(15,23,42,0.25)]
                hover:-translate-y-2
                hover:shadow-[0_20px_40px_rgba(15,23,42,0.35)]
                transition
                duration-300
              "
            >

              {/* ICON */}
              <div className="text-yellow-400 mb-6">
                {company.icon}
              </div>

              {/* COMPANY NAME */}
              <h3 className="text-2xl font-bold text-white">
                {company.name}
              </h3>

              {/* SUBTITLE */}
              <p className="text-yellow-400 font-semibold mt-2 mb-6">
                {company.subtitle}
              </p>

              {/* SERVICES */}
              <ul className="space-y-3 text-blue-50">

                {company.services.map((service) => (

                  <li
                    key={service}
                    className="flex items-start gap-3"
                  >

                    <span className="text-yellow-400 font-bold">
                      ✓
                    </span>

                    <span>
                      {service}
                    </span>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
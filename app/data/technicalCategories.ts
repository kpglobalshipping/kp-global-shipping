export type TechnicalCategory = {
  icon:
    | "crew"
    | "customs"
    | "port"
    | "technical"
    | "supply"
    | "offshore";
  title: string;
  description: string;
};

export const technicalCategories: TechnicalCategory[] = [
  {
    icon: "crew",
    title: "Crew Change",
    description:
      "Guidelines, procedures, immigration requirements, visa processing, and crew documentation for Philippine crew changes.",
  },
  {
    icon: "customs",
    title: "Customs Clearance",
    description:
      "Information on customs formalities, vessel clearance, bonded stores, and import/export documentation.",
  },
  {
    icon: "port",
    title: "Port Entry Procedures",
    description:
      "Operational procedures, vessel arrival requirements, port formalities, and coordination with local authorities.",
  },
  {
    icon: "technical",
    title: "Technical Attendance",
    description:
      "Support for class surveys, inspections, repairs, superintendent attendance, and marine contractors.",
  },
  {
    icon: "supply",
    title: "Ship Supply",
    description:
      "Marine stores, provisions, bonded stores, spare parts delivery, and logistics coordination.",
  },
  {
    icon: "offshore",
    title: "Offshore Support",
    description:
      "Operational support for offshore vessels, marine projects, crew logistics, and government coordination.",
  },
];
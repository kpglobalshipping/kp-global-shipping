export type FeaturedResource = {
  title: string;
  description: string;
  category: string;
  href: string;
};

export const featuredResources: FeaturedResource[] = [
  {
    title: "Crew Change Procedures",
    description:
      "A practical guide covering immigration requirements, crew documentation, and vessel coordination in the Philippines.",
    category: "Crew Change",
    href: "#",
  },
  {
    title: "Philippine Port Entry Guide",
    description:
      "Operational procedures before vessel arrival, including government clearances and local coordination.",
    category: "Port Operations",
    href: "#",
  },
  {
    title: "Customs Clearance Guide",
    description:
      "Understand customs documentation, bonded stores, ship spares, and cargo formalities.",
    category: "Customs",
    href: "#",
  },
  {
    title: "Ship Supply Checklist",
    description:
      "Preparation checklist for marine stores, provisions, spare parts, and technical deliveries.",
    category: "Logistics",
    href: "#",
  },
];
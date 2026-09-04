import type { MetadataRoute } from "next";

const baseUrl = "https://kp-global-shipping.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/company",

    // Services
    "/services",
    "/services/port-agency",
    "/services/protective-agency",
    "/services/crew-change",
    "/services/technical-services",
    "/services/marine-logistics",
    "/services/customs-clearance",
    "/services/ship-supply",
    "/services/offshore-support",
    "/services/husbandry-services",

    // Ports
    "/ports",
    "/ports/manila",
    "/ports/batangas",
    "/ports/bataan",
    "/ports/subic",
    "/ports/cebu",
    "/ports/iloilo",
    "/ports/bacolod",
    "/ports/pagbilao",
    "/ports/davao",
    "/ports/cagayan-de-oro",
    "/ports/general-santos",
    "/ports/surigao",
    "/ports/zamboanga",

    // Resources
    "/resources",
    "/resources/crew-change-checklist",
    "/resources/customs-clearance",
    "/resources/immigration-guide",
    "/resources/port-entry-procedures",

    // Technical
    "/technical",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/services" || route === "/ports"
          ? 0.9
          : 0.7,
  }));
}
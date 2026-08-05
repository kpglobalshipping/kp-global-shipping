export const crewChange = {
  hero: {
    category: "Crew Change",
    title: "Philippine Crew Change Checklist",
    description:
      "A practical guide for shipowners, operators, managers, and principals conducting crew changes in the Philippines.",
    lastUpdated: "August 2026",
    readingTime: "8 min",
  },

  overview: {
    title: "Overview",
    description:
      "The Philippines is one of the world's leading suppliers of professional seafarers. Successful crew changes require proper planning and close coordination with the Bureau of Immigration, Philippine Ports Authority (PPA), Bureau of Customs, Philippine Coast Guard, local terminals, and the appointed shipping agent. KP Global Shipping provides complete crew change coordination for both Filipino and foreign crew members while ensuring compliance with Philippine regulations.",
  },

  filipinoOnSigners: [
    { document: "Passport", requirement: "Original" },
    { document: "Seaman's Book", requirement: "Original" },
    { document: "International Certificate of Vaccination (ICV)", requirement: "Original" },
    { document: "Overseas Employment Certificate (OEC)", requirement: "Copy" },
    { document: "Employment Contract", requirement: "Copy" },
    { document: "Immigration Clearance (No Derogatory Stamp)", requirement: "Required" },
    { document: "eTravel QR Code", requirement: "Required before arrival" },
  ],

  filipinoOffSigners: [
    { document: "Passport", requirement: "Original" },
    { document: "Seaman's Book", requirement: "Original" },
    { document: "International Certificate of Vaccination (ICV)", requirement: "Original" },
    { document: "Immigration Clearance (No Derogatory Stamp)", requirement: "Required" },
    { document: "eTravel QR Code", requirement: "Required" },
  ],

  foreignOnSigners: [
    { document: "Passport", requirement: "Original" },
    { document: "Seaman's Book", requirement: "Original" },
    { document: "Immigration Clearance", requirement: "Processed by KP Global Shipping" },
    { document: "eTravel QR Code", requirement: "Required" },
    { document: "9(c) Visa", requirement: "Required" },
    { document: "Flight Itinerary / E-ticket", requirement: "Required" },
  ],

  foreignOffSigners: [
    { document: "Passport", requirement: "Original" },
    { document: "Seaman's Book", requirement: "Original" },
    { document: "Immigration Clearance", requirement: "Processed by KP Global Shipping" },
    { document: "eTravel QR Code", requirement: "Required" },
    { document: "9(c) Crew List Visa", requirement: "Required" },
  ],

  timeline: [
    {
      title: "Document Submission",
      description:
        "Submit all required crew documents to KP Global Shipping for verification and processing.",
    },
    {
      title: "Government Coordination",
      description:
        "KP coordinates with the Bureau of Immigration, PPA, Customs, Coast Guard, and other relevant authorities.",
    },
    {
      title: "Crew Arrival",
      description:
        "Crew members arrive in the Philippines and complete the required immigration formalities.",
    },
    {
      title: "Transportation & Boarding",
      description:
        "Ground transportation, hotel arrangements (if required), and launch boat services are coordinated.",
    },
    {
      title: "Successful Crew Change",
      description:
        "The crew safely embarks or disembarks, and all regulatory formalities are completed.",
    },
  ],
};

const maritimeLinks = [
  {
    name: "Philippine Ports Authority (PPA)",
    description: "Port information and official announcements",
    url: "https://www.ppa.com.ph/",
    logo: "/images/PPA.jpg",
    alt: "Philippine Ports Authority logo",
  },
  {
    name: "Maritime Industry Authority (MARINA)",
    description: "Maritime regulations and industry updates",
    url: "https://marina.gov.ph/",
    logo: "/images/MARINA.jpg",
    alt: "MARINA logo",
  },
  {
    name: "Philippine Coast Guard (PCG)",
    description: "Maritime safety and official advisories",
    url: "https://coastguard.gov.ph/",
    logo: "/images/PCG.jpg",
    alt: "Philippine Coast Guard logo",
  },
  {
    name: "PortCalls Asia",
    description: "Shipping, ports and logistics news",
    url: "https://portcalls.com/",
    logo: "/images/PORTCALLS.jpg",
    alt: "PortCalls Asia logo",
  },
];

export default function UsefulLinks() {
  return (
    <section className="bg-[#D5E2EF] py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-950">
            Useful Maritime Links
          </h2>
          <p className="mt-3 text-slate-600">
            Quick access to Philippine maritime authorities
            and industry information.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {maritimeLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl bg-white p-6 shadow-sm
                transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-24 mb-5 flex items-center justify-center">
                <img
                  src={link.logo}
                  alt={link.alt}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>

              <h3 className="font-bold text-blue-950">
                {link.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {link.description}
              </p>

              <span className="mt-5 inline-block text-sm font-semibold
                text-blue-800 group-hover:text-blue-600">
                Visit Website ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

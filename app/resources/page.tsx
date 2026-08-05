import Link from "next/link";

const resources = [
  {
    title: "Philippine Crew Change Checklist",
    description:
      "Complete checklist for principals, shipowners, and operators planning crew changes in the Philippines.",
    href: "/resources/crew-change-checklist",
    category: "Crew Change",
  },
  {
    title: "9(c) Crew List Visa Guide",
    description:
      "Understand the Philippine 9(c) Crew List Visa process, documentary requirements, and processing timeline.",
    href: "/resources/9c-crew-list-visa",
    category: "Immigration",
  },
  {
    title: "Special Immigration Arrangement",
    description:
      "Guide for off-signing foreign crew without a pre-approved Crew List Visa.",
    href: "/resources/special-immigration-arrangement",
    category: "Immigration",
  },
  {
    title: "Port Entry Procedures",
    description:
      "Learn the vessel arrival process, government clearances, and operational coordination.",
    href: "/resources/port-entry-procedures",
    category: "Port Operations",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-blue-900 text-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-yellow-400 font-bold uppercase tracking-widest mb-4">
            Maritime Knowledge Center
          </p>

          <h1 className="text-5xl font-extrabold">
            Resources & Guides
          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            Practical maritime guides prepared by KP Global Shipping
            to help principals, shipowners, managers, and operators
            navigate Philippine port operations.
          </p>

        </div>

      </section>

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8">

            {resources.map((resource) => (

              <div
                key={resource.title}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl transition-all"
              >

                <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {resource.category}
                </span>

                <h2 className="text-2xl font-bold text-blue-900 mb-4">
                  {resource.title}
                </h2>

                <p className="text-gray-600 leading-7 mb-6">
                  {resource.description}
                </p>

                <Link
                  href={resource.href}
                  className="font-semibold text-blue-900 hover:text-yellow-500"
                >
                  Read Guide →
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
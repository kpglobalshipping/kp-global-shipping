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
  {
  title: "Philippine Customs Clearance Guide",
  description:
    "Learn customs documentation, government coordination, and vessel clearance procedures for Philippine ports.",
  href: "/resources/customs-clearance",
  category: "Customs",
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
      <section className="bg-slate-100 py-10 border-b border-gray-200">

  <div className="max-w-6xl mx-auto px-6">

    <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">

      <div>
        <h3 className="text-4xl font-extrabold text-blue-900">5</h3>
        <p className="mt-2 text-gray-600">Available Guides</p>
      </div>

      <div>
        <h3 className="text-4xl font-extrabold text-blue-900">5+</h3>
        <p className="mt-2 text-gray-600">Topics Covered</p>
      </div>

      <div>
        <h3 className="text-4xl font-extrabold text-blue-900">100%</h3>
        <p className="mt-2 text-gray-600">Philippine Focused</p>
      </div>

      <div>
        <h3 className="text-4xl font-extrabold text-blue-900">24/7</h3>
        <p className="mt-2 text-gray-600">Operational Support</p>
      </div>

    </div>

  </div>

</section>
<section className="py-16 bg-slate-50">

  <div className="max-w-6xl mx-auto px-6">

    <div className="rounded-3xl bg-gradient-to-r from-blue-900 to-blue-800 text-white p-10 shadow-xl">

      <span className="inline-block rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-blue-900">
        ⭐ FEATURED GUIDE
      </span>

      <h2 className="mt-6 text-4xl font-extrabold">
        Philippine Crew Change Checklist
      </h2>

      <p className="mt-4 max-w-3xl text-blue-100 leading-8">
        Our most comprehensive guide covering documentary requirements,
        immigration procedures, transportation coordination, and best
        practices for successful crew changes in the Philippines.
      </p>

      <Link
        href="/resources/crew-change-checklist"
        className="mt-8 inline-block rounded-xl bg-yellow-400 px-8 py-4 font-bold text-blue-900 transition hover:bg-yellow-300"
      >
        Read Featured Guide →
      </Link>

    </div>

  </div>

</section>
<section className="py-14 bg-slate-100">

  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl font-bold text-blue-900 mb-8">
      Browse by Category
    </h2>

    <div className="flex flex-wrap gap-4">

      <button className="rounded-full bg-blue-900 px-6 py-3 text-white font-semibold hover:bg-blue-800 transition">
        ⚓ Crew Change
      </button>

      <button className="rounded-full bg-blue-900 px-6 py-3 text-white font-semibold hover:bg-blue-800 transition">
        🛃 Customs
      </button>

      <button className="rounded-full bg-blue-900 px-6 py-3 text-white font-semibold hover:bg-blue-800 transition">
        🚢 Port Operations
      </button>

      <button className="rounded-full bg-blue-900 px-6 py-3 text-white font-semibold hover:bg-blue-800 transition">
        🛂 Immigration
      </button>

      <button className="rounded-full bg-blue-900 px-6 py-3 text-white font-semibold hover:bg-blue-800 transition">
        🔧 Technical
      </button>

      <button className="rounded-full bg-blue-900 px-6 py-3 text-white font-semibold hover:bg-blue-800 transition">
        📦 Ship Supply
      </button>

    </div>

  </div>

</section>
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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

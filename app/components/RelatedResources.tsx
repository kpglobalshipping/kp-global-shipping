import Link from "next/link";

type Resource = {
  title: string;
  href: string;
};

type RelatedResourcesProps = {
  resources: Resource[];
};

export default function RelatedResources({
  resources,
}: RelatedResourcesProps) {
  return (
    <section className="my-16 rounded-3xl border border-gray-200 bg-white shadow-xl overflow-hidden">

      <h2 className="flex items-center gap-3 bg-blue-900 px-8 py-5 text-2xl font-bold text-white">
        <>
  <span className="text-3xl">📚</span>
  Related Resources
</>
      </h2>

      <div className="grid gap-6 p-8 md:grid-cols-2">

        {resources.map((resource) => (

          <Link
            key={resource.href}
            href={resource.href}
            className="group block rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-blue-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-900 hover:shadow-xl"
          >

            <h3 className="text-2xl font-bold text-blue-900 transition-colors group-hover:text-yellow-600">
              {resource.title}
            </h3>
<p className="mb-4 text-gray-600">
  Continue exploring our maritime knowledge library.
            <p className="mt-5 flex items-center font-semibold text-blue-700 transition-all group-hover:translate-x-1">
              
</p>
              Read Guide →
            </p>

          </Link>

        ))}

      </div>

    </section>
  );
}
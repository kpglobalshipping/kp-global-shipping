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
    <section className="my-16">

      <h2 className="text-3xl font-bold text-blue-900 mb-8">
        Related Resources
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {resources.map((resource) => (

          <Link
            key={resource.href}
            href={resource.href}
            className="block rounded-2xl border border-gray-200 bg-white p-6 hover:border-blue-900 hover:shadow-lg transition-all"
          >

            <h3 className="text-xl font-bold text-blue-900">
              {resource.title}
            </h3>

            <p className="mt-3 text-blue-700 font-medium">
              Read Guide →
            </p>

          </Link>

        ))}

      </div>

    </section>
  );
}
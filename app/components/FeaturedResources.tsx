import Link from "next/link";
import type { FeaturedResource } from "../data/featuredResources";

type FeaturedResourcesProps = {
  resources: FeaturedResource[];
};

export default function FeaturedResources({
  resources,
}: FeaturedResourcesProps) {
  return (
    <section className="py-24 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-yellow-500 font-bold text-xl">
            Featured Resources
          </p>

          <h2 className="text-4xl font-extrabold text-blue-900 mt-3">
            Maritime Guides & References
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {resources.map((resource, index) => (

            <div
              key={index}
              className="bg-gray-50 rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
            >

              <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
                {resource.category}
              </span>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {resource.title}
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                {resource.description}
              </p>

              <Link
                href={resource.href}
                className="font-semibold text-blue-900 hover:text-yellow-500 transition-colors"
              >
                Read More →
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
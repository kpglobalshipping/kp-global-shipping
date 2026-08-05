import {
  Users,
  FileCheck,
  Anchor,
  Wrench,
  Package,
  Ship,
} from "lucide-react";

const iconMap = {
  crew: Users,
  customs: FileCheck,
  port: Anchor,
  technical: Wrench,
  supply: Package,
  offshore: Ship,
};

type Category = {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
};

type TechnicalCategoriesProps = {
  categories: Category[];
};

export default function TechnicalCategories({
  categories,
}: TechnicalCategoriesProps) {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-yellow-500 font-bold text-xl">
            Library Categories
          </p>

          <h2 className="text-4xl font-extrabold text-blue-900 mt-3">
            Explore Maritime Resources
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category, index) => {

            const Icon = iconMap[category.icon];

            return (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-full bg-blue-900 flex items-center justify-center mb-6">

                  <Icon className="w-7 h-7 text-yellow-400" />

                </div>

                <h3 className="text-2xl font-bold text-blue-900 mb-4">

                  {category.title}

                </h3>

                <p className="text-gray-600 leading-7">

                  {category.description}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
import {
  Anchor,
  Ship,
  Clock3,
  Globe,
} from "lucide-react";

type PortStatsProps = {
  stats: {
    icon: keyof typeof iconMap;
    title: string;
    value: string;
  }[];
};

const iconMap = {
  anchor: Anchor,
  ship: Ship,
  clock: Clock3,
  globe: Globe,
};

export default function PortStats({
  stats,
}: PortStatsProps) {
  return (
    <section className="bg-[#D5E2EF] py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => {

            const Icon = iconMap[item.icon];

            return (

              <div
                key={index}
                className="bg-blue-900 text-white rounded-2xl p-8 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >

                <Icon
                  className="w-12 h-12 text-yellow-400 mb-6"
                />

                <h3 className="text-lg font-semibold">

                  {item.title}

                </h3>

                <p className="text-2xl font-extrabold mt-2">

                  {item.value}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

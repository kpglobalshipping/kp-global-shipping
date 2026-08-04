import type { DashboardStat } from "../data/dashboard";
import {
  Anchor,
  Ship,
  Clock3,
  Globe,
} from "lucide-react";

const iconMap = {
  anchor: Anchor,
  ship: Ship,
  clock: Clock3,
  globe: Globe,
};

type DashboardStatsProps = {
  stats: DashboardStat[];
};

export default function DashboardStats({
  stats,
}: DashboardStatsProps) {
  return (
    <section className="py-16 -mt-16 relative z-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat, index) => {

            const Icon = iconMap[stat.icon];

            return (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >

                <div className="w-16 h-16 mx-auto rounded-full bg-blue-900 flex items-center justify-center mb-5">

                  <Icon className="w-8 h-8 text-yellow-400" />

                </div>

                <h3 className="text-4xl font-extrabold text-blue-900">

                  {stat.value}

                </h3>

                <p className="mt-2 text-gray-600 font-medium">

                  {stat.title}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

type PortDirectoryCardProps = {
  name: string;
  description: string;
  region: string;
  href: string;
};

export default function PortDirectoryCard({
  name,
  description,
  region,
  href,
}: PortDirectoryCardProps) {
  return (
    <Link
      href={href}
      className="block group"
    >
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">

        <div className="w-14 h-14 rounded-full bg-blue-900 flex items-center justify-center mb-6">
          <MapPin className="w-7 h-7 text-yellow-400" />
        </div>

        <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {region}
        </span>

        <h3 className="text-2xl font-bold text-blue-900 mb-3">
          {name}
        </h3>

        <p className="text-gray-600 leading-7 mb-6">
          {description}
        </p>

        <div className="flex items-center text-blue-900 font-semibold group-hover:text-yellow-500 transition-colors">
          View Port Details
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>

      </div>
    </Link>
  );
}

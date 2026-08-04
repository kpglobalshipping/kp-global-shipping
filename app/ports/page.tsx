import { ports } from "../data/ports";
import PortDirectoryCard from "../components/PortDirectoryCard";
import DashboardStats from "../components/DashboardStats";
import { dashboardStats } from "../data/dashboard";

export default function PortsPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}

      <section className="bg-blue-900 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-yellow-400 font-bold uppercase tracking-widest mb-4">
            Philippine Port Information
          </p>

          <h1 className="text-5xl font-extrabold mb-6">
            Explore Major Philippine Ports
          </h1>

          <p className="max-w-3xl mx-auto text-xl leading-8 text-blue-100">
            Comprehensive port information designed for shipowners,
            operators, charterers, managers, and Principals calling at
            ports throughout the Philippines.
          </p>

        </div>

      </section>
<DashboardStats stats={dashboardStats} />

      {/* Directory */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="text-yellow-500 font-bold text-xl">
              Port Directory
            </p>

            <h2 className="text-4xl font-extrabold text-blue-900 mt-3">
              Browse Available Ports
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {ports.map((port) => (

              <PortDirectoryCard
                key={port.name}
                name={port.name}
                description={port.description}
                region={port.region}
                href={port.href}
              />

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}
import PortHero from "../../components/PortHero";
import PortStats from "../../components/PortStats";
import PortOverview from "../../components/PortOverview";
import QuickFacts from "../../components/QuickFacts";
import PortFacilities from "../../components/PortFacilities";
import PortServices from "../../components/PortServices";
import PortRestrictions from "../../components/PortRestrictions";
import NearbyAirport from "../../components/NearbyAirport";
import NearbyHotels from "../../components/NearbyHotels";
import PortCTA from "../../components/PortCTA";
import PortMap from "../../components/PortMap";

import { bataanPort } from "../../data/bataanPort";

export default function BataanPortPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <PortHero
        title={bataanPort.hero.title}
        subtitle={bataanPort.hero.subtitle}
        image="/images/bataan-port.jpg"
      />

      {/* Port Statistics */}

      <PortStats
        stats={bataanPort.stats}
      />

      {/* Port Overview */}

      <PortOverview
        title={bataanPort.overview.title}
        description={bataanPort.overview.description}
      />

      {/* Quick Facts */}

      <QuickFacts
        facts={bataanPort.quickFacts}
      />

      {/* Port Facilities */}

      <PortFacilities
        facilities={bataanPort.facilities}
      />

      {/* Port Services */}

      <PortServices
        services={bataanPort.services}
      />

      {/* Port Restrictions */}

      <PortRestrictions
        restrictions={bataanPort.restrictions}
      />

      {/* Nearby Airport */}

      <NearbyAirport
        name={bataanPort.airport.name}
        distance={bataanPort.airport.distance}
      />

      {/* Nearby Hotels */}

      <NearbyHotels
        hotels={bataanPort.hotels}
      />

      {/* Port Map */}

      <PortMap
        title={bataanPort.map.title}
        mapUrl={bataanPort.map.url}
      />

      {/* Call to Action */}

      <PortCTA
        title={bataanPort.cta.title}
        description={bataanPort.cta.description}
      />

    </main>
  );
}
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

import { subicPort } from "../../data/subicPort";

export default function SubicPortPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Port Hero */}

      <PortHero
  title={subicPort.hero.title}
  subtitle={subicPort.hero.subtitle}
  image="/images/subic-port.jpg"
/>

      {/* Port Statistics */}

      <PortStats
        stats={subicPort.stats}
      />

      {/* Port Overview */}

      <PortOverview
        title={subicPort.overview.title}
        description={subicPort.overview.description}
      />

      {/* Quick Facts */}

      <QuickFacts
        facts={subicPort.quickFacts}
      />

      {/* Port Facilities */}

      <PortFacilities
        facilities={subicPort.facilities}
      />

      {/* Port Services */}

      <PortServices
        services={subicPort.services}
      />

      {/* Port Restrictions */}

      <PortRestrictions
        restrictions={subicPort.restrictions}
      />

      {/* Nearby Airport */}

      <NearbyAirport
        name={subicPort.airport.name}
        distance={subicPort.airport.distance}
      />

      {/* Nearby Hotels */}

      <NearbyHotels
        hotels={subicPort.hotels}
      />

      {/* Port Location Map */}

      <PortMap
        title={subicPort.map.title}
        mapUrl={subicPort.map.url}
      />

      {/* Call to Action */}

      <PortCTA
        title={subicPort.cta.title}
        description={subicPort.cta.description}
      />

    </main>
  );
}
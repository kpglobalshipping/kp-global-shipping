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

import { manilaPort } from "../../data/manilaPort";

export default function ManilaPortPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}

      <PortHero
        title={manilaPort.hero.title}
        subtitle={manilaPort.hero.subtitle}
        image={manilaPort.hero.image}
      />

      {/* Statistics */}

      <PortStats
        stats={manilaPort.stats}
      />

      {/* Overview */}

      <PortOverview
        title={manilaPort.overview.title}
        description={manilaPort.overview.description}
      />

      {/* Quick Facts */}

      <QuickFacts
        facts={manilaPort.quickFacts}
      />

      {/* Facilities */}

      <PortFacilities
        facilities={manilaPort.facilities}
      />

      {/* Services */}

      <PortServices
        services={manilaPort.services}
      />

      {/* Restrictions */}

      <PortRestrictions
        restrictions={manilaPort.restrictions}
      />

      {/* Nearby Airport */}

      <NearbyAirport
        name={manilaPort.airport.name}
        distance={manilaPort.airport.distance}
      />

      {/* Nearby Hotels */}

      <NearbyHotels
        hotels={manilaPort.hotels}
      />

      {/* Port Map */}

      <PortMap
        title={manilaPort.map.title}
        mapUrl={manilaPort.map.url}
      />

      {/* Call to Action */}

      <PortCTA
        title={manilaPort.cta.title}
        description={manilaPort.cta.description}
      />

    </main>
  );
}
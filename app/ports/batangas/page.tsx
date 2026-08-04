import PortHero from "../../components/PortHero";
import PortOverview from "../../components/PortOverview";
import QuickFacts from "../../components/QuickFacts";
import PortFacilities from "../../components/PortFacilities";
import PortServices from "../../components/PortServices";
import PortRestrictions from "../../components/PortRestrictions";
import NearbyAirport from "../../components/NearbyAirport";
import NearbyHotels from "../../components/NearbyHotels";
import PortCTA from "../../components/PortCTA";

import { batangasPort } from "../../data/batangasPort";

export default function BatangasPortPage() {
  return (
    <main className="min-h-screen bg-white">

      <PortHero
        title={batangasPort.hero.title}
        subtitle={batangasPort.hero.subtitle}
      />

      <PortOverview
        title={batangasPort.overview.title}
        description={batangasPort.overview.description}
      />
<QuickFacts
  facts={batangasPort.quickFacts}
/>
      <PortFacilities
        facilities={batangasPort.facilities}
      />

      <PortServices
        services={batangasPort.services}
      />

      <PortRestrictions
        restrictions={batangasPort.restrictions}
      />

      <NearbyAirport
        name={batangasPort.airport.name}
        distance={batangasPort.airport.distance}
      />

      <NearbyHotels
        hotels={batangasPort.hotels}
      />

      <PortCTA
        title={batangasPort.cta.title}
        description={batangasPort.cta.description}
      />

    </main>
  );
}
import ServiceHero from "../../components/ServiceHero";
import ServiceOverview from "../../components/ServiceOverview";
import ServiceFeatures from "../../components/ServiceFeatures";
import WhyChooseKP from "../../components/WhyChooseKP";
import ServiceProcess from "../../components/ServiceProcess";
import ServiceFAQ from "../../components/ServiceFAQ";
import ClientBenefits from "../../components/ClientBenefits";
import ServiceCTA from "../../components/ServiceCTA";

import {
  crewChangeOverview,
  crewChangeProcess,
} from "../../data/crewChange";

import { crewChangeFeatures } from "../../data/crewChangeFeatures";
import { crewChangeFAQ } from "../../data/crewChangeFAQ";
import { crewChangeBenefits } from "../../data/crewChangeBenefits";

export default function CrewChangePage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <ServiceHero
  title="Crew Change Services in the Philippines"
  subtitle="Professional crew change coordination supporting safe and efficient embarkation and disembarkation of international seafarers at major Philippine ports."
  image="/images/crew-change.jpg"
/>

      <ServiceOverview
        subtitle={crewChangeOverview.subtitle}
        title={crewChangeOverview.title}
        description={crewChangeOverview.description}
      />

      <ServiceFeatures
        subheading="Scope of Services"
        heading="Complete Crew Change Support"
        features={crewChangeFeatures}
      />

      <WhyChooseKP
        heading="Why Choose KP Global Shipping?"
        subtitle="Professional Crew Change Management"
        reasons={[
          "Experienced Operations Team",
          "Nationwide Port Coverage",
          "24/7 Operational Support",
          "Immigration Coordination & Documentation Assistance",
          "Airport Meet & Assist",
          "Trusted by International Principals",
          "Fast Response Time",
          "Reliable Local Representation",
        ]}
      />

      <ServiceProcess
        subtitle="Our Process"
        title="How We Handle Crew Changes"
        steps={crewChangeProcess}
      />

      <ServiceFAQ
        subtitle="Frequently Asked Questions"
        title="Crew Change FAQ"
        faqs={crewChangeFAQ}
      />

      <ClientBenefits
        subtitle="Why Shipowners Choose KP"
        title="Benefits You'll Experience"
        benefits={crewChangeBenefits}
      />

      <ServiceCTA
  title="Professional Crew Change Services Across the Philippines"
  description="Whether your seafarers are joining or signing off in Manila, Batangas, Subic, Cebu, Davao, General Santos, or other Philippine ports, KP Global Shipping provides reliable crew change coordination including airport assistance, immigration coordination, transportation, accommodation, and vessel transfer support."
/>

    </main>
  );
}

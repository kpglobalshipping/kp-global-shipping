import ServiceHero from "../../components/ServiceHero";
import ServiceOverview from "../../components/ServiceOverview";
import ServiceFeatures from "../../components/ServiceFeatures";
import WhyChooseKP from "../../components/WhyChooseKP";
import ServiceProcess from "../../components/ServiceProcess";
import ServiceFAQ from "../../components/ServiceFAQ";
import ClientBenefits from "../../components/ClientBenefits";
import ServiceCTA from "../../components/ServiceCTA";

import {
  marineLogisticsOverview,
  marineLogisticsProcess,
} from "../../data/marineLogistics";

import { marineLogisticsFeatures } from "../../data/marineLogisticsFeatures";
import { marineLogisticsFAQ } from "../../data/marineLogisticsFAQ";
import { marineLogisticsBenefits } from "../../data/marineLogisticsBenefits";

export default function MarineLogisticsPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <ServiceHero
        title="Marine Logistics"
        subtitle="Reliable logistics coordination for vessels calling at Philippine ports."
   image="/images/marine-logistics.jpg"
   />

      <ServiceOverview
        subtitle={marineLogisticsOverview.subtitle}
        title={marineLogisticsOverview.title}
        description={marineLogisticsOverview.description}
      />

      <ServiceFeatures
        subheading="Scope of Services"
        heading="Complete Marine Logistics Solutions"
        features={marineLogisticsFeatures}
      />

      <WhyChooseKP
        heading="Why Choose KP Global Shipping?"
  subtitle="Reliable. Efficient. Nationwide."
  reasons={[
          "Experienced Logistics Coordinators",
          "Nationwide Port Coverage",
          "24/7 Operational Support",
          "Launch Boat Coordination",
          "Heavy Equipment Arrangement",
          "Ship Stores & Spare Parts Delivery",
          "Trusted Local Partners",
          "Fast Response Time",
        ]}
      />

      <ServiceProcess
        subtitle="Our Process"
        title="How We Deliver Marine Logistics"
        steps={marineLogisticsProcess}
      />

      <ServiceFAQ
        subtitle="Frequently Asked Questions"
        title="Marine Logistics FAQ"
        faqs={marineLogisticsFAQ}
      />

      <ClientBenefits
        subtitle="Client Benefits"
        title="Why Clients Trust KP"
        benefits={marineLogisticsBenefits}
      />

      <ServiceCTA
        title="Reliable Marine Logistics Across the Philippines"
        description="From transportation and launch boat operations to spare parts delivery and heavy equipment coordination, KP Global Shipping provides dependable marine logistics support tailored to your vessel's operational requirements."
      />

    </main>
  );
}
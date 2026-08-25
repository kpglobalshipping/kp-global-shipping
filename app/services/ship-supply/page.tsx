import ServiceHero from "../../components/ServiceHero";
import ServiceOverview from "../../components/ServiceOverview";
import ServiceFeatures from "../../components/ServiceFeatures";
import WhyChooseKP from "../../components/WhyChooseKP";
import ServiceProcess from "../../components/ServiceProcess";
import ServiceFAQ from "../../components/ServiceFAQ";
import ClientBenefits from "../../components/ClientBenefits";
import ServiceCTA from "../../components/ServiceCTA";

import {
  shipSupplyOverview,
  } from "../../data/shipSupply";

import { shipSupplyFeatures } from "../../data/shipSupplyFeatures";
import { shipSupplyFAQ } from "../../data/shipSupplyFAQ";
import { shipSupplyBenefits } from "../../data/shipSupplyBenefits";
import { shipSupplyProcess } from "@/app/data/shipSupplyProcess";

export default function ShipSupplyPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <ServiceHero
        title="Ship Supply"
        subtitle="Reliable ship supply services delivering quality provisions, technical stores, and essential vessel requirements throughout the Philippines."
      />

      <ServiceOverview
        subtitle={shipSupplyOverview.subtitle}
        title={shipSupplyOverview.title}
        description={shipSupplyOverview.description}
      />

      <ServiceFeatures
        subheading="Scope of Services"
        heading="Comprehensive Ship Supply Solutions"
        features={shipSupplyFeatures}
      />

      <WhyChooseKP
        heading="Why Choose KP Global Shipping?"
        subtitle="Reliable. Efficient. Trusted."
        reasons={[
          "Reliable Supplier Network",
          "Competitive & Transparent Pricing",
          "Quality Products",
          "Timely Delivery",
          "Nationwide Port Coverage",
          "24/7 Operational Support",
          "Experienced Operations Team",
          "Professional Coordination",
        ]}
      />

      <ServiceProcess
        subtitle="Our Process"
        title="How We Handle Ship Supply Requests"
        steps={shipSupplyProcess}
      />

      <ServiceFAQ
        subtitle="Frequently Asked Questions"
        title="Ship Supply FAQ"
        faqs={shipSupplyFAQ}
      />

      <ClientBenefits
        subtitle="Client Benefits"
        title="Why Principals Trust KP"
        benefits={shipSupplyBenefits}
      />

      <ServiceCTA
        title="Professional Ship Supply Services Across the Philippines"
        description="Whether your vessel requires provisions, bonded stores, deck and engine stores, technical supplies, or urgent operational items, KP Global Shipping delivers reliable ship supply solutions with efficient coordination and timely delivery at major Philippine ports."
      />

    </main>
  );
}

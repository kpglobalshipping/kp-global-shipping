import ServiceHero from "../../components/ServiceHero";
import ServiceOverview from "../../components/ServiceOverview";
import ServiceFeatures from "../../components/ServiceFeatures";
import WhyChooseKP from "../../components/WhyChooseKP";
import ServiceProcess from "../../components/ServiceProcess";
import ServiceFAQ from "../../components/ServiceFAQ";
import ClientBenefits from "../../components/ClientBenefits";
import ServiceCTA from "../../components/ServiceCTA";

import {
  offshoreSupportOverview,
  offshoreSupportProcess,
} from "../../data/offshoreSupport";

import { offshoreSupportFeatures } from "../../data/offshoreSupportFeatures";
import { offshoreSupportFAQ } from "../../data/offshoreSupportFAQ";
import { offshoreSupportBenefits } from "../../data/offshoreSupportBenefits";

export default function OffshoreSupportPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <ServiceHero
        title="Offshore Support"
        subtitle="Reliable offshore support solutions for marine operations, offshore vessels, and energy projects throughout the Philippines."
        image="/images/offshore-support.jpg"
      />

      <ServiceOverview
        subtitle={offshoreSupportOverview.subtitle}
        title={offshoreSupportOverview.title}
        description={offshoreSupportOverview.description}
      />

      <ServiceFeatures
        subheading="Scope of Services"
        heading="Comprehensive Offshore Support Solutions"
        features={offshoreSupportFeatures}
      />

      <WhyChooseKP
        heading="Why Choose KP Global Shipping?"
        subtitle="Reliable. Responsive. Professional."
        reasons={[
          "Experienced Offshore Operations Team",
          "Nationwide Operational Network",
          "24/7 Operational Support",
          "Government & Port Coordination",
          "Efficient Crew & Logistics Management",
          "Reliable Marine Supply Coordination",
          "Transparent Communication",
          "Committed to Safe Offshore Operations",
        ]}
      />

      <ServiceProcess
        subtitle="Our Process"
        title="How We Deliver Offshore Support"
        steps={offshoreSupportProcess}
      />

      <ServiceFAQ
        subtitle="Frequently Asked Questions"
        title="Offshore Support FAQ"
        faqs={offshoreSupportFAQ}
      />

      <ClientBenefits
        subtitle="Client Benefits"
        title="Why Principals Trust KP"
        benefits={offshoreSupportBenefits}
      />

      <ServiceCTA
        title="Professional Offshore Support Services Across the Philippines"
        description="KP Global Shipping provides dependable offshore support services including vessel coordination, crew logistics, documentation, marine logistics, and government liaison to ensure safe, efficient, and uninterrupted offshore operations throughout the Philippines."
      />

    </main>
  );
}

import ServiceHero from "../../components/ServiceHero";
import ServiceOverview from "../../components/ServiceOverview";
import ServiceFeatures from "../../components/ServiceFeatures";
import WhyChooseKP from "../../components/WhyChooseKP";
import ServiceProcess from "../../components/ServiceProcess";
import ServiceFAQ from "../../components/ServiceFAQ";
import ClientBenefits from "../../components/ClientBenefits";
import ServiceCTA from "../../components/ServiceCTA";

import {
  protectiveAgencyOverview,
  protectiveAgencyProcess,
} from "../../data/protectiveAgency";

import { protectiveAgencyFeatures } from "../../data/protectiveAgencyFeatures";
import { protectiveAgencyFAQ } from "../../data/protectiveAgencyFAQ";
import { protectiveAgencyBenefits } from "../../data/protectiveAgencyBenefits";

export default function ProtectiveAgencyPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <ServiceHero
        title="Owner's Protective Agency Services in the Philippines"
subtitle="Independent representation safeguarding the interests of shipowners, operators, and charterers throughout every Philippine port call."
      image="/images/protective-agency.jpg"
      />

      <ServiceOverview
        subtitle={protectiveAgencyOverview.subtitle}
        title={protectiveAgencyOverview.title}
        description={protectiveAgencyOverview.description}
      />

      <ServiceFeatures
        subheading="Scope of Services"
        heading="Comprehensive Protective Agency Support"
        features={protectiveAgencyFeatures}
      />

      <WhyChooseKP
        heading="Why Choose KP Global Shipping?"
        subtitle="Independent. Transparent. Professional."
        reasons={[
          "Independent Owner Representation",
          "Experienced Operations Team",
          "Nationwide Port Coverage",
          "Operational Monitoring",
          "Transparent Reporting",
          "Cost Verification Support",
          "24/7 Operational Assistance",
          "Trusted by International Principals",
        ]}
      />

      <ServiceProcess
        subtitle="Our Process"
        title="How We Protect Your Interests"
        steps={protectiveAgencyProcess}
      />

      <ServiceFAQ
        subtitle="Frequently Asked Questions"
        title="Protective Agency FAQ"
        faqs={protectiveAgencyFAQ}
      />

      <ClientBenefits
        subtitle="Client Benefits"
        title="Why Appoint KP as Your Protective Agent"
        benefits={protectiveAgencyBenefits}
      />

      <ServiceCTA
        title="Professional Protective Agency Services Across the Philippines"
        description="Our experienced team provides independent representation, operational oversight, and transparent reporting to safeguard your interests throughout every Philippine port call."
      />

    </main>
  );
}

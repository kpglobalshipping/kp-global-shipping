import ServiceHero from "../../components/ServiceHero";
import ServiceOverview from "../../components/ServiceOverview";
import ServiceFeatures from "../../components/ServiceFeatures";
import WhyChooseKP from "../../components/WhyChooseKP";
import ServiceProcess from "../../components/ServiceProcess";
import ServiceFAQ from "../../components/ServiceFAQ";
import ClientBenefits from "../../components/ClientBenefits";
import ServiceCTA from "../../components/ServiceCTA";

import {
  customsClearanceOverview,
  customsClearanceProcess,
} from "../../data/customsClearance";

import { customsClearanceFeatures } from "../../data/customsClearanceFeatures";
import { customsClearanceFAQ } from "../../data/customsClearanceFAQ";
import { customsClearanceBenefits } from "../../data/customsClearanceBenefits";

export default function CustomsClearancePage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <ServiceHero
        title="Customs Clearance"
        subtitle="Professional customs documentation and regulatory compliance for vessels calling at Philippine ports."
        image="/images/customs-clearance.jpg"
      />

      <ServiceOverview
        subtitle={customsClearanceOverview.subtitle}
        title={customsClearanceOverview.title}
        description={customsClearanceOverview.description}
      />

      <ServiceFeatures
        subheading="Scope of Services"
        heading="Comprehensive Customs Clearance Solutions"
        features={customsClearanceFeatures}
      />

      <WhyChooseKP
        heading="Why Choose KP Global Shipping?"
        subtitle="Reliable. Compliant. Efficient."
        reasons={[
          "Experienced Customs Documentation Team",
          "Regulatory Compliance",
          "Fast Government Coordination",
          "Accurate Documentation",
          "Transparent Communication",
          "Efficient Cargo Processing",
          "Nationwide Port Support",
          "24/7 Operational Assistance",
        ]}
      />

      <ServiceProcess
        subtitle="Our Process"
        title="How We Handle Customs Clearance"
        steps={customsClearanceProcess}
      />

      <ServiceFAQ
        subtitle="Frequently Asked Questions"
        title="Customs Clearance FAQ"
        faqs={customsClearanceFAQ}
      />

      <ClientBenefits
        subtitle="Client Benefits"
        title="Why Principals Trust KP"
        benefits={customsClearanceBenefits}
      />

      <ServiceCTA
        title="Professional Customs Clearance Services Across the Philippines"
        description="From customs documentation and regulatory compliance to cargo coordination and government agency processing, KP Global Shipping provides reliable customs clearance services that ensure smooth vessel operations throughout the Philippines."
      />

    </main>
  );
}
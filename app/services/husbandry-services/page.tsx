import ClientBenefits from "../../components/ClientBenefits";
import { husbandryBenefits } from "../../data/husbandryBenefits";
import ServiceFAQ from "../../components/ServiceFAQ";
import { husbandryFAQ } from "../../data/husbandryFAQ";
import ServiceProcess from "../../components/ServiceProcess";
import WhyChooseKP from "../../components/WhyChooseKP";
import { husbandryServices } from "../../data/husbandryServices";
import ServiceFeatures from "../../components/ServiceFeatures";
import ServiceOverview from "../../components/ServiceOverview";
import ServiceHero from "../../components/ServiceHero";
import ServiceCTA from "../../components/ServiceCTA";

export default function HusbandryServicesPage() {
  return (
    <main className="min-h-screen bg-white">

      <ServiceHero
        title={husbandryServices.hero.title}
        subtitle={husbandryServices.hero.subtitle}
      />

      <ServiceOverview
        subtitle={husbandryServices.overview.subtitle}
        title={husbandryServices.overview.title}
        description={husbandryServices.overview.description}
      />

      <ServiceFeatures
        subheading="Scope of Services"
        heading="What We Handle"
        features={husbandryServices.features}
      />

      <WhyChooseKP
        subtitle="Why Choose KP Global Shipping?"
        heading="Reliable. Professional. Responsive."
        reasons={husbandryServices.reasons}
      />

      <ServiceProcess
        subtitle="Our Working Process"
        title="How We Handle Husbandry Requirements"
        steps={[
          "Requirement Confirmation",
          "Supplier & Service Coordination",
          "Delivery / Vessel Attendance",
          "Documentation & Completion",
          "Final Reporting",
        ]}
      />

      <ServiceFAQ
        subtitle="Frequently Asked Questions"
        title="Husbandry Services FAQ"
        faqs={husbandryFAQ}
      />

      <ClientBenefits
        subtitle="Why Shipowners Choose KP"
        title="Benefits You'll Experience"
        benefits={husbandryBenefits}
      />

      <ServiceCTA
        title={husbandryServices.cta.title}
        description={husbandryServices.cta.description}
      />

    </main>
  );
}
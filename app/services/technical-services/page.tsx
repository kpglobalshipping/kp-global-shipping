import ServiceHero from "../../components/ServiceHero";
import ServiceOverview from "../../components/ServiceOverview";
import ServiceFeatures from "../../components/ServiceFeatures";
import WhyChooseKP from "../../components/WhyChooseKP";
import ServiceProcess from "../../components/ServiceProcess";
import ServiceFAQ from "../../components/ServiceFAQ";
import ClientBenefits from "../../components/ClientBenefits";
import ServiceCTA from "../../components/ServiceCTA";

import {
  technicalServicesOverview,
  technicalServicesProcess,
} from "../../data/technicalServices";

import { technicalServicesFeatures } from "../../data/technicalServicesFeatures";
import { technicalServicesFAQ } from "../../data/technicalServicesFAQ";
import { technicalServicesBenefits } from "../../data/technicalServicesBenefits";

export default function TechnicalServicesPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <ServiceHero
        title="Technical Services"
        subtitle="Professional marine technical support, inspections, repairs, and engineering solutions throughout the Philippines."
    image="/images/technical-services.jpg"/>

      <ServiceOverview
        subtitle={technicalServicesOverview.subtitle}
        title={technicalServicesOverview.title}
        description={technicalServicesOverview.description}
      />

      <ServiceFeatures
        subheading="Scope of Services"
        heading="Comprehensive Technical Support"
        features={technicalServicesFeatures}
      />

      <WhyChooseKP
        heading="Why Choose KP Global Shipping?"
        subtitle="Reliable. Responsive. Professional."
        reasons={[
          "Experienced Marine Coordinators",
          "Nationwide Technical Network",
          "Fast Mobilization",
          "Trusted Service Providers",
          "Class Survey Coordination",
          "Emergency Technical Support",
          "Professional Project Supervision",
          "24/7 Operational Assistance",
        ]}
      />

      <ServiceProcess
        subtitle="Our Process"
        title="How We Deliver Technical Services"
        steps={technicalServicesProcess}
        
      />

      <ServiceFAQ
        subtitle="Frequently Asked Questions"
        title="Technical Services FAQ"
        faqs={technicalServicesFAQ}
      />

      <ClientBenefits
        subtitle="Client Benefits"
        title="Why Shipowners Choose KP"
        benefits={technicalServicesBenefits}
      />

      <ServiceCTA
        title="Professional Marine Technical Services Across the Philippines"
        description="Whether you require class surveys, underwater inspections, emergency repairs, dry docking support, or technical attendance, our experienced operations team is ready to coordinate reliable technical solutions throughout the Philippines."
      />

    </main>
  );
}

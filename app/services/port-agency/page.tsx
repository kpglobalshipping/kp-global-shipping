import ClientBenefits from "../../components/ClientBenefits";
import { portAgencyBenefits } from "../../data/portAgencyBenefits";
import ServiceFAQ from "../../components/ServiceFAQ";
import { portAgencyFAQ } from "../../data/portAgencyFAQ";
import ServiceProcess from "../../components/ServiceProcess";
import WhyChooseKP from "../../components/WhyChooseKP";
import { portAgency } from "../../data/portAgency";
import ServiceFeatures from "../../components/ServiceFeatures";
import ServiceOverview from "../../components/ServiceOverview";
import ServiceHero from "../../components/ServiceHero";
import ServiceCTA from "../../components/ServiceCTA";

export default function PortAgencyPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <ServiceHero
  title={portAgency.hero.title}
  subtitle={portAgency.hero.subtitle}
  image="/images/port-agency.jpg"
/>

      {/* Overview */}

      <ServiceOverview
  subtitle={portAgency.overview.subtitle}
  title={portAgency.overview.title}
  description={portAgency.overview.description}
/>

      {/* Services Included */}

      <ServiceFeatures
  subheading="Scope of Services"
  heading="What We Handle"
  features={portAgency.features}
  />

      {/* Why Choose KP */}

      <WhyChooseKP
  subtitle="Why Choose KP Global Shipping?"
  heading="Reliable. Professional. Responsive."
  reasons={portAgency.reasons}
/>
<ServiceProcess
  subtitle="Our Working Process"
  title="How We Handle Every Port Call"
  steps={[
    "Pre-Arrival Coordination",
    "Port Entry Clearance",
    "Vessel Attendance",
    "Husbandry Support",
    "Departure Clearance",
  ]}
/>
<ServiceFAQ
  subtitle="Frequently Asked Questions"
  title="Port Agency FAQ"
  faqs={portAgencyFAQ}
/>
<ClientBenefits
  subtitle="Why Shipowners Choose KP"
  title="Benefits You'll Experience"
  benefits={portAgencyBenefits}
/>

      <ServiceCTA
  title={portAgency.cta.title}
  description={portAgency.cta.description}
/>

    </main>
  );
}

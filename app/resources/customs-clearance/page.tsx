import ResourceArticle from "@/app/components/ResourceArticle";
import { customsClearance } from "@/app/data/resources/customsClearance";
import AgencyGrid from "@/app/components/AgencyGrid";
import RequirementTable from "@/app/components/RequirementTable";
import Timeline from "@/app/components/Timeline";
import NoticeBox from "@/app/components/NoticeBox";
import DownloadCard from "@/app/components/DownloadCard";
import FAQAccordion from "@/app/components/FAQAccordion";
import RelatedResources from "@/app/components/RelatedResources";
import ResourceCTA from "@/app/components/ResourceCTA";
export default function CustomsClearancePage() {
  return (
    <ResourceArticle
      category={customsClearance.hero.category}
      title={customsClearance.hero.title}
      description={customsClearance.hero.description}
      lastUpdated={customsClearance.hero.lastUpdated}
      readingTime={customsClearance.hero.readingTime}
    >
      <h2 className="text-3xl font-bold text-blue-900 mb-6">
        {customsClearance.overview.title}
      </h2>

      <p className="text-gray-700 leading-8">
        {customsClearance.overview.description}
      </p>
      <AgencyGrid
  title="Government Agencies Involved"
  agencies={customsClearance.authorities}
/>
<RequirementTable
  title="Required Customs Documents"
  requirements={customsClearance.preArrivalDocuments}
/>
<Timeline
  title="Typical Customs Clearance Process"
  steps={customsClearance.timeline}
/>
<NoticeBox
  title="KP Global Shipping Best Practices"
  type="info"
>
  <ul className="space-y-3 list-disc pl-6">
    {customsClearance.operationalNotes.map((note, index) => (
      <li key={index}>{note}</li>
    ))}
  </ul>
</NoticeBox>
<DownloadCard
  title="Philippine Customs Clearance Checklist"
  description="Download a printable checklist covering customs documentation and clearance requirements for foreign vessels calling Philippine ports."
  fileType="PDF"
/>
<FAQAccordion
  items={[
    {
      question: "Who prepares the customs clearance documents?",
      answer:
        "The local shipping agent coordinates with the vessel's Master, Owner, or Operator to prepare and submit all required customs documents to the Bureau of Customs.",
    },
    {
      question: "Can cargo operations begin before customs clearance?",
      answer:
        "No. Cargo operations should only commence after the necessary customs formalities and government clearances have been completed, unless otherwise authorized by the concerned authorities.",
    },
    {
      question: "Does KP Global Shipping coordinate with the Bureau of Customs?",
      answer:
        "Yes. KP Global Shipping coordinates closely with the Bureau of Customs and other Philippine government agencies to facilitate efficient vessel clearance and port operations.",
    },
  ]}
/>
<RelatedResources
  resources={[
    {
      title: "Philippine Port Entry Procedures",
      href: "/resources/port-entry-procedures",
    },
    {
      title: "Philippine Crew Change Checklist",
      href: "/resources/crew-change-checklist",
    },
  ]}
/>
<ResourceCTA
  title="Need Professional Customs Clearance Assistance?"
  description="KP Global Shipping provides complete customs clearance coordination for foreign vessels calling at Philippine ports. Our experienced operations team works closely with the Bureau of Customs and other government agencies to ensure efficient, compliant, and timely vessel clearance."
  services={[
    "Customs Documentation",
    "BOC Coordination",
    "Import & Export Clearance",
    "Ship's Stores Processing",
    "Spare Parts Clearance",
    "Operational Support",
  ]}
/>
    </ResourceArticle>
  );
}
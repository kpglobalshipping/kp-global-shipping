import ResourceArticle from "@/app/components/ResourceArticle";
import SectionHeading from "@/app/components/SectionHeading";
import AgencyGrid from "@/app/components/AgencyGrid";
import RequirementTable from "@/app/components/RequirementTable";
import Timeline from "@/app/components/Timeline";
import NoticeBox from "@/app/components/NoticeBox";
import DownloadCard from "@/app/components/DownloadCard";
import FAQAccordion from "@/app/components/FAQAccordion";
import RelatedResources from "@/app/components/RelatedResources";

import { portEntry } from "@/app/data/resources/portEntry";

export default function PortEntryProceduresPage() {
  return (
    <ResourceArticle
      category={portEntry.hero.category}
      title={portEntry.hero.title}
      description={portEntry.hero.description}
      lastUpdated={portEntry.hero.lastUpdated}
      readingTime={portEntry.hero.readingTime}
    >
      {/* Overview */}

      <h2 className="text-3xl font-bold text-blue-900 mb-6">
        {portEntry.overview.title}
      </h2>

      <p className="text-gray-700 leading-8 mb-12">
        {portEntry.overview.description}
      </p>

      {/* Government Authorities */}

      <SectionHeading
        icon="🏛️"
        title="Government Authorities"
      />

      <AgencyGrid
        title="Government Authorities Involved"
        agencies={portEntry.agencies}
      />

      {/* Documents */}

      <SectionHeading
        icon="📄"
        title="Required Pre-Arrival Documents"
      />

      <RequirementTable
        title="Required Pre-Arrival Documents"
        requirements={portEntry.preArrivalDocuments}
      />

      {/* Workflow */}

      <SectionHeading
        icon="🚢"
        title="Port Entry Workflow"
      />

      <Timeline
        title="Typical Port Entry Process"
        steps={portEntry.timeline}
      />

      <Timeline
        title="Typical Government Clearance Sequence"
        steps={portEntry.clearanceSequence}
      />

      {/* Best Practices */}

      <SectionHeading
        icon="💡"
        title="KP Global Shipping Best Practices"
      />

      <NoticeBox
        title="Operational Notes"
        type="info"
      >
        <ul className="space-y-3 list-disc pl-6">
          {portEntry.operationalNotes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </NoticeBox>

      {/* Downloads */}

      <SectionHeading
        icon="⬇️"
        title="Downloads"
      />

      <DownloadCard
        title="Philippine Port Entry Checklist"
        description="Download a printable checklist for Philippine Port Entry Procedures."
        fileType="PDF"
      />

      {/* FAQ */}

      <SectionHeading
        icon="❓"
        title="Frequently Asked Questions"
      />

      <FAQAccordion
        items={[
          {
            question: "How early should arrival documents be submitted?",
            answer:
              "Submission timelines depend on the port and government agency. Early coordination with KP Global Shipping is recommended.",
          },
          {
            question:
              "Can KP Global Shipping process all government clearances?",
            answer:
              "Yes. KP Global Shipping coordinates with all relevant Philippine government authorities for vessel entry formalities.",
          },
        ]}
      />

      {/* Related */}

      <SectionHeading
        icon="📚"
        title="Related Resources"
      />

      <RelatedResources
        resources={[
          {
            title: "Philippine Crew Change Checklist",
            href: "/resources/crew-change-checklist",
          },
        ]}
      />
    </ResourceArticle>
  );
}
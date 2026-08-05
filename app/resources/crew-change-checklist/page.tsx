import ResourceArticle from "@/app/components/ResourceArticle";
import RequirementTable from "@/app/components/RequirementTable";
import Timeline from "@/app/components/Timeline";
import NoticeBox from "@/app/components/NoticeBox";

import { crewChange } from "@/app/data/resources/crewChange";

export default function CrewChangeChecklistPage() {
  return (
    <ResourceArticle
      category={crewChange.hero.category}
      title={crewChange.hero.title}
      description={crewChange.hero.description}
      lastUpdated={crewChange.hero.lastUpdated}
      readingTime={crewChange.hero.readingTime}
    >
      {/* Overview */}

      <h2 className="text-3xl font-bold text-blue-900 mb-6">
        {crewChange.overview.title}
      </h2>

      <p className="text-gray-700 leading-8 mb-12">
        {crewChange.overview.description}
      </p>

      {/* Notice */}

      <NoticeBox
        title="Important Reminder"
        type="info"
      >
        Documentary requirements may vary depending on the vessel, nationality
        of the crew, port of call, and current regulations issued by the
        Philippine Bureau of Immigration and other government agencies.
        We recommend coordinating with KP Global Shipping before finalizing
        travel arrangements.
      </NoticeBox>

      {/* Filipino Crew */}

      <RequirementTable
        title="Filipino Crew — On Signers"
        requirements={crewChange.filipinoOnSigners}
      />

      <RequirementTable
        title="Filipino Crew — Off Signers"
        requirements={crewChange.filipinoOffSigners}
      />

      {/* Foreign Crew */}

      <RequirementTable
        title="Foreign Crew — On Signers"
        requirements={crewChange.foreignOnSigners}
      />

      <RequirementTable
        title="Foreign Crew — Off Signers"
        requirements={crewChange.foreignOffSigners}
      />

      {/* Timeline */}

      <Timeline
        title="Typical Crew Change Process"
        steps={crewChange.timeline}
      />

    </ResourceArticle>
  );
}
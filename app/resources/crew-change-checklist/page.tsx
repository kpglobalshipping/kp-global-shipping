import ResourceArticle from "@/app/components/ResourceArticle";
import RequirementTable from "@/app/components/RequirementTable";
import Timeline from "@/app/components/Timeline";
import NoticeBox from "@/app/components/NoticeBox";
import DownloadCard from "@/app/components/DownloadCard";
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
<h2 className="flex items-center gap-3 text-3xl font-bold text-blue-900 mt-16 mb-6 border-b border-gray-200 pb-3">
  <span className="text-4xl">🇵🇭</span>
  Filipino Crew
</h2>
      {/* Filipino Crew */}

      <RequirementTable
        title="Filipino Crew — On Signers"
        requirements={crewChange.filipinoOnSigners}
      />

      <RequirementTable
        title="Filipino Crew — Off Signers"
        requirements={crewChange.filipinoOffSigners}
      />
<h2 className="flex items-center gap-3 text-3xl font-bold text-blue-900 mt-16 mb-6 border-b border-gray-200 pb-3">
  <span className="text-4xl">🌍</span>
  Foreign Crew
</h2>
      {/* Foreign Crew */}

      <RequirementTable
        title="Foreign Crew — On Signers"
        requirements={crewChange.foreignOnSigners}
      />

      <RequirementTable
        title="Foreign Crew — Off Signers"
        requirements={crewChange.foreignOffSigners}
      />
<h2 className="flex items-center gap-3 text-3xl font-bold text-blue-900 mt-16 mb-6 border-b border-gray-200 pb-3">
  <span className="text-4xl">🕒</span>
  Crew Change Process
</h2>
      {/* Timeline */}

      <Timeline
        title="Typical Crew Change Process"
        steps={crewChange.timeline}
    
/>
       <DownloadCard
        title="Crew Change Checklist"
        description="Download a printable checklist for Philippine crew change documentation."
        fileType="PDF"
      />
      {/* Crew Change CTA */}

<section className="mt-20 rounded-3xl bg-blue-900 text-white p-10 shadow-xl">

  <h2 className="text-3xl font-bold">
    Need Assistance With Your Crew Change?
  </h2>

  <p className="mt-4 text-blue-100 leading-8 max-w-3xl">
    KP Global Shipping provides complete crew change coordination throughout
    the Philippines, ensuring smooth, compliant, and efficient operations
    for shipowners, managers, operators, and principals.
  </p>

  <div className="grid md:grid-cols-2 gap-3 mt-8 text-blue-100">

    <p>✔ Immigration Coordination</p>

    <p>✔ Airport Meet & Assist</p>

    <p>✔ Crew Transportation</p>

    <p>✔ Hotel Arrangements</p>

    <p>✔ Launch Boat Services</p>

    <p>✔ Documentation Support</p>

  </div>

  <div className="mt-10">

    <a
      href="/contact"
      className="inline-block bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition"
    >
      Contact KP Global Shipping
    </a>

  </div>

</section>

    </ResourceArticle>
  );
}
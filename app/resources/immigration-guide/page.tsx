import ResourceArticle from "@/app/components/ResourceArticle";
import SectionHeading from "@/app/components/SectionHeading";
import RequirementTable from "@/app/components/RequirementTable";
import Timeline from "@/app/components/Timeline";
import NoticeBox from "@/app/components/NoticeBox";
import RelatedResources from "@/app/components/RelatedResources";

import { immigrationGuide } from "@/app/data/resources/immigrationGuide";

export default function ImmigrationGuidePage() {
  return (
    <ResourceArticle
      category={immigrationGuide.hero.category}
      title={immigrationGuide.hero.title}
      description={immigrationGuide.hero.description}
      lastUpdated={immigrationGuide.hero.lastUpdated}
      readingTime={immigrationGuide.hero.readingTime}
    >
      {/* Overview */}

      <SectionHeading
        icon="🛂"
        title={immigrationGuide.overview.title}
      />

      <p className="text-gray-700 leading-8 mb-10">
        {immigrationGuide.overview.description}
      </p>

      {/* Services */}

      <SectionHeading
        icon="🤝"
        title="Immigration Services We Provide"
      />

      <div className="mb-12 grid gap-4 md:grid-cols-2">
        {immigrationGuide.services.map((service) => (
          <div
            key={service}
            className="flex items-center rounded-xl border border-blue-100 bg-blue-50 px-5 py-4"
          >
            <span className="mr-3 text-xl">✔</span>

            <span className="font-medium text-blue-900">
              {service}
            </span>
          </div>
        ))}
      </div>

      {/* Important Reminder */}

      <NoticeBox
        title="Important Reminder"
        type="info"
      >
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Documentary requirements may vary depending on the crew's nationality,
            vessel operation, and current Bureau of Immigration regulations.
          </li>

          <li>
            Copies of documents are generally sufficient unless otherwise
            required by the relevant government authority.
          </li>

          <li>
            Early coordination helps prevent delays in immigration processing.
          </li>

          <li>
            Special immigration arrangements may be available when
            operationally necessary.
          </li>
        </ul>
      </NoticeBox>

      {/* Requirements */}

      <SectionHeading
        icon="📋"
        title="Required Immigration Documents"
      />

      <RequirementTable
        title="Immigration Documentary Requirements"
        requirements={immigrationGuide.requirements}
      />

      {/* Timeline */}

      <SectionHeading
        icon="🕒"
        title="Immigration Clearance Process"
      />

      <Timeline
        title="Typical Immigration Process"
        steps={immigrationGuide.timeline}
      />

      {/* Operational Notes */}

      <NoticeBox
        title="Operational Notes"
        type="warning"
      >
        <ul className="list-disc pl-6 space-y-2">
          {immigrationGuide.operationalNotes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </NoticeBox>

      {/* CTA */}

      <section className="mt-20 rounded-3xl bg-blue-900 text-white p-10 shadow-xl">

        <h2 className="text-3xl font-bold">
          Need Immigration Coordination?
        </h2>

        <p className="mt-4 text-blue-100 leading-8 max-w-3xl">
          KP Global Shipping provides operational immigration coordination
          for vessels calling at Philippine ports. Our experienced team works
          closely with the Bureau of Immigration and other government agencies
          to help ensure smooth and compliant crew movement.
        </p>

        <div className="grid md:grid-cols-2 gap-3 mt-8 text-blue-100">

          <p>✔ Immigration Coordination</p>

          <p>✔ Documentary Assistance</p>

          <p>✔ Liaison with Government Agencies</p>

          <p>✔ Crew Arrival & Departure Coordination</p>

          <p>✔ Special Immigration Arrangement (when operationally required)</p>

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

      {/* Related Resources */}

      <RelatedResources
        resources={[
          {
            title: "Philippine Crew Change Checklist",
            href: "/resources/crew-change-checklist",
          },
          {
            title: "Philippine Port Entry Procedures",
            href: "/resources/port-entry-procedures",
          },
        ]}
      />
    </ResourceArticle>
  );
}
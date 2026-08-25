import TechnicalHero from "../components/TechnicalHero";
import TechnicalOverview from "../components/TechnicalOverview";
import TechnicalCategories from "../components/TechnicalCategories";
import FeaturedResources from "../components/FeaturedResources";
import ServiceCTA from "../components/ServiceCTA";

import { technicalLibrary } from "../data/technicalLibrary";
import { technicalCategories } from "../data/technicalCategories";
import { featuredResources } from "../data/featuredResources";
export default function TechnicalLibraryPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <TechnicalHero
        title={technicalLibrary.hero.title}
        subtitle={technicalLibrary.hero.subtitle}
      />

      <TechnicalOverview
        title={technicalLibrary.introduction.title}
        description={technicalLibrary.introduction.description}
      />

      <TechnicalCategories
        categories={technicalCategories}
      />

      <FeaturedResources resources={featuredResources} />

      <ServiceCTA
  title="Need Technical Assistance?"
  description="Our operations team is ready to assist your vessel with crew changes, customs clearance, technical attendance, ship supply, and port agency services throughout the Philippines."
/>

    </main>
  );
}

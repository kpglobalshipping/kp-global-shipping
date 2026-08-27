import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import About from "./components/About";
import Leadership from "./components/Leadership";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Coverage from "./components/Coverage";
import Clients from "./components/Clients";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import KPGroup from "./components/KPGroup";
import ExecutiveLeadership from "./components/ExecutiveLeadership";
import TechnicalServices from "./components/TechnicalServices";
import WhyKP from "./components/WhyKP";

export default function Home() {
  return (
    <>
      <Announcement />
      <Navbar />

      <main className="min-h-screen bg-[#E8EEF5]">
        <Hero />
        <WhyKP />
        <About />
<Leadership />
<Gallery />
<Services />
<KPGroup />
<ExecutiveLeadership />
<Coverage />
<Clients />
<Contact />
<Footer />
        <FloatingButton />
      </main>
    </>
  );
}
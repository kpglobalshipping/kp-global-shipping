import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TechnicalServices from "./components/TechnicalServices";
import Coverage from "./components/Coverage";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import UsefulLinks from "./components/UsefulLinks";
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#EAF1F8]">
        <Hero />

        <About />

        <Services />

        <TechnicalServices />

        
<Gallery />
        <Contact />
<UsefulLinks />
        <Footer />
      </main>

      <FloatingButton />
    </>
  );
}
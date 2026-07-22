import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Leadership from "./components/Leadership";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Coverage from "./components/Coverage";
import Clients from "./components/Clients";
import Statistics from "./components/Statistics";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButton from "./components/FloatingButton";
import Highlights from "./components/Highlights";
import Announcement from "./components/Announcement";
import Achievements from "./components/Achievements";
import TrustedBy from "./components/TrustedBy";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
    <Announcement />
      <Navbar />

      <main className="min-h-screen bg-white">

      {/* Hero */}
import Achievements from "./components/Achievements";
<section
  className="relative h-screen bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: "url('/images/hero-ship.jpg')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-blue-950/70"></div>

  {/* Hero Content */}
  <div className="relative z-10 text-center text-white px-6 max-w-5xl">

    <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
  Your Trusted
  <br />
  Philippine Shipping Agency
</h1>

    <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-300">
  KP Global Shipping Inc. delivers professional shipping agency services
  with Korean and Filipino maritime expertise, providing reliable
  support for vessel owners, operators and charterers throughout the Philippines.
</p>

    <p className="mt-8 text-xl leading-8 text-gray-200">
      Professional Port Agency • Protective Agency • Crew Change •
      Husbandry Services • Marine Logistics
    </p>

    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

  <button className="bg-yellow-400 hover:bg-yellow-300 hover:scale-105 transition duration-300 text-blue-900 px-8 py-4 rounded-lg font-bold shadow-xl">
    Request a Quote
  </button>

  <button className="border-2 border-white hover:bg-white hover:text-blue-900 hover:scale-105 transition duration-300 px-8 py-4 rounded-lg font-bold">
    Explore Our Services
  </button>
  <p className="mt-12 text-gray-300 italic text-lg">
  "Committed to Excellence in Every Port Call."
</p>

</div>

  </div>
</section>

<Hero />

<Achievements />
<TrustedBy />
        <About />

        <Leadership />

        <Gallery />

        <Services />

        <WhyChooseUs />

        <Coverage />

        <Clients />

        <Statistics />

        <Highlights />

        <Contact />

        <Footer />

        <FloatingButton />

        <Announcement />

      </main>

     
    </>
  );
}
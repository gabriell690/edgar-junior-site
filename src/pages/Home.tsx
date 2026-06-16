import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Marquee from "../components/Marquee"
import PresenceSection from "../components/PresenceSection"
import Differentials from "../components/Differentials";
import Cities from "../components/Cities";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import WhyChooseEdgar from "../components/WhyChooseEdgar";

export default function Home() {
  return (
     <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <PresenceSection />
      <Cities />
      <Differentials />
      <WhyChooseEdgar />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
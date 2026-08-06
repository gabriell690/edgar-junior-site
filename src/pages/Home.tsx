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
import InvestmentStrategy from "../components/InvestmentStrategy";
import SEO from "../components/SEO";

export default function Home() {
  return (
  <>
    <SEO
      title="Edgar Junior | Corretor de Imóveis na Paraíba"
      description="Lançamentos e imóveis selecionados em João Pessoa e Campina Grande. Consultoria imobiliária especializada com Edgar Junior."
      canonical="/"
    />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <PresenceSection />
      <InvestmentStrategy />
      <Cities />
      <Differentials />
      <WhyChooseEdgar />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
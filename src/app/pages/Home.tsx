import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import { WelcomeBonusBanner } from "../components/WelcomeBonusBanner";
import SlotsSection from "../components/SlotsSection";
import SeoContent from "../components/SeoContent";
import LiveCasinoSection from "../components/LiveCasinoSection";
import Footer from "../components/Footer";
import { StickyBonusBanner } from "../components/StickyBonusBanner";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header variant="dark" />
      <HeroSection />
      <AboutSection />
      <WelcomeBonusBanner />
      <SlotsSection />
      <SeoContent />
      <Footer />
      <StickyBonusBanner />
    </div>
  );
}
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import { WelcomeBonusBanner } from "./components/WelcomeBonusBanner";
import SlotsSection from "./components/SlotsSection";
import SeoContent from "./components/SeoContent";
import Footer from "./components/Footer";
import { StickyBonusBanner } from "./components/StickyBonusBanner";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Pragmatic Play — Slots, Demo Games & Free Play Online",
  description:
    "Pragmatic Play content hub with slots, demo gameplay insights, live casino highlights, and mobile-friendly experiences.",
  inLanguage: "en",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://pragmaticplay-demo.uk/#faq",
  url: "https://pragmaticplay-demo.uk/",
  name: "Pragmatic Play FAQ",
  isPartOf: {
    "@id": "https://pragmaticplay-demo.uk/#website",
  },
  inLanguage: "en",
  description:
    "Frequently asked questions about Pragmatic Play, including online slots, RTP, demo games, and casino safety.",
  mainEntity: [
    {
      "@type": "Question",
      "@id": "https://pragmaticplay-demo.uk/#q1",
      name: "What is Pragmatic Play?",
      acceptedAnswer: {
        "@type": "Answer",
        "@id": "https://pragmaticplay-demo.uk/#a1",
        text: "It's a leading provider of online slots, live casino games, and demo play versions.",
      },
    },
    {
      "@type": "Question",
      "@id": "https://pragmaticplay-demo.uk/#q2",
      name: "Can I play Pragmatic Play slots for free?",
      acceptedAnswer: {
        "@type": "Answer",
        "@id": "https://pragmaticplay-demo.uk/#a2",
        text: "Yes, most games are available in demo mode without registration.",
      },
    },
    {
      "@type": "Question",
      "@id": "https://pragmaticplay-demo.uk/#q3",
      name: "What are the best Pragmatic Play slots?",
      acceptedAnswer: {
        "@type": "Answer",
        "@id": "https://pragmaticplay-demo.uk/#a3",
        text: "Top titles include Gates of Olympus, Sweet Bonanza, and Big Bass Bonanza.",
      },
    },
    {
      "@type": "Question",
      "@id": "https://pragmaticplay-demo.uk/#q4",
      name: "What is RTP in Pragmatic Play?",
      acceptedAnswer: {
        "@type": "Answer",
        "@id": "https://pragmaticplay-demo.uk/#a4",
        text: "RTP (Return to Player) shows the expected payout over time.",
      },
    },
    {
      "@type": "Question",
      "@id": "https://pragmaticplay-demo.uk/#q5",
      name: "Are Pragmatic Play casinos safe?",
      acceptedAnswer: {
        "@type": "Answer",
        "@id": "https://pragmaticplay-demo.uk/#a5",
        text: "Yes, as long as you choose licensed and reputable platforms.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen">
        <Header variant="dark" />
        <HeroSection />
        <AboutSection />
        <WelcomeBonusBanner />
        <SlotsSection />
        <SeoContent />
        <Footer />
        <StickyBonusBanner />
      </main>
    </>
  );
}

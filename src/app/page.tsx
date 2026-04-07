import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import {WelcomeBonusBanner} from './components/WelcomeBonusBanner';
import SlotsSection from './components/SlotsSection';
import SeoContent from './components/SeoContent';
import Footer from './components/Footer';
import {StickyBonusBanner} from './components/StickyBonusBanner';

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Pragmatic Play — Slots, Demo Games & Free Play Online',
    description:
        'Pragmatic Play content hub with slots, demo gameplay insights, live casino highlights, and mobile-friendly experiences.',
    inLanguage: 'en',
};

export default function HomePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
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

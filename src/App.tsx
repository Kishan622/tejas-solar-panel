import { TopBanner } from './components/TopBanner';
import { Navbar, ScrollProgressBar, FloatingWhatsApp } from './components/Navbar';
import { Footer, BackToTop } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { SchemesSection } from './sections/SchemesSection';
import { CalculatorSection } from './sections/CalculatorSection';
import { BenefitsSection } from './sections/BenefitsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { GallerySection } from './sections/GallerySection';
import { QuoteSection } from './sections/QuoteSection';
import { FAQSection } from './sections/FAQSection';
import { ContactSection } from './sections/ContactSection';

export default function App() {
  return (
    <>
      <ScrollProgressBar />
      <TopBanner />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SchemesSection />
        <CalculatorSection />
        <BenefitsSection />
        <TestimonialsSection />
        <GallerySection />
        <QuoteSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <BackToTop />
    </>
  );
}

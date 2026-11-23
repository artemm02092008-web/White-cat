import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { getClinicContent } from "@/lib/clinic";

export default function Home() {
  const { about, reviews, faq } = getClinicContent();

  return (
    <main className="flex min-h-screen flex-col bg-canvas">
      <SiteHeader />

      <Hero />

      <div className="section-divider" />
      <ServicesSection />

      <div className="section-divider" />
      <ApproachSection data={about} />

      <div className="section-divider" />
      <ReviewsSection data={reviews} />

      <div className="section-divider" />
      <FaqSection data={faq} />

      <div className="section-divider" />
      <ContactSection />

      <CtaSection />

      <Footer />
    </main>
  );
}

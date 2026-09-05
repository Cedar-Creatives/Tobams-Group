import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LmsSection from "@/components/LmsSection";
import ServicesSection from "@/components/ServicesSection";
import ManagementDevSection from "@/components/ManagementDevSection";
import TransformationHub from "@/components/TransformationHub";
import TrainingConsultantSection from "@/components/TrainingConsultantSection";
import CtaBanner from "@/components/CtaBanner";
import Testimonials from "@/components/Testimonials";
import PreFooterCta from "@/components/PreFooterCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <LmsSection />
        <ServicesSection />
        <ManagementDevSection />
        <TransformationHub />
        <TrainingConsultantSection />
        <CtaBanner />
        <Testimonials />
      </main>
      <PreFooterCta />
      <Footer />
    </>
  );
}
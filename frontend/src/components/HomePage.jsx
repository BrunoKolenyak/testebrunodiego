import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ProblemsSection from "./ProblemsSection";
import ConsequencesSection from "./ConsequencesSection";
import SocialProofCarousel from "./SocialProofCarousel";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import StatsSection from "./StatsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <ConsequencesSection />
      <SocialProofCarousel />
      <AboutSection />
      <ProductsSection />
      <StatsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;
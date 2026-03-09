"use client";

import { useMounted } from "@/hooks/useMounted";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LogoBar } from "@/components/LogoBar";
import { AuditPreview } from "@/components/AuditPreview";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AIFixSection } from "@/components/AIFixSection";
import { HowItWorks } from "@/components/HowItWorks";
import { StatsSection } from "@/components/StatsSection";
import { CICDSection } from "@/components/CICDSection";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function SeoAgentXLanding() {
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoBar />
        <AuditPreview />
        <FeaturesSection />
        <AIFixSection />
        <HowItWorks />
        <StatsSection />
        <CICDSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

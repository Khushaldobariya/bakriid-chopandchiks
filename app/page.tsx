
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/StatsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import AnimalQualitySection from "@/components/home/AnimalQualitySection";
import FullTransparencySection from "@/components/home/FullTransparencySection";
import CelebrationSection from "@/components/home/CelebrationSection";
import PackagesSection from "@/components/home/PackagesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import DownloadAppSection from "@/components/home/DownloadAppSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <HowItWorksSection />
      <AnimalQualitySection />
      <FullTransparencySection />
      <CelebrationSection />
      <PackagesSection />
      <TestimonialsSection />
      <DownloadAppSection />
    </>
  );
}


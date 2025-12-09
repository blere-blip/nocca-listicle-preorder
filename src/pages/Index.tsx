import NotificationBar from "@/components/NotificationBar";
import HeroSection from "@/components/HeroSection";
import CountdownBar from "@/components/CountdownBar";
import ReasonsSection from "@/components/ReasonsSection";
import ComparisonSection from "@/components/ComparisonSection";
import SocialProofSection from "@/components/SocialProofSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <NotificationBar />
      <HeroSection />
      <CountdownBar />
      <ReasonsSection />
      <ComparisonSection />
      <SocialProofSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;

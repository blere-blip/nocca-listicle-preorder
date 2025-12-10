import NotificationBar from "@/components/NotificationBar";
import HeroSection from "@/components/HeroSection";
import CountdownBar from "@/components/CountdownBar";
import ReasonsSection from "@/components/ReasonsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import SmokeBackground from "@/components/SmokeBackground";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <SmokeBackground />
      <div className="relative z-10">
        <NotificationBar />
        <HeroSection />
        <CountdownBar />
        <ReasonsSection />
        <FinalCTASection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;

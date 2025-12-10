import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground text-lg mb-6 animate-fade-in">
            For years, hookah lovers kept burning tobacco and hoping the coals would behave.
          </p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            Welcome{" "}
            <span className="text-gradient-gold">NOCCA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground font-medium mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            The smart, clean, modern way to keep the ritual alive.
          </p>
          
          <div className="space-y-2 text-lg text-muted-foreground mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            <p>Precision electronic heat — charcoal is no longer needed</p>
            <p>Full, consistent smoke output — equal or superior to coals</p>
            <p>Your existing bowls and tobacco — unchanged</p>
            <p>No ash. No smell. No burnt hits.</p>
          </div>
          
          <p className="text-foreground/80 italic mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            Once you try it, going back to coals feels… ancient.
          </p>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
            <Button variant="gold" size="xl" className="animate-pulse-gold">
              Get €100 Off Now
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal-light/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-lg md:text-xl mb-8 animate-fade-in font-light tracking-wide">
            For years, hookah lovers kept burning tobacco and hoping the coals would behave.
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-8xl leading-[1.1] mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            Welcome{" "}
            <span className="text-gradient-gold">NOCCA</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-light mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            The smart, clean, modern way to keep the ritual alive.
          </p>
          
          <div className="space-y-3 text-lg md:text-xl text-muted-foreground mb-12 animate-fade-in opacity-0 font-light" style={{ animationDelay: "0.3s" }}>
            <p>Precision electronic heat — charcoal is no longer needed</p>
            <p>Full, consistent smoke output — equal or superior to coals</p>
            <p>Your existing bowls and tobacco — unchanged</p>
            <p>No ash. No smell. No burnt hits.</p>
          </div>
          
          <p className="text-foreground/70 italic mb-10 text-lg md:text-xl animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            Once you try it, going back to coals feels… ancient.
          </p>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
            <Button variant="gold" size="xl" className="animate-pulse-gold text-lg">
              Get €100 Off Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/30 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;

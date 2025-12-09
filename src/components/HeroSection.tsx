import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            The Future of Hookah Is{" "}
            <span className="text-gradient-gold">Charcoal-Free</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            NOCCA is the world's first fully electronic heat management system for shisha. 
            Premium sessions, zero hassle, perfect temperature control every time.
          </p>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <Button variant="gold" size="xl" className="animate-pulse-gold">
              Get €100 Off Now
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal-light/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;

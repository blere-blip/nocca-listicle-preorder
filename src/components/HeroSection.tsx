import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const HeroSection = () => {
  const benefits = [
    "Precision electronic heat — charcoal is no longer needed",
    "Full, consistent smoke output — equal or superior to coals",
    "Your existing bowls and tobacco — unchanged",
    "No ash. No smell. No burnt hits.",
  ];

  return (
    <section className="relative py-20 md:py-28 lg:py-36">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-heading */}
          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground mb-8 animate-fade-in">
            For years, hookah lovers kept burning tobacco and hoping the coals would behave.
          </p>
          
          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            Welcome to{" "}
            <span className="text-gradient-gold block mt-2">NOCCA</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 font-light mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            The smart, clean, modern way to keep the ritual alive.
          </p>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 text-left">
                <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground/90">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* Closing line */}
          <p className="text-lg text-muted-foreground italic mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            Once you try it, going back to coals feels… ancient.
          </p>
          
          {/* CTA */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.5s" }}>
            <Button variant="gold" size="xl" className="animate-pulse-gold" asChild>
              <a href="https://www.nocca-ehms.com/product-page/nocca-electronic-heat-management-system-ehms" target="_blank" rel="noopener noreferrer">
                Get €100 Off Now
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-charcoal-light/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;

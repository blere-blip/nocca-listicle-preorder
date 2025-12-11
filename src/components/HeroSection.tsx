import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const benefits = [
    "Precision electronic heat — charcoal is no longer needed",
    "Full, consistent smoke output — equal or superior to coals",
    "Your existing bowls and tobacco — unchanged",
    "No ash. No smell. No burnt hits.",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center py-20 md:py-28">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Intro text */}
          <p className="text-lg md:text-xl text-foreground/70 mb-8 animate-fade-in">
            For years, hookah lovers kept burning tobacco and hoping the coals would behave.
          </p>
          
          {/* Main heading with tagline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            Welcome <span className="text-gradient-gold">NOCCA</span>{" "}
            <span className="font-light text-foreground/80">— the smart, clean, modern way to keep the ritual alive.</span>
          </h1>
          
          {/* Benefits with emoji */}
          <div className="space-y-3 mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            {benefits.map((benefit, index) => (
              <p key={index} className="text-lg md:text-xl text-foreground/80">
                👉 {benefit}
              </p>
            ))}
          </div>
          
          {/* Closing line */}
          <p className="text-lg md:text-xl text-foreground/60 italic mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            Once you try it, going back to coals feels… ancient.
          </p>
          
          {/* CTA area */}
          <div className="flex flex-col sm:flex-row items-start gap-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <Button variant="gold" size="xl" className="animate-pulse-gold" asChild>
              <a href="https://www.nocca-ehms.com/product-page/nocca-electronic-heat-management-system-ehms" target="_blank" rel="noopener noreferrer">
                Pre-Order Now — Save €100
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              Limited Batch #1 pricing.<br />
              <span className="text-foreground/60">Ends December 20th.</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-charcoal-light/30 via-transparent to-primary/5 pointer-events-none" />
    </section>
  );
};

export default HeroSection;

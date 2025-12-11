import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center py-20 md:py-28">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-primary/80 mb-6 animate-fade-in">
            The Future of Shisha
          </p>
          
          {/* Main heading - massive, confident */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.9] mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
            <span className="text-gradient-gold">NOCCA</span>
          </h1>
          
          {/* Tagline - elegant, understated */}
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/70 font-light max-w-2xl mb-12 leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            Precision electronic heat.<br className="hidden md:block" />
            The ritual, perfected.
          </p>
          
          {/* Key differentiators - minimal, scannable */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm md:text-base text-muted-foreground mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary" />
              Zero charcoal
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary" />
              Perfect temperature
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary" />
              No ash, no smell
            </span>
          </div>
          
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

import { Button } from "@/components/ui/button";
import { Truck, Shield, Star } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-secondary/50 to-background relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            The Final Opportunity to Secure{" "}
            <span className="text-gradient-gold">Batch #1 Pricing</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-2 font-light">
            Pre-orders close on 20.12.
          </p>
          <p className="text-xl text-muted-foreground mb-10 font-light">
            This €100 launch offer will not return.
          </p>
          
          <Button variant="gold" size="xl" className="animate-pulse-gold mb-8 text-lg">
            Secure Your NOCCA Today
          </Button>
          
          <p className="text-muted-foreground mb-12">
            Countdown: <span className="text-primary font-semibold text-xl">00:00:00</span>
          </p>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-primary" />
              <span className="font-light">Complimentary regional delivery</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-light">24-month warranty</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-primary" />
              <span className="font-light">Hassle-free returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

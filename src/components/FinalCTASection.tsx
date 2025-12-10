import { Button } from "@/components/ui/button";
import { Truck, Shield, Star } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-charcoal-light to-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The Final Opportunity to Secure{" "}
            <span className="text-gradient-gold">Batch #1 Pricing</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-2">
            Pre-orders close on 20.12.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            This €100 launch offer will not return.
          </p>
          
          <Button variant="gold" size="xl" className="animate-pulse-gold mb-6">
            Secure Your NOCCA Today
          </Button>
          
          <p className="text-sm text-muted-foreground mb-8">
            Countdown: <span className="text-primary font-semibold">00:00:00</span>
          </p>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-primary" />
              <span>Complimentary regional delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>24-month warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" />
              <span>Hassle-free returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

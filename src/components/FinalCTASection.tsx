import { Button } from "@/components/ui/button";
import { Truck, Shield, Star } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-charcoal-light to-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-semibold text-lg mb-4">
            SAVE €100 BEFORE PRE-ORDERS CLOSE ON 20.12
          </p>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            First Batch —{" "}
            <span className="text-gradient-gold">Best Price Ever</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            This batch is almost full.<br />
            Once it closes, the €100 discount disappears.
          </p>
          
          <Button variant="gold" size="xl" className="animate-pulse-gold mb-6">
            Get €100 Off Now
          </Button>
          
          <p className="text-sm text-muted-foreground mb-8">
            DEAL ENDS IN: <span className="text-primary font-semibold">00:00:00</span>
          </p>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-primary" />
              <span>Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>24-Month Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" />
              <span>Trusted by Early Testers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

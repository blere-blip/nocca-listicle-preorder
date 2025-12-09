import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-charcoal-light to-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Upgrade Your{" "}
            <span className="text-gradient-gold">Hookah Experience?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Join thousands of hookah enthusiasts who've made the switch. 
            Pre-order now and save €100 on your NOCCA.
          </p>
          
          <Button variant="gold" size="xl" className="animate-pulse-gold mb-6">
            Get €100 Off Now
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Deal Ends In: <span className="text-primary font-semibold">00:00:00</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

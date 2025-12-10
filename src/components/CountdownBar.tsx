import { Truck, Shield, RotateCcw } from "lucide-react";

const CountdownBar = () => {
  return (
    <section className="py-10 border-y border-border/30">
      <div className="container">
        {/* Countdown */}
        <div className="text-center mb-10">
          <p className="text-sm text-muted-foreground uppercase tracking-[0.3em] mb-4 font-light">
            Deal Ends In
          </p>
          <p className="text-4xl md:text-5xl font-cormorant font-semibold text-primary tracking-wider">
            00 : 00 : 00
          </p>
        </div>
        
        {/* Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 text-center">
            <Truck className="w-6 h-6 text-primary" />
            <span className="text-sm md:text-base font-light">Free Worldwide Shipping</span>
          </div>
          
          <div className="flex items-center justify-center gap-4 text-center">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-sm md:text-base font-light">24-Month Warranty</span>
          </div>
          
          <div className="flex items-center justify-center gap-4 text-center">
            <RotateCcw className="w-6 h-6 text-primary" />
            <span className="text-sm md:text-base font-light">14-Day Returns</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownBar;

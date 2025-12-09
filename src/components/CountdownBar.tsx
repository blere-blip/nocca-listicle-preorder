import { Truck, Shield, RotateCcw } from "lucide-react";

const CountdownBar = () => {
  return (
    <section className="py-8 border-y border-border">
      <div className="container">
        {/* Countdown */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
            Deal Ends In
          </p>
          <p className="text-3xl md:text-4xl font-bold text-primary tracking-wider">
            00 : 00 : 00
          </p>
        </div>
        
        {/* Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 text-center">
            <Truck className="w-6 h-6 text-primary" />
            <span className="text-sm md:text-base font-medium">Free Worldwide Shipping</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-center">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-sm md:text-base font-medium">24-Month Warranty</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-center">
            <RotateCcw className="w-6 h-6 text-primary" />
            <span className="text-sm md:text-base font-medium">14-Day Returns</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownBar;

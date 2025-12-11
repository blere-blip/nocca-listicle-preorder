import { Button } from "@/components/ui/button";
import { Truck, Shield, Star } from "lucide-react";
import { useState, useEffect } from "react";

const FinalCTASection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-12-20T23:59:59").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, "0");

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-light/50 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(45_71%_47%_/_0.05),transparent_70%)]" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary/80 mb-6">
            Limited Time Offer
          </p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Secure{" "}
            <span className="text-gradient-gold">Batch #1</span>{" "}
            Pricing
          </h2>
          
          <p className="text-xl text-foreground/60 font-light mb-4 max-w-xl mx-auto">
            Pre-orders close December 20th.
          </p>
          <p className="text-lg text-foreground/50 mb-10">
            This €100 launch discount will not return.
          </p>
          
          {/* Countdown */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-10">
            {timeLeft.days > 0 && (
              <>
                <div className="w-16 md:w-20 h-16 md:h-20 rounded-lg bg-charcoal border border-border flex flex-col items-center justify-center">
                  <span className="text-2xl md:text-3xl font-light text-foreground">{formatTime(timeLeft.days)}</span>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Days</span>
                </div>
                <span className="text-xl text-primary/40">:</span>
              </>
            )}
            <div className="w-16 md:w-20 h-16 md:h-20 rounded-lg bg-charcoal border border-border flex flex-col items-center justify-center">
              <span className="text-2xl md:text-3xl font-light text-foreground">{formatTime(timeLeft.hours)}</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Hrs</span>
            </div>
            <span className="text-xl text-primary/40">:</span>
            <div className="w-16 md:w-20 h-16 md:h-20 rounded-lg bg-charcoal border border-border flex flex-col items-center justify-center">
              <span className="text-2xl md:text-3xl font-light text-foreground">{formatTime(timeLeft.minutes)}</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Min</span>
            </div>
            <span className="text-xl text-primary/40">:</span>
            <div className="w-16 md:w-20 h-16 md:h-20 rounded-lg bg-charcoal border border-border flex flex-col items-center justify-center">
              <span className="text-2xl md:text-3xl font-light text-foreground">{formatTime(timeLeft.seconds)}</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Sec</span>
            </div>
          </div>
          
          <Button variant="gold" size="xl" className="animate-pulse-gold mb-12" asChild>
            <a href="https://www.nocca-ehms.com/product-page/nocca-electronic-heat-management-system-ehms" target="_blank" rel="noopener noreferrer">
              Pre-Order Now — Save €100
            </a>
          </Button>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-foreground/50">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-primary/70" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary/70" />
              <span>2-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary/70" />
              <span>14-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

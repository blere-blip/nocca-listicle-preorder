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
          
          <Button variant="gold" size="xl" className="animate-pulse-gold mb-6" asChild>
            <a href="https://www.nocca-ehms.com/product-page/nocca-electronic-heat-management-system-ehms" target="_blank" rel="noopener noreferrer">
              Secure Your NOCCA Today
            </a>
          </Button>
          
          <p className="text-sm text-muted-foreground mb-8">
            Countdown: <span className="text-primary font-semibold">
              {timeLeft.days > 0 && `${formatTime(timeLeft.days)}d : `}
              {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </span>
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

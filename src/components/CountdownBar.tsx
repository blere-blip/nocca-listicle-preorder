import { Truck, Shield, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";

const CountdownBar = () => {
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
    <section className="py-16 md:py-20 border-y border-border/50">
      <div className="container">
        {/* Countdown */}
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Offer Expires In
          </p>
          <div className="flex items-center justify-center gap-4 md:gap-6">
            {timeLeft.days > 0 && (
              <div className="text-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground">{formatTime(timeLeft.days)}</p>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">Days</p>
              </div>
            )}
            {timeLeft.days > 0 && <span className="text-2xl md:text-3xl text-primary/40 font-light">:</span>}
            <div className="text-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground">{formatTime(timeLeft.hours)}</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">Hours</p>
            </div>
            <span className="text-2xl md:text-3xl text-primary/40 font-light">:</span>
            <div className="text-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground">{formatTime(timeLeft.minutes)}</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">Minutes</p>
            </div>
            <span className="text-2xl md:text-3xl text-primary/40 font-light">:</span>
            <div className="text-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground">{formatTime(timeLeft.seconds)}</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">Seconds</p>
            </div>
          </div>
        </div>
        
        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
              <Truck className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm text-foreground/70">Free Shipping</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm text-foreground/70">2-Year Warranty</span>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center">
              <RotateCcw className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm text-foreground/70">14-Day Returns</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownBar;

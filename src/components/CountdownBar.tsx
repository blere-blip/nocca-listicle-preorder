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
    <section className="py-8 border-y border-border">
      <div className="container">
        {/* Countdown */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">
            Deal Ends In
          </p>
          <p className="text-3xl md:text-4xl font-bold text-primary tracking-wider">
            {timeLeft.days > 0 && `${formatTime(timeLeft.days)}d : `}
            {formatTime(timeLeft.hours)} : {formatTime(timeLeft.minutes)} : {formatTime(timeLeft.seconds)}
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

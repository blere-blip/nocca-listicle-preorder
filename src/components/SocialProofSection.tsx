import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I've been smoking hookah for 15 years. NOCCA is the biggest upgrade I've ever made. The convenience is unreal.",
    author: "Marcus T.",
    location: "Berlin, Germany",
  },
  {
    quote: "No more running to the store for coals, no more ash on my furniture. Just perfect sessions, every single time.",
    author: "Aisha K.",
    location: "Dubai, UAE",
  },
  {
    quote: "The flavor is cleaner, the experience is smoother, and my guests are always impressed. Worth every cent.",
    author: "James L.",
    location: "London, UK",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Early Adopters Are Saying
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 md:p-8 relative"
            >
              <Quote className="w-8 h-8 text-primary/30 absolute top-6 right-6" />
              
              <p className="text-foreground/90 text-lg mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;

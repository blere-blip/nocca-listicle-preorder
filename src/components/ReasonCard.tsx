interface ReasonCardProps {
  number: number;
  title: string;
  description: string;
  bullets: string[];
  additionalText?: string;
}

const ReasonCard = ({ number, title, description, bullets, additionalText }: ReasonCardProps) => {
  return (
    <div className="py-16 md:py-24 border-b border-border/50 last:border-b-0">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Content */}
          <div className={`order-2 ${number % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl md:text-7xl font-cormorant font-bold text-primary/15">
                {number.toString().padStart(2, "0")}
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              {title}
            </h2>
            
            <p className="text-muted-foreground text-lg md:text-xl mb-8 leading-relaxed">
              {description}
            </p>
            
            {bullets.length > 0 && (
              <ul className="space-y-4 mb-8">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/85 text-lg">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {additionalText && (
              <p className="text-foreground/65 whitespace-pre-line text-lg leading-relaxed">
                {additionalText}
              </p>
            )}
          </div>
          
          {/* Image Placeholder */}
          <div className={`order-1 ${number % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-background border border-border/30 flex items-center justify-center backdrop-blur-sm">
              <span className="text-muted-foreground/50 text-lg font-sora">Add image here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonCard;

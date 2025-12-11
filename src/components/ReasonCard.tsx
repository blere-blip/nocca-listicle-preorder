interface ReasonCardProps {
  number: number;
  title: string;
  description: string;
  bullets: string[];
  additionalText?: string;
  image?: string;
  imagePosition?: "center" | "bottom" | "top";
}

const ReasonCard = ({ number, title, description, bullets, additionalText, image, imagePosition = "center" }: ReasonCardProps) => {
  const positionClass = {
    center: "object-center",
    bottom: "object-bottom",
    top: "object-top",
  }[imagePosition];
  return (
    <div className="py-20 md:py-24 border-b border-border/30 last:border-b-0">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className={`order-2 ${number % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl md:text-7xl font-light text-primary/15">
                {number.toString().padStart(2, "0")}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-5 leading-tight">
              {title}
            </h2>
            
            <p className="text-foreground/60 text-lg mb-8 leading-relaxed">
              {description}
            </p>
            
            {bullets.length > 0 && (
              <ul className="space-y-3 mb-8">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/70">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {additionalText && (
              <p className="text-foreground/50 whitespace-pre-line leading-relaxed">
                {additionalText}
              </p>
            )}
          </div>
          
          {/* Image */}
          <div className={`order-1 ${number % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
            <div className="aspect-[4/3] rounded-2xl bg-charcoal border border-border/50 overflow-hidden flex items-center justify-center">
              {image ? (
                <img 
                  src={image} 
                  alt={title}
                  className={`w-full h-full object-contain ${positionClass}`}
                />
              ) : (
                <div className="text-muted-foreground/30 text-sm tracking-widest uppercase">Image</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonCard;

interface ReasonCardProps {
  number: number;
  title: string;
  description: string;
  bullets: string[];
  additionalText?: string;
  image?: string;
}

const ReasonCard = ({ number, title, description, bullets, additionalText, image }: ReasonCardProps) => {
  return (
    <div className="py-16 md:py-20 border-b border-border last:border-b-0">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className={`order-2 ${number % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl md:text-6xl font-bold text-primary/20">
                {number.toString().padStart(2, "0")}
              </span>
            </div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {title}
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6">
              {description}
            </p>
            
            {bullets.length > 0 && (
              <ul className="space-y-3 mb-6">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-foreground/80">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {additionalText && (
              <p className="text-foreground/70 whitespace-pre-line">
                {additionalText}
              </p>
            )}
          </div>
          
          {/* Image */}
          <div className={`order-1 ${number % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
            <div className="aspect-[4/3] rounded-xl bg-charcoal-light border border-border overflow-hidden flex items-center justify-center">
              {image ? (
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-muted-foreground text-lg">Add image here</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonCard;

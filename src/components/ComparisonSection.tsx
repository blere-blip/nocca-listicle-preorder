import { Check, X } from "lucide-react";

const comparisonData = [
  { feature: "Ready Time", nocca: "60 seconds", charcoal: "15+ minutes" },
  { feature: "Temperature Control", nocca: "Precise digital", charcoal: "Guesswork" },
  { feature: "Mess & Cleanup", nocca: "Zero", charcoal: "Ash everywhere" },
  { feature: "Indoor Use", nocca: "Safe & approved", charcoal: "CO risk" },
  { feature: "Ongoing Costs", nocca: "None", charcoal: "€20+/month" },
  { feature: "Session Consistency", nocca: "Perfect every time", charcoal: "Variable" },
  { feature: "Flavor Purity", nocca: "100% tobacco", charcoal: "Charcoal taste" },
];

const ComparisonSection = () => {
  return (
    <section className="py-16 md:py-24 bg-charcoal-light">
      <div className="container">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          NOCCA <span className="text-gradient-gold">vs</span> Charcoal
        </h2>
        
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-muted-foreground font-medium">Feature</th>
                <th className="text-center py-4 px-4">
                  <span className="text-gradient-gold font-bold text-lg">NOCCA</span>
                </th>
                <th className="text-center py-4 px-4 text-muted-foreground font-medium">Charcoal</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-border/50">
                  <td className="py-5 px-4 text-foreground font-medium">{row.feature}</td>
                  <td className="py-5 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{row.nocca}</span>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-5 h-5 text-muted-foreground" />
                      <span className="text-muted-foreground">{row.charcoal}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

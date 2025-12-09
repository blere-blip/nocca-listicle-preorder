import ReasonCard from "./ReasonCard";

const reasons = [
  {
    number: 1,
    title: "No More Charcoal Hassle",
    description: "Forget about lighting coals, waiting, managing ash, and cleaning up. NOCCA heats instantly and maintains perfect temperature automatically.",
    bullets: [
      "Ready in 60 seconds, not 15 minutes",
      "No ash, no mess, no burnt carpets",
      "Indoor-friendly – no carbon monoxide",
    ],
  },
  {
    number: 2,
    title: "Precision Temperature Control",
    description: "Our proprietary heating technology delivers consistent, adjustable heat that extracts maximum flavor from your tobacco without burning it.",
    bullets: [
      "5 temperature presets for every preference",
      "Smart sensors maintain optimal heat",
      "No hot spots, no harsh sessions",
    ],
  },
  {
    number: 3,
    title: "Built to Last",
    description: "Engineered from aerospace-grade materials, NOCCA is designed for thousands of sessions. This isn't a gadget – it's an investment.",
    bullets: [
      "Premium aluminum and ceramic construction",
      "24-month warranty included",
      "Replaceable heating elements",
    ],
  },
  {
    number: 4,
    title: "Healthier Sessions",
    description: "By eliminating charcoal combustion, NOCCA removes harmful byproducts from your smoke. Taste the tobacco, not the chemicals.",
    bullets: [
      "No carbon monoxide production",
      "Reduced carcinogen exposure",
      "Cleaner, purer flavor profile",
    ],
  },
  {
    number: 5,
    title: "Stunning Design",
    description: "NOCCA isn't just functional – it's a statement piece. The minimalist, premium aesthetic elevates any lounge or living space.",
    bullets: [
      "Award-winning industrial design",
      "Compact footprint, maximum impact",
      "Available in Matte Black and Titanium",
    ],
  },
  {
    number: 6,
    title: "Cost Effective",
    description: "Stop buying charcoal every week. NOCCA pays for itself within months, while delivering a superior experience every single time.",
    bullets: [
      "Eliminates recurring charcoal costs",
      "Energy-efficient heating system",
      "No accessories or consumables needed",
    ],
  },
  {
    number: 7,
    title: "Perfect for Any Setting",
    description: "Whether you're hosting guests, enjoying solo, or taking it on the go – NOCCA adapts to your lifestyle seamlessly.",
    bullets: [
      "Portable and travel-friendly",
      "Works with any standard hookah",
      "Whisper-quiet operation",
    ],
  },
];

const ReasonsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          7 Reasons Hookah Lovers Are{" "}
          <span className="text-gradient-gold">Switching to NOCCA</span>
        </h2>
      </div>
      
      <div>
        {reasons.map((reason) => (
          <ReasonCard key={reason.number} {...reason} />
        ))}
      </div>
    </section>
  );
};

export default ReasonsSection;

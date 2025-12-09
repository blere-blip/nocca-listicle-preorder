import ReasonCard from "./ReasonCard";

const reasons = [
  {
    number: 1,
    title: "Real Shisha — Without Changing Your Ritual",
    description: "People are switching to NOCCA because it keeps everything you love about shisha:",
    bullets: [
      "Your hookah",
      "Your tobacco",
      "Your bowl",
      "Your setup",
    ],
    additionalText: "Nothing changes except the heating — and that changes everything.\n\nNOCCA is a fully autonomous, battery-powered electronic heat management system that fits any bowl (87 mm diameter), runs for up to 2 hours, and delivers clean, stable flavor from start to finish.\n\nThis isn't a capsule system. No pods. No limitations.\nJust real shisha — perfected.",
  },
  {
    number: 2,
    title: "No More Heat Problems — Every Session Stays Perfect",
    description: "Charcoal is unpredictable. One moment it's too hot, the next it's dead. NOCCA fixes that with stable, controlled, precision heat.",
    bullets: [
      "Stable heat for up to 2 hours",
      "3 temperature presets",
      "Smart control via mobile app",
      "Ready in ~10 minutes",
      "Clean flavor + thick clouds from start to finish",
    ],
    additionalText: "Your session finally goes exactly the way you planned.",
  },
  {
    number: 3,
    title: "No Ash. No Smell. No Burnt Sessions.",
    description: "Charcoal creates mess and inconsistency: ash everywhere, smoke-heavy smell, harsh flavor halfway through. NOCCA removes all of it.",
    bullets: [
      "No ash",
      "No burnt hits",
      "No charcoal smell",
      "Clean sessions, clean home",
    ],
    additionalText: "Just pure flavor and a calm, premium shisha experience.",
  },
  {
    number: 4,
    title: '"Six of us smoked for over an hour — flavor stayed the same, smoke was 10/10."',
    description: "This is the most common feedback from testers. Because the heat never spikes, the bowl warms evenly, and the tobacco doesn't burn prematurely — the flavor stays stable even with 3–6 people smoking.",
    bullets: [
      "Steady clouds",
      "Clean taste",
      "Zero harshness",
      "Sessions that actually stay enjoyable",
    ],
    additionalText: "",
  },
  {
    number: 5,
    title: "Premium Engineering That Surprised Testers",
    description: '"The design is insanely premium. I thought it was aluminum from the photos — but in person it\'s full stainless steel, solid, smooth, and way nicer than expected. Even the heat vents are engineered: hot below, cool to touch above. Feels like a flagship device."',
    bullets: [],
    additionalText: "NOCCA looks high-end online — but in person, it's even better.",
  },
  {
    number: 6,
    title: "Free Shipping, 2-Year Warranty & 14-Day Returns",
    description: "NOCCA isn't a cheap copy or random gadget. Every order includes:",
    bullets: [
      "Free worldwide shipping",
      "24-month warranty",
      "14-day return & exchange policy",
    ],
    additionalText: "Simple. Safe. Transparent.",
  },
  {
    number: 7,
    title: "Special Gifts Included With Every Pre-Order",
    description: "During the pre-order period, every NOCCA comes with guaranteed bonus gifts:",
    bullets: [
      "Stainless-steel mouthpiece",
      "Premium cleaning cloth",
      "Cork base pad",
    ],
    additionalText: "These items are pre-order only and won't return after launch.",
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

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
      "Your entire ritual",
    ],
    additionalText: "Nothing changes except the heating — and that changes everything.\n\nNOCCA is a fully autonomous, battery-powered electronic heat management system that fits bowls up to 87 mm, runs for up to 2 hours, and delivers clean, stable heat from start to finish.\n\nNo capsules. No pods. No special tobacco.\nYour hookah, your bowl, your tobacco — just powered by intelligent heat.",
  },
  {
    number: 2,
    title: "No More Heat Problems — Every Session Stays Perfect",
    description: "Charcoal is unpredictable. One moment it's too hot, the next it's dead. NOCCA fixes that with stable, controlled, precision heat.",
    bullets: [
      "Stable heat for up to 2 hours",
      "Heating presets + customizable modes",
      "Remote control via mobile device",
      "Ready in ~10 minutes",
      "Clean flavor and thick clouds from start to finish",
    ],
    additionalText: "Finally, heat that behaves — and a session that never falls apart.",
  },
  {
    number: 3,
    title: "No Open Flame. No Embers. No Accidents.",
    description: "Charcoal means handling burning material — a fire hazard by design. NOCCA removes that risk entirely with precision electronic heating enclosed in stainless steel.",
    bullets: [],
    additionalText: "A safer experience, engineered from the inside out.",
  },
  {
    number: 4,
    title: "No Ash. No Smell. No Burnt Sessions.",
    description: "Anyone who's used charcoal knows the mess: ash on the table, smoke smell in the room, and flavor turning harsh halfway through.",
    bullets: [],
    additionalText: "NOCCA removes all of it — no ash, no smell, no burnt hits.\nJust a clean, smooth session from start to finish.",
  },
  {
    number: 5,
    title: '"Six of us smoked for over an hour — flavor stayed the same, smoke was 10/10."',
    description: "This is the most common feedback from testers. Because the heat never spikes, the bowl warms evenly, and the tobacco doesn't burn prematurely, the flavor stays stable even with 3–6 people smoking.",
    bullets: [
      "Steady, thick clouds",
      "Clean taste",
      "Zero harshness",
      "Sessions that actually stay enjoyable",
    ],
    additionalText: "",
  },
  {
    number: 6,
    title: "Premium Engineering That Surprised Testers",
    description: '"From the photos, I expected a lightweight aluminum device. In person, it\'s a full stainless-steel body — solid, smooth, and far more refined than it looks online. The finish, the feel, the balance… it genuinely feels like a flagship product."',
    bullets: [],
    additionalText: "NOCCA looks premium in pictures — but once you hold it, the build quality speaks for itself.",
  },
  {
    number: 7,
    title: "Free Shipping, 2-Year Warranty & 14-Day Returns",
    description: "Every NOCCA device comes protected with premium service and full peace of mind:",
    bullets: [
      "Free regional shipping (EU, UK, UAE, Kuwait, Turkey — pre-orders only)",
      "24-month warranty",
      "14-day return & exchange policy",
    ],
    additionalText: "Simple. Safe. Transparent. Exactly how it should be.",
  },
  {
    number: 8,
    title: "Included Accessories — Everything You Need for the Perfect Session",
    description: "Every NOCCA comes with a set of premium, thoughtfully designed accessories:",
    bullets: [
      "Stainless-steel mouthpiece with lanyard",
      "Premium microfiber cleaning cloth",
      "Cork base pad for surface protection",
      "Precision tweezers for quick bowl prep",
    ],
    additionalText: "A complete, refined starter set designed to elevate your session from the very first use.",
  },
];

const ReasonsSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          8 Reasons Hookah Lovers Are{" "}
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

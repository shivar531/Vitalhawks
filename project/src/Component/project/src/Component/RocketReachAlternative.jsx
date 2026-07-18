import React from "react";
import AlternativeLayout from "./AlternativeLayout";

const data = {
  competitor: "RocketReach",
  path: "/rocketreach-alternative-india",
  title: "RocketReach Alternative in India | VitalHawks",
  description:
    "A done-for-you alternative to RocketReach for Indian B2B teams — hand-verified direct mobiles and work emails, no lookup allowances, delivered next morning.",
  heroSub:
    "RocketReach is a solid lookup tool with famously transparent pricing. But its strength is breadth of profiles — and if your targets are Indian decision-makers who need a mobile number that rings, that's a different job.",
  fairPlay:
    "RocketReach has one of the largest profile databases in the category and the most transparent, self-serve pricing in the market — no sales calls, no quotes, published tiers you can read before you buy. For individuals and small teams doing profile lookups, that clarity is a real advantage.",
  stayIf:
    "you want a large self-serve profile database with published pricing, your lookups are ad-hoc rather than list-based, and your targets are concentrated in North America.",
  table: [
    { label: "What you buy", them: "Software subscription - profile lookups", us: "A finished, verified contact list" },
    { label: "Who builds the list", them: "Your team, using search and lookups", us: "Our research team, from your brief" },
    { label: "Pricing model", them: "Published self-serve tiers with lookup allowances; phone access on higher plans", us: "Per verified contact - no allowances, no seats" },
    { label: "Pricing transparency", them: "Published openly - no sales call needed", us: "Flat per-contact rate, quoted upfront" },
    { label: "Accuracy guarantee", them: "See RocketReach's current terms", us: "95% guaranteed - wrong contacts replaced free" },
    { label: "Verification", them: "Platform-verified at database scale", us: "Checked by a person before every delivery" },
    { label: "Turnaround", them: "Instant per lookup", us: "Brief by 5 PM, list by 11 AM next day" },
    { label: "Best suited to", them: "Broad profile lookups, mainly North America", us: "India lists with direct mobiles, done for you" },
  ],
  tableNote:
    "RocketReach details reflect the vendor's publicly published plans, including its documented tier structure where phone number access sits on higher plans. RocketReach publishes pricing openly - check their site for current figures.",
  asOf: "July 2026",
  faqs: [
    {
      q: "Why consider an alternative for India specifically?",
      a: "Industry reviews consistently note that phone coverage on global lookup tools thins significantly outside North America. Indian B2B runs on mobile — so if direct dials drive your outreach, that gap matters more here than anywhere.",
    },
    {
      q: "How is your model different?",
      a: "RocketReach sells lookup allowances you spend yourself. We deliver a finished, hand-verified list built to your brief. You do no searching, no filtering, no cleaning.",
    },
    {
      q: "Do phone numbers cost extra?",
      a: "No. Direct mobile numbers plus verified work emails come on every contact as standard — not gated behind a higher tier.",
    },
    {
      q: "What if the data is wrong?",
      a: "We guarantee 95% accuracy. If more than 5% of your list is wrong, we replace those contacts free.",
    },
    {
      q: "Can you deliver at volume?",
      a: "Yes — 500–600 hand-verified contacts a day, sustained. We ran exactly that for three consecutive weeks for a leading Indian insurance marketplace.",
    },
  ],
};

export default function RocketReachAlternative() {
  return <AlternativeLayout data={data} />;
}

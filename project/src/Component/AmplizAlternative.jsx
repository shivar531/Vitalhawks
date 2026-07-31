import React from "react";
import AlternativeLayout from "./AlternativeLayout";

const data = {
  competitor: "Ampliz",
  path: "/ampliz-alternative-india",
  title: "Ampliz Alternative in India | VitalHawks",
  description:
    "A done-for-you alternative to Ampliz for Indian B2B teams — hand-verified direct mobiles and work emails delivered as a finished list, no self-serve platform to run.",
  heroSub:
    "Ampliz offers a self-serve database with real APAC and India strength. But if you'd rather receive a hand-verified list built to your brief than filter a platform yourself, a done-for-you service fits better.",
  fairPlay:
    "Ampliz is a capable B2B data provider with genuine strength in APAC and India, including specialised intelligence in areas like healthcare. For teams that want a self-serve database platform to search and filter on their own, it's a credible option with good regional coverage.",
  stayIf:
    "you want a self-serve database platform to filter yourself, you value its APAC and healthcare intelligence, and your team prefers to build and manage lists in-house.",
  table: [
    { label: "What you buy", them: "Self-serve database platform - search and filter", us: "A finished, verified contact list" },
    { label: "Who builds the list", them: "Your team, using platform filters", us: "Our research team, from your brief" },
    { label: "Pricing model", them: "Subscription / credit-based plans", us: "Per verified contact - no subscription, no seats" },
    { label: "Free tier", them: "Sample / trial on request", us: "Free sample list before you order" },
    { label: "Accuracy guarantee", them: "See Ampliz's current terms", us: "95% guaranteed - wrong contacts replaced free" },
    { label: "Verification", them: "Database-scale verification", us: "Checked by a person before every delivery" },
    { label: "Turnaround", them: "Instant filtering, then your team refines it", us: "Brief by 5 PM, list by 11 AM next day" },
    { label: "How you get it", them: "Access a platform you operate", us: "A ready list delivered to your inbox" },
  ],
  tableNote:
    "Ampliz details reflect the vendor's publicly reported product and positioning. Check their site for current terms, as plans change.",
  asOf: "July 2026",
  faqs: [
    {
      q: "Is VitalHawks a replacement for Ampliz?",
      a: "They solve it differently. Ampliz gives you a platform to search Indian and APAC data yourself. VitalHawks delivers a finished, hand-verified list to your brief. Teams that would rather receive the list than run the platform choose us.",
    },
    {
      q: "How is your data different from Ampliz's?",
      a: "Both cover India. The difference is model and verification: Ampliz is a self-serve database you filter; we research and hand-verify each list per brief, focused on direct mobile numbers, and deliver it ready to use with a replace-if-wrong guarantee.",
    },
    {
      q: "Do I need to learn a platform?",
      a: "No. There's no platform to operate and no filters to master. You send a brief and receive a verified list — that's the whole workflow.",
    },
    {
      q: "What if the data is wrong?",
      a: "We guarantee 95% accuracy. If more than 5% of your list is wrong, we replace those contacts free — no questions asked.",
    },
    {
      q: "How fast is delivery?",
      a: "Brief us by 5 PM and your list is in your inbox by the next morning. We sustain 500–600 verified contacts a day when you need volume.",
    },
  ],
};

export default function AmplizAlternative() {
  return <AlternativeLayout data={data} />;
}

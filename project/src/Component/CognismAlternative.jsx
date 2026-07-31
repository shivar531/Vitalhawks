import React from "react";
import AlternativeLayout from "./AlternativeLayout";

const data = {
  competitor: "Cognism",
  path: "/cognism-alternative-india",
  title: "Cognism Alternative in India | VitalHawks",
  description:
    "A done-for-you alternative to Cognism for Indian B2B teams — hand-verified direct mobiles and work emails, no annual seats, no credits, delivered next morning.",
  heroSub:
    "Cognism is a serious, compliance-first platform with strong phone-verified data. But if your focus is India and you'd rather receive a finished, verified list than run a subscription your team operates, a done-for-you service can fit better.",
  fairPlay:
    "Cognism is one of the most respected sales-intelligence platforms in the market. It is known for phone-verified mobile numbers, a strong GDPR and compliance posture, and solid coverage across the US and Europe. For an enterprise that wants a compliant self-serve platform it runs in-house, Cognism is an excellent choice.",
  stayIf:
    "you're an enterprise that wants a compliant, self-serve platform with strong US and European coverage and phone-verified data at scale, operated by your own team on an annual contract.",
  table: [
    { label: "What you buy", them: "Platform subscription - database and phone-verified mobiles", us: "A finished, verified contact list" },
    { label: "Who builds the list", them: "Your team, using filters and credits", us: "Our research team, from your brief" },
    { label: "Pricing model", them: "Annual per-seat subscription, quote-based", us: "Per verified contact - no subscription, no seats" },
    { label: "Free tier", them: "No free plan - demo and trial on request", us: "Free sample list before you order" },
    { label: "Accuracy guarantee", them: "See Cognism's current terms", us: "95% guaranteed - wrong contacts replaced free" },
    { label: "Verification", them: "Phone-verified at database scale", us: "Checked by a person before every delivery" },
    { label: "Turnaround", them: "Instant export, then your team refines it", us: "Brief by 5 PM, list by 11 AM next day" },
    { label: "India coverage", them: "Strongest in US and Europe", us: "Built specifically for Indian decision-makers" },
  ],
  tableNote:
    "Cognism details reflect the vendor's publicly reported product and positioning. Pricing is quote-based - check their site or your rep for current terms, as plans change.",
  asOf: "July 2026",
  faqs: [
    {
      q: "Is VitalHawks a replacement for Cognism?",
      a: "It depends on why you use it. If you subscribed mainly for contact data on Indian decision-makers, VitalHawks can replace that outright. If you rely on Cognism's platform and workflows, many teams keep it and use us for the India lists it covers less deeply.",
    },
    {
      q: "How is your data different from Cognism's?",
      a: "Cognism compiles and phone-verifies data at global scale, served through a self-serve platform. Our lists are researched per brief and verified by hand, with a focus on Indian decision-makers and direct mobile numbers. Different model, different strengths.",
    },
    {
      q: "Do I need an annual contract?",
      a: "No. There's no annual seat, no subscription and no credits. You pay per verified contact on the list you asked for.",
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

export default function CognismAlternative() {
  return <AlternativeLayout data={data} />;
}

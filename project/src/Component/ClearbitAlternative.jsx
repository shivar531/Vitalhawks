import React from "react";
import AlternativeLayout from "./AlternativeLayout";

const data = {
  competitor: "Clearbit",
  path: "/clearbit-alternative-india",
  title: "Clearbit Alternative in India | VitalHawks",
  description:
    "A done-for-you alternative to Clearbit for Indian B2B teams — hand-verified direct mobiles and work emails of net-new decision-makers, not just enrichment. 95% accuracy, delivered next morning.",
  heroSub:
    "Clearbit is excellent at enriching records you already have and revealing site visitors. But if you need net-new Indian decision-makers with direct mobile numbers — not just enrichment of an existing list — a done-for-you list may fit better.",
  fairPlay:
    "Clearbit — now part of HubSpot as Breeze Intelligence — is one of the best data-enrichment and activation tools available. It enriches records with firmographic data, reveals anonymous website visitors, and powers real-time lead scoring and routing directly inside your CRM and marketing stack. If your priority is making the data you already collect richer and more actionable, it's a genuinely strong product.",
  stayIf:
    "your priority is enriching and scoring inbound leads inside HubSpot, the contacts you care about mostly already exist in your system and just need cleaning, and your targets are largely US or global.",
  table: [
    { label: "What you buy", them: "Enrichment & data-activation software, now part of HubSpot", us: "A finished, verified contact list" },
    { label: "Who builds the list", them: "Your team, via enrichment and filters", us: "Our research team, from your brief" },
    { label: "Pricing model", them: "Platform subscription, often enterprise-tier", us: "Per verified contact - no subscription, no seats" },
    { label: "Net-new contacts", them: "Best when you already have records to enrich", us: "We source net-new decision-makers from scratch" },
    { label: "Accuracy guarantee", them: "See Clearbit/HubSpot current terms", us: "95% guaranteed - wrong contacts replaced free" },
    { label: "Verification", them: "Automated enrichment at scale", us: "Checked by a person before every delivery" },
    { label: "India & direct mobiles", them: "Strong firmographics; Indian direct mobiles thinner", us: "India-focused, direct mobile on every contact" },
    { label: "Best suited to", them: "Enriching and routing inbound at scale, in-house", us: "India-focused lists with direct mobiles, done for you" },
  ],
  tableNote:
    "Clearbit / Breeze Intelligence details reflect the vendor's publicly published materials and widely reported product behaviour. Clearbit was acquired by HubSpot; features, coverage and pricing may have changed - check HubSpot's site for current figures.",
  asOf: "August 2026",
  faqs: [
    {
      q: "Is VitalHawks a replacement for Clearbit?",
      a: "It depends on what you use Clearbit for. If you use it to enrich and score inbound inside HubSpot, we're not a like-for-like swap. If you use it to find net-new Indian decision-makers with direct dials, a done-for-you list often does that job better — and many teams run both.",
    },
    {
      q: "How is your data different from Clearbit's?",
      a: "Clearbit enriches records at scale through automation, mostly to power workflows on data you already have. Our lists are researched on our own platform and verified by hand for each brief, focused on net-new Indian decision-makers and direct mobile numbers. Different model, different strengths.",
    },
    {
      q: "Do I need a subscription?",
      a: "No. There's no subscription, no seats, and no credits. You pay per verified contact on the list you asked for.",
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

export default function ClearbitAlternative() {
  return <AlternativeLayout data={data} />;
}

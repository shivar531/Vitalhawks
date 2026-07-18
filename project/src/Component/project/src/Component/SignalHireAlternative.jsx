import React from "react";
import AlternativeLayout from "./AlternativeLayout";

const data = {
  competitor: "SignalHire",
  path: "/signalhire-alternative-india",
  title: "SignalHire Alternative in India | VitalHawks",
  description:
    "A done-for-you alternative to SignalHire for Indian B2B teams — hand-verified direct mobiles and work emails, no credits, no fair-usage caps, delivered next morning.",
  heroSub:
    "SignalHire is quick and recruiter-friendly, with unlimited seats and no per-user fees. But it's built for finding people one at a time — not for handing your sales team a finished, verified India list.",
  fairPlay:
    "SignalHire is fast and genuinely well-built for what it does. The extension returns work and personal emails plus mobile numbers in a click, seats are unlimited so whole teams can share a credit pool, and it verifies contacts at the point of reveal. For recruiters and small teams doing profile-by-profile sourcing, it's a practical tool.",
  stayIf:
    "you're recruiting or sourcing profile-by-profile, you value unlimited seats sharing one credit pool, and a browser extension matches how your team works.",
  table: [
    { label: "What you buy", them: "Software subscription - contact reveals via extension", us: "A finished, verified contact list" },
    { label: "Who builds the list", them: "Your team, revealing contacts one at a time", us: "Our research team, from your brief" },
    { label: "Pricing model", them: "Credit plans; unlimited seats sharing one credit pool", us: "Per verified contact - no credits, no seats" },
    { label: "Seats", them: "Unlimited users on paid plans", us: "Not applicable - you're buying a list, not logins" },
    { label: "Accuracy guarantee", them: "See SignalHire's current terms", us: "95% guaranteed - wrong contacts replaced free" },
    { label: "Verification", them: "Verified at the point of reveal", us: "Checked by a person before every delivery" },
    { label: "Turnaround", them: "Instant per reveal", us: "Brief by 5 PM, list by 11 AM next day" },
    { label: "Best suited to", them: "Recruiters and teams sourcing profile-by-profile", us: "Bulk India lists including contacts with no profile" },
  ],
  tableNote:
    "SignalHire details reflect the vendor's publicly published plans and widely reported product behaviour, including unlimited seats and its credit-based reveal model. Verify current plans on SignalHire's website.",
  asOf: "July 2026",
  faqs: [
    {
      q: "Why would an India-focused team look elsewhere?",
      a: "Single-source databases can only return what they hold. In Indian manufacturing, healthcare and regional business, many decision-makers have no active professional profile to reveal — so we research and verify them by hand instead.",
    },
    {
      q: "How does the pricing model differ?",
      a: "SignalHire sells credits, with reveals consumed one contact at a time and higher tiers gated by allowances. We charge per verified contact delivered, with no subscription, no seats and no credit expiry.",
    },
    {
      q: "Do you provide mobile numbers?",
      a: "Yes — direct mobile numbers plus verified work emails on every contact, as standard.",
    },
    {
      q: "What if the data is wrong?",
      a: "We guarantee 95% accuracy. If more than 5% of your list is wrong, we replace those contacts free.",
    },
    {
      q: "Can you handle sustained volume?",
      a: "Yes. We delivered 500–600 hand-verified contacts every working day for three consecutive weeks for a leading Indian insurance marketplace.",
    },
  ],
};

export default function SignalHireAlternative() {
  return <AlternativeLayout data={data} />;
}

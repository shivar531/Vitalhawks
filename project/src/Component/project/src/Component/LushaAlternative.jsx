import React from "react";
import AlternativeLayout from "./AlternativeLayout";

const data = {
  competitor: "Lusha",
  path: "/lusha-alternative-india",
  title: "Lusha Alternative in India | VitalHawks",
  description:
    "A done-for-you alternative to Lusha for Indian B2B teams — hand-verified direct mobiles and work emails, no credit maths, no extension, delivered next morning.",
  heroSub:
    "Lusha's extension is excellent for quick lookups one profile at a time. But when you need a few thousand verified Indian contacts — with mobile numbers — credit-based lookups stop being the efficient path.",
  fairPlay:
    "Lusha is the simplest contact-lookup experience in the category. Its Chrome extension is fast, the interface is clean, and for a rep enriching profiles one at a time on LinkedIn it's genuinely hard to beat. For small teams doing focused, low-volume prospecting, it does its job well.",
  stayIf:
    "your reps work profile-by-profile on LinkedIn, your volumes are modest, and a browser extension fits your workflow better than a delivered file.",
  table: [
    { label: "What you buy", them: "Software subscription - contact lookup via extension", us: "A finished, verified contact list" },
    { label: "Who builds the list", them: "Your reps, one profile at a time", us: "Our research team, from your brief" },
    { label: "Pricing model", them: "Subscription with credits; phone reveals consume more credits than emails", us: "Per verified contact - no credits, no seats" },
    { label: "Primary workflow", them: "Chrome extension on professional profiles", us: "You send a brief; we send a file" },
    { label: "Accuracy guarantee", them: "See Lusha's current terms", us: "95% guaranteed - wrong contacts replaced free" },
    { label: "Verification", them: "Platform-verified at database scale", us: "Checked by a person before every delivery" },
    { label: "Turnaround", them: "Instant per lookup", us: "Brief by 5 PM, list by 11 AM next day" },
    { label: "Best suited to", them: "Fast, low-volume lookups on profiles", us: "Bulk India lists including contacts with no profile" },
  ],
  tableNote:
    "Lusha details reflect the vendor's publicly published plans and widely reported product behaviour, including its documented credit model where phone reveals cost more credits than emails. Verify current plans on Lusha's website.",
  asOf: "July 2026",
  faqs: [
    {
      q: "Why would I switch from Lusha for India lists?",
      a: "Lusha is built around one-at-a-time lookups on profiles. If your targets are Indian manufacturers, hospitals or regional firms — where many decision-makers have no active profile — there's often nothing to look up. We research those contacts by hand instead.",
    },
    {
      q: "How does pricing compare?",
      a: "Different model entirely. Lusha sells credits on a subscription, with phone reveals typically costing more credits than emails. We charge per verified contact delivered — no subscription, no seats, no credits expiring unused.",
    },
    {
      q: "Do you provide mobile numbers?",
      a: "Yes — direct mobile numbers plus verified work emails on every contact, as standard. Not a separate cost or a premium tier.",
    },
    {
      q: "What if the data is wrong?",
      a: "We guarantee 95% accuracy. If more than 5% of your list is wrong, we replace those contacts free.",
    },
    {
      q: "Can you handle large volumes?",
      a: "Yes. We've delivered 500–600 hand-verified contacts every working day for three consecutive weeks for a leading Indian insurance marketplace.",
    },
  ],
};

export default function LushaAlternative() {
  return <AlternativeLayout data={data} />;
}

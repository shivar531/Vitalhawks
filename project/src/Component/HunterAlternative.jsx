import React from "react";
import AlternativeLayout from "./AlternativeLayout";

const data = {
  competitor: "Hunter",
  path: "/hunter-alternative-india",
  title: "Hunter.io Alternative in India | VitalHawks",
  description:
    "A done-for-you alternative to Hunter.io for Indian B2B teams — hand-verified work emails and direct mobile numbers of the right decision-makers, not just email guesses from a domain. 95% accuracy, next morning.",
  heroSub:
    "Hunter is a fast, clean way to find email patterns from a domain. But if you need the right named decision-makers in India — with direct mobile numbers, not just a best-guess email — a done-for-you list may fit better.",
  fairPlay:
    "Hunter.io does one thing very well: given a company domain, it finds and verifies likely email addresses, and it does so quickly with a generous free tier and a simple interface. For a lightweight, self-serve way to find and check work emails at known companies, it's an excellent tool.",
  stayIf:
    "you already know exactly which companies you're targeting, email is your only channel, and a verified best-guess work email is all you need from each account.",
  table: [
    { label: "What you buy", them: "An email-finder and verifier tool", us: "A finished, verified contact list" },
    { label: "Who builds the list", them: "You, domain by domain", us: "Our research team, from your brief" },
    { label: "What you get per contact", them: "A work email (pattern-based)", us: "Verified work email + direct mobile number" },
    { label: "Finding the right person", them: "You still decide who to target", us: "We identify the right decision-makers for you" },
    { label: "Accuracy guarantee", them: "See Hunter's current terms", us: "95% guaranteed - wrong contacts replaced free" },
    { label: "Verification", them: "Automated email verification", us: "Checked by a person before every delivery" },
    { label: "India & direct mobiles", them: "Email-only; no direct mobile numbers", us: "India-focused, direct mobile on every contact" },
    { label: "Best suited to", them: "Self-serve email finding at known companies", us: "Multi-channel India lists with mobiles, done for you" },
  ],
  tableNote:
    "Hunter.io details reflect the vendor's publicly published plans and widely reported product behaviour. Hunter publishes transparent self-serve pricing - check their site for current figures, as plans change.",
  asOf: "August 2026",
  faqs: [
    {
      q: "Is VitalHawks a replacement for Hunter?",
      a: "Only partly — Hunter finds and verifies emails from domains you supply; we deliver finished lists of the right decision-makers with both emails and direct mobiles. If email at known companies is all you need, Hunter is great. If you need the right people and phone numbers, that's us.",
    },
    {
      q: "Do you provide phone numbers, not just emails?",
      a: "Yes — that's a key difference. Every contact includes a verified direct mobile number alongside the work email. Hunter is email-only.",
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

export default function HunterAlternative() {
  return <AlternativeLayout data={data} />;
}

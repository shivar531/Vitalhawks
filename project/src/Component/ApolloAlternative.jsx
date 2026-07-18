import React from "react";
import AlternativeLayout from "./AlternativeLayout";

const data = {
  competitor: "Apollo.io",
  path: "/apollo-alternative-india",
  title: "Apollo.io Alternative in India | VitalHawks",
  description:
    "A done-for-you alternative to Apollo.io for Indian B2B teams — hand-verified direct mobiles and work emails, no credits, no subscription, delivered next morning.",
  heroSub:
    "Apollo is a strong all-in-one platform. But if you sell into India and need direct mobile numbers that connect — without your SDRs burning credits and cleaning exports — a done-for-you list may fit better.",
  fairPlay:
    "Apollo.io is one of the most popular sales platforms in the world, and deservedly so. It combines a very large contact database with sequencing and a dialer in a single subscription, publishes transparent self-serve pricing, and offers a free tier so teams can test before committing. For a team that wants database plus outreach on one bill, it's a sensible default.",
  stayIf:
    "your outbound is mostly email-led, your targets are largely US or Western Europe, and you want data, sequencing and dialling bundled into one subscription your team runs themselves.",
  table: [
    { label: "What you buy", them: "Software subscription - database, sequencing and dialer", us: "A finished, verified contact list" },
    { label: "Who builds the list", them: "Your team, using filters and credits", us: "Our research team, from your brief" },
    { label: "Pricing model", them: "Per-user subscription with credit allowances", us: "Per verified contact - no subscription, no seats" },
    { label: "Free tier", them: "Yes - free plan available to test", us: "Free sample list before you order" },
    { label: "Accuracy guarantee", them: "See Apollo.io's current terms", us: "95% guaranteed - wrong contacts replaced free" },
    { label: "Verification", them: "Platform-verified at database scale", us: "Checked by a person before every delivery" },
    { label: "Turnaround", them: "Instant export, then your team cleans it", us: "Brief by 5 PM, list by 11 AM next day" },
    { label: "Best suited to", them: "Email-led outbound at global scale, run in-house", us: "India-focused lists with direct mobiles, done for you" },
  ],
  tableNote:
    "Apollo.io details reflect the vendor's publicly published plans and widely reported product behaviour. Apollo.io publishes transparent self-serve pricing - check their site for current figures, as plans change.",
  asOf: "July 2026",
  faqs: [
    {
      q: "Is VitalHawks a replacement for Apollo?",
      a: "Not exactly — Apollo is software you operate; VitalHawks is a service that delivers finished lists. Many teams keep a tool like Apollo for sequencing and use us for the India contact data it can't cover well. Others replace it entirely if data was the only reason they subscribed.",
    },
    {
      q: "How is your data different from Apollo's?",
      a: "Apollo's database is compiled at global scale and served through self-serve filters. Our lists are researched on our own platform and verified by hand for each brief, with a focus on Indian decision-makers and direct mobile numbers. Different model, different strengths.",
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

export default function ApolloAlternative() {
  return <AlternativeLayout data={data} />;
}

import React from "react";
import AlternativeLayout from "./AlternativeLayout";

const data = {
  competitor: "ZoomInfo",
  path: "/zoominfo-alternative-india",
  title: "ZoomInfo Alternative in India | VitalHawks",
  description:
    "A done-for-you alternative to ZoomInfo for Indian B2B teams — hand-verified contacts, no annual contract, no seats, pay per verified contact.",
  heroSub:
    "ZoomInfo is the enterprise standard, with the budget and contract to match. If you sell into India and mainly need accurate contacts — not intent graphs and org charts — an annual enterprise contract may be more platform than you need.",
  fairPlay:
    "ZoomInfo is the most comprehensive B2B intelligence platform available. Org charts, intent signals, technographics, conversation intelligence and deep CRM integrations — for large enterprise sales orgs running complex, high-ticket cycles, nothing else offers that breadth in one place. If you need all of it, it earns its price.",
  stayIf:
    "you need intent data, org charts and technographics as part of an enterprise GTM stack, your team is large enough to use the platform daily, and your budget is built for an annual enterprise contract.",
  table: [
    { label: "What you buy", them: "Enterprise GTM platform - data, intent, org charts, integrations", us: "A finished, verified contact list" },
    { label: "Who builds the list", them: "Your team, inside the platform", us: "Our research team, from your brief" },
    { label: "Pricing model", them: "Annual contract with seats and minimums", us: "Per verified contact - no contract, no seats" },
    { label: "Commitment", them: "Typically annual or multi-year agreements", us: "Order a list when you need one" },
    { label: "Beyond contacts", them: "Intent signals, technographics, conversation intelligence", us: "Contacts only - that's the whole product" },
    { label: "Accuracy guarantee", them: "See ZoomInfo's current terms", us: "95% guaranteed - wrong contacts replaced free" },
    { label: "Turnaround", them: "Instant export from the platform", us: "Brief by 5 PM, list by 11 AM next day" },
    { label: "Best suited to", them: "Large enterprise GTM teams needing the full stack", us: "Teams who mainly need accurate India contacts" },
  ],
  tableNote:
    "ZoomInfo details reflect the vendor's publicly described platform and widely reported commercial model. ZoomInfo pricing is quoted directly by their sales team - contact them for current terms.",
  asOf: "July 2026",
  faqs: [
    {
      q: "Is VitalHawks cheaper than ZoomInfo?",
      a: "We're a different model, so the comparison isn't like-for-like. ZoomInfo is an annual platform contract with seats and minimums. We charge per verified contact with no subscription — you spend only on the lists you actually order.",
    },
    {
      q: "What do I give up by not using ZoomInfo?",
      a: "Intent signals, org charts, technographics and the wider GTM platform. If those drive your process, ZoomInfo is the better fit and we'd say so. If what you actually need is accurate Indian contacts with direct mobiles, that's our lane.",
    },
    {
      q: "Do you lock me into a contract?",
      a: "No. No annual contract, no auto-renewal, no seats. Order a list when you need one.",
    },
    {
      q: "How accurate is your data?",
      a: "95% accuracy guaranteed, verified by hand before delivery. If more than 5% is wrong, we replace those contacts free.",
    },
    {
      q: "How fast is delivery?",
      a: "Brief us by 5 PM and your list arrives by the next morning — with sustained delivery of 500–600 verified contacts a day when you need volume.",
    },
  ],
};

export default function ZoomInfoAlternative() {
  return <AlternativeLayout data={data} />;
}

import React from "react";
import AlternativeLayout from "./AlternativeLayout";

const data = {
  competitor: "Kaspr",
  path: "/kaspr-alternative-india",
  title: "Kaspr Alternative in India | VitalHawks",
  description:
    "A done-for-you alternative to Kaspr for Indian B2B teams — hand-verified direct mobiles and work emails delivered as a finished list, no per-profile reveals or credits.",
  heroSub:
    "Kaspr is handy for revealing contacts one profile at a time on LinkedIn. But if you need a whole verified list of Indian decision-makers without doing the manual work yourself, a done-for-you service fits better.",
  fairPlay:
    "Kaspr is a well-liked LinkedIn prospecting tool, offering a browser extension that reveals phone numbers and emails as you browse, plus a freemium plan to start for free. For individual reps and small teams doing hands-on, one-by-one prospecting on LinkedIn, it's a quick and convenient option.",
  stayIf:
    "you prospect one contact at a time on LinkedIn, you want a freemium browser extension for quick reveals, and manual per-profile sourcing suits how your team works.",
  table: [
    { label: "What you buy", them: "Browser extension - reveals contacts per profile", us: "A finished, verified contact list" },
    { label: "Who builds the list", them: "You, one LinkedIn profile at a time", us: "Our research team, from your brief" },
    { label: "Pricing model", them: "Freemium with credit-based reveals", us: "Per verified contact - no subscription, no seats" },
    { label: "Free tier", them: "Yes - free plan available to test", us: "Free sample list before you order" },
    { label: "Accuracy guarantee", them: "See Kaspr's current terms", us: "95% guaranteed - wrong contacts replaced free" },
    { label: "Verification", them: "Reveal-time from aggregated sources", us: "Checked by a person before every delivery" },
    { label: "Turnaround", them: "Instant per profile, list built manually by you", us: "Brief by 5 PM, list by 11 AM next day" },
    { label: "Best suited to", them: "Hands-on, one-by-one LinkedIn prospecting", us: "Whole India lists, done for you, at volume" },
  ],
  tableNote:
    "Kaspr details reflect the vendor's publicly reported product and plans. Check their site for current figures, as plans change.",
  asOf: "July 2026",
  faqs: [
    {
      q: "Is VitalHawks a replacement for Kaspr?",
      a: "For different jobs. Kaspr reveals contacts as you browse LinkedIn, one at a time. VitalHawks builds the entire verified list for you from a brief. Teams that need volume without the manual clicking use us instead.",
    },
    {
      q: "How is your data different from Kaspr's?",
      a: "Kaspr surfaces a contact per profile while you prospect. We research and hand-verify a full list of Indian decision-makers with direct mobiles, then deliver it ready to use — no browsing or reveal-by-reveal work.",
    },
    {
      q: "Do I need to prospect on LinkedIn myself?",
      a: "No. That's the point of a done-for-you service — you send a brief, we build and verify the list. There's no extension to install and no per-profile work.",
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

export default function KasprAlternative() {
  return <AlternativeLayout data={data} />;
}

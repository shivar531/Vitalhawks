import React, { useState } from "react";
import useSeo from "../utils/useSeo";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "Which SaaS roles can you reach?",
    a: "Founders and co-founders, CEOs, VPs and Heads of Sales, VPs and Heads of Marketing, Heads of Growth and Demand Gen, CTOs and VP Engineering, product and RevOps leaders. SaaS buying rarely sits with one person — you tell us the seniority and function, and we build to it.",
  },
  {
    q: "Can you filter SaaS companies by stage, size or category?",
    a: "Yes. Every list is custom-built around your ICP — funding stage, headcount, revenue band, SaaS category (vertical, horizontal, fintech, martech, devtools, HR tech) and geography. We can deliver Series A fintech-SaaS founders in Bengaluru, or marketing heads at 200+ employee SaaS firms pan-India, or whatever your target is.",
  },
  {
    q: "Do you provide direct mobile numbers?",
    a: "Yes. Direct mobile numbers plus verified work emails on every contact. SaaS inboxes are the most saturated in B2B — a direct line is often the only way to actually start a conversation.",
  },
  {
    q: "How fast can we get a list?",
    a: "Brief us by 5 PM and your custom-built, verified list is in your inbox by the next morning — typically 500–600 verified contacts per day of delivery, sustained across multi-week projects when you need volume.",
  },
  {
    q: "How accurate is the data?",
    a: "Every contact is built on our own research platform and verified by hand before it reaches you — not exported from a stale database. We guarantee 95% accuracy: if more than 5% of your list is wrong, we replace those contacts free.",
  },
  {
    q: "Is the data handled compliantly?",
    a: "Our data practices are aligned with India's DPDP Act 2023, and with GDPR for international operations. See our Privacy Policy for full details.",
  },
];

export default function SaaSDatabase() {
  const [open, setOpen] = useState(null);

  useSeo({
    title: "SaaS Company Database India | Verified Decision-Maker Contacts | VitalHawks",
    description:
      "Verified contact lists of decision-makers at Indian SaaS and software companies — direct mobile numbers and work emails of founders, sales, marketing and growth leaders. 95% accuracy, next-morning delivery.",
    path: "/saas-companies-database",
    faqs,
  });

  return (
    <div className="relative bg-[#050507] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.15),transparent_60%)]"></div>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-purple-400 mb-4 uppercase">
          SaaS &amp; Software Company Contacts
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          SaaS company database,
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
            built to your ICP.
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Direct mobile numbers and verified work emails of founders, sales, marketing and growth leaders at Indian SaaS and software companies — filtered by funding stage, category, size and geography. Verified by hand, in your inbox by the next morning.
        </p>

        <div className="mt-10 flex items-center justify-center">
          <Link
            to="/Contact"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium shadow-md hover:scale-105 transition"
          >
            Get a sample list
          </Link>
        </div>
      </section>

      {/* The gap */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
            Why SaaS decision-makers are hard to pin down
          </h2>
          <p className="text-gray-400 max-w-2xl mb-10">
            SaaS orgs are flat, fast, and full of stakeholders — the person who signs isn't always the person who evaluates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">The most saturated inbox in B2B</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                SaaS leaders get pitched by everyone selling to SaaS. Generic email lists land in a sea of identical outreach — a direct mobile is how you break through.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">Buying is a committee</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Founder, Head of Sales, RevOps, the champion who'll actually use it — SaaS deals touch several people. We build multi-stakeholder lists, not just one name per company.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">Titles move with the round</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A "growth lead" at seed becomes a "VP Marketing" after Series A. Stale databases point at roles that have already changed — which is why every contact of ours is checked before delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles + sub-verticals */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">Who we help you reach</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 lg:p-8">
              <h3 className="font-semibold mb-4 text-purple-300">SaaS roles we cover</h3>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                <li>→ Founders, co-founders and CEOs</li>
                <li>→ VPs and Heads of Sales</li>
                <li>→ VPs and Heads of Marketing / Demand Gen</li>
                <li>→ Heads of Growth and RevOps</li>
                <li>→ CTOs, VP Engineering and product leaders</li>
                <li>→ Customer success and partnerships heads</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 lg:p-8">
              <h3 className="font-semibold mb-4 text-purple-300">SaaS categories we cover</h3>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                <li>→ Vertical and horizontal SaaS</li>
                <li>→ Fintech, insurtech and payments SaaS</li>
                <li>→ Martech, sales tech and RevOps tools</li>
                <li>→ Developer tools and infrastructure</li>
                <li>→ HR tech, ed-tech and D2C enablement</li>
                <li>→ Early-stage to growth-stage, pan-India</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-sm tracking-[0.2em] text-purple-400 uppercase mb-4">Built for scale</p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 max-w-3xl">
            500–600 verified contacts a day. Every day. For three weeks.
          </h2>
          <p className="text-gray-400 max-w-3xl mb-8 leading-relaxed">
            When a leading Indian marketplace needed verified contacts delivered
            continuously, at volume, we delivered 500–600 hand-verified contacts
            every working day for three consecutive weeks — with no drop in
            accuracy from day one to day twenty-one. Whether you need one
            targeted list of SaaS founders or sustained delivery across an entire category, the process is the same.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">500–600</p>
              <p className="text-xs text-gray-500 mt-1">verified contacts per day</p>
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">95%</p>
              <p className="text-xs text-gray-500 mt-1">accuracy — or replaced free</p>
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">5 PM → 11 AM</p>
              <p className="text-xs text-gray-500 mt-1">brief to delivery</p>
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">Human</p>
              <p className="text-xs text-gray-500 mt-1">verified, every batch</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">Common questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={f.q} className="rounded-xl border border-white/10 bg-white/5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between text-left px-5 py-4"
                >
                  <span className="font-medium">{f.q}</span>
                  <span className="text-purple-400 text-xl shrink-0 ml-4">
                    {open === i ? "−" : "+"}
                  </span>
                </button>
                {open === i && (
                  <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b12] to-[#0a0a10] p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(120,80,255,0.12),transparent_60%)]"></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl md:text-4xl font-light text-gray-200 leading-tight">
              Selling into SaaS?
            </h2>
            <p className="mt-2 text-gray-400 text-base leading-relaxed">
              Tell us your target — get a free verified sample before you spend a rupee.
            </p>
          </div>
          <div className="relative z-10 mt-2 md:mt-0 shrink-0">
            <Link
              to="/Contact"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium shadow-md hover:scale-105 transition"
            >
              Request a sample
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

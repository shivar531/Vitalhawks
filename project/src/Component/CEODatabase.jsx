import React, { useState } from "react";
import useSeo from "../utils/useSeo";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "Which leadership roles can you reach?",
    a: "CEOs, founders and co-founders, managing directors and promoters, business and country heads, directors, and partners. We build to the seniority and company profile you name.",
  },
  {
    q: "Can you filter CEOs by industry and company size?",
    a: "Yes. Every list is custom-built around your ICP — industry, company size, revenue band, and geography. We can deliver founders of 50-200 employee manufacturers in Gujarat, or SaaS CEOs in Bengaluru, or whatever your target is.",
  },
  {
    q: "Do you provide direct mobile numbers?",
    a: "Yes. Direct mobile numbers plus verified work emails on every contact. With founders and CEOs, the mobile number is the whole game — office lines and generic inboxes never reach them.",
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

export default function CEODatabase() {
  const [open, setOpen] = useState(null);

  useSeo({
    title: "CEO Database India | Founder & MD Contacts | VitalHawks",
    description:
      "Verified CEO contact lists — direct mobile numbers and work emails of CEOs, founders and managing directors at Indian companies. 95% accuracy, fast delivery.",
    path: "/ceo-database",
    faqs,
  });


  return (
    <div className="relative bg-[#050507] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.15),transparent_60%)]"></div>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-purple-400 mb-4 uppercase">
          CEO & Founder Contacts
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          CEO database,
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
            built to your ICP.
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Direct mobile numbers and verified work emails of CEOs, founders, and managing directors — filtered by industry, company size, and geography. Verified by hand, in your inbox by the next morning.
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
            Why founder contacts are worth getting right
          </h2>
          <p className="text-gray-400 max-w-2xl mb-10">
            In Indian mid-market companies, the founder still signs off on most purchases. Reach them and your sales cycle collapses.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                The real decision-maker
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                In owner-run companies, the promoter decides — not a committee. One correct mobile number can be worth an entire department's worth of outreach.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Impossible to reach cold
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Founders don't answer generic office lines and rarely read info@ inboxes. Without a direct number, you're not in the conversation.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Owner-run, not listed
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                India's mid-market is full of profitable owner-run companies that global databases barely cover. Those are exactly the ones we research by hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles + sub-verticals */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">
            Who we help you reach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 lg:p-8">
              <h3 className="font-semibold mb-4 text-purple-300">
                Leadership roles we cover
              </h3>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                <li>→ CEOs and Chief Executive Officers</li>
                <li>→ Founders and co-founders</li>
                <li>→ Managing directors and promoters</li>
                <li>→ Business heads and country heads</li>
                <li>→ Directors and board members</li>
                <li>→ Partners at firms and practices</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 lg:p-8">
              <h3 className="font-semibold mb-4 text-purple-300">
                Where we find them
              </h3>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                <li>→ Manufacturing and industrial companies</li>
                <li>→ IT services, SaaS and technology</li>
                <li>→ Financial services and insurance</li>
                <li>→ Healthcare and pharma</li>
                <li>→ Real estate and construction</li>
                <li>→ Owner-run mid-market firms across India</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-sm tracking-[0.2em] text-purple-400 uppercase mb-4">
            Built for scale
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 max-w-3xl">
            500–600 verified contacts a day. Every day. For three weeks.
          </h2>
          <p className="text-gray-400 max-w-3xl mb-8 leading-relaxed">
            When a leading Indian marketplace needed verified contacts delivered
            continuously, at volume, we delivered 500–600 hand-verified contacts
            every working day for three consecutive weeks — with no drop in
            accuracy from day one to day twenty-one. Whether you need one
            targeted list of founders or sustained delivery across an entire market, the process is the same.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">500–600</p>
              <p className="text-xs text-gray-500 mt-1">
                verified contacts per day
              </p>
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">95%</p>
              <p className="text-xs text-gray-500 mt-1">
                accuracy — or replaced free
              </p>
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">
                5 PM → 11 AM
              </p>
              <p className="text-xs text-gray-500 mt-1">
                brief to delivery
              </p>
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">Human</p>
              <p className="text-xs text-gray-500 mt-1">
                verified, every batch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">
            Common questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="rounded-xl border border-white/10 bg-white/5"
              >
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
                  <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                    {f.a}
                  </p>
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
              Need founders and CEOs in your pipeline?
            </h2>
            <p className="mt-2 text-gray-400 text-base leading-relaxed">
              Tell us your target — get a free verified sample before you spend
              a rupee.
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

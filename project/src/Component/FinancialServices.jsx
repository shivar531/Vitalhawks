import React, { useState } from "react";
import useSeo from "../utils/useSeo";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "Which financial services roles can you find?",
    a: "CFOs, finance directors, founders and co-founders, managing directors, heads of treasury, compliance heads, and partners — across NBFCs, fintechs, AMCs, insurance firms, M&A advisories, and CA/CS practices. You define the roles; we build the list around them.",
  },
  {
    q: "How accurate is the data?",
    a: "Every contact is verified by hand before delivery. We guarantee 95% accuracy — if more than 5% of your list is wrong, we replace those contacts free.",
  },
  {
    q: "How fast is delivery?",
    a: "Within 48 hours of your brief for most lists. You tell us the roles, geography, and company profile — we deliver a clean, ready-to-use file.",
  },
  {
    q: "Do you provide direct mobile numbers, or just emails?",
    a: "Both. Direct mobile numbers plus verified work emails on every contact — so your team can call, email, and follow up on WhatsApp without hitting gatekeepers.",
  },
  {
    q: "Is the data handled compliantly?",
    a: "Yes — our data practices are aligned with India's DPDP Act 2023, and with GDPR for international operations. See our Privacy Policy for details.",
  },
];

export default function FinancialServices() {
  const [open, setOpen] = useState(null);

  useSeo({
    title: "B2B Contact Data for Financial Services | VitalHawks",
    description:
      "Verified contact lists for finance sales teams — direct mobiles and work emails of CFOs and finance leaders. 95% accuracy, next-morning delivery.",
    path: "/financial-services",
    faqs,
  });


  return (
    <div className="relative bg-[#050507] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.15),transparent_60%)]"></div>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-purple-400 mb-4 uppercase">
          Financial Services
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          B2B contact data for
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
            financial services sales teams.
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Direct mobile numbers and verified work emails of CFOs, founders, and
          finance leaders — at NBFCs, fintechs, AMCs, insurers, and advisory
          firms. Verified by hand, delivered in 48 hours.
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

      {/* Pain points */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
            Why selling into finance is hard
          </h2>
          <p className="text-gray-400 max-w-2xl mb-10">
            Financial decision-makers are the most gatekept buyers in B2B — and
            the databases that claim to cover them age fastest.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Gatekeepers everywhere
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Board lines and reception numbers get you screened out. Without
                a direct mobile, your team never actually speaks to the CFO.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Stale databases
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Finance roles rotate fast. Generic databases are full of people
                who changed firms a year ago — your emails bounce and your
                calls hit strangers.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Hours lost to research
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your SDRs spend 2–3 hours a day hunting contact details instead
                of booking meetings — the most expensive research team you
                never meant to hire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case study proof */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-sm tracking-[0.2em] text-purple-400 uppercase mb-4">
            Depth in your industry
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 max-w-2xl">
            Finance is one of our deepest verticals
          </h2>
          <p className="text-gray-400 max-w-2xl mb-8 leading-relaxed">
            In a single combined finance &amp; M&amp;A advisory project, our team
            processed over 4,500 contacts — de-duplicated at the person level,
            filtered for role relevance, and verified by hand before delivery.
            We know where finance decision-makers sit, how their titles map
            across NBFCs, fintechs, and advisory firms, and how to build a list
            your team can call the same day.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">4,500+</p>
              <p className="text-xs text-gray-500 mt-1">
                finance contacts processed in one project
              </p>
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">95%</p>
              <p className="text-xs text-gray-500 mt-1">
                accuracy — guaranteed, or replaced free
              </p>
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">48h</p>
              <p className="text-xs text-gray-500 mt-1">brief to delivery</p>
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">100%</p>
              <p className="text-xs text-gray-500 mt-1">human-verified</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">
            From brief to booked meetings in 3 steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs text-gray-500 tracking-widest mb-3">
                STEP 01
              </p>
              <h3 className="font-semibold mb-2">Tell us who you need</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Roles, firm types, geography, company size — for example, "CFOs
                at NBFCs with 100+ employees in Mumbai and Delhi NCR."
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs text-gray-500 tracking-widest mb-3">
                STEP 02
              </p>
              <h3 className="font-semibold mb-2">We build and verify</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our team researches and verifies every contact by hand — direct
                mobile and work email, checked before it reaches you.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs text-gray-500 tracking-widest mb-3">
                STEP 03
              </p>
              <h3 className="font-semibold mb-2">
                Your team starts closing
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A clean, verified list in 24–48 hours — ready to plug into your
                CRM or outreach tool the same day.
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
              Need CFOs and founders in your pipeline?
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

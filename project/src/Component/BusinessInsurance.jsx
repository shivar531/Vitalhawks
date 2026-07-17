import React, { useState } from "react";
import useSeo from "../utils/useSeo";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "Which insurance roles can you reach?",
    a: "Founders and directors, branch and agency heads, sales and distribution heads, underwriting and claims leaders, operations heads, and channel partners — across insurers, brokers, agencies, InsurTech platforms, and TPAs. You define the roles and geography; we build the list around them.",
  },
  {
    q: "Do you provide direct mobile numbers?",
    a: "Yes. Direct mobile numbers plus verified work emails on every contact. In the insurance sector especially, decision-makers are mobile-first and rarely reachable through board lines or generic inboxes.",
  },
  {
    q: "How fast can we get a list?",
    a: "Brief us by 5 PM and your custom-built, verified list is in your inbox by the next morning — typically 500–600 verified contacts per day of delivery, sustained across multi-week projects if you need volume.",
  },
  {
    q: "How accurate is the data?",
    a: "Every contact is built on our own research platform and verified by hand before it reaches you — not exported from a stale database. We guarantee 95% accuracy: if more than 5% of your list is wrong, we replace those contacts free.",
  },
  {
    q: "Can you handle sustained, high-volume delivery?",
    a: "Yes. We have delivered 500–600 hand-verified contacts every working day for three consecutive weeks for a leading Indian insurance marketplace, with no drop in accuracy from the first batch to the last.",
  },
  {
    q: "Is the data handled compliantly?",
    a: "Our data practices are aligned with India's DPDP Act 2023, and with GDPR for international operations. See our Privacy Policy for full details.",
  },
];

export default function BusinessInsurance() {
  const [open, setOpen] = useState(null);

  useSeo({
    title: "B2B Contact Data for Insurance Companies | VitalHawks",
    description:
      "Verified contact lists for insurance sales teams — direct mobiles and work emails of decision-makers at insurers, brokers and InsurTech. 95% accuracy.",
    path: "/insurance-contact-data",
    faqs,
  });


  return (
    <div className="relative bg-[#050507] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.15),transparent_60%)]"></div>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-purple-400 mb-4 uppercase">
          Insurance
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          B2B contact data for
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
            insurance sales teams.
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Direct mobile numbers and verified work emails of decision-makers at
          insurers, brokers, agencies, and InsurTech firms. Built to your ICP,
          verified by hand, in your inbox by the next morning.
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

      {/* Proof - sustained delivery */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-sm tracking-[0.2em] text-purple-400 uppercase mb-4">
            Proven in your sector
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 max-w-3xl">
            500–600 verified contacts a day. Every day. For three weeks.
          </h2>
          <p className="text-gray-400 max-w-3xl mb-8 leading-relaxed">
            A leading Indian insurance marketplace needed verified contacts
            delivered continuously, at volume, without their team stopping to
            clean data. We delivered 500–600 hand-verified contacts every
            working day for three consecutive weeks — direct mobile numbers and
            work emails, checked by our team before every batch went out. No
            drop in accuracy from day one to day twenty-one.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">3 weeks</p>
              <p className="text-xs text-gray-500 mt-1">of daily delivery</p>
            </div>
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
              <p className="text-2xl font-semibold text-purple-300">Human</p>
              <p className="text-xs text-gray-500 mt-1">
                verified, every batch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we reach */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
            Who we help you reach
          </h2>
          <p className="text-gray-400 max-w-2xl mb-10">
            Across the insurance value chain — insurers, intermediaries, and
            the platforms serving them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Insurers & TPAs
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Distribution heads, branch and regional heads, underwriting and
                claims leaders, operations and technology decision-makers.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Brokers & agencies
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Founders, principals, agency heads, and channel leaders —
                including firms outside the metros that most global databases
                miss entirely.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                InsurTech platforms
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Founders, growth and partnership heads, product and technology
                leaders at insurance marketplaces and platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">
            Why insurance teams work with us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
              <p className="text-xl font-semibold text-purple-300 mb-2">
                Mobile-first
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Direct mobile numbers, not board lines. Insurance
                decision-makers answer their phones, not their reception desk.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
              <p className="text-xl font-semibold text-purple-300 mb-2">
                Human-verified
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Built on our own research platform and checked by our team
                before delivery. Not a database export.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
              <p className="text-xl font-semibold text-purple-300 mb-2">
                5 PM → 11 AM
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Brief us by evening, start calling the next morning. No waiting
                a week for a list.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
              <p className="text-xl font-semibold text-purple-300 mb-2">
                95% or free
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                If more than 5% of your list is wrong, we replace those contacts
                free. In writing, on every order.
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
              Need insurance decision-makers in your pipeline?
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

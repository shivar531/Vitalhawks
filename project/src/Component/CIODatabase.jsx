import React, { useState } from "react";
import useSeo from "../utils/useSeo";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "Which technology roles can you reach?",
    a: "CIOs, IT heads and directors, heads of digital and digital transformation, CTOs, VPs of Technology, infrastructure and cloud heads, and information security leaders. You define the seniority; we build to it.",
  },
  {
    q: "Can you filter CIOs by industry and company size?",
    a: "Yes. Every list is custom-built around your ICP — industry, company size, and geography. We can deliver CIOs at 500+ employee manufacturers, hospital IT heads across a region, or BFSI technology leaders, depending on your target.",
  },
  {
    q: "Do you provide direct mobile numbers?",
    a: "Yes. Direct mobile numbers plus verified work emails on every contact — which matters most with technology buyers, whose inboxes are saturated and whose gatekeepers are efficient.",
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

export default function CIODatabase() {
  const [open, setOpen] = useState(null);

  useSeo({
    title: "CIO Database India | CIO & IT Head Contacts | VitalHawks",
    description:
      "Verified CIO contact lists — direct mobile numbers and work emails of CIOs, IT heads and technology leaders at Indian companies. 95% accuracy, fast delivery.",
    path: "/cio-database",
    faqs,
  });


  return (
    <div className="relative bg-[#050507] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.15),transparent_60%)]"></div>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-purple-400 mb-4 uppercase">
          CIO Contacts
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          CIO database,
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
            built to your ICP.
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Direct mobile numbers and verified work emails of CIOs, IT heads, and technology decision-makers — across enterprises, manufacturers, hospitals, and financial institutions. Verified by hand, in your inbox by the next morning.
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
            Why reaching CIOs takes more than an email
          </h2>
          <p className="text-gray-400 max-w-2xl mb-10">
            Technology leaders are the most pitched-to buyers in B2B. Getting through takes the right person and the right channel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Saturated inboxes
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A CIO receives dozens of vendor emails a day. Yours is one of them — unless you can call the number that actually rings on their desk.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Title chaos
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                CIO, IT Head, Head of Digital, VP Technology, CTO — the same job carries five names across companies. Generic lists get the seniority wrong.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Enterprise vs mid-market
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Global tools cover large enterprise CIOs well. Mid-sized manufacturers, hospitals, and regional firms — where the buying is often faster — are where we research by hand.
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
                Technology roles we cover
              </h3>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                <li>→ CIOs and Chief Information Officers</li>
                <li>→ IT heads and IT directors</li>
                <li>→ Heads of Digital and Digital Transformation</li>
                <li>→ CTOs and VPs of Technology</li>
                <li>→ Infrastructure and cloud heads</li>
                <li>→ Information security and CISO-level leaders</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 lg:p-8">
              <h3 className="font-semibold mb-4 text-purple-300">
                Where we find them
              </h3>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                <li>→ Manufacturing and industrial enterprises</li>
                <li>→ Hospitals and diagnostics chains</li>
                <li>→ Banking, NBFCs and insurance</li>
                <li>→ IT services and SaaS companies</li>
                <li>→ Retail and logistics</li>
                <li>→ Mid-market companies beyond the metros</li>
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
            targeted list of CIOs or sustained delivery across an entire sector, the process is the same.
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
              Need CIOs and IT heads in your pipeline?
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

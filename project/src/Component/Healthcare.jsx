import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "Which healthcare roles can you reach?",
    a: "Hospital directors and medical superintendents, CIOs and IT heads, procurement and materials heads, administration and operations heads, lab and diagnostics directors, and founders or promoters. We build to the roles you name — including administrators who rarely sit in generic databases.",
  },
  {
    q: "Which healthcare sub-sectors do you cover?",
    a: "Multi-speciality and super-speciality hospitals, diagnostics and pathology chains, imaging centres, clinic networks, day-care and speciality centres, and healthcare technology platforms — across metros and Tier-2 cities alike.",
  },
  {
    q: "Do you provide direct mobile numbers?",
    a: "Yes. Direct mobile numbers plus verified work emails on every contact. Hospital administrators and IT heads are reachable on mobile, not through a reception line or an appointments inbox.",
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

export default function Healthcare() {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    document.title =
      "Healthcare Contact Database India | Hospital & Diagnostics Decision-Makers — VitalHawks";
    const meta = document.querySelector('meta[name="description"]');
    const prev = meta ? meta.getAttribute("content") : null;
    if (meta)
      meta.setAttribute(
        "content",
        "Verified healthcare contact lists — direct mobile numbers and work emails of hospital directors, CIOs, procurement and administration heads across hospitals, diagnostics chains and clinics. 95% accuracy, next-morning delivery."
      );
    return () => {
      document.title =
        "VitalHawks | Verified B2B Contact Data — Direct Mobiles & Work Emails";
      if (meta && prev) meta.setAttribute("content", prev);
    };
  }, []);

  return (
    <div className="relative bg-[#050507] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.15),transparent_60%)]"></div>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-purple-400 mb-4 uppercase">
          Healthcare
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          Healthcare contact
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
            database, built to your ICP.
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Direct mobile numbers and verified work emails of hospital
          directors, CIOs, procurement and administration heads across
          hospitals, diagnostics chains, and clinic networks. Verified by hand,
          in your inbox by the next morning.
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
            Why healthcare decision-makers are hard to reach
          </h2>
          <p className="text-gray-400 max-w-2xl mb-10">
            Healthcare buying runs through administrators and technology heads
            who sit behind layers of front-desk numbers — and rarely appear in
            off-the-shelf databases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Administrators aren't online
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Hospital administrators, procurement heads, and IT leads run
                operations, not profiles. Databases built by scraping the
                internet simply don't have them.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Reception, not decision-makers
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Most healthcare listings give you a hospital reception line and
                an appointments inbox. Neither reaches the person who approves
                your contract.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Chains, groups and standalones
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                From multi-city chains to single-location diagnostics centres,
                structures differ wildly. We map who actually decides in each,
                by hand.
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
                Decision-maker roles
              </h3>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                <li>→ Hospital directors and medical superintendents</li>
                <li>→ CIOs, IT heads and digital transformation leads</li>
                <li>→ Procurement and materials heads</li>
                <li>→ Administration and operations heads</li>
                <li>→ Lab directors and diagnostics heads</li>
                <li>→ Founders, promoters and managing directors</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 lg:p-8">
              <h3 className="font-semibold mb-4 text-purple-300">
                Sub-sectors we know
              </h3>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                <li>→ Multi-speciality and super-speciality hospitals</li>
                <li>→ Diagnostics and pathology lab chains</li>
                <li>→ Imaging and radiology centres</li>
                <li>→ Clinic and polyclinic networks</li>
                <li>→ Day-care and speciality centres</li>
                <li>→ Healthcare technology and HIS platforms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-sm tracking-[0.2em] text-purple-400 uppercase mb-4">
            Depth in your sector
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 max-w-3xl">
            A 112-keyword targeting system, built for one campaign
          </h2>
          <p className="text-gray-400 max-w-3xl mb-8 leading-relaxed">
            A cybersecurity company needed to reach decision-makers at hospitals
            and diagnostics chains. Instead of pulling a generic healthcare
            list, we built a structured taxonomy of 112 targeting keywords
            across ten healthcare sub-verticals, filtered every contact for
            role-level relevance, and de-duplicated at the person level so the
            same buyer never appeared twice. That is the level of targeting we
            bring to healthcare lists — and we can sustain 500–600 verified
            contacts a day when you need volume.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">112</p>
              <p className="text-xs text-gray-500 mt-1">
                targeting keywords built
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
              Need hospital and diagnostics decision-makers in your pipeline?
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

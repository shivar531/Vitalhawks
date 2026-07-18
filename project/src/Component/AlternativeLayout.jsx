import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSeo from "../utils/useSeo";

/**
 * Shared layout for "alternative to X" pages.
 * Every competitor claim passed in must be factual and fair —
 * we describe what each tool is genuinely good at, then explain
 * the structural difference: they sell software, we deliver a list.
 */
export default function AlternativeLayout({ data }) {
  const [open, setOpen] = useState(null);

  useSeo({
    title: data.title,
    description: data.description,
    path: data.path,
    faqs: data.faqs,
  });

  return (
    <div className="relative bg-[#050507] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.15),transparent_60%)]"></div>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-purple-400 mb-4 uppercase">
          {data.competitor} Alternative
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          Looking for a<br />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
            {data.competitor} alternative in India?
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          {data.heroSub}
        </p>

        <div className="mt-10 flex items-center justify-center">
          <Link
            to="/Contact"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium shadow-md hover:scale-105 transition"
          >
            Get a free sample list
          </Link>
        </div>
      </section>

      {/* Fair play — what the competitor is good at */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            First, what {data.competitor} does well
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">{data.fairPlay}</p>
          <p className="text-gray-500 text-sm leading-relaxed">
            We're not here to tell you it's a bad product. It isn't. The
            question is whether a self-serve database is the right shape for
            what you're trying to do.
          </p>
        </div>
      </section>

      {/* The difference */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
            The difference isn't features. It's who does the work.
          </h2>
          <p className="text-gray-400 max-w-2xl mb-10">
            {data.competitor} sells you access to a database and a set of
            filters. You search, you filter, you spend credits, you export, you
            clean, you check what bounced. VitalHawks sells you the finished
            list.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8">
              <p className="text-xs text-gray-500 tracking-widest mb-4">
                THE SELF-SERVE TOOL MODEL
              </p>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-3">
                <li>→ You subscribe, whether you use it or not</li>
                <li>→ Your team does the searching and filtering</li>
                <li>→ Credits burn on records you end up discarding</li>
                <li>→ You find out what's wrong after your SDR calls it</li>
                <li>→ Coverage is whatever the database happens to hold</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-500/10 to-white/[0.02] p-6 lg:p-8">
              <p className="text-xs text-purple-300 tracking-widest mb-4">
                THE VITALHAWKS MODEL
              </p>
              <ul className="text-gray-300 text-sm leading-relaxed space-y-3">
                <li>→ You brief us once — roles, industry, geography</li>
                <li>→ Our team builds and verifies the list by hand</li>
                <li>→ You pay per verified contact, not per subscription</li>
                <li>→ 95% accuracy guaranteed, wrong contacts replaced free</li>
                <li>→ Brief by 5 PM, list in your inbox by the next morning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Comparison table */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
            {data.competitor} vs VitalHawks
          </h2>
          <p className="text-gray-400 max-w-2xl mb-8">
            A like-for-like look at how the two models work. These are
            structural differences, not a scorecard — each suits a different
            way of working.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="px-5 py-4 font-medium text-gray-400 w-1/3">
                    &nbsp;
                  </th>
                  <th className="px-5 py-4 font-medium text-gray-300">
                    {data.competitor}
                  </th>
                  <th className="px-5 py-4 font-medium text-purple-300">
                    VitalHawks
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.table.map((row, i) => (
                  <tr
                    key={row.label}
                    className={
                      i % 2 === 0
                        ? "border-b border-white/5"
                        : "border-b border-white/5 bg-white/[0.02]"
                    }
                  >
                    <td className="px-5 py-4 text-gray-400 align-top">
                      {row.label}
                    </td>
                    <td className="px-5 py-4 text-gray-400 align-top">
                      {row.them}
                    </td>
                    <td className="px-5 py-4 text-gray-200 align-top">
                      {row.us}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-600 mt-4 leading-relaxed">
            {data.tableNote}
          </p>
        </div>
      </section>

      {/* India case */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
            Why India is a different problem
          </h2>
          <p className="text-gray-400 max-w-2xl mb-10">
            Global databases are built for global coverage. Indian B2B has
            quirks they aren't shaped for.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Mobile-first, not inbox-first
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Indian decision-makers run their day on WhatsApp and mobile
                calls. A work email you can't follow up by phone is half a
                contact.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Beyond the tech hubs
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bengaluru and Hyderabad are covered by everyone. Manufacturers,
                hospitals and regional firms in Tier-2 cities are where global
                coverage thins — and where we research by hand.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Not everyone is on a profile page
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Plant heads, quality leaders, hospital administrators and
                promoters often have no active professional profile. Tools built
                on profile data simply don't have them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honest guidance */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
            When to use which
          </h2>

          <div className="space-y-5">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="font-medium mb-2 text-gray-200">
                Stay with {data.competitor} if…
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {data.stayIf}
              </p>
            </div>

            <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-6">
              <p className="font-medium mb-2 text-purple-200">
                Talk to us if…
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                you sell into India, you need direct mobile numbers that
                actually connect, you'd rather brief someone than run searches
                yourself, or you want a list you can start calling tomorrow
                morning without cleaning it first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-sm tracking-[0.2em] text-purple-400 uppercase mb-4">
            What we can do
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 max-w-3xl">
            500–600 verified contacts a day. Every day. For three weeks.
          </h2>
          <p className="text-gray-400 max-w-3xl mb-8 leading-relaxed">
            A leading Indian insurance marketplace needed verified contacts
            delivered continuously, at volume, without their team stopping to
            clean data. We delivered 500–600 hand-verified contacts every
            working day for three consecutive weeks — no drop in accuracy from
            day one to day twenty-one.
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
              <p className="text-2xl font-semibold text-purple-300">No</p>
              <p className="text-xs text-gray-500 mt-1">subscription or seats</p>
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
            {data.faqs.map((f, i) => (
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
                  <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Legal notice */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-xs text-gray-600 leading-relaxed">
            <span className="text-gray-500">About this comparison:</span>{" "}
            {data.competitor} and its logo are trademarks of their respective
            owner. VitalHawks is not affiliated with, endorsed by, sponsored by,
            or connected to {data.competitor}. The {data.competitor} name is
            used here only to identify the product being compared, as permitted
            for honest comparative reference. Statements about{" "}
            {data.competitor} on this page are drawn from publicly available
            information — the vendor's own published materials and independent
            industry reviews — and reflect our understanding as of{" "}
            {data.asOf}. Products change: features, coverage and pricing may
            have been updated since, and we encourage you to verify current
            details directly with {data.competitor} before deciding. Claims
            about VitalHawks describe our own service and guarantee. If you
            believe anything on this page is inaccurate, please tell us at
            info@vitalhawks.com and we will correct it promptly.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b12] to-[#0a0a10] p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(120,80,255,0.12),transparent_60%)]"></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl md:text-4xl font-light text-gray-200 leading-tight">
              Try us before you renew.
            </h2>
            <p className="mt-2 text-gray-400 text-base leading-relaxed">
              Tell us the exact list you'd build in {data.competitor} — we'll
              send a free verified sample so you can compare it yourself.
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

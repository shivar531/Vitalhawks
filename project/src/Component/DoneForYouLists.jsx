import React, { useState } from "react";
import useSeo from "../utils/useSeo";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "What exactly do I get?",
    a: "A finished, ready-to-dial list of the decision-makers you asked for — direct mobile numbers and verified work emails, deduped and formatted for your CRM. No platform to log into, no credits to spend, no cleaning up afterwards. You brief us, we hand you the list.",
  },
  {
    q: "How is this different from a data tool like Apollo or Lusha?",
    a: "Tools are self-serve — your reps still do the searching, exporting, and cleaning, and you pay per seat whether they use it or not. VitalHawks is done-for-you: a person builds and hand-verifies your list to the brief, so your team never touches the research at all. See our Apollo alternative page for the full comparison.",
  },
  {
    q: "How fast can we get a list?",
    a: "Brief us by 5 PM and your custom-built, verified list is in your inbox by the next morning — typically 500–600 verified contacts per day of delivery, and sustained across multi-week projects when you need volume.",
  },
  {
    q: "What if some of the contacts are wrong?",
    a: "Every contact is hand-verified before it reaches you, and we guarantee 95% accuracy. If more than 5% of your list is wrong, we replace those contacts free — you never pay for a dead number.",
  },
  {
    q: "Which roles and industries do you cover?",
    a: "Any decision-maker role across any industry, pan-India — founders, CXOs, and functional heads in SaaS, financial services, manufacturing, healthcare, real estate, logistics and more. You name the roles, industries and geography; we build to it.",
  },
  {
    q: "How is it priced?",
    a: "You pay per verified contact — no seat fees, no annual platform licence, no minimum credits to burn. You only pay for the finished contacts you actually receive. See our Pricing page for details.",
  },
  {
    q: "Is the data handled compliantly?",
    a: "Our data practices are aligned with India's DPDP Act 2023, and with GDPR for international operations. See our Privacy Policy for full details.",
  },
];

export default function DoneForYouLists() {
  const [open, setOpen] = useState(null);

  useSeo({
    title: "Done-for-You B2B Lead Lists India | VitalHawks",
    description:
      "Stop your reps building lists. VitalHawks delivers done-for-you verified prospect lists — direct mobiles and work emails, 95% accuracy, next morning.",
    path: "/done-for-you-lead-lists",
    faqs,
  });

  return (
    <div className="relative bg-[#050507] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.15),transparent_60%)]"></div>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-purple-400 mb-4 uppercase">
          Done-for-you lists
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          Give your reps their
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
            selling hours back.
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Done-for-you prospect lists — direct mobile numbers and verified work
          emails, built to your ICP and in your inbox by the next morning. Your
          team stops building lists and starts dialing.
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
            Where your sales week actually goes
          </h2>
          <p className="text-gray-400 max-w-2xl mb-10">
            You hired reps to close, not to hunt for phone numbers. But most of
            an outbound team's week disappears before a single real conversation
            starts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Reps research instead of sell
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Hand-building a list means hours spent cross-checking LinkedIn,
                hunting for direct numbers, and guessing at email formats — time
                that never becomes a conversation.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Bad numbers kill momentum
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Every wrong number and bounced email is a dial that goes
                nowhere. Dead data doesn't just waste minutes — it breaks the
                rhythm of the whole calling day.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold mb-2 text-purple-300">
                Tools still need a driver
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Self-serve databases and extensions still make your reps do the
                digging, exporting and cleaning. You pay for seats — and still
                hand the work back to the team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How done-for-you works */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">
            You brief. We build. Your team dials.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 lg:p-8">
              <h3 className="font-semibold mb-4 text-purple-300">
                What you send us
              </h3>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                <li>→ The roles you want to reach</li>
                <li>→ The industries and company profile</li>
                <li>→ The geography — a city, a region, or pan-India</li>
                <li>→ How many contacts, and how often</li>
              </ul>
              <p className="text-gray-500 text-sm leading-relaxed mt-4">
                One line by 5 PM is enough. No platform to learn, no credits to
                budget.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 lg:p-8">
              <h3 className="font-semibold mb-4 text-purple-300">
                What lands next morning
              </h3>
              <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                <li>→ Direct mobile numbers on every contact</li>
                <li>→ Verified work emails, not guessed patterns</li>
                <li>→ Deduped and formatted for your CRM</li>
                <li>→ 95% accurate — or the misses replaced free</li>
              </ul>
              <p className="text-gray-500 text-sm leading-relaxed mt-4">
                A finished list your reps can import and start dialing the same
                day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-sm tracking-[0.2em] text-purple-400 uppercase mb-4">
            Time back on the phones
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 max-w-3xl">
            A five-person team can lose 50+ hours a week to list-building. That's
            a full role, spent not selling.
          </h2>
          <p className="text-gray-400 max-w-3xl mb-8 leading-relaxed">
            When a rep hand-builds even 20 verified contacts a day, the
            research, cross-checking and dead-number dialing quietly eats two to
            three hours. Across a team, that's the better part of a full-time
            role spent on admin instead of pipeline. Done-for-you lists hand that
            time straight back — and when a leading Indian marketplace needed
            volume, we delivered 500–600 hand-verified contacts every working day
            for three straight weeks, with no drop in accuracy from day one to
            day twenty-one.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">
                Next morning
              </p>
              <p className="text-xs text-gray-500 mt-1">brief to delivery</p>
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">95%</p>
              <p className="text-xs text-gray-500 mt-1">
                accuracy — or replaced free
              </p>
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">Zero</p>
              <p className="text-xs text-gray-500 mt-1">
                seats or credits to manage
              </p>
            </div>
            <div className="px-6 py-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-2xl font-semibold text-purple-300">Direct</p>
              <p className="text-xs text-gray-500 mt-1">
                mobiles on every contact
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
              Ready to take list-building off your team's plate?
            </h2>
            <p className="mt-2 text-gray-400 text-base leading-relaxed">
              Tell us your target — get a free verified sample before you spend a
              rupee.
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

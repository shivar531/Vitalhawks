import React from "react";
import { Link } from "react-router-dom";
import useSeo from "../utils/useSeo";

import logoFinfinity from "./photos/Finfinitylogo.png";
import logoDronacharya from "./photos/Dronacharyalogo.png";
import logoPolicy from "./photos/policylogo.png";
import logoHindustan from "./photos/Hindustanlogo.png";
import anton from "./photos/anton1.png";
import returnofidea from "./photos/returnofidea.jpg";
import jiffy from "./photos/jiffy.png";

const clientLogos = [
  { name: "Anton Paar", img: anton },
  { name: "Hindustan Times", img: logoHindustan },
  { name: "Policy Bazaar", img: logoPolicy },
  { name: "Finfinity", img: logoFinfinity },
  { name: "Dronacharya College", img: logoDronacharya },
  { name: "Return of Idea", img: returnofidea },
  { name: "Jiffy", img: jiffy },
];

export default function Testimonials() {
  useSeo({
    title: "Client Testimonials | VitalHawks",
    description:
      "What B2B teams say about working with VitalHawks — verified contact data, understood briefs, and lists that land right the first time.",
    path: "/testimonials",
  });

  return (
    <div className="relative bg-[#050507] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.15),transparent_60%)]"></div>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-14 text-center">
        <p className="text-xs tracking-[0.3em] text-purple-400 mb-4 uppercase">
          Testimonials
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          What our clients
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
            actually say.
          </span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Real words from real B2B teams — the ones who keep coming back,
          project after project.
        </p>
      </section>

      {/* Featured testimonial */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-500/10 to-white/[0.02] p-6 sm:p-10 backdrop-blur-xl">
          <div className="text-purple-500 text-4xl mb-6 leading-none">“</div>

          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8">
            I just wanted to point out that your database is exceptionally
            good. What impresses us the most is how easily you understood our
            requirements from day one and delivered a crystal-clear, highly
            relevant database. Thank you for your excellent work and attention
            to detail. We truly appreciate it!
          </p>

          <div className="border-t border-white/10 pt-5 flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-purple-500/20 flex items-center justify-center text-sm shrink-0">
              BD
            </div>
            <div>
              <p className="text-sm text-gray-200">Business Development Head</p>
              <p className="text-xs text-gray-500">
                Client since 2025 · shared over WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why they stay */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-3">
            Why teams keep coming back
          </h2>
          <p className="text-gray-400 max-w-2xl mb-10">
            Most contact data is a one-time purchase people regret. Our clients
            return project after project — some have been with us for over a
            year.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
              <p className="text-xl font-semibold text-purple-300 mb-2">
                We get the brief
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tell us your ICP once. We build to it — roles, industry, company
                size, geography — without a dozen rounds of clarification.
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
                Brief us by evening, start calling the next morning. 500–600
                verified contacts a day when you need volume.
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

      {/* Logos */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-xs tracking-[0.3em] text-purple-400 mb-6">
            TRUSTED BY
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {clientLogos.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-center h-20 rounded-xl px-4 py-3 bg-white/95 border border-white/10 opacity-80 hover:opacity-100 transition duration-300"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="max-h-10 max-w-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
            Worked with us?
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            We'd genuinely value your feedback — it takes 60 seconds and helps
            other teams decide.
          </p>
          <a
            href="https://g.page/r/CVNRP8ShhShwEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition text-sm"
          >
            Leave a Google review
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b12] to-[#0a0a10] p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(120,80,255,0.12),transparent_60%)]"></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl md:text-4xl font-light text-gray-200 leading-tight">
              Want a list that lands right the first time?
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

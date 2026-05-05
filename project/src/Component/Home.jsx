import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popupform from "./Popupform";

const logos = [
  "Saas & Software",
  "Financial Services ",
  "Enterprise IT ",
  "BFSI ",
  "Management Consultion ",
  "Cybersecurity ",
  "Healthcare IT ",
  "Manufacturing ",
  "Pofessional Services ",
  "Staffing & Recruiting ",
];

export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/*  HERO SECTION  */}
      <section className="relative bg-[#050507] text-white overflow-hidden">
        {/* Background Glow */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.15),transparent_60%)]"></div>

        {/* HERO */}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-10 text-center relative z-10">
          {/* Top Badge */}

          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            Verified decision-maker data · Built for revenue teams
          </div>

          {/* Heading */}

          <h1 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Stop chasing leads.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
              Start closing deals.
            </span>
          </h1>

          {/* Description */}

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We give your sales, SDR, and marketing teams their time back — with
            verified lists of direct mobile numbers and emails delivered in 48
            hours, so every hour of their day goes toward revenue, not research.
          </p>

          {/* Buttons */}

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="p-5 sm:p-5 sm:p-4 sm:p-6 lg:p-8 lg:p-10">
              {/* BUTTON */}

              <button
                onClick={() => {
                  console.log("clicked"); // debug
                  setOpen(true);
                }}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium shadow-md hover:scale-105 transition"
              >
                Book a call
              </button>

              {/* MODAL */}

              <Popupform isOpen={open} onClose={() => setOpen(false)} />
            </div>
          </div>
        </div>

        {/* STATS (tight attached) */}

        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 md:grid-cols-3 gap-5 sm:p-4 sm:p-6 lg:p-8 text-center">
            <div>
              <h2 className="text-4xl font-semibold">
                80<span className="text-purple-500">hrs</span>
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                Saved per month per team
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold">350+</h2>

              <p className="text-gray-500 mt-2 text-sm">
                B2B revenue teams served
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold">48h</h2>

              <p className="text-gray-500 mt-2 text-sm">
                From brief to verified list
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050507] text-white px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* TRUSTED BY */}
          <div className="mb-8 lg:mb-12 lg:mb-20">
            <p className="text-xs tracking-[0.3em] text-purple-400 mb-4">
              TRUSTED BY
            </p>

            <h3 className="text-gray-400 text-base sm:text-lg mb-6 lg:mb-10">
              350+ B2B teams trust VitalHawks to fill their pipeline with the
              right people.
            </h3>

            {/* Logos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:p-6">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center min-h-16 rounded-xl px-3 py-3 text-center 
                bg-white/5 border border-white/10 text-gray-500 
                hover:text-white hover:border-white/20 transition duration-300"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8 lg:mb-12 lg:mb-20"></div>

          {/* TESTIMONIALS */}
          <section className="bg-[#050507] text-white px-6 ">
            <div className="max-w-7xl mx-auto">
              {/* Header */}

              <div className="mb-8 lg:mb-14">
                <p className="text-sm tracking-[0.2em] text-purple-400 uppercase mb-4">
                  Testimonials
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-4xl sm:text-5xl font-semibold mb-4">
                  What our clients say
                </h2>

                <p className="text-gray-400 max-w-xl">
                  Real results from real revenue teams who got their time back.
                </p>
              </div>

              {/* Cards */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:p-4 sm:p-6 lg:p-8">
                {/* Card 1 */}

                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-5 sm:p-4 sm:p-6 lg:p-8 backdrop-blur-xl">
                  <div className="text-purple-500 text-3xl mb-6">“</div>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    As a founder of a mid-sized B2B services company, I needed
                    direct access to HR heads, CIOs, and operations leaders.
                    VitalHawks delivered a curated list in one day. Our reply
                    rates jumped — and so did our pipeline.
                  </p>

                  <div className="flex items-end justify-between mb-6">
                    <h3 className="text-4xl sm:text-5xl font-semibold text-emerald-400">
                      52.3%
                    </h3>

                    <span className="text-gray-500 text-sm">
                      outreach success rate
                    </span>
                  </div>

                  <div className="border-t border-white/10 pt-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-sm">
                      RK
                    </div>

                    <div>
                      <p className="text-sm">Rahul K.</p>

                      <p className="text-xs text-gray-500">
                        Founder, B2B Services Company
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}

                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-5 sm:p-4 sm:p-6 lg:p-8 backdrop-blur-xl">
                  <div className="text-purple-500 text-3xl mb-6">“</div>

                  <p className="text-gray-400 leading-relaxed mb-8">
                    As Head of Marketing at a financial services firm, I needed
                    a precise list of CFOs and co-founders. Within 48 hours I
                    had a tailored, verified list. We went from cold outreach to
                    booked meetings — 41.9% more of them.
                  </p>

                  <div className="flex items-end justify-between mb-6">
                    <h3 className="text-4xl sm:text-5xl font-semibold text-emerald-400">
                      41.9%
                    </h3>

                    <span className="text-gray-500 text-sm">
                      meetings booked
                    </span>
                  </div>

                  <div className="border-t border-white/10 pt-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-sm">
                      SM
                    </div>

                    <div>
                      <p className="text-sm">Sarah M.</p>

                      <p className="text-xs text-gray-500">
                        Head of Marketing, Financial Services
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => {
                    console.log("clicked");
                    setOpen(true);
                  }}
                  className="px-6 py-3 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition"
                >
                  These results could be yours — book a call
                </button>

                <Popupform isOpen={open} onClose={() => setOpen(false)} />
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="bg-[#050507] text-white px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto">
          {/* Header */}

          <div className="mb-6 lg:mb-10">
            <p className="text-sm tracking-[0.2em] text-purple-400 uppercase mb-3">
              Case Studies
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-4xl sm:text-5xl font-semibold mb-3">
              Real outcomes from our clients
            </h2>

            <p className="text-gray-400 max-w-xl">
              See exactly how we've moved the needle for revenue teams like
              yours.
            </p>
          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-6">
            {/* Card 1 */}

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-4 sm:p-6 backdrop-blur-xl">
              <p className="text-xs text-gray-500 tracking-widest mb-4">
                CASE STUDY 01
              </p>

              <h3 className="text-xl font-semibold mb-3 leading-snug">
                How a B2B founder cut through the noise and reached the C-suite
                in 24 hours
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                A mid-sized B2B services founder was burning time on generic
                outreach with no access to real decision-makers. VitalHawks
                built a targeted list of CFOs, CIOs, and HR leads — delivered in
                24 hours.
              </p>

              {/* Stats */}

              <div className="flex flex-wrap gap-3 mb-5">
                <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-lg font-semibold text-purple-300">50%</p>

                  <p className="text-xs text-gray-500">Response rate lift</p>
                </div>

                <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-lg font-semibold text-purple-300">30%</p>

                  <p className="text-xs text-gray-500">Pipeline growth</p>
                </div>

                <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-lg font-semibold text-purple-300">24h</p>

                  <p className="text-xs text-gray-500">List delivered</p>
                </div>
              </div>

              <button
                onClick={() => {
                  console.log("clicked");
                  setOpen(true);
                }}
                className="text-sm px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition text-gray-300"
              >
                Get similar results — book a call
              </button>
            </div>

            {/* Card 2 */}

            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-4 sm:p-6 backdrop-blur-xl">
              <p className="text-xs text-gray-500 tracking-widest mb-4">
                CASE STUDY 02
              </p>

              <h3 className="text-xl font-semibold mb-3 leading-snug">
                The CFO list that paid for itself 8.4 times over
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                The Head of Marketing at a financial services company needed
                exact CFO and co-founder contacts to fuel a high-stakes outbound
                campaign. VitalHawks delivered a verified list within 48 hours.
              </p>

              {/* Stats */}

              <div className="flex flex-wrap gap-3 mb-5">
                <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-lg font-semibold text-purple-300">8.4x</p>

                  <p className="text-xs text-gray-500">Revenue increase</p>
                </div>

                <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-lg font-semibold text-purple-300">48h</p>

                  <p className="text-xs text-gray-500">Turnaround time</p>
                </div>

                <div className="px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-lg font-semibold text-purple-300">100%</p>

                  <p className="text-xs text-gray-500">Verified contacts</p>
                </div>
              </div>

              <button
                onClick={() => {
                  console.log("clicked");
                  setOpen(true);
                }}
                className="text-sm px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition text-gray-300"
              >
                Start your success story — book a call
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050507] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b12] to-[#0a0a10] p-4 sm:p-6 md:p-5 sm:p-5 sm:p-4 sm:p-6 lg:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:p-6 overflow-hidden">
            {/* Glow */}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(120,80,255,0.12),transparent_60%)]"></div>

            {/* LEFT */}

            <div className="relative z-10 max-w-xl">
              <h2 className="text-2xl md:text-4xl font-light text-gray-200 leading-tight">
                Ready to talk to the right people?
              </h2>

              <p className="mt-2 text-gray-400 text-base leading-relaxed">
                Two questions, one call. Your list is ready before you hang up.
              </p>
            </div>

            {/* RIGHT */}

            <div className="relative z-10 mt-4 flex justify-center">
              <button
                onClick={() => setOpen(true)}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium shadow-md hover:scale-105 transition"
              >
                Book a call
              </button>
            </div>
          </div>

          {/* MODAL (keep OUTSIDE button area) */}

          <Popupform isOpen={open} onClose={() => setOpen(false)} />
        </div>
      </section>
    </>
  );
}

import React, { useState } from "react";
import { FiSliders, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { FiShield, FiClock, FiBarChart2 } from "react-icons/fi";
import Popupform from "./Popupform";

import { Link } from "react-router-dom";

export default function HowItWorks() {
  const [open, setOpen] = useState(false);
  return (
    <>


{/* HERO SECTION  */}
<section className="relative bg-[#050507] text-white px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-8 overflow-hidden">


      

{/* Subtle Glow */}

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12),transparent_60%)]"></div>

<div className="max-w-5xl mx-auto text-center relative z-10">

  {/* Top Badge */}

  <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">

    <span className="w-2 h-2 rounded-full bg-purple-500"></span>

    Built for sales, SDR & marketing teams

  </div>

  {/* Heading */}

  <h2 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">

    How{" "}

    <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">

      VitalHawks

    </span>{" "}

    works

  </h2>

  {/* Description */}

  <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">

    No scraping. No databases. Every list is hand-researched, human-verified,

    and delivered within 48 hours — so your team starts outreach immediately.

  </p>

</div>

</section>

<section className="bg-[#050507] text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">

<div className="max-w-7xl mx-auto">

  {/* Header */}

  <div className="mb-6 lg:mb-10">

    <p className="text-sm tracking-[0.2em] text-purple-400 uppercase mb-3">

      How it works

    </p>

    <h2 className="text-3xl sm:text-4xl md:text-4xl sm:text-5xl font-semibold mb-3">

      Your list, delivered in 3 steps

    </h2>

    <p className="text-gray-400 max-w-2xl">

      Every list includes verified direct mobile numbers and work emails —

      so your team can reach decision-makers on every channel, not just hope

      they check their inbox.

    </p>

  </div>

  {/* Cards */}

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:p-6">

    {/* STEP 1 */}

    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-4 sm:p-6 backdrop-blur-xl">

      

      <p className="text-xs text-gray-500 tracking-widest mb-4">

        STEP 01

      </p>

      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 mb-5">

        <FiSliders className="text-purple-400 text-lg" />

      </div>

      <h3 className="text-lg font-semibold mb-2">

        Tell us who you need

      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-4">

        Share your target roles, industry, geography, and company size.

        Tell us whether you need mobile numbers, emails, or both — we’ll

        build exactly that.

      </p>

      <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">

        Takes 5 minutes

      </span>

    </div>

    {/* STEP 2 */}

    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-4 sm:p-6 backdrop-blur-xl">

      

      <p className="text-xs text-gray-500 tracking-widest mb-4">

        STEP 02

      </p>

      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 mb-5">

        <FiCheckCircle className="text-purple-400 text-lg" />

      </div>

      <h3 className="text-lg font-semibold mb-2">

        We build and verify your list

      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-4">

        Our team manually researches and verifies every mobile number and

        email address by hand. No bots, no bulk scraping — every contact is

        checked before it reaches you.

      </p>

      <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">

        Human-verified mobile + email

      </span>

    </div>

    {/* STEP 3 */}

    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-4 sm:p-6 backdrop-blur-xl">

      

      <p className="text-xs text-gray-500 tracking-widest mb-4">

        STEP 03

      </p>

      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 mb-5">

        <FiArrowRight className="text-purple-400 text-lg" />

      </div>

      <h3 className="text-lg font-semibold mb-2">

        Call them. Email them. Close them.

      </h3>

      <p className="text-gray-400 text-sm leading-relaxed mb-4">

        You receive a clean, verified list within 24–48 hours — direct mobile

        numbers and work emails, ready to plug into your CRM or outreach tool.

      </p>

      <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">

        Delivered in 24–48h

      </span>

    </div>

  </div>

</div>

</section>



{/* SAMPLE DATA */}
    <section className="bg-[#050507] text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <p className="text-xs tracking-[0.3em] text-purple-400 mb-4">
          SAMPLE DATA
        </p>

        <h2 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6">
          See exactly what you'll receive
        </h2>

        <p className="text-gray-400 text-base sm:text-lg mb-8 lg:mb-12 max-w-2xl">
          Every list includes name, title, company, verified email, and LinkedIn — clean and ready to use.
        </p>

        {/* Table Container */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden">

          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 sm:px-6 py-4 border-b border-white/10">
  <div className="flex items-center gap-3 min-w-0">
    <div className="flex gap-2 shrink-0">
      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full"></span>
      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></span>
      <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></span>
    </div>

    <span className="text-xs sm:text-sm text-gray-400 truncate">
      sample_list_cfo_fintech.csv
    </span>
  </div>

  <span className="w-fit text-[11px] sm:text-xs px-3 sm:px-4 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 whitespace-nowrap">
    10 verified contacts
  </span>
</div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              
              <thead className="text-gray-500 border-b border-white/10">
                <tr>
                  <th className="px-6 py-4">NAME</th>
                  <th className="px-6 py-4">TITLE</th>
                  <th className="px-6 py-4">COMPANY</th>
                  <th className="px-6 py-4">EMAIL</th>
                  <th className="px-6 py-4">LINKEDIN</th>
                  <th className="px-6 py-4">STATUS</th>
                </tr>
              </thead>

              <tbody className="text-gray-300">

                {/* Row 1 */}
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4">James Whitfield</td>
                  <td className="px-6 py-4">CFO</td>
                  <td className="px-6 py-4">Meridian Capital</td>
                  <td className="px-6 py-4">j.whitfield@meridiancap.com</td>
                  <td className="px-6 py-4 text-purple-400 cursor-pointer">View profile</td>
                  <td className="px-6 py-4 text-green-400">● Verified</td>
                </tr>

                {/* Row 2 */}
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4">Priya Nair</td>
                  <td className="px-6 py-4">Co-founder & CFO</td>
                  <td className="px-6 py-4">Stackr Finance</td>
                  <td className="px-6 py-4">priya@stackrfinance.io</td>
                  <td className="px-6 py-4 text-purple-400 cursor-pointer">View profile</td>
                  <td className="px-6 py-4 text-green-400">● Verified</td>
                </tr>

                {/* Row 3 */}
                <tr className="border-b border-white/5">
                  <td className="px-6 py-4">Marcus Chen</td>
                  <td className="px-6 py-4">Chief Financial Officer</td>
                  <td className="px-6 py-4">Vortex Payments</td>
                  <td className="px-6 py-4">m.chen@vortexpay.com</td>
                  <td className="px-6 py-4 text-purple-400 cursor-pointer">View profile</td>
                  <td className="px-6 py-4 text-green-400">● Verified</td>
                </tr>

                {/* Blurred Rows */}
                {[1,2].map((_, i) => (
                  <tr key={i} className="border-b border-white/5 opacity-40 blur-[2px]">
                    <td className="px-6 py-4">████████</td>
                    <td className="px-6 py-4">████████</td>
                    <td className="px-6 py-4">████████</td>
                    <td className="px-6 py-4">████████</td>
                    <td className="px-6 py-4">████████</td>
                    <td className="px-6 py-4">████████</td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

          {/* Bottom CTA */}
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-gray-500 text-sm">
              Remaining 7 contacts unlocked after request
            </p>

            <Link
  to="/contact"
  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium hover:scale-105 transition inline-block"
>
  Get full sample list
</Link>
          </div>

        </div>
      </div>
    </section>


{/* CTA BUTTON  */}
<section className="relative bg-[#050507] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,80,255,0.12),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.10),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:gap-14 items-center">

          {/* LEFT */}

          <div>

            <p className="text-xs tracking-[0.35em] text-purple-400 mb-5">

              GET STARTED

            </p>

            <h2 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-5">

              Stop searching.

              <br />

              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">

                Start closing.

              </span>

            </h2>

            <p className="text-gray-400 text-base sm:text-lg max-w-xl">

              We build highly targeted, human-verified lead lists tailored to your exact ICP —

              so your outreach lands better and converts faster.

            </p>

          </div>

          {/* RIGHT CARD */}

          <div className="relative group">

            {/* Gradient Border */}

            <div className="p-[1px] rounded-2xl bg-gradient-to-br from-white/10 via-purple-500/20 to-indigo-500/20 group-hover:from-purple-500/40 group-hover:to-indigo-500/40 transition duration-500">

              {/* Glass Card */}

              <div className="rounded-2xl bg-[#0b0b12]/80 backdrop-blur-xl p-5 sm:p-4 sm:p-6 lg:p-8 md:p-5 sm:p-5 sm:p-4 sm:p-6 lg:p-8 lg:p-10">

                <h3 className="text-lg text-gray-200 mb-5">

                  Get your custom list

                </h3>

                {/* CTA BUTTON */}

                <button

                  onClick={() => setOpen(true)}

className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium shadow-md hover:scale-[1.03] transition">
                  Book a call

                </button>

                {/* TRUST TEXT */}

                <p className="text-xs text-gray-500 mt-5">

                  Delivered in 24–48 hours • 100% human-verified

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* MODAL OUTSIDE (IMPORTANT) */}

      <Popupform

        isOpen={open}

        onClose={() => setOpen(false)}

      />

    </section>


<section className="bg-[#050507] text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-6 lg:mb-10">

          <p className="text-sm tracking-[0.2em] text-purple-400 uppercase mb-3">

            Why VitalHawks

          </p>

          <h2 className="text-3xl sm:text-4xl md:text-4xl sm:text-5xl font-semibold mb-3">

            Every way to reach them. One list.

          </h2>

          <p className="text-gray-400 max-w-3xl">

            Most providers hand you an email and call it done. We go further —

            verified direct mobile numbers alongside work emails, so your team

            never hits a dead end.

          </p>

        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:p-6">

          {/* Card 1 */}

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-4 sm:p-6 backdrop-blur-xl">

            

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 mb-5">

              <FiShield className="text-purple-400" />

            </div>

            <h3 className="text-lg font-semibold mb-2">

              Mobile number + email, not just one or the other

            </h3>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">

              Most data providers give you a work email and leave you to figure

              out the rest. We deliver verified direct mobile numbers alongside

              emails — so your team can call, email, or do both.

            </p>

            <p className="text-xs text-gray-500 mb-3">

              VITALHAWKS VS OTHERS

            </p>

            <div className="flex gap-2 flex-wrap">

              <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">

                ● Verified mobile + email

              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-500 line-through">

                Email-only contact lists

              </span>

            </div>

          </div>

          {/* Card 2 */}

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-4 sm:p-6 backdrop-blur-xl">

            

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 mb-5">

              <FiCheckCircle className="text-purple-400" />

            </div>

            <h3 className="text-lg font-semibold mb-2">

              Human-verified, not scraped

            </h3>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">

              Every mobile number and email address is manually checked by our

              team before it reaches you. No bots, no outdated data, no numbers

              that ring nowhere.

            </p>

            <p className="text-xs text-gray-500 mb-3">

              VITALHAWKS VS OTHERS

            </p>

            <div className="flex gap-2 flex-wrap">

              <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">

                ● 100% human-verified

              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-500 line-through">

                Auto-scraped databases

              </span>

            </div>

          </div>

          {/* Card 3 */}

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-4 sm:p-6 backdrop-blur-xl">

            

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 mb-5">

              <FiClock className="text-purple-400" />

            </div>

            <h3 className="text-lg font-semibold mb-2">

              Ready in 24–48 hours

            </h3>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">

              Most data providers charge extra for speed or make you wait days.

              We deliver complete lists — mobile numbers, emails, LinkedIn —

              within 24–48 hours as standard.

            </p>

            <p className="text-xs text-gray-500 mb-3">

              VITALHAWKS VS OTHERS

            </p>

            <div className="flex gap-2 flex-wrap">

              <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">

                ● 24–48h standard delivery

              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-500 line-through">

                5–10 day wait times

              </span>

            </div>

          </div>

          {/* Card 4 */}

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-4 sm:p-6 backdrop-blur-xl">

            

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 mb-5">

              <FiBarChart2 className="text-purple-400" />

            </div>

            <h3 className="text-lg font-semibold mb-2">

              Results you can measure

            </h3>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed">

              Our clients average a 40–52% improvement in outreach success rates.

              We don’t just deliver contacts — we deliver outcomes.

            </p>

            <p className="text-xs text-gray-500 mb-3">

              VITALHAWKS VS OTHERS

            </p>

            <div className="flex gap-2 flex-wrap">

              <span className="px-3 py-1 text-xs rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">

                ● Avg. 40–52% better results

              </span>

              <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-500 line-through">

                No outcome accountability

              </span>

            </div>

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

  <Popupform

    isOpen={open}

    onClose={() => setOpen(false)}

  />

</div>

</section>

    </>
  );
}
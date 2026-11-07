


import React, { useState } from "react";
import useSeo from "../utils/useSeo";
import { FiShield, FiCheck, FiX, FiPlus, FiMinus, FiVideo, FiZap, FiDatabase, FiUpload, FiRefreshCw, FiPhoneOff, FiLock, FiGlobe, FiFileText, FiCreditCard } from "react-icons/fi";
import Plan from "./Plan";
import { Link } from "react-router-dom";
import Popupform from "./Popupform";
export default function Pricing() {
  useSeo({
    title: "Pricing | Verified B2B Contact Data | VitalHawks",
    description:
      "Simple pricing for verified B2B contact data — $1.25 per verified lead, direct mobile and work email included. 95% accurate at delivery, every wrong mobile number replaced free.",
    path: "/Pricing",
  });

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const faqs = [
    {
      q: "What is your accuracy guarantee?",
      a: "Your list is 95% accurate at delivery. On top of that, every wrong mobile number is replaced free — no questions asked. Free replacement applies to mobile numbers."
    },
    {
      q: "How do I claim a replacement?",
      a: "Simply flag the wrong mobile numbers and send them back. We verify and replace them within 24–48 hours."
    },
    {
      q: "What's included in every lead?",
      a: "Verified mobile number, work email, LinkedIn profile, job title, company name, company size, revenue range and tech stack — delivered as an Excel and CSV file ready to import into your CRM."
    },
    {
      q: "How long does delivery take?",
      a: "Delivered within 24–48 hours as standard. Need it faster? Add rush delivery and get your list within 12 hours."
    },
    {
      q: "Can I filter by role, industry, or location?",
      a: "Yes — you define your exact target and we build the list accordingly."
    },
    {
      q: "What is the launch offer?",
      a: "Our first 20 US customers get 20% off any plan — $1.00 per lead instead of $1.25 on the Starter plan. All prices are in USD with no taxes added."
    },
    {
      q: "How do I pay?",
      a: "Start with a free sample list. Once you're happy, we send an invoice in USD and payment is 100% upfront by bank transfer or card. Your list is delivered within 24–48 hours of payment."
    },
    {
      q: "Is your data compliant?",
      a: "Yes. US mobile numbers are scrubbed against the National Do Not Call Registry, we honor CCPA opt-out and deletion requests, our practices are GDPR-aligned, and all data comes from public and business sources only."
    }
  ];

  return (
    <>

    {/* HERO SECTION */}
    <section className="relative bg-[#050507] text-white px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-8 overflow-hidden">

      

{/* Glow */}

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12),transparent_60%)]"></div>

<div className="max-w-4xl mx-auto text-center relative z-10">

  {/* Badge */}

  <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">

    <span className="w-2 h-2 rounded-full bg-purple-500"></span>

    Transparent pricing · No hidden fees

  </div>

  {/* Heading */}

  <h2 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">

    Simple pricing.

    <br />

    <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">

      Serious results.

    </span>

  </h2>

  {/* Description */}

  <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-6 lg:mb-10">

    One flat rate per verified lead — direct mobile number and work email

    included. No subscriptions, no surprises.

  </p>

  {/* BOOK A CALL CTA */}

  <div className="flex justify-center mb-6 lg:mb-10">

    <a

      href="https://calendly.com/shiva-vitalhawks/15min"

      target="_blank"

      rel="noopener noreferrer"

      className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl border border-purple-500/30 bg-purple-500/10 backdrop-blur-xl hover:bg-purple-500/20 hover:border-purple-500/50 transition"

    >

      <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-500/20 border border-purple-500/30 shrink-0">

        <FiVideo className="text-purple-300" />

      </span>

      <span className="text-left">

        <span className="block text-[11px] tracking-[0.2em] text-purple-300">

          NOT SURE WHICH PLAN?

        </span>

        <span className="block text-sm sm:text-base text-gray-100">

          Book a 15-min video call — we'll size it for you

        </span>

      </span>

      <span className="text-purple-300 group-hover:translate-x-1 transition">→</span>

    </a>

  </div>

  {/* Pricing Boxes */}

  <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">

    {/* Price */}

    <div className="px-8 py-5 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl">

      <h3 className="text-4xl font-semibold">

        $1.25{" "}

        <span className="text-sm text-gray-400 font-normal">

          per verified lead

        </span>

      </h3>

    </div>

    {/* Guarantee */}

    <div className="flex items-center gap-3 px-6 py-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-xl">

      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500/20">

        <FiShield className="text-emerald-400" />

      </div>

      <div className="text-left">

        <p className="text-emerald-400 font-medium">

          95% accurate at delivery

        </p>

        <p className="text-xs text-gray-400">

          Every wrong mobile number replaced free

        </p>

      </div>

    </div>

  </div>

  {/* Footer Note */}

  <p className="text-xs text-gray-500">

    Mobile number + email included · Launch offer: $1.00/lead for our first 20 US customers

  </p>

</div>

</section>

    {/* PLANS */}
    <Plan />

    <section className="bg-[#050507] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 text-white">
  <div className="max-w-7xl mx-auto">

    {/* GUARANTEE + ENTERPRISE WRAPPER */}
    <div className="space-y-14">

      {/* GUARANTEE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:p-5 sm:p-4 sm:p-6 lg:p-8 lg:p-10 items-center">

        <div>
          <p className="text-xs tracking-[0.25em] text-emerald-400 mb-4">
            GUARANTEE
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light mb-4">
            95% accurate. Every wrong mobile replaced free.
          </h2>

          <p className="text-gray-400 text-base max-w-lg">
            Your list is 95% accurate at delivery. Find a wrong mobile number? We replace it — every single one.
          </p>
        </div>

        <div className="md:text-right">
          <h1 className="text-6xl sm:text-[80px] md:text-[100px] font-light leading-none">
            95%
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Verified accuracy rate
          </p>
        </div>

      </div>

      {/* Divider (subtle, tight) */}
      <div className="border-t border-white/10"></div>

      {/* ENTERPRISE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:p-5 sm:p-4 sm:p-6 lg:p-8 lg:p-10 items-center">

        <div>
          <p className="text-xs tracking-[0.25em] text-purple-400 mb-4">
            ENTERPRISE
          </p>

          <h3 className="text-2xl sm:text-3xl md:text-5xl font-light mb-4">
            Need more than 20,000 leads?
          </h3>

          <p className="text-gray-400 text-base mb-6">
            We handle large-scale custom data builds tailored to your needs.
          </p>

          <div className="flex flex-wrap gap-2">
            {["25,000+", "Multi-industry", "Global", "Recurring"].map((tag, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 border border-white/10 rounded-full text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="md:text-right">
          <Link
            to="/Contact"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:opacity-90 transition inline-block"
          >
            Talk to us
          </Link>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Two ways to start */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:p-5 sm:p-6 lg:p-8 lg:p-10">

        <Link
          to="/Plan"
          className="block rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8 hover:border-purple-500/40 transition"
        >
          <p className="text-xs tracking-[0.25em] text-purple-400 mb-3">
            PLANS &amp; PACKAGES
          </p>
          <h3 className="text-xl sm:text-2xl font-light mb-2 text-gray-200">
            Pick a package that fits your volume
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            One-off lists, or ongoing monthly delivery of verified contacts.
          </p>
        </Link>

        <Link
          to="/SampleList"
          className="block rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6 lg:p-8 hover:border-purple-500/50 transition"
        >
          <p className="text-xs tracking-[0.25em] text-purple-400 mb-3">
            FREE SAMPLE LIST
          </p>
          <h3 className="text-xl sm:text-2xl font-light mb-2 text-gray-200">
            Not ready to buy? Take a sample first
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Check the mobile numbers and emails yourself before you spend
            anything.
          </p>
        </Link>

      </div>

    </div>

  </div>
</section>

    {/* ADD-ONS */}
    <section className="bg-[#050507] text-white px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 lg:mb-12">
          <p className="text-xs tracking-[0.35em] text-purple-400 mb-4">ADD-ONS</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">Make your list work harder</h2>
          <p className="text-gray-400 max-w-2xl">What's included free, and optional extras you can add to any plan.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: <FiZap />, name: "Rush delivery", price: "+$0.15", unit: "per lead", desc: "Your list delivered within 12 hours instead of 24–48." },
            { icon: <FiDatabase />, name: "Company data", price: "Free", unit: "included", desc: "Company size, revenue range and tech stack for every contact." },
            { icon: <FiUpload />, name: "CRM-ready file", price: "Free", unit: "included", desc: "Excel and CSV, ready to import straight into HubSpot, Salesforce, Pipedrive or Zoho." },
            { icon: <FiRefreshCw />, name: "Monthly re-verification", price: "$0.25", unit: "per lead / month", desc: "We re-check your list every month and replace contacts who've moved on." },
          ].map((a, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-[#0b0b12] p-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-500/15 text-purple-300 mb-5">{a.icon}</div>
              <p className="text-gray-200 font-medium mb-1">{a.name}</p>
              <p className="text-2xl font-light text-white">
                {a.price} <span className="text-xs text-gray-500">{a.unit}</span>
              </p>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* COMPARISON */}
    <section className="bg-[#050507] text-white px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 lg:mb-12 text-center">
          <p className="text-xs tracking-[0.35em] text-purple-400 mb-4">HOW WE COMPARE</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4">The only guarantee on mobile numbers</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">See what you actually pay for a mobile number that works.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px] text-sm text-left">
            <thead className="bg-white/5 text-gray-400">
              <tr>
                <th className="px-5 py-4 font-normal"></th>
                <th className="px-5 py-4 font-normal">Price</th>
                <th className="px-5 py-4 font-normal">Contract</th>
                <th className="px-5 py-4 font-normal">Mobile guarantee</th>
                <th className="px-5 py-4 font-normal">List built for you</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-gray-300">
              {[
                { name: "ZoomInfo", price: "From ~$15,000 / year", contract: "Annual only", guarantee: false, built: false },
                { name: "Apollo", price: "~$3 per mobile", contract: "Monthly seats", guarantee: false, built: false },
                { name: "Lusha", price: "~$1 per contact", contract: "Monthly seats", guarantee: false, built: false },
                { name: "VitalHawks", price: "$1.25 per lead", contract: "None — pay per list", guarantee: true, built: true, us: true },
              ].map((r, i) => (
                <tr key={i} className={r.us ? "bg-purple-500/10 text-white" : ""}>
                  <td className={`px-5 py-4 ${r.us ? "font-medium text-purple-300" : ""}`}>{r.name}</td>
                  <td className="px-5 py-4">{r.price}</td>
                  <td className="px-5 py-4">{r.contract}</td>
                  <td className="px-5 py-4">{r.guarantee ? <FiCheck className="text-green-400" /> : <FiX className="text-gray-600" />}</td>
                  <td className="px-5 py-4">{r.built ? <FiCheck className="text-green-400" /> : <FiX className="text-gray-600" />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center">
          Competitor pricing based on publicly available information, November 2026. Prices may vary by plan.
        </p>
      </div>
    </section>

    {/* COMPLIANCE + PAYMENT */}
    <section className="bg-[#050507] text-white px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">

        <div className="rounded-2xl border border-white/10 bg-[#0b0b12] p-6 lg:p-8">
          <p className="text-xs tracking-[0.25em] text-emerald-400 mb-4">COMPLIANCE</p>
          <h3 className="text-2xl sm:text-3xl font-light mb-6">Data you can use with confidence</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            {[
              { icon: <FiPhoneOff />, t: "DNC-scrubbed mobiles", d: "US numbers checked against the National Do Not Call Registry." },
              { icon: <FiLock />, t: "CCPA opt-outs honored", d: "Anyone who asks to be removed is deleted from our data." },
              { icon: <FiGlobe />, t: "GDPR-aligned", d: "Practices aligned with GDPR for international contacts." },
              { icon: <FiShield />, t: "Public & business sources only", d: "No scraped personal data — ever." },
            ].map((c, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-emerald-400 mt-0.5">{c.icon}</span>
                <span><span className="text-gray-100">{c.t}</span><span className="block text-gray-500">{c.d}</span></span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0b0b12] p-6 lg:p-8">
          <p className="text-xs tracking-[0.25em] text-purple-400 mb-4">PAYMENT</p>
          <h3 className="text-2xl sm:text-3xl font-light mb-6">Simple, upfront billing</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            {[
              { icon: <FiCheck />, t: "Free sample first", d: "Check the data yourself before you pay anything." },
              { icon: <FiFileText />, t: "Invoiced in USD", d: "No taxes added, no hidden fees." },
              { icon: <FiCreditCard />, t: "Bank transfer or card", d: "100% upfront. List delivered within 24–48 hours of payment." },
              { icon: <FiX />, t: "No contracts, no seats", d: "Pay per list. Come back whenever you need more." },
            ].map((c, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-purple-300 mt-0.5">{c.icon}</span>
                <span><span className="text-gray-100">{c.t}</span><span className="block text-gray-500">{c.d}</span></span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>

    {/* FAQ */}
    <section className="bg-[#050507] text-white px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
  <div className="max-w-4xl mx-auto">

    <div className="mb-6 lg:mb-10 text-center">
      <p className="text-xs tracking-[0.4em] text-purple-400 mb-3">
        FAQ
      </p>
      <h2 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
        Common questions
      </h2>
    </div>

    <div className="border-t border-white/10 divide-y divide-white/10">

      {faqs.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setActive(active === i ? null : i)}
            className="w-full flex justify-between py-4 text-left"
          >
            <span className="text-base text-gray-200">{item.q}</span>
            {active === i ? <FiMinus /> : <FiPlus />}
          </button>

          <div className={`${active === i ? "max-h-40 pb-4" : "max-h-0"} overflow-hidden transition-all duration-500`}>
            <p className="text-gray-400 text-sm">{item.a}</p>
          </div>
        </div>
      ))}

    </div>

    {/* CTA */}
    <div className="mt-10 flex flex-col md:flex-row justify-between gap-4 border border-white/10 rounded-2xl px-4 sm:px-6 lg:px-8 py-6">

      <div>
        <h3 className="text-xl font-light mb-2">
          Still have questions?
        </h3>
        <p className="text-gray-400 text-sm">
          Book a quick call and we’ll help you.
        </p>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="p-5 sm:p-5 sm:p-4 sm:p-6 lg:p-8 lg:p-10">
              {/* BUTTON */}

              <a href="https://calendly.com/shiva-vitalhawks/15min" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium shadow-md hover:scale-105 transition">Book a call</a>

              {/* MODAL */}

              <Popupform

                isOpen={open}

                onClose={() => setOpen(false)}

              />

            </div>
          </div>

    </div>

  </div>
</section>

    </>
  );
}

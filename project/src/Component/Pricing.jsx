


import React, { useState } from "react";
import { FiShield, FiCheck, FiPlus, FiMinus } from "react-icons/fi";
import Plan from "./Plan";
import { Link } from "react-router-dom";
import Popupform from "./Popupform";
export default function Pricing() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const faqs = [
    {
      q: "What is the 95% accuracy guarantee?",
      a: "We guarantee that at least 95% of the mobile numbers and emails in your list will be accurate and reachable. If more than 5% is incorrect, we replace them free — no questions asked."
    },
    {
      q: "How do I claim a replacement?",
      a: "Simply flag the inaccurate contacts and send them back. We verify and replace them within 24–48 hours."
    },
    {
      q: "What's included in every lead?",
      a: "Verified mobile number, work email, LinkedIn profile, job title, and company name — all human-verified."
    },
    {
      q: "How long does delivery take?",
      a: "Delivered within 24–48 hours. No rush fees — it's standard."
    },
    {
      q: "Can I filter by role, industry, or location?",
      a: "Yes — you define your exact target and we build the list accordingly."
    },
    {
      q: "Are prices inclusive of GST?",
      a: "No — 18% GST is added at checkout. Full breakdown is shown upfront."
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

  {/* Pricing Boxes */}

  <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">

    {/* Price */}

    <div className="px-8 py-5 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl">

      <h3 className="text-4xl font-semibold">

        ₹30{" "}

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

          95% accuracy guaranteed

        </p>

        <p className="text-xs text-gray-400">

          Free replacements if accuracy drops below 95%

        </p>

      </div>

    </div>

  </div>

  {/* Footer Note */}

  <p className="text-xs text-gray-500">

    Mobile number + email included · GST 18% extra

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
            95% accuracy — or we fix it.
          </h2>

          <p className="text-gray-400 text-base max-w-lg">
            If more than 5% of your data is incorrect, we replace it — no delays.
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
            to="/contact"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:opacity-90 transition inline-block"
          >
            Talk to us
          </Link>
        </div>

      </div>

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
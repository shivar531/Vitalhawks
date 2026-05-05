import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

const plans = [
  { name: "Starter", leads: "3,000", price: "₹90,000", note: "+ ₹16,200 GST · Total ₹1,06,200" },
  { name: "Growth", leads: "5,000", price: "₹1,50,000", note: "+ ₹27,000 GST · Total ₹1,77,000" },
  { name: "Advanced", leads: "7,000", price: "₹2,10,000", note: "+ ₹37,800 GST · Total ₹2,47,800" },
  { name: "Pro", leads: "10,000", price: "₹3,00,000", note: "+ ₹54,000 GST · Total ₹3,54,000" },
  { name: "Scale", leads: "15,000", price: "₹4,50,000", note: "+ ₹81,000 GST · Total ₹5,31,000" },
  { name: "Enterprise", leads: "20,000", price: "₹6,00,000", note: "+ ₹1,08,000 GST · Total ₹7,08,000" },
];

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState("Pro"); // default selected

  return (
    <section className="bg-[#050507] text-white px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-6 lg:mb-10 lg:mb-16">
          <p className="text-xs tracking-[0.35em] text-purple-400 mb-4">PLANS</p>

          <h2 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4">
            Choose your list size
          </h2>

          <p className="text-gray-400 max-w-2xl">
            Every plan includes verified mobile numbers, direct emails, LinkedIn profiles —
            and a 95% accuracy guarantee with free replacements.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:p-4 sm:p-6 lg:p-8">

          {plans.map((plan, i) => (
            <div
              key={i}
              onClick={() => setSelectedPlan(plan.name)}
              className={`relative rounded-2xl border p-4 sm:p-6 transition cursor-pointer
              ${
                selectedPlan === plan.name
                  ? "border-purple-500 bg-[#0b0b12] shadow-[0_0_30px_rgba(124,58,237,0.3)]"
                  : "border-white/10 bg-[#0b0b12] hover:border-white/30"
              }`}
            >

              {/* MOST POPULAR */}
              {selectedPlan === plan.name && plan.name === "Pro" && (
                <span className="absolute -top-3 left-6 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}

              {/* PLAN NAME */}
              <p className="text-xs text-gray-500 tracking-widest mb-4 uppercase">
                {plan.name}
              </p>

              {/* LEADS */}
              <h3 className="text-4xl font-light text-white mb-2">
                {plan.leads}
                <span className="text-sm text-gray-400 ml-2">leads</span>
              </h3>

              {/* PRICE */}
              <p className="text-xl text-white font-medium">{plan.price}</p>

              {/* NOTE */}
              <p className="text-xs text-gray-500 mb-4">{plan.note}</p>

              {/* PER LEAD */}
              <p className="text-sm text-green-400 mb-6">
                ₹30 per verified lead
              </p>

              <div className="border-t border-white/10 mb-6"></div>

              {/* FEATURES */}
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-400" />
                  {plan.leads} verified contacts
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-400" />
                  Direct mobile number per lead
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-400" />
                  Work email per lead
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-400" />
                  Custom role & industry filter
                </li>
                <li className="flex items-center gap-2">
                  <FiCheck className="text-green-400" />
                  Delivered in 24–48 hours
                </li>

                <li className="flex items-center gap-2 text-green-400">
                  <FiCheck />
                  95% accuracy guarantee
                </li>

                <li className="flex items-center gap-2 text-green-400">
                  <FiCheck />
                  Free replacements if below 95%
                </li>
              </ul>

              {/* CTA */}
              <Link to={`/contact?plan=${plan.name}`}>
                <button
                  className={`mt-8 w-full py-3 rounded-lg transition
                  ${
                    selectedPlan === plan.name
                      ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
                      : "border border-white/10 text-gray-300 hover:text-white hover:border-white/30"
                  }`}
                >
                  Get started
                </button>
              </Link>

            </div>
          ))}
        </div>

        {/* FOOTER */}
        <p className="text-center text-gray-500 text-sm mt-10">
          All prices in INR · 18% GST applicable · Prices shown are base + GST breakdown
        </p>

      </div>
    </section>
  );
}
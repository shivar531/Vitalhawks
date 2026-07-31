import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Home } from "lucide-react";

const helpfulLinks = [
  { label: "Pricing", to: "/Pricing" },
  { label: "Industries", to: "/Industries" },
  { label: "Free sample list", to: "/SampleList" },
  { label: "Contact us", to: "/Contact" },
];

export default function NotFound() {
  return (
    <section className="relative bg-[#050507] text-white overflow-hidden min-h-[80vh] flex items-center">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.15),transparent_60%)]"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          Page not found
        </div>

        {/* 404 */}
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold leading-none bg-gradient-to-b from-white to-purple-400 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-6 text-2xl sm:text-3xl font-semibold">
          This page doesn&rsquo;t exist.
        </h2>

        <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
          The link may be broken or the page may have moved. Let&rsquo;s get you
          back to verified contact data.
        </p>

        {/* Primary actions */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors font-medium text-white"
          >
            <Home className="w-4 h-4" />
            Back to home
          </Link>
          <Link
            to="/Contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 hover:bg-white/5 transition-colors font-medium text-white"
          >
            Talk to us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Helpful links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500 mb-4">Popular pages</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {helpfulLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-gray-300 hover:text-purple-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

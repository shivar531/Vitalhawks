import React from "react";
import { Link } from "react-router-dom";
import logo from "./photos/finalewhite_1.png";

export default function Footer() {
  return (
    <footer className="bg-[#050507] text-white px-4 sm:px-6 lg:px-8 py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo + line */}
          <div className="flex flex-col items-center md:items-start gap-3 max-w-xs text-center md:text-left">
            <Link to="/">
              <img
                src={logo}
                alt="VitalHawks Logo"
                className="h-12 w-auto object-contain opacity-90"
              />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Verified decision-maker contact data — direct mobiles and work
              emails, delivered in 48 hours.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            <Link to="/" className="hover:text-white transition">
              Services
            </Link>
            <Link to="/Industries" className="hover:text-white transition">
              Industry
            </Link>
            <Link to="/Pricing" className="hover:text-white transition">
              Pricing
            </Link>
            <Link to="/Contact" className="hover:text-white transition">
              Contact
            </Link>
            <Link to="/Privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
          </nav>

          {/* Contact */}
          <div className="text-sm text-gray-400 text-center md:text-right space-y-2">
            <p>
              <a
                href="mailto:info@vitalhawks.com"
                className="hover:text-white transition"
              >
                info@vitalhawks.com
              </a>
            </p>
            <p>
              <a
                href="https://wa.me/918923705237"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                WhatsApp: +91 89237 05237
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/company/113018113/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Follow us on LinkedIn
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2026 VitalHawks. All rights reserved.</p>
          <p>
            Data practices aligned with India's DPDP Act 2023 · GDPR aligned
            for international operations.
          </p>
        </div>
      </div>
    </footer>
  );
}

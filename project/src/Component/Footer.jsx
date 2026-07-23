import React from "react";
import { Link } from "react-router-dom";
import logo from "./photos/finalewhite_1.png";

// Primary site navigation — keep these route strings identical to the ones
// in navbar.jsx and seo-pages.mjs. Mismatched casing creates duplicate URLs.
const mainLinks = [
  { name: "Services", path: "/" },
  { name: "Industry", path: "/Industries" },
  { name: "Pricing", path: "/Pricing" },
  { name: "Contact", path: "/Contact" },
  { name: "Privacy Policy", path: "/Privacy" },
];

// SEO landing pages. Paste the route groups from seo-pages.mjs here — this
// block renders nothing while the array is empty, so it is safe to ship as is.
// Shape: { heading: "By industry", links: [{ name: "...", path: "/..." }] }
const seoSections = [];

const linkClass =
  "text-gray-400 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded-sm transition";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050507] text-white px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <Link to="/" className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded-sm">
              <img
                src={logo}
                alt="VitalHawks Logo"
                className="h-12 w-auto object-contain opacity-90"
              />
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Verified decision-maker contact data — direct mobiles and work
              emails, delivered in 48 hours.
            </p>
          </div>

          {/* Site links */}
          <div className="md:col-span-3 text-center md:text-left">
            <h2 className="text-[11px] tracking-[0.15em] uppercase text-gray-500 mb-4">
              Company
            </h2>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2.5 text-sm">
                {mainLinks.map((item) => (
                  <li key={item.name}>
                    <Link to={item.path} className={linkClass}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 text-center md:text-left">
            <h2 className="text-[11px] tracking-[0.15em] uppercase text-gray-500 mb-4">
              Get in touch
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="mailto:info@vitalhawks.com" className={linkClass}>
                  info@vitalhawks.com
                </a>
              </li>
              <li>
                
                  href="https://wa.me/918923705237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  WhatsApp: +91 89237 05237
                </a>
              </li>
              <li>
                
                  href="https://www.linkedin.com/company/113018113/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Follow us on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* SEO landing pages — renders only once seoSections is populated */}
        {seoSections.length > 0 && (
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoSections.map((section) => (
              <div key={section.heading} className="text-center sm:text-left">
                <h2 className="text-[11px] tracking-[0.15em] uppercase text-gray-500 mb-4">
                  {section.heading}
                </h2>
                <ul className="flex flex-col gap-2.5 text-sm">
                  {section.links.map((item) => (
                    <li key={item.path}>
                      <Link to={item.path} className={linkClass}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© 2025–{year} VitalHawks. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Data practices aligned with India's DPDP Act 2023 · GDPR aligned for
            international operations.
          </p>
        </div>
      </div>
    </footer>
  );
}

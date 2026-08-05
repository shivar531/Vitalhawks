import React from "react";
import { Link } from "react-router-dom";
import logo from "./photos/finalewhite_1.png";

// Route strings must match seo-pages.mjs EXACTLY, including capitalisation.
const mainLinks = [
  { name: "Services", path: "/" },
  { name: "Pricing", path: "/Pricing" },
  { name: "Plans & packages", path: "/Plan" },
  { name: "Free sample list", path: "/SampleList" },
  { name: "Industries", path: "/Industries" },
  { name: "Clients", path: "/Client" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/Contact" },
  { name: "Privacy Policy", path: "/Privacy" },
];

const seoSections = [
  {
    heading: "By industry",
    links: [
      { name: "Financial services", path: "/financial-services" },
      { name: "Insurance", path: "/insurance-contact-data" },
      { name: "Manufacturing", path: "/manufacturing-database" },
      { name: "Pharmaceutical", path: "/pharmaceutical-database" },
      { name: "Healthcare", path: "/healthcare-database" },
      { name: "IT companies", path: "/it-company-database" },
      { name: "Real estate", path: "/real-estate-database" },
      { name: "SaaS companies", path: "/saas-companies-database" },
      { name: "Cybersecurity", path: "/cybersecurity-companies-database" },
      { name: "Logistics & supply chain", path: "/logistics-database" },
    ],
  },
  {
    heading: "By role",
    links: [
      { name: "CFO & finance heads", path: "/cfo-database" },
      { name: "CEOs & founders", path: "/ceo-database" },
      { name: "CIOs & CTOs", path: "/cio-database" },
      { name: "CMO & marketing heads", path: "/cmo-database" },
      { name: "COO & operations heads", path: "/coo-database" },
      { name: "Sales heads", path: "/sales-head-database" },
      { name: "HR directors", path: "/hr-director-database" },
      { name: "Procurement heads", path: "/procurement-head-database" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { name: "Apollo.io alternative", path: "/apollo-alternative-india" },
      { name: "Lusha alternative", path: "/lusha-alternative-india" },
      { name: "ZoomInfo alternative", path: "/zoominfo-alternative-india" },
      { name: "RocketReach alternative", path: "/rocketreach-alternative-india" },
      { name: "SignalHire alternative", path: "/signalhire-alternative-india" },
      { name: "Cognism alternative", path: "/cognism-alternative-india" },
      { name: "Seamless.AI alternative", path: "/seamless-ai-alternative-india" },
      { name: "UpLead alternative", path: "/uplead-alternative-india" },
      { name: "Kaspr alternative", path: "/kaspr-alternative-india" },
      { name: "Ampliz alternative", path: "/ampliz-alternative-india" },
      { name: "Clearbit alternative", path: "/clearbit-alternative-india" },
      { name: "Hunter.io alternative", path: "/hunter-alternative-india" },
      { name: "Snov.io alternative", path: "/snov-io-alternative-india" },
      { name: "Adapt.io alternative", path: "/adapt-io-alternative-india" },
    ],
  },
];

const linkClass =
  "text-gray-400 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded-sm transition";

const headingClass =
  "text-[11px] tracking-[0.15em] uppercase text-gray-500 mb-4";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050507] text-white px-4 sm:px-6 lg:px-8 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <Link
              to="/"
              className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40 rounded-sm"
            >
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

          <div className="md:col-span-4 text-center md:text-left">
            <h2 className={headingClass}>Company</h2>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2.5 text-sm">
                {mainLinks.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className={linkClass}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="md:col-span-4 text-center md:text-left">
            <h2 className={headingClass}>Get in touch</h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href="mailto:info@vitalhawks.com" className={linkClass}>
                  info@vitalhawks.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/918923705237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  WhatsApp: +91 89237 05237
                </a>
              </li>
              <li>
                <a
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

        <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {seoSections.map((section) => (
            <div key={section.heading} className="text-center sm:text-left">
              <h2 className={headingClass}>{section.heading}</h2>
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

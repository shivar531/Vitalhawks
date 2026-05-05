import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import logo from "./photos/finalewhite.png";
import logo from "./photos/finalewhite_1.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Services", path: "/" },
    { name: "Industry", path: "/Industries" },
    { name: "Pricing", path: "/Pricing" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinkClass = ({ isActive }) =>
    `relative group transition duration-300 ${isActive ? "text-white" : "text-gray-400"}`;

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[94%] sm:w-[90%] max-w-7xl">
      <div className="flex items-center justify-between px-4 sm:px-6 py-2 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
        {/* Logo */}
        <NavLink to="/" className="flex items-center m-2" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="VitalHawks Logo"
            className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition duration-300"
          />
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] lg:text-[12px] tracking-[0.15em] uppercase">
          {links.map((item) => (
            <NavLink key={item.name} to={item.path} className={navLinkClass}>
              <span className="group-hover:text-white transition duration-300">{item.name}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white/70 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile Icon */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden grid place-items-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-white text-lg"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] p-3">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-3 text-sm tracking-[0.12em] uppercase transition ${
                  isActive ? "bg-white/10 text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

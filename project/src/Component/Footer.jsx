import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#050507] text-white px-4 sm:px-6 lg:px-8 py-6 border-t border-white/10">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo */}




          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center md:text-right">
            © 2026 Vitalhawks. All rights reserved.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-5 pt-4 text-center text-xs text-gray-500">
          Data practices aligned with India's DPDP Act 2023 · GDPR aligned for international operations.
        </div>

      </div>
    </footer>
  );
}
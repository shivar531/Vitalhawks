import React from "react";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050507] overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,255,0.15),transparent_70%)]"></div>

      {/* Center Content */}
      <div className="relative flex flex-col items-center gap-5 sm:p-4 sm:p-6 lg:p-8">

        {/* Logo / Text */}
        <div className="relative text-2xl sm:text-3xl md:text-4xl font-light tracking-widest text-white overflow-hidden">
          
          {/* Text */}
          <span className="relative z-10">VitalHawks</span>

          {/* Glow Sweep */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[loaderSweep_2s_linear_infinite]"></span>
        </div>

        {/* Loading Line */}
        <div className="w-40 h-[2px] bg-white/10 overflow-hidden rounded-full">
          <div className="h-full w-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 animate-[loadingBar_1.5s_ease-in-out_infinite]"></div>
        </div>

        {/* Small text */}
        <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
          Loading Experience
        </p>

      </div>
    </div>
  );
}
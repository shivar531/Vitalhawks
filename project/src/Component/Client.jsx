import React from "react";
import { motion } from "framer-motion";

// Client logos
import logoFinfinity from "./photos/Finfinitylogo.png";
import logoDronacharya from "./photos/Dronacharyalogo.png";
import logoPolicy from "./photos/policylogo.png";
import logoHindustan from "./photos/Hindustanlogo.png";
import anton from "./photos/anton1.png";
import returnofidea from "./photos/returnofidea.jpg";
import jiffy from "./photos/jiffy.png";

export default function Clients() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
    }),
  };

  const clients = [
    { name: "Anton Paar", logo: anton },
    { name: "Hindustan Times", logo: logoHindustan },
    { name: "Policy Bazaar", logo: logoPolicy },
    { name: "Finfinity", logo: logoFinfinity },
    { name: "Dronacharya College", logo: logoDronacharya },
    { name: "Return of Idea", logo: returnofidea },
    { name: "Jiffy", logo: jiffy },
  ];

  return (
    <div className="relative bg-[#050507] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.15),transparent_60%)]"></div>

      {/* Hero */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-14 text-center">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-xs tracking-[0.3em] text-purple-400 mb-4 uppercase"
        >
          Our Clients
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={2}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
        >
          Trusted by teams that
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
            close.
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={3}
          className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          From scientific instruments to media, finance, and education —
          revenue teams across industries build their pipeline on VitalHawks
          data.
        </motion.p>
      </section>

      {/* Logo Grid */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={i}
              className="rounded-2xl border border-white/10 bg-white/95 p-5 flex flex-col items-center justify-center text-center
              opacity-90 hover:opacity-100 hover:border-purple-400/40 transition duration-300"
            >
              <div className="h-16 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="max-h-12 max-w-[140px] w-auto object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-700">
                {client.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h2 className="text-4xl font-semibold">
              7<span className="text-purple-500">+</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm">Industries served</p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold">
              95<span className="text-purple-500">%</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm">Data accuracy</p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold">48h</h2>
            <p className="text-gray-500 mt-2 text-sm">Brief to verified list</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0b12] to-[#0a0a10] p-6 md:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(120,80,255,0.12),transparent_60%)]"></div>

          <div className="relative z-10 max-w-xl">
            <h2 className="text-2xl md:text-4xl font-light text-gray-200 leading-tight">
              Become our next client.
            </h2>
            <p className="mt-2 text-gray-400 text-base leading-relaxed">
              Verified decision-maker data and backend research support —
              built around your exact ICP.
            </p>
          </div>

          <div className="relative z-10 mt-2 md:mt-0 shrink-0">
            <a
              href="/Contact"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium shadow-md hover:scale-105 transition"
            >
              Supercharge your sales →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

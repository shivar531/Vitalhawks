

import React from "react";
import { motion } from "framer-motion";
import { FaCrown } from "react-icons/fa";

// ✅ Import your logos
import logoFinfinity from "./photos/Finfinitylogo.png";
import logoDronacharya from "./photos/Dronacharyalogo.png";
import logoPolicy from "./photos/policylogo.png";
import logoHindustan from "./photos/Hindustanlogo.png";
import anton from "./photos/anton1.png";
import returnofidea from "./photos/returnofidea.jpg";
import jiffy from "./photos/jiffy.png";
export default function Clients() {
  const fadeIn = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, duration: 1, ease: "easeOut" },
    }),
  };

  // ✅ Client logos + names
  const clients = [
    { name: "Policy Bazaar", logo: logoPolicy },
    { name: "Hindustan Times", logo: logoHindustan },
    { name: "Finfinity", logo: logoFinfinity },
    { name: "Dronacharya College, Gurugram, India", logo: logoDronacharya },
    { name: "Anton paar", logo: anton },
    { name: "Return of Idea", logo: returnofidea },
    { name: " Jiffy", logo: jiffy }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-white via-[#fafafa] to-[#ececec] text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full min-h-[55vh] sm:min-h-[65vh] lg:min-h-[75vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#0b1a2a] via-[#132b45] to-[#1e3a5a] text-white">
        <div className="absolute -top-20 -left-20 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-yellow-500/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-yellow-600/10 blur-3xl rounded-full animate-pulse"></div>

        <div className="relative z-10 px-4 sm:px-4 sm:px-6 md:px-10 lg:px-12 lg:px-16">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(255,215,0,0.5)]"
          >
            Our Clients
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto opacity-90"
          >
            Partnering with <span className="text-yellow-400 font-semibold">industry leaders</span> to drive growth, innovation, and long-term success.
          </motion.p>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="max-w-7xl mx-auto py-24 px-4 sm:px-6 md:px-10 lg:px-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 lg:mb-12 lg:mb-20 text-[#0e2338] bg-gradient-to-r from-[#0e2338] via-[#152c46] to-[#1c3c59] text-transparent bg-clip-text"
        >
          Trusted By Leading Brands
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:p-6 sm:gap-5 sm:p-4 sm:p-6 lg:p-8 lg:gap-12">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={i}
              whileHover={{ scale: 1.08, rotate: 1 }}
              className="relative backdrop-blur-xl bg-white/70 shadow-2xl rounded-3xl p-5 sm:p-5 sm:p-4 sm:p-6 lg:p-8 lg:p-10 flex flex-col items-center justify-center text-center border border-yellow-200 hover:border-yellow-500 transition-all duration-500 group"
            >
              {/* Crown */}
              <FaCrown className="absolute -top-5 text-3xl text-yellow-400 drop-shadow-md group-hover:scale-125 transition-transform duration-500" />

              {/* Logo */}
              <div className="relative w-28 h-28 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-100 via-white to-yellow-50 shadow-inner group-hover:shadow-lg transition-all duration-500">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-14 object-contain drop-shadow-md"
                />
              </div>

              {/* Name */}
              <p className="mt-6 text-lg font-semibold text-gray-800 group-hover:text-[#0e2338] transition-colors duration-300">
                {client.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-[#0b1a2a] via-[#132b45] to-[#1e3a5a] py-28 px-4 sm:px-4 sm:px-6 md:px-10 lg:px-12 lg:px-16 text-white text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-56 h-56 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] bg-yellow-500/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-600/10 blur-3xl rounded-full animate-pulse"></div>

        <div className="relative z-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(255,215,0,0.4)]"
          >
            Become a Client
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-base sm:text-lg md:text-xl mb-8 lg:mb-12 max-w-2xl mx-auto opacity-90"
          >
            Ready to <span className="text-yellow-400 font-bold">supercharge your sales pipeline</span> with verified B2B data and backend research support? Let’s grow together.
          </motion.p>
          <motion.a
            href="/Contact"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px rgba(255,215,0,0.8)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:shadow-[0_0_25px_rgba(255,215,0,0.7)] text-white font-semibold px-12 py-5 rounded-full shadow-lg transition-all duration-500"
          >
            Supercharge Your Sales →
          </motion.a>
        </div>
      </section>
    </div>
  );
}
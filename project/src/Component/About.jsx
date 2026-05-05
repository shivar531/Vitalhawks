import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.9, ease: "easeOut" },
    }),
  };

  const reasons = [
    {
      title: "Accuracy is Everything",
      desc: "Verified emails and mobile numbers of real decision-makers.",
    },
    {
      title: "Time-Saving Support",
      desc: "We handle the heavy research work, letting your team focus on sales.",
    },
    {
      title: "Boost Sales Effectiveness",
      desc: "Too many tasks reduce efficiency — we streamline operations for better results.",
    },
    {
      title: "Tailored for Your Business",
      desc: "We adapt to your industry, target audience, and specific sales goals.",
    },
  ];

  return (
    <div className="w-full bg-[#f9fafb] text-gray-800">
      {/* Hero / Header */}
      <section className="relative w-full min-h-[55vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#0e2338] via-[#152c46] to-[#1c3c59] text-white">
        {/* abstract blurred circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-400/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 px-4 sm:px-4 sm:px-6 md:px-10 lg:px-12 lg:px-16">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text"
          >
            About Vital Hawks
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-base sm:text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
          >
            Empowering Businesses with Accurate B2B Data and Smart Sales Support
          </motion.p>
        </div>
      </section>

      {/* Our Story & Vision */}
      <section className="max-w-5xl mx-auto py-20 px-4 sm:px-6 md:px-10 lg:px-12 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#0e2338]"
        >
          Our Story & Vision
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto"
        >
          At Vital Hawks, we noticed a common challenge in every sales-driven
          business: your sales team spends hours searching for the right contacts
          instead of closing deals. Researching leads, verifying emails, and
          preparing prospects might seem like part of sales, but in reality, it’s a
          time-consuming task that often distracts your team from high-impact
          revenue activities.
          <br />
          <br />
          That’s why we created Vital Hawks. Our vision is to empower businesses
          with the most accurate B2B data and provide backend research support, so
          your sales and marketing teams can focus on what truly matters: connecting
          with potential customers, building relationships, and driving revenue.
        </motion.p>
      </section>

      {/* Why We Exist */}
      <section className="relative bg-gradient-to-b from-white to-gray-100 py-20 px-4 sm:px-6 md:px-10 lg:px-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 lg:mb-14 text-[#0e2338]"
        >
          Why We Exist
        </motion.h2>
        <div className="grid gap-5 sm:p-5 sm:p-4 sm:p-6 lg:p-8 lg:p-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={i}
              className="bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-5 sm:p-4 sm:p-6 lg:p-8 border border-gray-100 hover:scale-105 transition-transform duration-500"
            >
              <FaCheckCircle className="text-green-500 text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Promise */}
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6 md:px-10 lg:px-12 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e2338] mb-6"
        >
          Our Promise
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          We are more than a data provider. We are a partner in your growth, helping
          you save time, reach the right prospects, and maximize your revenue
          potential.
        </motion.p>
      </section>

      {/* Connect With Us */}
      <section className="relative bg-gradient-to-r from-[#0e2338] via-[#152c46] to-[#1c3c59] py-24 px-4 sm:px-4 sm:px-6 md:px-10 lg:px-12 lg:px-16 text-white text-center overflow-hidden">
        {/* background accents */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-green-400/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>

        <div className="relative z-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8"
          >
            Connect With Us
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-lg mb-6 lg:mb-10 max-w-2xl mx-auto opacity-90"
          >
            Ready to build a stronger, smarter sales pipeline? Let’s make it happen
            together.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold px-10 py-4 rounded-full shadow-2xl transition-all duration-300"
          >
            Contact Us Now →
          </motion.a>
        </div>
      </section>
    </div>
  );
}
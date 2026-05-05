import React, { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    need: "",
    target: "",
    size: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.need) {
      newErrors.need = "Please select what you need";
    }

    if (!formData.target.trim()) {
      newErrors.target = "Target roles & industry is required";
    }

    if (!formData.size) {
      newErrors.size = "Please select list size";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          role: formData.role,
          need: formData.need,
          target: formData.target,
          size: formData.size,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          company: "",
          role: "",
          need: "",
          target: "",
          size: "",
          message: "",
        });

        setErrors({});
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message");
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  return (
    <>
      <section className="bg-[#050507] text-white px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-48 pb-16 sm:pb-24 lg:pb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 lg:gap-16">
          {/* LEFT SIDE */}
          <div>
            <p className="text-xs tracking-[0.3em] text-purple-400 mb-4">
              CONTACT
            </p>

            <h1 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Let's get your <br />
              team{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                selling.
              </span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg mb-6 lg:mb-10 max-w-md">
              Tell us who you need to reach. We'll build a verified list of
              direct mobile numbers and emails — delivered within 48 hours.
            </p>

            {/* EMAIL CARD */}
            <div className="flex items-center justify-between p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <FiMail className="text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">EMAIL US</p>
                  <p className="text-gray-200">info@vitalhawks.com</p>
                </div>
              </div>
              <span className="text-gray-500">→</span>
            </div>

            {/* WHATSAPP CARD */}
            <div className="flex items-center justify-between p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 mb-6 lg:mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/10 border border-green-500/20">
                  <FiPhone className="text-green-400" />
                </div>
                <a
                  href="https://wa.me/message/736XGT4OAVRBF1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:opacity-80 transition"
                >
                  <div>
                    <p className="text-xs text-gray-500">WHATSAPP US</p>
                    <p className="text-gray-200">+91 89237 05237</p>
                  </div>
                </a>
              </div>
              <span className="text-gray-500">→</span>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "<4h", label: "Avg response" },
                { value: "24–48h", label: "Delivery time" },
                { value: "95%", label: "Accuracy" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                >
                  <p className="text-xl text-white">{item.value}</p>
                  <p className="text-xs text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="p-5 sm:p-4 sm:p-6 lg:p-8 rounded-3xl bg-[#0b0b12] border border-white/10">
            <h3 className="text-2xl font-light mb-2">Send us a message</h3>
            <p className="text-gray-400 mb-8 text-sm">
              Fill in your brief and we'll get back within a few hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Full name"
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Work email"
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    placeholder="Company"
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
                  />
                  {errors.company && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.company}
                    </p>
                  )}
                </div>

                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  placeholder="Your role"
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
                />
              </div>

              <div>
                <select
                  name="need"
                  value={formData.need}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-[#11111a] border border-white/10 text-gray-300 outline-none"
                >
                  <option value="">What do you need?</option>
                  <option value="Verified contact list - mobile + email">
                    Verified contact list - mobile + email
                  </option>
                  <option value="Mobile numbers only">
                    Mobile numbers only
                  </option>
                  <option value="Email addresses only">
                    Email addresses only
                  </option>
                  <option value="Custom brief">
                    Custom brief - I'll explain below
                  </option>
                  <option value="Just want to learn more">
                    Just want to learn more
                  </option>
                </select>
                {errors.need && (
                  <p className="text-red-400 text-xs mt-1">{errors.need}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="target"
                  value={formData.target}
                  placeholder="Target roles & industry"
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
                />
                {errors.target && (
                  <p className="text-red-400 text-xs mt-1">{errors.target}</p>
                )}
              </div>

              <div>
                <select
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-[#11111a] border border-white/10 text-gray-300 outline-none"
                >
                  <option value="">List size needed</option>
                  <option value="Starter — 3,000 leads · ₹1,06,200">
                    Starter — 3,000 leads · ₹1,06,200
                  </option>
                  <option value="Growth — 5,000 leads · ₹1,77,000">
                    Growth — 5,000 leads · ₹1,77,000
                  </option>
                  <option value="Advanced — 7,000 leads · ₹2,47,800">
                    Advanced — 7,000 leads · ₹2,47,800
                  </option>
                  <option value="Pro — 10,000 leads · ₹3,54,000">
                    Pro — 10,000 leads · ₹3,54,000
                  </option>
                  <option value="Scale — 15,000 leads · ₹5,31,000">
                    Scale — 15,000 leads · ₹5,31,000
                  </option>
                  <option value="Enterprise — 20,000 leads · ₹7,08,000">
                    Enterprise — 20,000 leads · ₹7,08,000
                  </option>
                  <option value="Custom — 20,000+ leads">
                    Custom — 20,000+ leads
                  </option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
                {errors.size && (
                  <p className="text-red-400 text-xs mt-1">{errors.size}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  rows="4"
                  placeholder="Anything else?"
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-[#050507] text-white px-6 pt-10 ">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <p className="text-xs tracking-[0.3em] text-purple-400 mb-2">
            WHAT HAPPENS NEXT
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light mb-8">
            From message to verified list in 3 steps
          </h2>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* STEP 1 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <p className="text-xs tracking-widest text-gray-500 mb-3">
                STEP 01
              </p>

              <h3 className="text-lg font-medium text-gray-200 mb-2">
                We review your brief
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                As soon as your message comes in, our team reviews your target
                roles, industry, and geography.
              </p>

              <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                Within a few hours
              </span>
            </div>

            {/* STEP 2 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <p className="text-xs tracking-widest text-gray-500 mb-3">
                STEP 02
              </p>

              <h3 className="text-lg font-medium text-gray-200 mb-2">
                We build and verify your list
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Our team researches and verifies every contact before it reaches
                you.
              </p>

              <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                24–48 hours
              </span>
            </div>

            {/* STEP 3 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <p className="text-xs tracking-widest text-gray-500 mb-3">
                STEP 03
              </p>

              <h3 className="text-lg font-medium text-gray-200 mb-2">
                Your team starts closing
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                You receive a clean, verified list ready to use immediately.
              </p>

              <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
                Same day as delivery
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-8"></div>
        </div>
      </section>

      <section className="bg-[#050507] text-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <p className="text-xs tracking-[0.3em] text-purple-400 mb-4">FAQ</p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 lg:mb-10 lg:mb-16">
            Common questions
          </h2>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 lg:mb-12 lg:mb-20">
            {/* LEFT */}
            <div>
              <h3 className="text-gray-200 font-medium mb-2">
                How quickly will you respond?
              </h3>
              <p className="text-gray-400 mb-8">
                We respond within a few hours — usually the same day. For urgent
                requests, WhatsApp us directly for the fastest response.
              </p>

              <h3 className="text-gray-200 font-medium mb-2">
                What information do you need from me?
              </h3>
              <p className="text-gray-400">
                The more specific the better — roles, industry, geography,
                company size, and list size. Even a rough brief works to get
                started.
              </p>
            </div>

            {/* RIGHT */}
            <div>
              <h3 className="text-gray-200 font-medium mb-2">
                Can I just ask a question before committing?
              </h3>
              <p className="text-gray-400 mb-8">
                Absolutely. Use the form, email, or WhatsApp — no obligation,
                just a quick conversation.
              </p>

              <h3 className="text-gray-200 font-medium mb-2">
                Can I get a sample before I order?
              </h3>
              <p className="text-gray-400">
                Yes — request it and we’ll send a free sample of verified
                contacts so you can check quality first.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-6 lg:mb-10 lg:mb-16"></div>

          {/* WHATSAPP CTA */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:p-5 sm:p-4 sm:p-6 lg:p-8 lg:p-10 rounded-3xl border border-white/10 bg-[#0b0b12] px-10 md:px-16 py-12 md:py-14">
            {/* Left */}
            <div className="max-w-xl">
              <h3 className="text-2xl md:text-3xl font-light text-gray-200 mb-4">
                Not ready to fill a form?
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Just drop us a WhatsApp. Tell us who you need to reach and we’ll
                take it from there. No forms, no friction — just a quick message
                and a verified list on its way.
              </p>
            </div>

            {/* Button */}
            <div>
              <a
                href="https://wa.me/message/736XGT4OAVRBF1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-10 py-4 rounded-xl bg-green-500 text-white text-lg font-medium hover:scale-[1.03] transition">
                  WhatsApp us now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useState } from "react";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Popupform({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    plan: "",
    targetRoles: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

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

    if (!formData.plan) {
      newErrors.plan = "Please select a plan";
    }

    if (!formData.targetRoles.trim()) {
      newErrors.targetRoles = "Target roles are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_POPUP_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          plan: formData.plan,
          target_roles: formData.targetRoles,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      alert("Call request submitted successfully!");

      setFormData({
        name: "",
        email: "",
        company: "",
        plan: "",
        targetRoles: "",
        message: "",
      });

      setErrors({});
      onClose();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to submit request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center  px-4">
        <div className="w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 relative shadow-[0_0_40px_rgba(124,58,237,0.15)]">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white"
          >
            <X size={18} />
          </button>

          <h2 className="text-xl font-semibold text-white mb-1">Book a call</h2>

          <p className="text-gray-400 text-xs mb-5 leading-relaxed">
            Two questions, one call. We'll have your verified list ready before
            you hang up.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-3 max-h-[75vh] md:max-h-[90vh] overflow-y-auto pr-1"
          >
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              placeholder="Jane Smith"
              onChange={handleChange}
              error={errors.name}
            />

            <Input
              label="Work Email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="jane@company.com"
              onChange={handleChange}
              error={errors.email}
            />

            <Input
              label="Company"
              name="company"
              value={formData.company}
              placeholder="Acme Corp"
              onChange={handleChange}
              error={errors.company}
            />

            <div>
              <label className="text-[11px] text-gray-400 uppercase tracking-wide mb-1 block">
                Plan Interested In
              </label>

              <select
                name="plan"
                value={formData.plan}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm rounded-lg bg-[#11111a] border border-white/10 text-white outline-none focus:border-purple-500"
              >
                <option value="">Select a plan</option>
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

              {errors.plan && (
                <p className="text-red-400 text-xs mt-1">{errors.plan}</p>
              )}
            </div>

            <Input
              label="Target Roles"
              name="targetRoles"
              value={formData.targetRoles}
              placeholder="e.g. CFO, CIO, HR Head"
              onChange={handleChange}
              error={errors.targetRoles}
            />

            <div>
              <label className="text-[11px] text-gray-400 uppercase tracking-wide mb-1 block">
                Anything Else?
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Industry, geography, ideal list size..."
                className="w-full px-3 py-2 text-sm rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:border-purple-500 resize-none"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm rounded-lg border border-white/10 text-gray-400 hover:bg-white/10"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-2 text-sm rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit request"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
  placeholder,
  name,
  value,
  onChange,
  error,
  type = "text",
}) {
  return (
    <div>
      <label className="text-[11px] text-gray-400 uppercase tracking-wide mb-1 block">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 text-sm rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:border-purple-500"
      />

      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

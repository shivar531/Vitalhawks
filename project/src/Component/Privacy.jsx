import React from "react";
import useSeo from "../utils/useSeo";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "1. Who we are",
    body: `VitalHawks ("we", "us", "our") is a B2B contact data provider based in India. We deliver verified business contact lists — direct mobile numbers and work email addresses of professional decision-makers — to sales, SDR, and marketing teams. This policy explains what personal data we handle, why we handle it, and the rights available to you. It applies to visitors of vitalhawks.com, our clients, and the business professionals whose contact details appear in our datasets.`,
  },
  {
    title: "2. Data we collect from website visitors",
    body: `When you fill a form on this website or contact us on WhatsApp or email, we collect the details you provide: your name, work email, company, role, and the requirements you describe. We use this information to respond to your enquiry, prepare and deliver your requested lists, and communicate with you about our services. Form submissions are transmitted to us through a third-party email delivery service; we do not sell website visitor information.`,
  },
  {
    title: "3. Data in our B2B contact datasets",
    body: `Our datasets contain professional contact information of individuals in their business capacity: name, job title, company, work email address, business phone number, and related professional details. This information is compiled from publicly available professional sources and licensed business databases, and is verified by our team before delivery. We process this data strictly for business-to-business communication purposes and require our clients to use it in compliance with applicable law.`,
  },
  {
    title: "4. Legal basis and compliance",
    body: `For individuals in India, we process personal data in accordance with the Digital Personal Data Protection Act, 2023, relying on consent and legitimate uses as applicable. For individuals in other jurisdictions, including the European Union, we align our practices with the GDPR, relying on legitimate interest for business-to-business contact data, balanced against the rights and interests of the individuals concerned.`,
  },
  {
    title: "5. Your rights",
    body: `You may request access to the personal data we hold about you, ask us to correct inaccurate data, or ask us to delete your data from our records and datasets. If you are a professional whose details appear in our datasets and you do not wish to be contacted through them, write to us and we will suppress your record from future deliveries. To exercise any of these rights, email info@vitalhawks.com with your name and the email address or phone number concerned. We respond to verified requests within 30 days.`,
  },
  {
    title: "6. Data retention and security",
    body: `We retain website enquiry data for as long as needed to serve you and meet legal obligations. Records in our datasets are retained while they remain accurate and relevant, and are removed upon verified deletion requests. We protect data through access controls, restricted internal handling, and secure storage, and we share data only with the client who commissioned a list and the service providers needed to operate this website.`,
  },
  {
    title: "7. Third-party services",
    body: `This website is hosted on Vercel and uses a third-party email service to deliver contact form submissions. These providers process data on our behalf under their own security and privacy commitments. We do not run advertising trackers on this website.`,
  },
  {
    title: "8. Grievances and contact",
    body: `For any question, complaint, or grievance about how your personal data is handled, contact our grievance contact at info@vitalhawks.com or on WhatsApp at +91 89237 05237. If you are in India and remain unsatisfied with our response, you may escalate to the Data Protection Board of India as provided under the DPDP Act, 2023.`,
  },
  {
    title: "9. Changes to this policy",
    body: `We may update this policy as our services or the law evolve. The latest version will always be available on this page. This policy is effective as of 13 July 2026.`,
  },
];

export default function Privacy() {
  useSeo({
    title: "Privacy Policy | VitalHawks",
    description:
      "How VitalHawks collects, uses and protects personal data — aligned with India DPDP Act 2023 and GDPR. Access, correction and deletion rights explained.",
    path: "/Privacy",
  });

  return (
    <section className="relative bg-[#050507] text-white min-h-screen overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.12),transparent_60%)]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20">
        <p className="text-xs tracking-[0.3em] text-purple-400 mb-4 uppercase">
          Legal
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          Privacy Policy
        </h1>

        <p className="text-gray-400 mb-12 max-w-2xl">
          How VitalHawks collects, uses, and protects personal data — for our
          website visitors, our clients, and the professionals in our datasets.
        </p>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg sm:text-xl font-semibold mb-3">
                {s.title}
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-sm text-gray-500">
          Questions about this policy?{" "}
          <Link to="/Contact" className="text-purple-400 hover:text-purple-300">
            Contact us
          </Link>
          .
        </div>
      </div>
    </section>
  );
}

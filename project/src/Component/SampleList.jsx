import React, { useState, useRef, useEffect } from "react";

export default function SampleList() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const inputRef = useRef(null);

  const steps = [
    {
      question: "Who do you want to target?",
      placeholder: "e.g. Marketing Heads in SaaS companies",
      key: "target",
    },
    {
      question: "Which industry?",
      placeholder: "e.g. SaaS, Healthcare, Finance",
      key: "industry",
    },
    {
      question: "Target location?",
      placeholder: "e.g. India, US, Global",
      key: "location",
    },
    {
      question: "Your name?",
      placeholder: "Enter your name",
      key: "name",
    },
    {
      question: "Where should we send your sample?",
      placeholder: "Work email",
      key: "email",
    },
  ];

  const handleSubmit = (value) => {
    if (!value) return;

    setAnswers((prev) => ({
      ...prev,
      [steps[step].key]: value,
    }));

    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [step]);

  return (
    <section className="bg-[#050507] text-white min-h-screen px-6 pt-44 pb-20 flex items-center">
      <div className="max-w-3xl mx-auto w-full">

        {/* HEADER */}
        <p className="text-xs tracking-[0.4em] text-purple-400 mb-6">
          SAMPLE REQUEST
        </p>

        <h1 className="text-3xl sm:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 lg:mb-10 lg:mb-16">
          Let’s build your sample
        </h1>

        {/* CHAT FLOW */}
        <div className="space-y-6">

          {steps.slice(0, step).map((s, i) => (
            <div key={i} className="space-y-2 text-left">
              <p className="text-gray-400">{s.question}</p>
              <p className="text-white text-lg">{answers[s.key]}</p>
            </div>
          ))}

          {/* CURRENT STEP */}
          {step < steps.length && (
            <div className="space-y-4 text-left">

              <p className="text-gray-300 text-xl">
                {steps[step].question}
              </p>

              <input
                ref={inputRef}
                placeholder={steps[step].placeholder}
                className="w-full p-4 text-lg rounded-xl bg-white/5 border border-white/10 focus:border-white/30 outline-none transition"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSubmit(e.target.value);
                    e.target.value = "";
                  }
                }}
              />

              <p className="text-xs text-gray-500">
                Press Enter ↵ to continue
              </p>

            </div>
          )}

          {/* SUCCESS */}
          {step === steps.length && (
            <div className="text-center mt-10 space-y-4">

              <h2 className="text-3xl font-light">
                You're all set 🎉
              </h2>

              <p className="text-gray-400">
                We’ll send your sample list within a few hours.
              </p>

              <div className="mt-6 border border-white/10 rounded-xl p-4 sm:p-6 text-left text-sm text-gray-400">
                <p><strong>Target:</strong> {answers.target}</p>
                <p><strong>Industry:</strong> {answers.industry}</p>
                <p><strong>Location:</strong> {answers.location}</p>
                <p><strong>Email:</strong> {answers.email}</p>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
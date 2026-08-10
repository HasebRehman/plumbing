"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  // Only the exact 3 FAQ questions & answers from Soto Plumbing
  const faqs: FAQItem[] = [
    {
      question: "WHAT ARE YOUR BUSINESS HOURS?",
      answer:
        "WE ARE OPEN MONDAY-FRIDAY FROM 8AM TO 5PM. SATURDAY 8AM TO 6PM & SUNDAY 8AM TO 4PM.",
    },
    {
      question: "DO YOU CHARGE FOR ESTIMATES?",
      answer:
        "WE DO CHARGE A FLAT FEE FOR AN ESTIMATE. GIVE US A CALL TO SCHEDULE A VISIT.",
    },
    {
      question: "ARE YOU LICENSED & INSURED?",
      answer: "SOTO PLUMBING LLC® IS INSURED & LICENSED.",
    },
  ];

  // All FAQs closed by default on page load (null)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#0A0D12] relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header ('Common Questions' badge removed as requested) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked <span className="orange-gradient-text">Questions</span>
          </h2>
        </div>

        {/* 3 FAQ Accordion Cards (Closed by Default) */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-all duration-300 hover:border-[#FF6B00]/40"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-base sm:text-lg font-extrabold text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#FF6B00] flex-shrink-0" />
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#FF6B00] text-white border-[#FF6B00]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-2 text-sm sm:text-base font-semibold text-[#FF8533] leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

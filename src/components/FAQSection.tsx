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
    <section id="faq" className="py-10 sm:py-28 bg-[#F8FAFC] relative border-t border-slate-200">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B00]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Frequently Asked <span className="orange-gradient-text">Questions</span>
          </h2>
        </div>

        {/* 3 FAQ Accordion Cards (Closed by Default) */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden transition-all duration-300 hover:border-[#FF6B00]/50"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm sm:text-lg font-extrabold text-slate-900 flex items-center gap-2.5 sm:gap-3">
                    <HelpCircle className="w-5 h-5 text-[#FF6B00] flex-shrink-0" />
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 sm:p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 transition-transform duration-300 ${
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
                      <div className="p-4 sm:p-6 pt-2 text-xs sm:text-base font-bold text-[#E05A00] leading-relaxed border-t border-slate-100">
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

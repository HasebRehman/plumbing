"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ShieldCheck, Languages, Clock, Wrench, Calendar, ArrowRight } from "lucide-react";

interface ContactHoursFixtureSectionProps {
  onOpenBooking: () => void;
}

export default function ContactHoursFixtureSection({
  onOpenBooking,
}: ContactHoursFixtureSectionProps) {
  const hoursList = [
    { day: "Monday", hours: "6:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "6:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "6:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "6:00 AM - 5:00 PM" },
    { day: "Friday", hours: "6:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "Closed (Emergency Dispatch)" },
    { day: "Sunday", hours: "Closed (Emergency Dispatch)" },
  ];

  return (
    <section id="contact-hours-fixture" className="py-10 sm:py-16 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B00]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-14 lg:space-y-24">
        
        {/* Block 1: CONTACT US & HOURS Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 sm:mb-8">
                Contact <span className="orange-gradient-text">Us</span>
              </h3>

              <div className="space-y-5 sm:space-y-6 mb-6 sm:mb-8">
                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3.5 rounded-2xl bg-[#FF6B00]/10 text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">
                      Email Inquiry
                    </span>
                    <a
                      href="mailto:sales@sotoplumbing.co"
                      className="text-lg sm:text-xl font-extrabold text-slate-900 hover:text-[#FF6B00] transition-colors"
                    >
                      sales@sotoplumbing.co
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="p-3.5 rounded-2xl bg-[#FF6B00]/10 text-[#FF6B00] group-hover:bg-[#FF6B00] group-hover:text-white transition-colors duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">
                      Direct Hotline
                    </span>
                    <a
                      href="tel:7043479674"
                      className="text-2xl sm:text-3xl font-extrabold text-slate-900 hover:text-[#FF6B00] transition-colors"
                    >
                      704.347.9674
                    </a>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
                <span className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-2 shadow-md">
                  <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
                  Licensed Plumber
                </span>
                <span className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 flex items-center gap-2 shadow-md">
                  <Languages className="w-4 h-4" />
                  ¡Hablamos Español!
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Operating Hours Table */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 rounded-3xl bg-white p-6 sm:p-10 border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.14)]"
          >
            <div className="flex items-center justify-between mb-5 pb-3 sm:pb-4 border-b border-slate-100">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Operating Hours
              </h3>
              <Clock className="w-5 h-5 text-[#FF6B00]" />
            </div>

            <div className="space-y-3">
              {hoursList.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between text-xs sm:text-sm font-semibold py-1 border-b border-slate-100 last:border-0"
                >
                  <span className="text-slate-700">{item.day}</span>
                  <span
                    className={`font-mono ${
                      item.hours.includes("Closed")
                        ? "text-slate-400 font-bold"
                        : "text-[#FF6B00] font-bold"
                    }`}
                  >
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Block 2: NEED A FIXTURE? High-Impact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-10 lg:p-12 border border-slate-800 text-center relative overflow-hidden shadow-[0_25px_60px_rgba(15,23,42,0.25)] text-white"
        >
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            
            <div className="p-3 rounded-2xl bg-[#FF6B00]/20 text-[#FF6B00] mb-4 sm:mb-5">
              <Wrench className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 sm:mb-4">
              Need A Fixture?
            </h3>

            <p className="text-xs sm:text-base text-slate-300 font-normal leading-relaxed mb-6 sm:mb-8">
              Schedule a visit with our licensed and insured plumbers. We offer a full variety of fixture installations and repairs that meet your exact needs.
            </p>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#FF6B00] hover:bg-[#E05A00] transition-all flex items-center justify-center gap-2.5 group"
            >
              <Calendar className="w-4 h-4" />
              Book Visit / Schedule Service
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

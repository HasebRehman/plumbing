"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ShieldCheck, Languages, Clock } from "lucide-react";

export default function HoursAndContactSection() {
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
    <section id="hours-contact" className="py-24 bg-[#0A0D12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-[#FF6B00] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 mb-3">
            Contact & Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Contact Us & <span className="orange-gradient-text">Operating Hours</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Reach out directly to our master plumbers or check our weekly availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl glass-panel p-8 sm:p-10 border border-[#FF6B00]/30 shadow-xl flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider mb-2 block">
                Direct Communication
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
                Contact Soto Plumbing
              </h3>

              <div className="space-y-5 mb-8">
                {/* Email */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 hover:border-[#FF6B00]/40 transition-colors">
                  <div className="p-3 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">
                      Email Address
                    </span>
                    <a
                      href="mailto:sales@sotoplumbing.co"
                      className="text-base font-bold text-white hover:text-[#FF6B00] transition-colors"
                    >
                      sales@sotoplumbing.co
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4 hover:border-[#FF6B00]/40 transition-colors">
                  <div className="p-3 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium block">
                      Direct Hotline
                    </span>
                    <a
                      href="tel:7043479674"
                      className="text-xl font-black text-white hover:text-[#FF6B00] transition-colors"
                    >
                      704.347.9674
                    </a>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#0A0D12] border border-white/10 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#FF6B00]" />
                  <span className="text-xs font-bold text-slate-200">
                    Licensed Plumber
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-2.5">
                  <Languages className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-bold text-emerald-400">
                    ¡Hablamos Español!
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between mt-8">
              <span>Soto Plumbing LLC</span>
              <span className="text-[#FF6B00] font-semibold">NC Master Plumber</span>
            </div>
          </motion.div>

          {/* Operating Hours Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl glass-panel p-8 sm:p-10 border border-white/10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                Weekly Schedule
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-8">
                Business Hours
              </h3>

              <div className="space-y-2.5">
                {hoursList.map((item, idx) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between py-2.5 px-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm"
                  >
                    <span className="font-semibold text-slate-200">{item.day}</span>
                    <span className="font-mono text-xs font-bold text-[#FF6B00]">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-xs text-slate-300 flex items-center justify-between">
              <span>Weekend emergency?</span>
              <a href="tel:7043479674" className="font-bold text-[#FF6B00] hover:underline">
                Call 24/7 Hotline
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

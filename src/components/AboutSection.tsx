"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, UserCheck } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0D1017] relative overflow-hidden border-y border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Israel Soto & Soto Truck Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-panel p-3 border border-white/10 shadow-2xl group">
              
              {/* Clean Photo Frame Container */}
              <div className="relative h-[380px] sm:h-[480px] w-full rounded-2xl overflow-hidden">
                <Image
                  src="/img/img-1.png"
                  alt="Israel Soto CEO & Co-Founder - Soto Plumbing LLC Truck and Trailer"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

            </div>
          </motion.div>

          {/* Right Column: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              ESTABLISHED <span className="orange-gradient-text">SINCE 2019</span>
            </h2>

            {/* Content Text */}
            <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed mb-6">
              Soto Plumbing LLC® was established in 2019 and has been growing ever since across North Carolina.
            </p>

            {/* Founder Card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF6B00]/40 transition-colors mb-8 relative w-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00]">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">
                    Israel Soto <span className="text-[#FF6B00] font-normal text-xs sm:text-sm">— CEO & Co-Founder</span>
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Began his venture at a young age. His interest in the field grew when plumbing was first introduced to him by his father.
              </p>
            </div>

            {/* Highlights Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full text-xs text-slate-300">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0A0D12] border border-white/5">
                <HeartHandshake className="w-5 h-5 text-[#FF6B00] flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">Father-Taught Legacy</p>
                  <p className="text-[11px] text-slate-400">Built on family values & honesty</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0A0D12] border border-white/5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="font-bold text-white">Rapid Regional Growth</p>
                  <p className="text-[11px] text-slate-400">Serving communities across NC</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

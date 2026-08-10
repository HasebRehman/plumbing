"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-8 sm:py-10 lg:py-14 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FF6B00]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: img-1.png Photo of Israel Soto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.18)] border border-slate-200/90 group bg-slate-100">
              <div className="relative h-[320px] sm:h-[400px] lg:h-[460px] w-full">
                <Image
                  src="/img/img-1.png"
                  alt="Israel Soto - Founder & Lead Plumber at Soto Plumbing LLC"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: About Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 sm:mb-6">
              ESTABLISHED SINCE <span className="orange-gradient-text">2019</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-6 sm:mb-8">
              <p>
                <strong className="text-slate-900 font-bold">Soto Plumbing LLC</strong> was founded in 2019 by CEO and Co-Founder <strong className="text-[#E05A00] font-bold">Israel Soto</strong>. What started as a passion for master craftsmanship quickly grew into North Carolina's premier trusted plumbing service network.
              </p>
              <p>
                Having been taught by his father at a young age, Israel developed a deep respect for the trade, learning that true plumbing excellence requires honesty, precision, and unyielding dedication to customer care.
              </p>
              <p>
                Today, our licensed technicians carry forward that legacy—delivering dependable residential and commercial plumbing services with upfront pricing, full code compliance, and bilingual support.
              </p>
            </div>

            {/* Key Value Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-md">
                <Award className="w-5 h-5 text-[#FF6B00] mb-2" />
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Master Licensed</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Certified NC Plumbing Technicians</p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-md">
                <Heart className="w-5 h-5 text-[#FF6B00] mb-2" />
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900">Family Legacy</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Built on Honesty & Integrity</p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

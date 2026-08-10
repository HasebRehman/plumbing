"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Phone, Calendar, ArrowRight, Clock } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center pt-24 sm:pt-44 md:pt-48 pb-10 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#F8FAFC]">
      
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[170px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-slate-200/50 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >

          {/* Clean Pill Badges (Hidden on mobile, visible on sm and up) */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-[#FF6B00]/10 text-[#E05A00] border border-[#FF6B00]/25 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
              NC Master Licensed Plumber
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200 shadow-sm">
              <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
              24/7 Emergency Service
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.18] mb-4 sm:mb-6 max-w-4xl">
            Licensed Plumbing Excellence <br className="hidden sm:inline" />
            <span className="orange-gradient-text">You Can Trust In North Carolina</span>
          </h1>

          {/* Clean Subtitle */}
          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl leading-relaxed mb-6 sm:mb-10 font-normal">
            At <strong className="text-slate-900 font-bold">Soto Plumbing LLC</strong>, we deliver prompt fixture repairs, water heater replacements, and emergency plumbing with upfront pricing and 100% satisfaction guaranteed.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8 sm:mb-12">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#FF6B00] hover:bg-[#E05A00] transition-all flex items-center justify-center gap-2.5 group transform active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              Book Visit / Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:7043479674"
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#FF6B00]/50 shadow-sm transition-all flex items-center justify-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-[#FF6B00]" />
              Call Plumber: (704) 347-9674
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 pt-6 sm:pt-8 border-t border-slate-200 w-full max-w-2xl text-center">
            <div>
              <p className="text-lg sm:text-2xl font-extrabold text-[#FF6B00]">Licensed</p>
              <p className="text-xs text-slate-600 font-semibold">Insured Technicians</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-extrabold text-[#FF6B00]">Upfront</p>
              <p className="text-xs text-slate-600 font-semibold">Clear Pricing</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-lg sm:text-2xl font-extrabold text-[#FF6B00]">24/7</p>
              <p className="text-xs text-slate-600 font-semibold">Emergency Response</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

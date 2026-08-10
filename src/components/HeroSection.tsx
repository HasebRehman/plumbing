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
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center py-20 sm:py-28 overflow-hidden bg-[#0A0D12]">
      
      {/* Ambient Background Visual & Glow */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero-bg.jpg"
          alt="Luxury Plumbing Installation"
          fill
          className="object-cover object-center opacity-15 filter blur-[3px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0D12]/95 via-[#0A0D12]/85 to-[#0A0D12]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF6B00]/15 rounded-full blur-[170px] pointer-events-none" />
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
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#FF6B00]/15 text-[#FF8533] border border-[#FF6B00]/30 shadow-inner">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
              NC Master Licensed Plumber
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-slate-300 border border-white/10">
              <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
              24/7 Emergency Service
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] mb-6 max-w-4xl">
            Licensed Plumbing Excellence <br className="hidden sm:inline" />
            <span className="orange-gradient-text">You Can Trust In North Carolina</span>
          </h1>

          {/* Clean Subtitle */}
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-10 font-normal">
            At <strong className="text-white font-semibold">Soto Plumbing LLC</strong>, we deliver prompt fixture repairs, water heater replacements, and emergency plumbing with upfront pricing and 100% satisfaction guaranteed.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-[#FF6B00] hover:bg-[#E05A00] shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2.5 group transform active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              Book Visit / Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:7043479674"
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FF6B00]/50 transition-all flex items-center justify-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-[#FF6B00]" />
              Call Plumber: (704) 347-9674
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 pt-8 border-t border-white/10 w-full max-w-2xl text-center">
            <div>
              <p className="text-lg sm:text-2xl font-extrabold text-[#FF6B00]">Licensed</p>
              <p className="text-xs text-slate-400 font-medium">Insured Technicians</p>
            </div>
            <div>
              <p className="text-lg sm:text-2xl font-extrabold text-[#FF6B00]">Upfront</p>
              <p className="text-xs text-slate-400 font-medium">Clear Pricing</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-lg sm:text-2xl font-extrabold text-[#FF6B00]">24/7</p>
              <p className="text-xs text-slate-400 font-medium">Emergency Response</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Phone, ShieldCheck, Languages } from "lucide-react";

export default function EmergencyBar() {
  return (
    <div className="bg-[#080B0F] border-b border-white/5 text-xs py-2.5 px-4 text-slate-400">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <div className="flex items-center gap-6">
          <span className="inline-flex items-center gap-2 font-medium text-[#FF6B00]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]"></span>
            </span>
            24/7 Emergency Dispatch
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-300">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF6B00]" />
            NC Licensed Plumber
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 text-emerald-400 font-medium">
            <Languages className="w-3.5 h-3.5" />
            Hablamos Español
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:704-347-9674"
            className="flex items-center gap-1.5 font-bold text-white hover:text-[#FF6B00] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
            704-347-9674
          </a>
        </div>

      </div>
    </div>
  );
}

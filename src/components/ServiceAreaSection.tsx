"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, ShieldCheck } from "lucide-react";

export default function ServiceAreaSection() {
  const cities = [
    { name: "Charlotte", responseTime: "< 30 Min" },
    { name: "Raleigh", responseTime: "< 45 Min" },
    { name: "Greensboro", responseTime: "< 40 Min" },
    { name: "Durham", responseTime: "< 45 Min" },
    { name: "Winston-Salem", responseTime: "< 40 Min" },
    { name: "Concord", responseTime: "< 25 Min" },
    { name: "Gastonia", responseTime: "< 30 Min" },
    { name: "Huntersville", responseTime: "< 25 Min" },
    { name: "Rocky Mount", responseTime: "< 50 Min" },
    { name: "Greenville", responseTime: "< 50 Min" },
  ];

  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <section id="service-areas" className="py-24 bg-[#0A0D12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-[#FF6B00] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 mb-3">
            North Carolina Service Hub
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Serving Your <span className="orange-gradient-text">Community</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            At Soto Plumbing, we aim to meet customer needs. That is why we proudly serve our home state of North Carolina.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Map Preview Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 relative overflow-hidden"
          >
            <div className="relative w-full h-[320px] rounded-2xl bg-[#080B0F] border border-white/10 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
              
              <div className="relative z-10 space-y-3 max-w-md">
                <div className="w-12 h-12 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center mx-auto border border-[#FF6B00]/40">
                  <Navigation className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">
                  {selectedCity.name}, North Carolina
                </h4>
                <p className="text-xs text-slate-400 font-normal">
                  Local master plumbers are equipped for rapid dispatch in {selectedCity.name} and nearby neighborhoods.
                </p>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                  <span>Estimated Arrival:</span>
                  <span className="font-bold text-[#FF6B00]">{selectedCity.responseTime}</span>
                </div>
              </div>

            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
                Statewide NC Coverage
              </span>
              <a href="tel:704-347-9674" className="text-[#FF6B00] font-semibold hover:underline">
                Call Plumber
              </a>
            </div>
          </motion.div>

          {/* City Pills */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-lg font-bold text-white mb-3">
              Select Your City:
            </h3>

            <div className="grid grid-cols-2 gap-2.5">
              {cities.map((city) => {
                const isSelected = selectedCity.name === city.name;
                return (
                  <button
                    key={city.name}
                    onClick={() => setSelectedCity(city)}
                    className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-[#FF6B00] text-white border-[#FF6B00] shadow-glow"
                        : "bg-white/5 text-slate-300 border-white/10 hover:border-[#FF6B00]/40"
                    }`}
                  >
                    <span className="font-semibold text-xs">{city.name}</span>
                    <MapPin className={`w-3.5 h-3.5 ${isSelected ? "text-white" : "text-[#FF6B00]"}`} />
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

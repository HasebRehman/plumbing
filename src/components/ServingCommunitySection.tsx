"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ServingCommunitySection() {
  return (
    <section id="serving-community" className="py-20 sm:py-28 bg-[#0D1017] relative overflow-hidden border-t border-white/5">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clean North Carolina Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="rounded-3xl glass-panel p-3 border border-white/10 shadow-2xl relative overflow-hidden">
              
              {/* Google Map Frame */}
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border border-white/10 bg-[#0A0D12]">
                <iframe
                  title="Soto Plumbing North Carolina Service Area Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1656826.9692484306!2d-80.8431267!3d35.2270869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a05%3A0x7d013127206f698d!2sNorth%20Carolina!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.2)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-85"
                />

                {/* Floating "Open in Maps" Overlay Badge */}
                <a
                  href="https://maps.google.com/?q=North+Carolina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 left-4 px-3.5 py-2 rounded-xl bg-[#0D1017]/90 backdrop-blur-md border border-white/15 text-white text-xs font-bold shadow-lg flex items-center gap-2 hover:border-[#FF6B00] transition-all"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF6B00]" />
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Section Title & Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              SERVING YOUR <span className="orange-gradient-text">COMMUNITY</span>
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg font-medium text-slate-200 leading-relaxed max-w-xl">
              AT SOTO PLUMBING, WE AIM TO MEET CUSTOMER NEEDS. THAT IS WHY WE SERVE OUR HOME STATE.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

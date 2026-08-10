"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ExternalLink, ShieldCheck } from "lucide-react";

export default function ServingCommunitySection() {
  return (
    <section className="py-10 sm:py-16 lg:py-28 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Side: North Carolina Map View */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.14)] bg-slate-50 p-2 relative group">
              <div className="relative h-[340px] sm:h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden">
                <iframe
                  title="North Carolina Service Area Map - Soto Plumbing LLC"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329068.7490070737!2d-80.95!3d35.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0x884650e6bf43d164!2sNorth%20Carolina!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "contrast(1.02)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Action Link */}
              <div className="p-3.5 bg-white border-t border-slate-200 flex items-center justify-between rounded-b-2xl">
                <span className="text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#FF6B00]" />
                  Statewide Service Area: North Carolina
                </span>
                <a
                  href="https://maps.google.com/?q=North+Carolina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm font-bold text-[#FF6B00] hover:underline flex items-center gap-1"
                >
                  Open in Maps <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Community Commitment Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 sm:mb-6">
              SERVING YOUR <br />
              <span className="orange-gradient-text">COMMUNITY</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal mb-6 sm:mb-8">
              <p>
                At <strong className="text-slate-900 font-bold">Soto Plumbing LLC</strong>, we aim to meet customer needs across the region.
              </p>
              <p className="text-slate-900 font-bold text-base sm:text-lg">
                That is why we serve our home state of North Carolina.
              </p>
              <p>
                Whether you need urgent emergency plumbing dispatch, fixture installations, or whole-home line maintenance, our licensed team is dedicated to providing prompt, clean, and top-quality workmanship for every household.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-md space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#FF6B00] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  Licensed & Insured Plumbing Contractors
                </span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#FF6B00] flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  Upfront Transparent Flat-Fee Pricing
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

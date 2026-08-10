"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";

export default function OurApproachSection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      src: "/img/img-2.jpg",
      title: "Delta Flynn Fixture & Under-Mount Sink Installation",
    },
    {
      src: "/img/img-3.jpg",
      title: "Custom Bathroom Shower Basin & Enclosure Swap",
    },
    {
      src: "/img/img-4.jpg",
      title: "Precision PEX Water Supply Pipe Rerouting",
    },
    {
      src: "/img/img-5.jpg",
      title: "Under-Sink Trap & Drain Assembly Fitting",
    },
    {
      src: "/img/img-6.jpg",
      title: "Main Line Valve & Pressure Regulator Installation",
    },
    {
      src: "/img/img-7.jpg",
      title: "High-Efficiency Dual Flush Toilet Installation",
    },
    {
      src: "/img/img-8.jpg",
      title: "Commercial-Grade Brass Water Line Connections",
    },
    {
      src: "/img/img-9.jpg",
      title: "Modern Matte Chrome Faucet & Basin Hardware",
    },
    {
      src: "/img/img-10.jpg",
      title: "Whole-Home Water Heater & Supply Line Setup",
    },
  ];

  // Auto-scroll continuously from right to left every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [galleryImages.length]);

  // Compute visible 3 images window based on currentIndex
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % galleryImages.length;
      visible.push(galleryImages[idx]);
    }
    return visible;
  };

  const visibleImages = getVisibleImages();

  return (
    <section id="approach" className="py-10 sm:py-16 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
      {/* Ambient Orange Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#FF6B00]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 sm:mb-6">
            QUALITY <span className="orange-gradient-text">GUARANTEE</span>
          </h2>
          
          <div className="space-y-1.5 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            <p>Our customers expect quality service and materials.</p>
            <p>That is why we use materials that meet your standards.</p>
            <p className="text-slate-900 font-bold text-base sm:text-lg">Your satisfaction is our top priority.</p>
          </div>
        </div>

        {/* Carousel Grid: 1 on Mobile, 2 on Tablet, 3 on Desktop */}
        <div className="relative overflow-hidden py-1 sm:py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleImages.map((imgItem, idx) => (
                <motion.div
                  key={`${imgItem.src}-${currentIndex}-${idx}`}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  onClick={() => setActiveImage(imgItem.src)}
                  className={`group cursor-pointer rounded-2xl bg-white p-3 border border-slate-200/90 shadow-[0_15px_40px_rgba(15,23,42,0.12)] hover:border-[#FF6B00]/50 transition-all duration-300 relative overflow-hidden ${
                    idx === 0
                      ? "block"
                      : idx === 1
                      ? "hidden sm:block"
                      : "hidden lg:block"
                  }`}
                >
                  {/* Photo Box */}
                  <div className="relative h-60 sm:h-72 w-full rounded-xl overflow-hidden">
                    <Image
                      src={imgItem.src}
                      alt={imgItem.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Bottom Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                        {imgItem.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Minimal Progress Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-[#FF6B00]" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quality Commitment Bottom Banner */}
        <div className="mt-8 sm:mt-10 lg:mt-12 p-5 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.14)] flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-[#FF6B00]/10 text-[#FF6B00] flex-shrink-0">
              <ShieldCheck className="w-7 h-7 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                Backed By Soto Workmanship Warranty
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg">
                Premium plumbing materials installed strictly to North Carolina building codes.
              </p>
            </div>
          </div>
          <a
            href="tel:7043479674"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#E05A00] text-white text-xs sm:text-sm font-bold transition-all whitespace-nowrap text-center"
          >
            Call Plumber (704) 347-9674
          </a>
        </div>

      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative max-w-4xl w-full h-[80vh] rounded-3xl overflow-hidden border border-slate-700">
              <Image
                src={activeImage}
                alt="Enlarged Plumbing Work Showcase"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 p-3 rounded-full bg-slate-900 text-white hover:bg-[#FF6B00] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

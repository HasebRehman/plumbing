"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ShieldCheck } from "lucide-react";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Carlos & Maria Rodriguez",
      location: "Charlotte, NC",
      review:
        "Soto Plumbing did an amazing job replacing all our bathroom and kitchen fixtures! Hablan español perfecto, nos explicaron todo con detalles y el precio fue muy justo.",
      rating: 5,
    },
    {
      name: "David Miller",
      location: "Concord, NC",
      review:
        "Woke up with zero hot water. Called Soto Plumbing and a licensed master plumber was at my house within 45 minutes. Extremely professional, clean, and knowledgeable.",
      rating: 5,
    },
    {
      name: "Sarah Jenkins",
      location: "Greensboro, NC",
      review:
        "They located a hidden pipe leak behind our laundry wall without tearing up our floors. Honest pricing, licensed plumbers, and prompt cleanup. Highly recommended!",
      rating: 5,
    },
    {
      name: "Javier & Elena Gomez",
      location: "Raleigh, NC",
      review:
        "Excelente servicio. El equipo de Israel Soto trabajó rápidamente y dejó todo Impecable. Nos sentimos totalmente tranquilos con su garantía de trabajo.",
      rating: 5,
    },
    {
      name: "Marcus Vance",
      location: "Durham, NC",
      review:
        "Soto Plumbing handled our restaurant fixture upgrades seamlessly. Upfront pricing, full NC code compliance, and zero downtime for our business.",
      rating: 5,
    },
  ];

  // Auto-scroll continuously from right to left every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [reviews.length]);

  // Compute visible 3 reviews window based on currentIndex
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentIndex + i) % reviews.length;
      visible.push(reviews[idx]);
    }
    return visible;
  };

  const visibleReviews = getVisibleReviews();

  return (
    <section id="testimonials" className="py-10 sm:py-16 lg:py-28 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Ambient Orange Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B00]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3 sm:mb-4">
            Trusted By Homeowners <span className="orange-gradient-text">Across NC</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Read what our clients say about our master plumbing craftsmanship and bilingual service.
          </p>
        </div>

        {/* Carousel Grid: 1 on Mobile, 2 on Tablet, 3 on Desktop */}
        <div className="relative overflow-hidden py-1 sm:py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleReviews.map((rev, idx) => (
                <motion.div
                  key={`${rev.name}-${currentIndex}-${idx}`}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className={`rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.14)] hover:border-[#FF6B00]/50 transition-all duration-300 flex-col justify-between relative ${
                    idx === 0
                      ? "flex"
                      : idx === 1
                      ? "hidden sm:flex"
                      : "hidden lg:flex"
                  }`}
                >
                  <div>
                    {/* Rating & Quote Icon */}
                    <div className="flex items-center justify-between mb-5 sm:mb-6">
                      <div className="flex items-center gap-1 text-[#FF6B00]">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#FF6B00]" />
                        ))}
                      </div>
                      <Quote className="w-6 h-6 text-slate-200" />
                    </div>

                    {/* Review Text */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6 font-normal">
                      "{rev.review}"
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{rev.name}</h4>
                      <p className="text-[11px] text-slate-500 font-semibold">{rev.location}</p>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Minimal Dots Progress Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to review slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-[#FF6B00]" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

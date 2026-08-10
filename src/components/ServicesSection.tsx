"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Wrench, Flame, Droplets, ShieldAlert, Building2, Filter, ArrowRight } from "lucide-react";

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export default function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const serviceCatalog = [
    {
      id: "heaters",
      title: "Water Heater Systems",
      subtitle: "Tankless & Standard Upgrades",
      description:
        "Fast repair and installation of energy-efficient tankless water heaters and traditional water tanks.",
      icon: Flame,
      image: "/img/water-heater.jpg",
    },
    {
      id: "leaks",
      title: "Leak & Pipe Repair",
      subtitle: "Thermal Spotting & Re-Piping",
      description:
        "Precision leak detection and copper, PVC, or PEX pipe replacement to prevent water damage.",
      icon: Droplets,
      image: "/img/leak-detection.jpg",
    },
    {
      id: "drains",
      title: "Drain Cleaning & Jetting",
      subtitle: "Main Line Clog Removal",
      description:
        "High-pressure hydro jetting and video inspections to clear stubborn grease and root blockages.",
      icon: ShieldAlert,
      image: "/img/hero-bg.jpg",
    },
    {
      id: "commercial",
      title: "Commercial Plumbing",
      subtitle: "Businesses & Facilities",
      description:
        "Code compliance, backflow prevention, and routine maintenance for commercial properties.",
      icon: Building2,
      image: "/img/water-heater.jpg",
    },
    {
      id: "filtration",
      title: "Water Filtration",
      subtitle: "Whole-House Softeners",
      description:
        "Enjoy clean, purified tap water with advanced whole-house filtration and hard water conditioning.",
      icon: Filter,
      image: "/img/leak-detection.jpg",
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0A0D12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-[#FF6B00] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 mb-3">
            Plumbing Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Core <span className="orange-gradient-text">Plumbing Services</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            From fixture swaps to complete line maintenance, our licensed team is equipped to meet your needs.
          </p>
        </div>

        {/* Featured "NEED A FIXTURE?" Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 rounded-3xl p-8 sm:p-12 glass-panel border border-[#FF6B00]/30 relative overflow-hidden bg-gradient-to-r from-[#12161F] via-[#161B26] to-[#12161F]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="inline-block text-xs font-bold text-[#FF6B00] uppercase tracking-wider mb-3">
                Featured Specialty
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Need A Fixture?
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
                Schedule a visit with our licensed and insured plumbers. We offer a full variety of fixture replacement, kitchen faucet upgrades, toilet servicing, and bathroom hardware installations.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-7 py-3.5 rounded-xl bg-[#FF6B00] hover:bg-[#E05A00] text-white text-xs font-bold shadow-glow flex items-center gap-2 transition-all"
                >
                  <Wrench className="w-4 h-4" />
                  Schedule Fixture Visit
                </button>
                <a
                  href="tel:7043479674"
                  className="px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#FF6B00]/50 text-slate-200 text-xs font-semibold transition-all"
                >
                  Call Plumber: (704) 347-9674
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/img/hero-bg.jpg"
                alt="Bathroom Fixture Work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0A0D12]/80 backdrop-blur-md border border-white/10 text-xs text-slate-300">
                <span className="font-bold text-[#FF6B00]">100% Satisfaction Guaranteed</span> on all fixture installs.
              </div>
            </div>

          </div>
        </motion.div>

        {/* 5 Clean Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCatalog.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group rounded-2xl glass-panel p-6 border border-white/10 hover:border-[#FF6B00]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Banner */}
                  <div className="relative h-40 w-full rounded-xl overflow-hidden mb-5 border border-white/5">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12161F] via-transparent to-transparent" />
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                        {svc.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium">{svc.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                    {svc.description}
                  </p>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#FF6B00] text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Request Service
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

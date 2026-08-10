"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Wrench,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Flame,
  Droplets,
  Building,
  Home,
  Check,
} from "lucide-react";

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickQuoteModal({
  isOpen,
  onClose,
}: QuickQuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("Fixture Installation & Repair");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeline, setTimeline] = useState("Today / Rapid");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const serviceOptions = [
    { name: "Fixture Installation & Repair", icon: Wrench },
    { name: "Emergency Water Heater Swap", icon: Flame },
    { name: "Pipe Leak & Slab Leak Repair", icon: Droplets },
    { name: "Drain Cleaning & Jetting", icon: Droplets },
    { name: "Bathroom / Kitchen Remodel Plumbing", icon: Home },
    { name: "Commercial Plumbing Inspection", icon: Building },
  ];

  const timelineOptions = [
    "24/7 Immediate Emergency",
    "Today / Rapid",
    "Within 48 Hours",
    "Flexible / Schedule Ahead",
  ];

  // Close custom dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  const currentServiceObj = serviceOptions.find((s) => s.name === selectedService) || serviceOptions[0];
  const CurrentIcon = currentServiceObj.icon;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-hidden pointer-events-auto">
          
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Container Locked Fixed in Place */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto no-scrollbar rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl z-10 text-slate-900"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-100 hover:bg-[#FF6B00] text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <div className="p-4 rounded-full bg-emerald-50 text-emerald-600 mb-4 border border-emerald-200">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                  Request Dispatched!
                </h3>
                <p className="text-sm text-slate-600 max-w-sm font-medium">
                  Our master plumbing dispatch team will call you within 15 minutes to confirm details.
                </p>
              </div>
            ) : (
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-3 rounded-2xl bg-[#FF6B00]/10 text-[#FF6B00] flex-shrink-0">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      Book Plumbing Visit
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold">
                      Fast response by licensed Soto Plumbing technicians.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Custom Luxury React Select Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                      Service Needed
                    </label>

                    {/* Trigger Button */}
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className={`w-full flex items-center justify-between rounded-xl bg-slate-50 border px-4 py-3.5 text-sm text-slate-900 transition-all duration-300 ${
                        isDropdownOpen
                          ? "border-[#FF6B00] ring-2 ring-[#FF6B00]/30 shadow-sm"
                          : "border-slate-200 hover:border-[#FF6B00]/60"
                      }`}
                    >
                      <div className="flex items-center gap-3 font-bold text-slate-900">
                        <CurrentIcon className="w-4 h-4 text-[#FF6B00]" />
                        <span>{selectedService}</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-[#FF6B00] transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Animated Dropdown Menu */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 4, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 right-0 z-50 rounded-2xl bg-white border border-slate-200 p-2 shadow-2xl backdrop-blur-2xl max-h-60 overflow-y-auto no-scrollbar space-y-1"
                        >
                          {serviceOptions.map((opt) => {
                            const IconComp = opt.icon;
                            const isSelected = selectedService === opt.name;
                            return (
                              <button
                                key={opt.name}
                                type="button"
                                onClick={() => {
                                  setSelectedService(opt.name);
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                                  isSelected
                                    ? "bg-[#FF6B00] text-white shadow-md"
                                    : "text-slate-700 hover:bg-[#FF6B00]/10 hover:text-[#E05A00]"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <IconComp className={`w-4 h-4 ${isSelected ? "text-white" : "text-[#FF6B00]"}`} />
                                  <span>{opt.name}</span>
                                </div>
                                {isSelected && <Check className="w-4 h-4 text-white" />}
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Service Timeline Selector */}
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2">
                      Service Timeline
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {timelineOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setTimeline(opt)}
                          className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border ${
                            timeline === opt
                              ? "bg-[#FF6B00] text-white border-[#FF6B00] shadow-md"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Customer Contact Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-all font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(704) 347-9674"
                        className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-all font-semibold"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="sales@sotoplumbing.co"
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-all font-semibold"
                    />
                  </div>

                  {/* Problem Description */}
                  <div>
                    <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-1.5">
                      Describe Plumbing Issue / Fixture Request
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what fixture or leak you need inspected..."
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00] transition-all resize-none font-semibold"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-bold text-white bg-[#FF6B00] hover:bg-[#E05A00] shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 transform active:scale-98"
                  >
                    <Calendar className="w-4 h-4" />
                    Submit Request & Dispatch Team
                  </button>

                  <p className="text-center text-[11px] text-slate-500 font-semibold">
                    Prefer immediate assistance? Call us directly at{" "}
                    <a href="tel:7043479674" className="text-[#FF6B00] underline font-bold">
                      704.347.9674
                    </a>
                  </p>

                </form>
              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

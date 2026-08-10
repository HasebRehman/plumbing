"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Approach", href: "#approach" },
    { name: "Contact Us", href: "#contact-hours-fixture" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-[#07090D] text-slate-400 border-t border-white/10 relative pt-16 sm:pt-20 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#FF6B00]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Balanced 3-column layout on both Tablet (sm:) and Desktop (lg:) */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-8 lg:gap-16 pb-14 border-b border-white/10">
          
          {/* Left Column: Soto Logo & Description */}
          <div className="sm:col-span-5 flex flex-col items-start">
            <Link href="#hero" className="mb-5 group inline-block">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 transition-transform group-hover:scale-105">
                <Image
                  src="/img/logo-removebg-preview.png"
                  alt="Soto Plumbing LLC Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm sm:max-w-xs lg:max-w-md leading-relaxed font-normal">
              North Carolina's premier master licensed plumbing company. Specializing in fixture installation, emergency repairs, water heaters, and drain jetting. Hablamos Español!
            </p>
          </div>

          {/* Center Column: Navigation */}
          <div className="sm:col-span-3">
            <h4 className="text-xs sm:text-sm font-extrabold text-white tracking-wider uppercase mb-4 border-l-2 border-[#FF6B00] pl-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#FF6B00] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Direct Contact */}
          <div className="sm:col-span-4">
            <h4 className="text-xs sm:text-sm font-extrabold text-white tracking-wider uppercase mb-4 border-l-2 border-[#FF6B00] pl-3">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6B00]" />
                <a href="tel:7043479674" className="font-extrabold text-white hover:text-[#FF6B00] transition-colors">
                  704.347.9674
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF6B00]" />
                <a href="mailto:SALES@SOTOPLUMBING.CO" className="text-slate-300 hover:text-white transition-colors">
                  SALES@SOTOPLUMBING.CO
                </a>
              </p>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-[11px] sm:text-xs text-slate-400 mt-3 leading-relaxed">
                <span className="font-bold text-[#FF6B00]">Standard Hours:</span> Mon-Fri 6:00 AM - 5:00 PM <br />
                <span className="font-bold text-white">Weekend Emergency:</span> Sat-Sun 24/7 Dispatch
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Centered Copyright */}
        <div className="pt-8 text-center">
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            SOTO PLUMBING LLC ® All rights reserved. Designed & Redesigned with Next.js
          </p>
        </div>

      </div>
    </footer>
  );
}

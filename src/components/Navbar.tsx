"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Calendar, Phone } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Approach", href: "#approach" },
    { name: "Contact Us", href: "#contact-hours-fixture" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-lg shadow-slate-900/5 py-3"
          : "bg-white/90 backdrop-blur-md py-4 border-b border-slate-200/60 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left Side: Clearly Visible Logo Image */}
        <Link href="#hero" className="flex items-center group py-1">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 transition-transform group-hover:scale-105">
            <Image
              src="/img/logo-removebg-preview.png"
              alt="Soto Plumbing Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-700 hover:text-[#FF6B00] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF6B00] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Phone & Book Now */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:7043479674"
            className="text-xs font-bold text-slate-800 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 border border-slate-200 hover:border-[#FF6B00]/40 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
            704.347.9674
          </a>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#FF6B00] hover:bg-[#E05A00] shadow-glow transition-all flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Now
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[75px] bg-white/95 backdrop-blur-2xl border-b border-slate-200 p-6 shadow-2xl flex flex-col gap-4 z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-slate-800 hover:text-[#FF6B00] py-2 border-b border-slate-100"
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-[#FF6B00] flex items-center justify-center gap-2 shadow-glow"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
            <a
              href="tel:7043479674"
              className="w-full py-3.5 rounded-xl text-sm font-bold text-center text-slate-800 bg-slate-100 border border-slate-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#FF6B00]" />
              Call (704) 347-9674
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

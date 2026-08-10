"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OurApproachSection from "@/components/OurApproachSection";
import ServingCommunitySection from "@/components/ServingCommunitySection";
import ContactHoursFixtureSection from "@/components/ContactHoursFixtureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import QuickQuoteModal from "@/components/QuickQuoteModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0D12] text-slate-100 flex flex-col selection:bg-[#FF6B00] selection:text-white">
      {/* Main Navbar */}
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* 2. About Us Section (Israel Soto Story) */}
        <AboutSection />

        {/* 3. Our Approach Section (QUALITY GUARANTEE & 3-Image Continuous Carousel) */}
        <OurApproachSection />

        {/* 4. Serving Your Community Section (North Carolina Map) */}
        <ServingCommunitySection />

        {/* 5. Contact Us, Hours & NEED A FIXTURE? Section */}
        <ContactHoursFixtureSection
          onOpenBooking={() => setIsBookingOpen(true)}
        />

        {/* 6. Testimonials Section (Continuous 3-Card Carousel BEFORE FAQ) */}
        <TestimonialsSection />

        {/* 7. FAQ Section */}
        <FAQSection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Booking Modal */}
      <QuickQuoteModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

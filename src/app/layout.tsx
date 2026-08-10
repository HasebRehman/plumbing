import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Soto Plumbing LLC | Licensed & Insured Plumbers North Carolina",
  description:
    "Official Soto Plumbing LLC website. Premier residential & commercial plumbing in North Carolina. Hablamos Español! Emergency service, leaks, water heaters, and fixture installation.",
  icons: {
    icon: "/img/logo.png",
    shortcut: "/img/logo.png",
    apple: "/img/logo.png",
  },
  keywords: [
    "Soto Plumbing",
    "Plumber North Carolina",
    "Licensed Plumber Charlotte NC",
    "Spanish Speaking Plumber",
    "Emergency Plumbing NC",
    "Water Heater Installation",
    "Fixture Repair",
  ],
  authors: [{ name: "Soto Plumbing LLC" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body className="bg-[#0A0D12] text-slate-100 font-sans antialiased selection:bg-[#FF6B00] selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

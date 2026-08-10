"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0D12] text-white min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">A critical error occurred</h2>
        <button
          onClick={() => reset()}
          className="px-6 py-3 rounded-xl bg-[#FF6B00] text-white text-xs font-bold"
        >
          Try Again
        </button>
      </body>
    </html>
  );
}

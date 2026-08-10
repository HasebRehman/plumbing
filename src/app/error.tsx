"use client";

import { useEffect } from "react";
import { Wrench, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0A0D12] text-white flex flex-col items-center justify-center p-4 text-center">
      <div className="p-4 rounded-2xl bg-[#FF6B00]/20 text-[#FF6B00] mb-4">
        <Wrench className="w-12 h-12" />
      </div>
      <h2 className="text-3xl font-bold mb-2">Something went wrong!</h2>
      <p className="text-slate-400 text-sm max-w-md mb-6">
        An unexpected error occurred while loading the page. Please try refreshing.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 rounded-xl bg-[#FF6B00] hover:bg-[#E05A00] text-white text-xs font-bold transition-all flex items-center gap-2"
      >
        <RefreshCw className="w-4 h-4" />
        Try Again
      </button>
    </div>
  );
}

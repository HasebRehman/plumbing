import Link from "next/link";
import { Wrench, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0D12] text-white flex flex-col items-center justify-center p-4 text-center">
      <div className="p-4 rounded-2xl bg-[#FF6B00]/20 text-[#FF6B00] mb-4">
        <Wrench className="w-12 h-12" />
      </div>
      <h1 className="text-4xl font-black mb-2">404 - Page Not Found</h1>
      <p className="text-slate-400 text-sm max-w-md mb-6">
        The page you are looking for doesn't exist or has been moved. Return back to Soto Plumbing home.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-[#FF6B00] hover:bg-[#E05A00] text-white text-xs font-bold transition-all flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Soto Plumbing Home
      </Link>
    </div>
  );
}

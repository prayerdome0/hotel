'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Building2 } from 'lucide-react';

export default function ForSaleBanner() {
  return (
    <aside aria-label="Commercial Real Estate Offering" className="bg-gradient-to-r from-amber-950/90 via-slate-900 to-amber-950/90 border-b border-amber-500/30 text-amber-200 text-xs sm:text-sm py-2 px-4 relative z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 font-semibold tracking-wider text-[10px] sm:text-xs uppercase">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            FOR SALE • 100% FREEHOLD
          </span>
          <span className="text-slate-300 hidden md:inline">|</span>
          <span className="text-slate-200 font-medium">
            SWDL Luxury Resort & Residences is available for private acquisition by <strong className="text-amber-300 font-semibold">Seedwel Investment Limited</strong>
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/for-sale"
            className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold text-xs uppercase tracking-wider transition group underline-offset-4 hover:underline"
          >
            <span>Deal Room & Prospectus</span>
            <ArrowRight className="w-3.5 h-3.5 transition group-hover:translate-x-0.5" />
          </Link>
          <span className="text-slate-500">|</span>
          <Link
            href="/contact"
            className="text-slate-300 hover:text-amber-300 text-xs transition"
          >
            Inquire (xxxxx)
          </Link>
        </div>
      </div>
    </aside>
  );
}

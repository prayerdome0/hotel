'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  Globe,
  ArrowRight,
  Leaf,
  Users,
} from 'lucide-react';
import { HOTEL_INFO } from '@/data/hotelData';

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-amber-950/40 via-slate-950 to-slate-950 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1920&auto=format&fit=crop"
            alt="About SWDL & Seedwel Investment Limited"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            {HOTEL_INFO.owner}
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white leading-tight">
            The Story of SWDL & Architectural Legacy
          </h1>
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl font-light">
            Commissioned and developed under the stewardship of Seedwel Investment Limited, SWDL represents a landmark achievement in sustainable ultra-luxury hospitality engineering.
          </p>
        </div>
      </section>

      {/* Main Philosophy & History */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
              Vision & Provenance
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white leading-tight">
              A Masterpiece Conceived for the Discerning Global Connoisseur
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              SWDL was founded with a singular ambition: to redefine coastal luxury living by merging biophilic architecture with high-efficiency commercial operations. Spanning 5.8 freehold acres, every square foot was engineered to optimize guest experience, revenue density, and environmental resilience.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              From the cantilevered penthouse infinity pools to the FAA-certified private helipad and 16-berth superyacht marina, SWDL has consistently earned the highest accolades in the hospitality investment sector.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-2xl font-bold font-serif-luxury text-amber-300">2021</span>
                <p className="text-xs text-slate-400 mt-1">Groundbreaking & Inauguration</p>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <span className="text-2xl font-bold font-serif-luxury text-emerald-400">LEED Plat.</span>
                <p className="text-xs text-slate-400 mt-1">Sustainability Certification</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[420px] rounded-3xl overflow-hidden border border-amber-500/30">
            <Image
              src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1920&auto=format&fit=crop"
              alt="SWDL Grounds"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800 text-xs text-slate-300">
              <strong className="text-amber-300">Seedwel Investment Limited Statement:</strong> “SWDL embodies the intersection of world-class aesthetic grace and rigorous institutional financial discipline.”
            </div>
          </div>
        </div>
      </section>

      {/* About Seedwel Investment Limited Corporate Profile */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-8 bg-gradient-to-br from-amber-950/30 via-slate-900 to-slate-950">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800 pb-6">
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">
                Corporate Profile & Ownership
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
                Seedwel Investment Limited
              </h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              Entity Reg: Seedwel Investment Ltd. • 100% Asset Equity
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Asset Stewardship</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Seedwel Investment Limited is a premier commercial hospitality and real estate investment holding firm with extensive experience across prime coastal resort portfolios.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Turnkey Sale Transition</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                To facilitate a smooth ownership changeover, Seedwel provides complete transition management, staffing continuity agreements, and full vendor contracts.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Global Diligence Desk</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct engagement with principals and family offices worldwide. Reach our advisory directorate directly at email: <span className="text-amber-300 font-mono">xxxxx</span> or phone: <span className="text-amber-300 font-mono">xxxxx</span>.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
            <p className="text-xs text-slate-400">
              {HOTEL_INFO.copyright}
            </p>
            <Link
              href="/for-sale"
              className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold gold-btn flex items-center gap-2"
            >
              <span>View Acquisition Dossier</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

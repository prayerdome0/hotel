'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  FileCheck,
  ShieldCheck,
  Download,
  Lock,
  DollarSign,
  TrendingUp,
  Landmark,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Layers,
  ChevronDown,
} from 'lucide-react';
import FinancialMetrics from '@/components/FinancialMetrics';
import DealRoomModal from '@/components/DealRoomModal';
import BookingModal from '@/components/BookingModal';
import { HOTEL_INFO, ACQUISITION_FAQS } from '@/data/hotelData';

export default function ForSalePage() {
  const [dealRoomOpen, setDealRoomOpen] = useState(false);
  const [inspectionOpen, setInspectionOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-amber-950/40 via-slate-950 to-slate-950 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop"
            alt="SWDL Hotel For Sale"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-amber-400" />
            100% Freehold Title For Private Sale
          </div>

          <div className="max-w-4xl space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-bold text-white tracking-tight leading-tight">
              SWDL Luxury Resort & Residences Acquisition Dossier
            </h1>
            <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
              Copyrighted & Exclusively Presented by <strong className="text-amber-300 font-semibold">{HOTEL_INFO.owner}</strong>. An unrepeatable trophy commercial hospitality asset combining 240 luxury keys with $16.4M audited EBITDA.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="glass-card p-4 rounded-xl">
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">Asking Price Guide</span>
              <span className="text-xl sm:text-2xl font-bold text-amber-300 font-mono">{HOTEL_INFO.askingPriceGuide}</span>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">2025 Audited EBITDA</span>
              <span className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">$16.4M USD</span>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">Inventory</span>
              <span className="text-xl sm:text-2xl font-bold text-white font-mono">240 Keys + 28 Villas</span>
            </div>
            <div className="glass-card p-4 rounded-xl">
              <span className="text-[11px] text-slate-400 uppercase font-semibold block">Freehold Land Area</span>
              <span className="text-xl sm:text-2xl font-bold text-white font-mono">5.8 Oceanfront Acres</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setDealRoomOpen(true)}
              className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm gold-btn flex items-center gap-2 shadow-xl"
            >
              <Lock className="w-4 h-4" />
              <span>Enter Confidential Deal Room (Execute NDA)</span>
            </button>

            <button
              onClick={() => setInspectionOpen(true)}
              className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm gold-btn-outline flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book VIP Diligence Tour</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. TRANSACTION PARAMETERS & LEGAL SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">
              Asset Overview & Legal Structure
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
              Executive Acquisition Summary
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs text-slate-400 uppercase font-semibold">Title & Tenure</span>
              <p className="text-base font-bold text-white">100% Freehold Title</p>
              <p className="text-xs text-slate-400">
                Unencumbered clean title held by {HOTEL_INFO.owner} with no third-party debt covenants.
              </p>
            </div>

            <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs text-slate-400 uppercase font-semibold">Brand Management Flexibility</span>
              <p className="text-base font-bold text-emerald-400">Unencumbered Asset</p>
              <p className="text-xs text-slate-400">
                Buyer has total autonomy to self-operate under current management or flag with an ultra-luxury global brand.
              </p>
            </div>

            <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs text-slate-400 uppercase font-semibold">Master Plan Expansion Rights</span>
              <p className="text-base font-bold text-amber-300">40 Additional Beach Villas</p>
              <p className="text-xs text-slate-400">
                Approved master plan permits allow construction of 40 branded residences for immediate pre-sale capital return.
              </p>
            </div>

            <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs text-slate-400 uppercase font-semibold">Operational Infrastructure</span>
              <p className="text-base font-bold text-white">Turnkey 5-Star Operation</p>
              <p className="text-xs text-slate-400">
                Includes all FF&E, operating licenses, marina docking rights, helicopter air traffic clearance, and 340 trained staff.
              </p>
            </div>

            <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs text-slate-400 uppercase font-semibold">Zoning & Environmental</span>
              <p className="text-base font-bold text-white">LEED Platinum Certified</p>
              <p className="text-xs text-slate-400">
                Compliant with highest international sustainability standards and high-density hospitality commercial zoning.
              </p>
            </div>

            <div className="bg-slate-950/70 p-5 rounded-xl border border-slate-800 space-y-2">
              <span className="text-xs text-slate-400 uppercase font-semibold">Official Contact & Diligence</span>
              <p className="text-base font-mono font-bold text-amber-300">{HOTEL_INFO.contact.email}</p>
              <p className="text-xs text-slate-400">
                Tel: {HOTEL_INFO.contact.phone} | Address: {HOTEL_INFO.contact.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AUDITED FINANCIAL PERFORMANCE & HISTORICAL PRO FORMA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">
            Audited Financial Highlights
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white">
            Historical Performance & Pro Forma (2023 – 2027)
          </h2>
          <p className="text-sm text-slate-400">
            Delivering sustained GOPPAR growth, stable high-yield cash flows, and superior ADR performance.
          </p>
        </div>

        <FinancialMetrics onOpenDealRoom={() => setDealRoomOpen(true)} />
      </section>

      {/* 4. DUE DILIGENCE PROCESS & TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">
              Transaction Pathway
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
              Acquisition Due Diligence Stages
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Coordinated seamlessly by Seedwel Investment Limited advisory desk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 relative space-y-3">
              <span className="text-2xl font-serif-luxury font-bold text-amber-400 font-mono">01</span>
              <h3 className="text-base font-bold text-white">NDA & Deal Room Access</h3>
              <p className="text-xs text-slate-400">
                Execute electronic confidentiality agreement to access the full Confidential Information Memorandum (CIM), audited financials, and title deed.
              </p>
            </div>

            <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 relative space-y-3">
              <span className="text-2xl font-serif-luxury font-bold text-amber-400 font-mono">02</span>
              <h3 className="text-base font-bold text-white">VIP Private Site Inspection</h3>
              <p className="text-xs text-slate-400">
                Arrange a confidential on-site inspection of SWDL via private helicopter or superyacht berth with Seedwel senior executives.
              </p>
            </div>

            <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 relative space-y-3">
              <span className="text-2xl font-serif-luxury font-bold text-amber-400 font-mono">03</span>
              <h3 className="text-base font-bold text-white">Submission of Formal EOI / LOI</h3>
              <p className="text-xs text-slate-400">
                Qualified buyers submit a Letter of Intent (LOI) outlining purchase price, equity structure, and desired closing schedule.
              </p>
            </div>

            <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 relative space-y-3">
              <span className="text-2xl font-serif-luxury font-bold text-amber-400 font-mono">04</span>
              <h3 className="text-base font-bold text-white">Definitive Agreement & Closing</h3>
              <p className="text-xs text-slate-400">
                Execution of the Purchase & Sale Agreement (PSA), escrow deposit placement, and seamless operational handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACQUISITION FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">
            Investor Clarifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
            Frequently Asked Questions by Institutional Buyers
          </h2>
        </div>

        <div className="space-y-3">
          {ACQUISITION_FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-slate-800 transition"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-white hover:text-amber-300 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. CALL TO ACTION & ADVISORY CONTACT */}
      <section id="deal-room" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold text-amber-300 tracking-wider block">
              Direct Vendor Channel
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white">
              Initiate SWDL Acquisition Inquiries
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Submit an electronic NDA to immediately download the Confidential Information Memorandum (CIM) or speak directly with our investment board.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setDealRoomOpen(true)}
              className="px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base gold-btn shadow-xl shadow-amber-500/20 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Unlock CIM & Data Room</span>
            </button>

            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base gold-btn-outline"
            >
              Contact Seedwel Directorate
            </Link>
          </div>

          <div className="pt-4 text-xs text-slate-400 space-y-1">
            <p>Direct Phone: <strong className="text-slate-200 font-mono">{HOTEL_INFO.contact.phone}</strong> | Email: <strong className="text-slate-200 font-mono">{HOTEL_INFO.contact.email}</strong></p>
            <p>Property Address: <strong className="text-slate-200">{HOTEL_INFO.contact.address}</strong></p>
            <p className="pt-2 text-slate-400">{HOTEL_INFO.copyright}</p>
          </div>
        </div>
      </section>

      {/* Modals */}
      <DealRoomModal isOpen={dealRoomOpen} onClose={() => setDealRoomOpen(false)} />
      <BookingModal
        isOpen={inspectionOpen}
        onClose={() => setInspectionOpen(false)}
        isPrivateInspection={true}
      />
    </div>
  );
}

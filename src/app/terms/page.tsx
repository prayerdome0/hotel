import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Building2 } from 'lucide-react';
import { HOTEL_INFO } from '@/data/hotelData';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition font-semibold"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>

      <div className="space-y-3">
        <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
          Transactional Terms
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
          Terms of Asset Offering & Diligence
        </h1>
        <p className="text-xs text-slate-400">
          Governed by {HOTEL_INFO.owner} • Asset Name: {HOTEL_INFO.name}
        </p>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 text-sm text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-serif-luxury">
            1. Property For Sale Information
          </h2>
          <p>
            The commercial hospitality asset known as <strong className="text-white">{HOTEL_INFO.name}</strong> is presented for acquisition by its legal vendor, <strong className="text-white">{HOTEL_INFO.owner}</strong>. Any financial projections, Pro Forma models, Cap Rate estimates, or architectural plans provided herein represent informational summaries and do not constitute a formal public securities offering.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-serif-luxury">
            2. Acquisition Process & Binding Contracts
          </h2>
          <p>
            All formal letters of intent (LOI), purchase and sale agreements (PSA), and title conveyances are subject to definitive contract execution in accordance with governing commercial real estate statutes. All transactional communications shall proceed via:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
            <p><strong>Vendor Entity:</strong> {HOTEL_INFO.owner}</p>
            <p><strong>Brand / Property:</strong> {HOTEL_INFO.name}</p>
            <p><strong>Official Email:</strong> <span className="text-amber-300 font-mono">{HOTEL_INFO.contact.email}</span></p>
            <p><strong>Official Contact:</strong> <span className="text-amber-300 font-mono">{HOTEL_INFO.contact.phone}</span></p>
            <p><strong>Address:</strong> <span className="text-slate-200">{HOTEL_INFO.contact.address}</span></p>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-serif-luxury">
            3. Copyright & Intellectual Property
          </h2>
          <p>
            All media, architectural drawings, brand trademarks, and written dossiers on this portal are strictly copyrighted by <strong className="text-white">{HOTEL_INFO.owner}</strong>. Unauthorized reproduction is prohibited.
          </p>
        </section>

        <div className="pt-4 border-t border-slate-800 text-xs text-slate-500">
          {HOTEL_INFO.copyright}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { HOTEL_INFO } from '@/data/hotelData';

export default function PrivacyPage() {
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
          Legal & Privacy Framework
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
          Privacy Policy & Data Protection
        </h1>
        <p className="text-xs text-slate-400">
          Last updated: 2026 • Governed by {HOTEL_INFO.owner}
        </p>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 text-sm text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-serif-luxury">
            1. Institutional Confidentiality Commitment
          </h2>
          <p>
            {HOTEL_INFO.owner} (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the official website and acquisition deal room for <strong className="text-white">{HOTEL_INFO.name} ({HOTEL_INFO.fullName})</strong>. We are committed to safeguarding the proprietary and financial information of prospective purchasers, investors, and hotel guests.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-serif-luxury">
            2. Acquisition Inquiries & Deal Room NDA Information
          </h2>
          <p>
            When submitting Non-Disclosure Agreements (NDAs), downloading Confidential Information Memorandums (CIMs), or requesting private inspections, you may provide your full name, institutional firm name, investment capacity, telephone contact, and email address. This information is exclusively utilized for verifying accredited investor credentials and communicating transactional details.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white font-serif-luxury">
            3. Communications & Contact Details
          </h2>
          <p>
            For any inquiries regarding data protection, electronic records, or removing your contact credentials from our investor register, please contact:
          </p>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
            <p><strong>Entity Name:</strong> {HOTEL_INFO.name}</p>
            <p><strong>Copyright Owner:</strong> {HOTEL_INFO.owner}</p>
            <p><strong>Email:</strong> <span className="text-amber-300 font-mono">{HOTEL_INFO.contact.email}</span></p>
            <p><strong>Contact Telephone:</strong> <span className="text-amber-300 font-mono">{HOTEL_INFO.contact.phone}</span></p>
            <p><strong>Address:</strong> <span className="text-slate-200">{HOTEL_INFO.contact.address}</span></p>
          </div>
        </section>

        <div className="pt-4 border-t border-slate-800 text-xs text-slate-500">
          {HOTEL_INFO.copyright}
        </div>
      </div>
    </div>
  );
}

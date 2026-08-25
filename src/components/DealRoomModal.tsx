'use client';

import React, { useState } from 'react';
import {
  X,
  FileText,
  Lock,
  Download,
  CheckCircle2,
  Building2,
  ShieldCheck,
  ArrowRight,
  Mail,
  Phone,
  User,
} from 'lucide-react';
import { HOTEL_INFO } from '@/data/hotelData';

interface DealRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DealRoomModal({ isOpen, onClose }: DealRoomModalProps) {
  const [step, setStep] = useState<'nda' | 'form' | 'success'>('nda');
  const [ndaAgreed, setNdaAgreed] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    firm: '',
    investorType: 'Family Office',
    email: '',
    phone: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const handleDownloadCIM = () => {
    // Generate text/data file download for the prospectus
    const prospectusText = `
============================================================
SWDL LUXURY RESORT & RESIDENCES - CONFIDENTIAL INFORMATION MEMORANDUM
COPYRIGHTED BY SEEDWEL INVESTMENT LIMITED
============================================================

ASSET IDENTIFIERS:
- Property Name: ${HOTEL_INFO.name} (${HOTEL_INFO.fullName})
- Vendor / Owner: ${HOTEL_INFO.owner}
- Legal Status: 100% Freehold Title (Unencumbered)
- Asking Price Guide: ${HOTEL_INFO.askingPriceGuide}
- Official Contact: ${HOTEL_INFO.contact.phone}
- Official Email: ${HOTEL_INFO.contact.email}
- Physical Location: ${HOTEL_INFO.contact.address}

KEY ASSET METRICS:
- Total Inventory: 240 Keys (including 28 Oceanfront Pool Villas)
- Land Site Area: 5.8 Acres (2.35 Hectares) Oceanfront Freehold
- Gross Floor Area: 320,000 sq.ft
- 2025 Audited EBITDA: $16.4M USD (30.0% EBITDA Margin)
- Average Daily Rate (ADR): $720 USD
- RevPAR: $610.56 USD
- Average Occupancy Rate: 84.8%
- Pro Forma Cap Rate: 9.4%

PRIMARY FACILITIES & AMENITIES:
- 4 Signature Michelin-Caliber Dining Venues & Wine Library
- 14,000 sq.ft Thalassotherapy Spa & Hydrotherapy Circuit
- 16-Berth Deep-Water Marina (Up to 180ft Superyachts)
- FAA/ICAO Certified Private Helipad
- 8,500 sq.ft Imperial Pillarless Ballroom & Conference Wing
- 600ft Private White Sand Beachfront

TRANSACTION PROCESS:
Seedwel Investment Limited is soliciting expressions of interest (EOI) for the outright sale of SWDL.
Direct all inquiries and formal letters of intent (LOI) to:
Seedwel Investment Limited - Investment Advisory Directorate
Email: ${HOTEL_INFO.contact.email}
Phone: ${HOTEL_INFO.contact.phone}
Address: ${HOTEL_INFO.contact.address}

© 2026 Seedwel Investment Limited. All Rights Reserved.
============================================================
    `;

    const blob = new Blob([prospectusText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'SWDL_Confidential_Information_Memorandum_Seedwel.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="SWDL Deal Room & NDA"
      className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-200 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold uppercase tracking-wider">
                Confidential Deal Room
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {HOTEL_INFO.owner}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">
              SWDL Acquisition Prospectus & CIM
            </h2>
          </div>
        </div>

        {/* STEP 1: NDA Review */}
        {step === 'nda' && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-2.5 max-h-56 overflow-y-auto leading-relaxed">
              <p className="font-semibold text-amber-300">
                NON-DISCLOSURE & INSTITUTIONAL CONFIDENTIALITY AGREEMENT:
              </p>
              <p>
                This Agreement governs the receipt and review of evaluation material concerning the proposed acquisition of <strong className="text-white">SWDL Luxury Resort & Residences</strong>, an asset offered for sale by <strong className="text-white">Seedwel Investment Limited</strong>.
              </p>
              <p>
                1. Recipient agrees to hold all financial models, tenant records, pro forma statements, EBITDA audits, and architectural engineering reports in strict confidence.
              </p>
              <p>
                2. Recipient shall not contact on-site hotel staff, guests, or operational vendors without prior written authorization from Seedwel Investment Limited.
              </p>
              <p>
                3. All formal communication regarding asset pricing guide (${HOTEL_INFO.askingPriceGuide}), bidding timelines, and binding contracts shall be directed exclusively to <span className="font-mono text-amber-300">email: {HOTEL_INFO.contact.email}</span>, <span className="font-mono text-amber-300">contact: {HOTEL_INFO.contact.phone}</span>, at <span className="text-amber-300">address: {HOTEL_INFO.contact.address}</span>.
              </p>
            </div>

            <label className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 cursor-pointer pt-2">
              <input
                type="checkbox"
                checked={ndaAgreed}
                onChange={(e) => setNdaAgreed(e.target.checked)}
                className="mt-0.5 rounded border-slate-700 text-amber-500 focus:ring-amber-400 bg-slate-950"
              />
              <span>
                I agree to the terms of the Non-Disclosure Agreement and confirm I am an accredited investor, institutional principal, or authorized acquisition advisor.
              </span>
            </label>

            <button
              onClick={() => setStep('form')}
              disabled={!ndaAgreed}
              className={`w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition ${
                ndaAgreed
                  ? 'gold-btn cursor-pointer'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <span>Accept NDA & Proceed to Information Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* STEP 2: Investor Information Form */}
        {step === 'form' && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name / Principal
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Alexander Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Firm / Family Office
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vanguard Sovereign Capital"
                    value={formData.firm}
                    onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Institutional Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="investor@vanguardcapital.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Direct Phone / WhatsApp
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Investor Classification
              </label>
              <select
                value={formData.investorType}
                onChange={(e) => setFormData({ ...formData, investorType: e.target.value })}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
              >
                <option value="Family Office">Single / Multi-Family Office</option>
                <option value="Private Equity">Hospitality Private Equity Fund</option>
                <option value="Sovereign Wealth">Sovereign Wealth Fund / Institutional REIT</option>
                <option value="HNWI Principal">Ultra-High Net Worth Individual (UHNWI)</option>
                <option value="Hotel Operator">Global Hotel Operator / Developer</option>
              </select>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                onClick={() => setStep('nda')}
                className="text-xs text-slate-400 hover:text-white"
              >
                Back to NDA
              </button>
              <button
                type="submit"
                className="py-2.5 px-6 rounded-lg text-xs sm:text-sm font-semibold gold-btn flex items-center gap-2"
              >
                <Lock className="w-4 h-4" />
                <span>Unlock Data Room & CIM</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Success & Download */}
        {step === 'success' && (
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold font-serif-luxury text-white">
                Deal Room Access Granted
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                Welcome, <strong className="text-white">{formData.fullName || 'Valued Investor'}</strong>. Your NDA has been registered with <strong className="text-amber-300">{HOTEL_INFO.owner}</strong>. You may now download the complete Confidential Information Memorandum (CIM).
              </p>
            </div>

            {/* CIM Summary Box */}
            <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Asset:</span>
                <span className="text-white font-medium">{HOTEL_INFO.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Owner & Vendor:</span>
                <span className="text-amber-300 font-medium">{HOTEL_INFO.owner}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Asking Price Guide:</span>
                <span className="text-emerald-400 font-bold">{HOTEL_INFO.askingPriceGuide}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Audited 2025 EBITDA:</span>
                <span className="text-white font-medium">$16.4M USD (30.0% Margin)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Direct Advisory:</span>
                <span className="text-amber-300 font-mono">email: {HOTEL_INFO.contact.email} | tel: {HOTEL_INFO.contact.phone}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleDownloadCIM}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm gold-btn flex items-center justify-center gap-2 shadow-xl"
              >
                <Download className="w-4 h-4" />
                <span>Download Complete CIM Dossier (.txt)</span>
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm gold-btn-outline"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

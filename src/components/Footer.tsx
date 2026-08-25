'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Globe,
  Award,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { HOTEL_INFO } from '@/data/hotelData';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-amber-500/20 text-slate-300 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-500/5 blur-3xl pointer-events-none" />

      {/* Top Banner: Property For Sale Alert */}
      <div className="border-b border-slate-900 bg-gradient-to-r from-amber-950/40 via-slate-900 to-amber-950/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              Turnkey Hospitality Asset For Sale
            </div>
            <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white">
              SWDL Acquisition & Investment Opportunity
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl">
              100% Freehold Title presented exclusively by <strong className="text-amber-300 font-semibold">{HOTEL_INFO.owner}</strong>. Contact our advisory board for confidential financials.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/for-sale"
              className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold gold-btn shadow-lg"
            >
              Access Deal Room
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold gold-btn-outline"
            >
              Schedule Private Viewing
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Col 1 & 2: Brand & Investor Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center text-slate-950 font-serif-luxury font-bold text-xl">
              S
            </div>
            <div>
              <span className="text-2xl font-bold tracking-widest text-white font-serif-luxury">
                SWDL
              </span>
              <span className="block text-[10px] uppercase text-amber-400 tracking-widest font-semibold">
                By {HOTEL_INFO.owner}
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed max-w-md">
            SWDL is a world-renowned 5-star oceanfront resort and residential enclave combining 240 luxury keys, Michelin-caliber dining, private deep-water marina, and helipad on 5.8 freehold acres.
          </p>

          {/* Official Contact Info */}
          <div className="pt-2 space-y-2.5 text-sm">
            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Email: <a href={`mailto:${HOTEL_INFO.contact.email}`} className="text-amber-300 font-mono hover:underline">{HOTEL_INFO.contact.email}</a></span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Contact: <a href={`tel:${HOTEL_INFO.contact.phone}`} className="text-amber-300 font-mono hover:underline">{HOTEL_INFO.contact.phone}</a></span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Address: <span className="text-white font-medium">{HOTEL_INFO.contact.address}</span></span>
            </div>
          </div>
        </div>

        {/* Col 3: Quick Navigation */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-amber-300 transition">
                Home & Overview
              </Link>
            </li>
            <li>
              <Link href="/for-sale" className="text-amber-400 hover:text-amber-200 font-semibold flex items-center gap-1.5">
                <span>For Sale Prospectus</span>
                <span className="px-1.5 py-0.2 bg-amber-500/20 text-[9px] rounded uppercase font-bold">HOT</span>
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="hover:text-amber-300 transition">
                Suites & Villas (240 Keys)
              </Link>
            </li>
            <li>
              <Link href="/amenities" className="hover:text-amber-300 transition">
                Amenities, Spa & Marina
              </Link>
            </li>
            <li>
              <Link href="/dining" className="hover:text-amber-300 transition">
                Michelin Dining & Bars
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-amber-300 transition">
                Events & Imperial Ballroom
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Property & Media */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Property & Deal Room
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/gallery" className="hover:text-amber-300 transition">
                Media Gallery & Virtual Tour
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-300 transition">
                About SWDL & Seedwel
              </Link>
            </li>
            <li>
              <Link href="/for-sale#deal-room" className="hover:text-amber-300 transition">
                Execute Confidential NDA
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-300 transition">
                Schedule Private Jet/Yacht Tour
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-amber-300 transition">
                Privacy & Data Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-amber-300 transition">
                Terms of Acquisition
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 5: Investor Newsletter */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Investor Briefings
          </h4>
          <p className="text-xs text-slate-400">
            Receive confidential updates regarding the SWDL sale process and financial pro forma updates.
          </p>

          {subscribed ? (
            <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Inquiry registered. Confidential dossier dispatched.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                placeholder="investor@firm.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="w-full py-2 px-3 rounded-lg text-xs font-semibold gold-btn flex items-center justify-center gap-1.5"
              >
                <span>Subscribe to Briefings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Strict institutional confidentiality maintained.</span>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <p className="font-medium text-slate-300">
              {HOTEL_INFO.copyright}
            </p>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span>Brand Name: <strong className="text-amber-300">{HOTEL_INFO.name}</strong></span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span>Owner: <strong className="text-amber-300">{HOTEL_INFO.owner}</strong></span>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center text-slate-400">
            <span>Email: <strong className="text-slate-300 font-mono">xxxxx</strong></span>
            <span>Contact: <strong className="text-slate-300 font-mono">xxxxx</strong></span>
            <span>Address: <strong className="text-slate-300">abc</strong></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

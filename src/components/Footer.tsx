'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageCircle } from 'lucide-react';
import { HOTEL_INFO, NAV_LINKS, DEVELOPER_INFO } from '@/data/hotelData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-amber-500/20 text-slate-300">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center text-slate-950 font-serif-luxury font-bold">
              ZP
            </div>
            <div className="leading-tight">
              <span className="text-xl font-bold text-white font-serif-luxury">Zambezi Palms</span>
              <span className="block text-[10px] uppercase text-amber-400 tracking-widest font-semibold">
                Hotel & Conference Centre
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Comfortable rooms, conference facilities, a restaurant and beautiful event spaces in Lusaka, Zambia.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={HOTEL_INFO.phoneHref} className="hover:text-amber-300">{HOTEL_INFO.phone}</a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-amber-300">{HOTEL_INFO.email}</a>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{HOTEL_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Check-in {HOTEL_INFO.checkIn} • Check-out {HOTEL_INFO.checkOut}</span>
            </div>
          </div>
        </div>

        {/* Explore */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">Explore</h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.slice(0, 5).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-amber-300 transition">{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">Hotel</h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.slice(5).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-amber-300 transition">{l.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-amber-300 transition">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-amber-300 transition">Terms of Use</Link>
            </li>
          </ul>
        </div>

        {/* Developer */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">Need a Website Like This?</h4>
          <p className="text-sm text-slate-400">
            {DEVELOPER_INFO.text}
          </p>
          <div className="space-y-2">
            {DEVELOPER_INFO.phones.map((p) => (
              <div key={p.display} className="flex items-center gap-2">
                <a href={p.tel} className="flex-1 py-2 px-3 rounded-lg text-xs font-bold gold-btn-outline flex items-center justify-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{p.display}</span>
                </a>
                <a
                  href={p.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp ${p.display}`}
                  className="p-2 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white transition"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
          <Link href="/contact#website" className="inline-flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 font-medium">
            <span>Send a website inquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-900 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 text-center">
          <p>© 2026 {HOTEL_INFO.fullName}. All rights reserved.</p>
          <p className="text-slate-600">Showcase demo website — all rates shown are sample rates.</p>
        </div>
      </div>
    </footer>
  );
}

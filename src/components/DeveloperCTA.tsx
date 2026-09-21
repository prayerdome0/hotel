'use client';

import React, { useState } from 'react';
import { Code2, Phone, MessageCircle, X, ChevronRight } from 'lucide-react';
import { DEVELOPER_INFO } from '@/data/hotelData';

export default function DeveloperCTA() {
  const [open, setOpen] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950 p-8 sm:p-12">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-amber-300 flex items-center justify-center shrink-0">
              <Code2 className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300">
                For hotel owners & managers
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
                {DEVELOPER_INFO.heading}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl">{DEVELOPER_INFO.text}</p>
            </div>
          </div>
          <div className="shrink-0">
            <button
              onClick={() => setOpen(true)}
              className="px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base gold-btn flex items-center gap-2 shadow-xl shadow-amber-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>{DEVELOPER_INFO.buttonLabel}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact options modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Contact the developer"
        >
          <div
            className="relative w-full max-w-md bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div>
              <span className="text-[10px] px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold uppercase tracking-wider">
                Website design services
              </span>
              <h3 className="text-xl font-serif-luxury font-bold text-white mt-2">Contact the Developer</h3>
              <p className="text-xs text-slate-400 mt-1">
                Call or WhatsApp to discuss a website for your hotel, lodge, guest house or restaurant.
              </p>
            </div>
            <div className="space-y-3">
              {DEVELOPER_INFO.phones.map((p) => (
                <div key={p.display} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                  <p className="text-lg font-bold text-white font-mono tracking-wide">{p.display}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={p.tel}
                      className="py-2.5 rounded-lg text-xs font-bold gold-btn flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                    <a
                      href={p.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-1.5 transition"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 text-center">
              Tap a button above — the numbers are clickable on mobile.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

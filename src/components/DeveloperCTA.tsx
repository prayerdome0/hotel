'use client';

import React, { useState } from 'react';
import { Code2, Phone, MessageCircle, X, ChevronRight } from 'lucide-react';
import { DEVELOPER_INFO } from '@/data/hotelData';

export default function DeveloperCTA() {
  const [open, setOpen] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden border border-red-500/30 bg-gradient-to-br from-red-950/40 via-gray-50 to-white p-8 sm:p-12">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-500/15 border border-red-500/40 text-red-300 flex items-center justify-center shrink-0">
              <Code2 className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-red-300">
                For hotel owners & managers
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
                {DEVELOPER_INFO.heading}
              </h2>
              <p className="text-sm sm:text-base text-gray-700 max-w-2xl">{DEVELOPER_INFO.text}</p>
            </div>
          </div>
          <div className="shrink-0">
            <button
              onClick={() => setOpen(true)}
              className="px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base gold-btn flex items-center gap-2 shadow-xl shadow-red-500/20"
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
          className="fixed inset-0 z-50 bg-white/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Contact the developer"
        >
          <div
            className="relative w-full max-w-md bg-gray-50 border border-red-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-gray-200 text-gray-600 hover:text-white transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div>
              <span className="text-[10px] px-2.5 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold uppercase tracking-wider">
                Website design services
              </span>
              <h3 className="text-xl font-serif-luxury font-bold text-white mt-2">Contact the Developer</h3>
              <p className="text-xs text-gray-600 mt-1">
                Call or WhatsApp to discuss a website for your hotel, lodge, guest house or restaurant.
              </p>
            </div>
            <div className="space-y-3">
              {DEVELOPER_INFO.phones.map((p) => (
                <div key={p.display} className="p-4 rounded-xl bg-white border border-gray-200 space-y-3">
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
            <p className="text-[11px] text-gray-500 text-center">
              Tap a button above — the numbers are clickable on mobile.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

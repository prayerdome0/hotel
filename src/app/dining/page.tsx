'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Utensils,
  Wine,
  Clock,
  Users,
  Sparkles,
  Calendar,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import BookingModal from '@/components/BookingModal';
import { DINING_VENUES, HOTEL_INFO } from '@/data/hotelData';

export default function DiningPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-amber-950/40 via-slate-950 to-slate-950 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop"
            alt="SWDL Gastronomy"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            $12.8M Annual High-Margin F&B Yield
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white leading-tight">
            World-Class Gastronomy & Wine Cellars
          </h1>
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl font-light">
            SWDL hosts four signature culinary destinations led by internationally acclaimed chefs, featuring sustainably sourced ocean harvest and rare vintage cellars.
          </p>
        </div>
      </section>

      {/* Venues Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {DINING_VENUES.map((venue, idx) => (
          <div
            key={venue.id}
            id={venue.id}
            className="glass-card rounded-3xl overflow-hidden border border-amber-500/20 group hover:border-amber-500/40 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image & Gallery Column */}
              <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[440px] flex flex-col justify-between">
                <div className="relative w-full h-full min-h-[300px]">
                  <Image
                    src={venue.heroImage}
                    alt={venue.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                    {venue.concept}
                  </span>
                </div>

                {venue.gallery.length > 1 && (
                  <div className="grid grid-cols-3 gap-1 p-2 bg-slate-950 border-t border-slate-900">
                    {venue.gallery.slice(0, 3).map((imgUrl, gIdx) => (
                      <div key={gIdx} className="relative h-18 sm:h-20 rounded-lg overflow-hidden border border-slate-800">
                        <Image
                          src={imgUrl}
                          alt={`${venue.name} gallery ${gIdx + 1}`}
                          fill
                          sizes="160px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Venue Details */}
              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                      {venue.cuisine}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white mt-1">
                      {venue.name}
                    </h2>
                    <p className="text-xs text-slate-400 mt-1">
                      Executive Chef: <strong className="text-slate-200">{venue.chef}</strong>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {venue.description}
                  </p>

                  {/* Signature Dishes Card */}
                  <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2.5">
                    <span className="text-xs uppercase font-bold text-amber-300 tracking-wider block">
                      Signature Degustation Selections:
                    </span>
                    <div className="space-y-2">
                      {venue.signatureDishes.map((dish, dIdx) => (
                        <div key={dIdx} className="flex items-start justify-between gap-2 text-xs border-b border-slate-800/60 pb-1.5 last:border-0 last:pb-0">
                          <div>
                            <span className="font-semibold text-white">{dish.name}</span>
                            <p className="text-[11px] text-slate-400">{dish.desc}</p>
                          </div>
                          <span className="font-mono font-bold text-amber-300 shrink-0">{dish.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metadata: Hours, Capacity, Dress Code */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-400 pt-2 border-t border-slate-800">
                    <div>
                      <span className="block text-slate-500">Service Hours</span>
                      <span className="text-slate-200 font-medium">{venue.hours}</span>
                    </div>
                    <div>
                      <span className="block text-slate-500">Capacity</span>
                      <span className="text-slate-200 font-medium">{venue.seatingCapacity} Seats</span>
                    </div>
                    <div>
                      <span className="block text-slate-500">Dress Code</span>
                      <span className="text-slate-200 font-medium">{venue.dressCode}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm gold-btn flex items-center gap-2 shadow"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Reserve Dining Table</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

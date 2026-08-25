'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Users,
  Maximize2,
  Sparkles,
  Calendar,
  CheckCircle2,
  Building2,
  Send,
} from 'lucide-react';
import BookingModal from '@/components/BookingModal';
import { EVENT_SPACES, HOTEL_INFO } from '@/data/hotelData';

export default function EventsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-amber-950/40 via-slate-950 to-slate-950 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1920&auto=format&fit=crop"
            alt="SWDL Events & Ballroom"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            Up to 750 Guests • Pillarless Imperial Ballroom
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white leading-tight">
            Events, International Summits & Weddings
          </h1>
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl font-light">
            Host global sovereign conferences, high-profile corporate board retreats, and unforgettable coastal gala weddings against the backdrop of the ocean.
          </p>
        </div>
      </section>

      {/* Spaces Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EVENT_SPACES.map((space) => (
            <div
              key={space.id}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-amber-500/20 group hover:border-amber-500/40 transition"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/20" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-xs font-bold uppercase">
                  {space.type}
                </span>
                <span className="absolute bottom-3 right-3 text-xs font-mono font-bold text-amber-300 bg-slate-950/80 px-2.5 py-1 rounded">
                  {space.sqft.toLocaleString()} sq.ft
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-serif-luxury text-white group-hover:text-amber-300 transition">
                    {space.name}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3">
                    {space.description}
                  </p>
                </div>

                {/* Capacities */}
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1 text-xs">
                  <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider block">
                    Capacity Breakdown:
                  </span>
                  <div className="grid grid-cols-2 gap-1 text-slate-300">
                    <div>Banquet: <strong className="text-white">{space.capacity.banquet}</strong></div>
                    <div>Reception: <strong className="text-white">{space.capacity.reception}</strong></div>
                    <div>Theater: <strong className="text-white">{space.capacity.theater}</strong></div>
                    <div>Boardroom: <strong className="text-white">{space.capacity.boardroom}</strong></div>
                  </div>
                </div>

                <div className="space-y-1 text-xs text-slate-300 pt-1">
                  {space.amenities.map((a, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{a}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="w-full py-2.5 rounded-xl font-semibold text-xs gold-btn text-center"
                  >
                    Request Event Proposal (RFP)
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Capacity Chart */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4">
          <h3 className="text-xl font-serif-luxury font-bold text-white">
            Venue Technical Capacities Matrix
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-amber-300 uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4">Venue Name</th>
                  <th className="py-3 px-4">Floor Area</th>
                  <th className="py-3 px-4">Banquet</th>
                  <th className="py-3 px-4">Reception</th>
                  <th className="py-3 px-4">Theater</th>
                  <th className="py-3 px-4">Ceiling Height</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">SWDL Imperial Ballroom</td>
                  <td className="py-3.5 px-4 font-mono">8,500 sq.ft</td>
                  <td className="py-3.5 px-4">500 Guests</td>
                  <td className="py-3.5 px-4 font-bold text-amber-300">750 Guests</td>
                  <td className="py-3.5 px-4">600 Guests</td>
                  <td className="py-3.5 px-4">24 Feet</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Sunset Ocean Terrace</td>
                  <td className="py-3.5 px-4 font-mono">12,000 sq.ft</td>
                  <td className="py-3.5 px-4">400 Guests</td>
                  <td className="py-3.5 px-4 font-bold text-amber-300">650 Guests</td>
                  <td className="py-3.5 px-4">450 Guests</td>
                  <td className="py-3.5 px-4">Open Air</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Seedwel Executive Boardroom</td>
                  <td className="py-3.5 px-4 font-mono">1,600 sq.ft</td>
                  <td className="py-3.5 px-4">—</td>
                  <td className="py-3.5 px-4">30 Guests</td>
                  <td className="py-3.5 px-4">35 Guests</td>
                  <td className="py-3.5 px-4">14 Feet</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

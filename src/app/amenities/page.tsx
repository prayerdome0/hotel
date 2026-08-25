'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  Clock,
  MapPin,
  CheckCircle2,
  Calendar,
  Compass,
  Ship,
  Plane,
  HeartPulse,
} from 'lucide-react';
import BookingModal from '@/components/BookingModal';
import { AMENITIES, HOTEL_INFO } from '@/data/hotelData';

export default function AmenitiesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-amber-950/40 via-slate-950 to-slate-950 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1920&auto=format&fit=crop"
            alt="SWDL Wellness & Spa"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            Holistic Luxury & VIP Infrastructure
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white leading-tight">
            Resort Amenities & Wellness Sanctuary
          </h1>
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl font-light">
            SWDL is equipped with an elite array of private transport links, thalassotherapy wellness circuits, and oceanfront recreation facilities designed for the world’s most demanding clientele.
          </p>
        </div>
      </section>

      {/* Amenities Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {AMENITIES.map((amenity, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <div
              key={amenity.id}
              className={`glass-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 border border-amber-500/20 ${
                isReversed ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div
                className={`relative min-h-[320px] sm:min-h-[420px] lg:col-span-6 ${
                  isReversed ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
                  {amenity.category}
                </span>
              </div>

              {/* Text Content Column */}
              <div
                className={`p-6 sm:p-10 lg:col-span-6 flex flex-col justify-between space-y-6 ${
                  isReversed ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                      {amenity.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
                      {amenity.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-amber-300 font-medium">
                      {amenity.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {amenity.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {amenity.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Location & Hours metadata */}
                  {(amenity.hours || amenity.location) && (
                    <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-4 text-xs text-slate-400">
                      {amenity.hours && (
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          <span>Hours: <strong className="text-slate-200">{amenity.hours}</strong></span>
                        </div>
                      )}
                      {amenity.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-amber-400" />
                          <span>Location: <strong className="text-slate-200">{amenity.location}</strong></span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm gold-btn flex items-center gap-2 shadow"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Inquire / Reserve Service</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

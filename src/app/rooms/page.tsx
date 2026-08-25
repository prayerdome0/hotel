'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Users,
  Maximize2,
  Bed,
  Bath,
  Sparkles,
  CheckCircle2,
  Calendar,
  DollarSign,
  ChevronRight,
  Filter,
} from 'lucide-react';
import BookingModal from '@/components/BookingModal';
import { ROOMS_SUITES, HOTEL_INFO } from '@/data/hotelData';

export default function RoomsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSuiteId, setSelectedSuiteId] = useState<string | undefined>(undefined);
  const [bookingOpen, setBookingOpen] = useState(false);

  const categories = ['All', 'Penthouse', 'Villa', 'Sky Suite', 'Deluxe'];

  const filteredSuites =
    selectedCategory === 'All'
      ? ROOMS_SUITES
      : ROOMS_SUITES.filter((s) => s.category === selectedCategory);

  const handleBookSuite = (id: string) => {
    setSelectedSuiteId(id);
    setBookingOpen(true);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-amber-950/40 via-slate-950 to-slate-950 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1920&auto=format&fit=crop"
            alt="SWDL Luxury Suites"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            240 Luxury Keys & 28 Ocean Villas
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white leading-tight">
            Accommodations & Signature Residences
          </h1>
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl font-light">
            Every room at SWDL is positioned to offer unobstructed oceanfront vistas, Italian Carrara marble appointments, and bespoke butler service.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl glass-card">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-amber-400" />
            <span className="text-xs uppercase font-bold text-slate-300 tracking-wider">
              Filter by Collection:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 border border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Suites List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredSuites.map((suite, idx) => (
          <div
            key={suite.id}
            id={suite.id}
            className="glass-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 border border-amber-500/20 group hover:border-amber-500/40 transition-all duration-300"
          >
            {/* Left/Top: Image Grid with multiple angles */}
            <div className="lg:col-span-6 relative flex flex-col justify-between overflow-hidden min-h-[360px] sm:min-h-[460px]">
              <div className="relative w-full h-full min-h-[300px]">
                <Image
                  src={suite.heroImage}
                  alt={suite.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider">
                    {suite.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-slate-800">
                  <span>{suite.view}</span>
                  {suite.annualRevenueContribution && (
                    <span className="text-amber-300 font-bold font-mono">
                      Asset Contribution: {suite.annualRevenueContribution}
                    </span>
                  )}
                </div>
              </div>

              {/* Gallery Mini Strip */}
              {suite.gallery.length > 1 && (
                <div className="grid grid-cols-3 gap-1 p-2 bg-slate-950 border-t border-slate-900">
                  {suite.gallery.slice(1, 4).map((imgUrl, imgIdx) => (
                    <div key={imgIdx} className="relative h-20 rounded-lg overflow-hidden border border-slate-800">
                      <Image
                        src={imgUrl}
                        alt={`${suite.name} gallery ${imgIdx + 1}`}
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Suite Content & Specs */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
                      {suite.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-amber-300/90 font-medium">
                      {suite.tagline}
                    </p>
                  </div>

                  <div className="sm:text-right shrink-0">
                    <span className="text-xs text-slate-400 block">Nightly Rate</span>
                    <span className="text-2xl sm:text-3xl font-bold text-amber-300 font-mono">
                      ${suite.pricePerNight.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-400 block">USD / night</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {suite.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-y border-slate-800 py-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Maximize2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{suite.sqft.toLocaleString()} sq.ft</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Users className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Up to {suite.maxGuests} Guests</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Bed className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{suite.bedrooms} Master Bed</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Bath className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{suite.bathrooms} Bathrooms</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block">
                    Bespoke Suite Amenities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                    {suite.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleBookSuite(suite.id)}
                  className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm gold-btn flex items-center gap-2 shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve / Inquire Stay</span>
                </button>

                <button
                  onClick={() => handleBookSuite(suite.id)}
                  className="px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm gold-btn-outline"
                >
                  Request Floorplan & Diligence
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        selectedSuiteId={selectedSuiteId}
      />
    </div>
  );
}

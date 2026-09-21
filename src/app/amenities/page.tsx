'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import DeveloperCTA from '@/components/DeveloperCTA';
import HotelImage from '@/components/HotelImage';
import AmenityIcon from '@/components/AmenityIcon';
import { AMENITIES, LOBBY_INFO, OUTDOOR_INFO, HOTEL_INFO } from '@/data/hotelData';

export default function AmenitiesPage() {
  return (
    <div className="space-y-14 sm:space-y-16 pb-20">
      <PageHero
        badge="Amenities & Services"
        title="Comforts & Services for Every Guest"
        subtitle="Free Wi-Fi, secure parking, 24-hour reception, a restaurant, conference facilities, room service and more — everything you need for a smooth stay or event."
        image="/images/reception.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Hotel amenities"
          title="At Your Service"
          subtitle="Practical amenities for guests, delegates and event organisers."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {AMENITIES.map((a) => (
            <div key={a.id} className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/12 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <AmenityIcon icon={a.icon} className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{a.title}</h3>
                <p className="text-sm text-slate-400 mt-1 leading-snug">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reception & Lobby */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-slate-800 group">
          <HotelImage src={LOBBY_INFO.image} alt={LOBBY_INFO.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 text-xs text-slate-200 bg-slate-950/70 px-3 py-1.5 rounded-lg border border-slate-700/60">
            {HOTEL_INFO.reception} • Check-in {HOTEL_INFO.checkIn}
          </div>
        </div>
        <div className="space-y-4">
          <SectionHeading
            badge="Reception & Lobby"
            title={LOBBY_INFO.name}
            subtitle={LOBBY_INFO.tagline + ' — check in smoothly, relax in the lounge, and let our team help with taxis, tours and anything you need.'}
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
            {LOBBY_INFO.points.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Outdoor */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 lg:order-1 order-2">
          <SectionHeading
            badge="Outdoor & yard"
            title={OUTDOOR_INFO.name}
            subtitle={OUTDOOR_INFO.tagline + ' — landscaped gardens, outdoor seating, a function area and secure parking with a manned gate.'}
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
            {OUTDOOR_INFO.points.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Link href="/gallery" className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300 hover:text-amber-200">
            <span>See outdoor photos in the gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="lg:order-2 order-1 grid grid-cols-2 gap-3">
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-800 col-span-2">
            <HotelImage src={OUTDOOR_INFO.images[0]} alt="Hotel gardens" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          {OUTDOOR_INFO.images.slice(1).map((img) => (
            <div key={img} className="relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-slate-800">
              <HotelImage src={img} alt="Hotel outdoor area" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      <DeveloperCTA />
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { CheckCircle2, Clock, Info, UtensilsCrossed } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import DeveloperCTA from '@/components/DeveloperCTA';
import HotelImage from '@/components/HotelImage';
import { RESTAURANT_INFO, MENU_CATEGORIES, HOTEL_INFO } from '@/data/hotelData';
import { kwacha } from '@/lib/format';

export default function RestaurantPage() {
  const [activeCat, setActiveCat] = useState(MENU_CATEGORIES[0].id);
  const cat = MENU_CATEGORIES.find((c) => c.id === activeCat) || MENU_CATEGORIES[0];

  return (
    <div className="space-y-14 sm:space-y-16 pb-20">
      <PageHero
        badge="Restaurant"
        title={RESTAURANT_INFO.name}
        subtitle={`${RESTAURANT_INFO.tagline}. ${RESTAURANT_INFO.hours}. ${RESTAURANT_INFO.roomService}.`}
        image="/images/restaurant.jpg"
      />

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-slate-800 group">
          <HotelImage src={RESTAURANT_INFO.image} alt="Restaurant interior" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs text-slate-200">
            <Clock className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{RESTAURANT_INFO.hours}</span>
          </div>
        </div>
        <div className="space-y-4">
          <SectionHeading
            badge="Dine with us"
            title="Fresh Meals, Every Day"
            subtitle="Walk in for breakfast, lunch or dinner — or order room service to your room. We serve Zambian favourites alongside international classics, plus drinks and non-alcoholic beverages."
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
            {RESTAURANT_INFO.points.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <a href={HOTEL_INFO.phoneHref} className="inline-flex px-6 py-3 rounded-xl text-sm font-bold gold-btn items-center gap-2">
            <UtensilsCrossed className="w-4 h-4" />
            <span>Reserve a Table — {HOTEL_INFO.phone}</span>
          </a>
        </div>
      </section>

      {/* Menu */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <SectionHeading
          align="center"
          badge="Our menu"
          title="Browse the Menu"
          subtitle="Sample menu with sample prices in Zambian Kwacha. Tap a category to explore."
        />

        {/* Category pills — horizontal scroll on mobile */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
          {MENU_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition shrink-0 ${
                activeCat === c.id
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-900 border border-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div key={cat.id} className="glass-card rounded-3xl p-6 sm:p-8 animate-fadeIn">
          <div className="flex items-center justify-between gap-3 mb-1">
            <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">{cat.name}</h3>
            <span className="text-xs text-slate-500">{cat.items.length} items</span>
          </div>
          {cat.note && <p className="text-xs text-amber-300/80 mb-4">{cat.note}</p>}
          <div className="divide-y divide-slate-800">
            {cat.items.map((item) => (
              <div key={item.name} className="py-3.5 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm sm:text-base font-semibold text-slate-100 flex flex-wrap items-center gap-2">
                    {item.name}
                    {item.tag && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold uppercase tracking-wide">
                        {item.tag}
                      </span>
                    )}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{item.desc}</p>
                </div>
                <span className="text-sm sm:text-base font-bold text-amber-300 font-mono shrink-0">{kwacha(item.price)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-400 flex gap-2">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            Sample menu for demonstration — dishes and prices can be updated anytime. Please tell our staff about any
            food allergies. Buffet service is available on busy days and during events.
          </span>
        </div>
      </section>

      <DeveloperCTA />
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Users, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import DeveloperCTA from '@/components/DeveloperCTA';
import LodgeImage from '@/components/LodgeImage';
import { DINING_HALL_INFO, HOTEL_INFO } from '@/data/hotelData';

export default function DiningPage() {
  return (
    <div className="space-y-14 sm:space-y-16 pb-20">
      <PageHero
        badge="Dining Hall"
        title={DINING_HALL_INFO.name}
        subtitle={`${DINING_HALL_INFO.tagline}. ${DINING_HALL_INFO.capacity} — with buffet service, serving staff and event support from our team.`}
        image={DINING_HALL_INFO.image}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="relative h-72 sm:h-[420px] rounded-3xl overflow-hidden border border-gray-200 group">
          <LodgeImage src={DINING_HALL_INFO.image} alt={DINING_HALL_INFO.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs text-gray-800">
            <Users className="w-4 h-4 text-red-400 shrink-0" />
            <span>{DINING_HALL_INFO.capacity}</span>
          </div>
        </div>
        <div className="space-y-5">
          <SectionHeading
            badge="Banquets & celebrations"
            title="One Hall, Endless Occasions"
            subtitle="Host sit-down dinners, wedding receptions, church celebrations and corporate banquets in a spacious, air-conditioned hall with full catering from our kitchen."
          />
          <div>
            <h3 className="text-sm font-bold text-white mb-2">Ideal for</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              {DINING_HALL_INFO.uses.map((x) => (
                <div key={x} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-white mb-2">What we provide</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              {DINING_HALL_INFO.points.map((x) => (
                <div key={x} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="px-6 py-3 rounded-xl text-sm font-bold gold-btn">
              Enquire About the Hall
            </Link>
            <Link href="/restaurant" className="px-6 py-3 rounded-xl text-sm font-semibold gold-btn-outline flex items-center gap-2">
              <span>See catering & menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-6 sm:p-8 text-center space-y-3">
          <h2 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white">Planning a wedding, dinner or celebration?</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Tell us your date, guest numbers and menu preferences and we will help you plan the setup, catering and programme.
            Call us on <a href={HOTEL_INFO.phoneHref} className="text-red-300 font-semibold hover:underline">{HOTEL_INFO.phone}</a>.
          </p>
          <Link href="/events" className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-300 hover:text-red-200">
            <span>See all event venues & packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <DeveloperCTA />
    </div>
  );
}

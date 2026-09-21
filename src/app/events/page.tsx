'use client';

import React from 'react';
import Link from 'next/link';
import { Users, CheckCircle2, ArrowRight, Info, CalendarCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import DeveloperCTA from '@/components/DeveloperCTA';
import HotelImage from '@/components/HotelImage';
import { CONFERENCE_SPACES, EVENT_PACKAGES, CONFERENCE_SUPPORT, HOTEL_INFO } from '@/data/hotelData';
import { kwacha } from '@/lib/format';

export default function EventsPage() {
  return (
    <div className="space-y-14 sm:space-y-16 pb-20">
      <PageHero
        badge="Conference & Events"
        title="Halls & Venues for Every Occasion"
        subtitle="Conferences, board meetings, workshops, church services, weddings, birthdays and graduations — with seating for up to 300 guests, sound, projector and catering."
        image="/images/conference-hall.jpg"
      />

      {/* Who it's for */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold font-serif-luxury text-white">
            Perfect for companies, churches, schools, NGOs, government departments & families
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {['Corporate conferences', 'Board & management meetings', 'Staff training & workshops', 'Church services & crusades', 'Weddings & kitchen parties', 'Graduations & award nights', 'Product launches', 'Birthdays & private parties'].map((x) => (
              <div key={x} className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{x}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spaces */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Our venues"
          title="Choose Your Hall"
          subtitle="Four flexible venues with professional equipment. All rates below are sample rates in Zambian Kwacha."
        />
        {CONFERENCE_SPACES.map((s, idx) => (
          <div
            key={s.id}
            id={s.id}
            className="glass-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 scroll-mt-24"
          >
            <div className={`lg:col-span-5 relative min-h-[260px] sm:min-h-[340px] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <HotelImage src={s.image} alt={s.name} fill sizes="(max-width: 1024px) 100vw, 42vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-lg bg-slate-950/80 text-amber-300 border border-amber-500/40 text-[11px] font-bold uppercase tracking-wider">
                {s.type}
              </span>
            </div>
            <div className={`lg:col-span-7 p-6 sm:p-8 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-luxury text-white">{s.name}</h3>
                <p className="text-xs text-slate-400 mt-1">{s.sizeSqm} m² venue</p>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{s.description}</p>

              {/* Capacity */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-400" /> Seating capacity
                </h4>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center">
                  {[
                    { l: 'Theatre', v: s.capacity.theatre },
                    { l: 'Classroom', v: s.capacity.classroom },
                    { l: 'Banquet', v: s.capacity.banquet },
                    { l: 'Boardroom', v: s.capacity.boardroom },
                    { l: 'Cocktail', v: s.capacity.cocktail },
                  ].map((c) => (
                    <div key={c.l} className="bg-slate-950 border border-slate-800 rounded-xl px-2 py-2">
                      <span className="text-base sm:text-lg font-bold text-white font-mono block">{c.v > 0 ? c.v : '—'}</span>
                      <span className="text-[10px] text-slate-500">{c.l}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Equipment & services</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                  {s.equipment.map((e) => (
                    <div key={e} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{e}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rates */}
              <div className="pt-2 border-t border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Sample rates</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {s.rates.map((r) => (
                    <div key={r.label} className="bg-amber-950/20 border border-amber-500/25 rounded-xl px-3 py-2.5 text-center">
                      <span className="text-base font-bold text-amber-300 font-mono block">{kwacha(r.price)}</span>
                      <span className="text-[11px] text-slate-400">{r.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-3">
                  <Link href="/contact" className="flex-1 py-2.5 rounded-xl text-xs font-bold gold-btn flex items-center justify-center gap-2">
                    <CalendarCheck className="w-3.5 h-3.5" />
                    <span>Enquire About This Hall</span>
                  </Link>
                  <a href={HOTEL_INFO.phoneHref} className="flex-1 py-2.5 rounded-xl text-xs font-semibold gold-btn-outline flex items-center justify-center gap-2">
                    <span>Call {HOTEL_INFO.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <SectionHeading
          align="center"
          badge="Event packages"
          title="Simple Packages With Catering"
          subtitle="Bundle hall hire with tea breaks and meals. Indicative sample pricing — final quotes depend on guest numbers and menu."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EVENT_PACKAGES.map((p) => (
            <div key={p.id} className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 flex flex-col gap-3">
              <h3 className="text-base font-bold text-white font-serif-luxury">{p.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed flex-1">{p.desc}</p>
              <div className="pt-3 border-t border-slate-800">
                <span className="text-xl font-bold text-amber-300 font-mono">{p.price}</span>
                <span className="text-[11px] text-slate-500 block">{p.unit} • sample</span>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-400 flex gap-2 max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            Extras available on request: extra décor, photography support, MC services, transport for delegates and
            accommodation for out-of-town guests. <Link href="/contact" className="text-amber-300 hover:underline">Contact us for a tailored quote →</Link>
          </span>
        </div>
      </section>

      {/* Support strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <h3 className="text-base sm:text-lg font-bold text-white mb-4">Every event booking includes our support with</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {CONFERENCE_SUPPORT.map((x) => (
              <div key={x} className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{x}</span>
              </div>
            ))}
          </div>
          <Link href="/contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300 hover:text-amber-200">
            <span>Start planning your event</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <DeveloperCTA />
    </div>
  );
}

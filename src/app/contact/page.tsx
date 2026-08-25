'use client';

import React from 'react';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Plane,
  Ship,
  Car,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { HOTEL_INFO } from '@/data/hotelData';

export default function ContactPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-amber-950/40 via-slate-950 to-slate-950 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?q=80&w=1920&auto=format&fit=crop"
            alt="SWDL Contact & Location"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            Direct Vendor & Concierge Directorate
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white leading-tight">
            Contact SWDL & Seedwel Investment Limited
          </h1>
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl font-light">
            Whether you are evaluating the commercial acquisition of SWDL, scheduling a private jet or helicopter site inspection, or reserving signature accommodations, our team is at your disposal 24/7.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </section>

      {/* Location, Map & Transport Logistics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">
            Access & Geographic Coordinates
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
            Arrival by Air, Sea & Land
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Address: <strong className="text-white">{HOTEL_INFO.contact.address}</strong> (GPS: {HOTEL_INFO.contact.coordinates})
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Air */}
          <div className="glass-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Private Aviation & Helipad</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              SWDL features an on-site FAA/ICAO certified helipad. Private jet transfers from the regional international executive airport take only 12 minutes by helicopter.
            </p>
            <span className="text-[11px] text-amber-300 font-mono block">Helipad ID: SWDL-H1</span>
          </div>

          {/* Sea */}
          <div className="glass-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Ship className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Deep-Water Marina</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              16 protected deep-water slips accommodating superyachts up to 180 feet (55m) with draft clearance of 18ft, 3-phase shore power, and customs tender service.
            </p>
            <span className="text-[11px] text-amber-300 font-mono block">VHF Channel: 68 / 16</span>
          </div>

          {/* Land */}
          <div className="glass-card rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Chauffeured Road Access</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Located at {HOTEL_INFO.contact.address}, accessible via a private gated perimeter avenue with 24/7 security gatehouse and private underground valet parking.
            </p>
            <span className="text-[11px] text-amber-300 font-mono block">Official Address: {HOTEL_INFO.contact.address}</span>
          </div>
        </div>

        {/* Map Mockup Graphic Box */}
        <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-amber-500/30 bg-slate-900 flex items-center justify-center text-center p-6">
          <Image
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1920&auto=format&fit=crop"
            alt="Estate Map"
            fill
            className="object-cover opacity-30"
          />
          <div className="relative z-10 glass-card p-6 sm:p-8 rounded-2xl max-w-lg space-y-3 shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 mx-auto flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold font-serif-luxury text-white">
              SWDL Luxury Resort & Residences
            </h4>
            <p className="text-xs text-slate-300">
              Address: <strong className="text-amber-300">{HOTEL_INFO.contact.address}</strong>
            </p>
            <p className="text-xs text-slate-400">
              Direct Contact: <span className="text-white font-mono">{HOTEL_INFO.contact.phone}</span> | Email: <span className="text-white font-mono">{HOTEL_INFO.contact.email}</span>
            </p>
            <div className="pt-2 text-[11px] text-amber-300/80">
              {HOTEL_INFO.copyright}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

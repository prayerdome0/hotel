'use client';

import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import DeveloperCTA from '@/components/DeveloperCTA';
import LodgeImage from '@/components/LodgeImage';
import { HOTEL_INFO } from '@/data/hotelData';

export default function ContactPage() {
  return (
    <div className="space-y-14 sm:space-y-16 pb-20">
      <PageHero
        badge="Contact Us"
        title="Get in Touch With the Lodge"
        subtitle="Questions about rooms, conferences, weddings or the restaurant? Send an inquiry below or reach us directly — our team is happy to help."
        image="/images/reception.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Lodge contact info */}
        <div className="lg:col-span-5 space-y-5">
          <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
            <div>
              <span className="text-[10px] px-2.5 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold uppercase tracking-wider">
                SDL Lodge
              </span>
              <h2 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white mt-2">Lodge Contacts</h2>
            </div>
            <div className="space-y-4">
              <a href={HOTEL_INFO.phoneHref} className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-600 uppercase font-semibold">Phone (tap to call)</span>
                  <p className="text-base font-bold text-red-300 group-hover:underline">{HOTEL_INFO.phone}</p>
                  <p className="text-xs text-gray-600">{HOTEL_INFO.mobile}</p>
                </div>
              </a>
              <a href={`mailto:${HOTEL_INFO.email}`} className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-600 uppercase font-semibold">Email</span>
                  <p className="text-base font-bold text-black group-hover:text-red-300">{HOTEL_INFO.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-600 uppercase font-semibold">Address</span>
                  <p className="text-sm font-bold text-white">{HOTEL_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-gray-600 uppercase font-semibold">Reception hours</span>
                  <p className="text-sm font-bold text-white">{HOTEL_INFO.reception}</p>
                  <p className="text-xs text-gray-600">Check-in {HOTEL_INFO.checkIn} • Check-out {HOTEL_INFO.checkOut}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-56 rounded-2xl overflow-hidden border border-gray-200">
            <LodgeImage src="/images/exterior-day.jpg" alt="Lodge exterior" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
            <p className="absolute bottom-3 left-4 right-4 text-xs text-gray-800">{HOTEL_INFO.fullName}</p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>

      <DeveloperCTA />
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, BedDouble, Presentation, UtensilsCrossed, Trees } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import DeveloperCTA from '@/components/DeveloperCTA';
import LodgeImage from '@/components/LodgeImage';
import { HOTEL_INFO } from '@/data/hotelData';

const PILLARS = [
  {
    icon: BedDouble,
    title: 'Accommodation',
    desc: 'Standard, deluxe, executive and family rooms plus a presidential suite — all with Wi-Fi, TV and air conditioning.',
    href: '/rooms',
  },
  {
    icon: Presentation,
    title: 'Conferences & Events',
    desc: 'A 300-seat main hall, executive boardroom, training room and a decorated events hall with sound and catering.',
    href: '/events',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant & Dining',
    desc: 'Daily breakfast, lunch and dinner with Zambian and international dishes, plus a banquet dining hall.',
    href: '/restaurant',
  },
  {
    icon: Trees,
    title: 'Gardens & Outdoors',
    desc: 'Landscaped gardens, outdoor seating and function space with secure on-site parking.',
    href: '/amenities',
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-14 sm:space-y-16 pb-20">
      <PageHero
        badge="About Us"
        title="Welcome to SDL Lodge & Events"
        subtitle="A premium modern hotel in XXXX XXXX — built for comfortable stays, productive meetings and memorable celebrations."
        image="/images/exterior-day.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <SectionHeading
            badge="Our story"
            title="One Lodge for Stays, Business & Celebrations"
            subtitle="SDL brings together everything a modern traveller, company or family needs: restful rooms, professional meeting venues, good food and friendly Zambian hospitality."
          />
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              Business travellers appreciate our quiet rooms, fast Wi-Fi, work spaces and well-equipped conference
              halls. Families enjoy our spacious family rooms, restaurant and gardens. And event organisers — from
              companies and churches to wedding committees — rely on our halls, catering and support team.
            </p>
            <p>
              Our goal is simple: comfortable rooms, dependable event facilities, tasty food and service that makes
              every guest feel welcome.
            </p>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            {[
              'Comfortable, well-kept rooms & suites',
              'Professional conference & event venues',
              'Local & international restaurant dining',
              'Friendly, helpful Zambian hospitality',
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden border border-gray-200 col-span-2">
            <LodgeImage src="/images/reception.jpg" alt="Lodge reception" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-gray-200">
            <LodgeImage src="/images/restaurant.jpg" alt="Lodge restaurant" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
          </div>
          <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden border border-gray-200">
            <LodgeImage src="/images/garden.jpg" alt="Lodge gardens" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          align="center"
          badge="What we offer"
          title="Four Reasons Guests Choose Us"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {PILLARS.map((p) => (
            <Link key={p.title} href={p.href} className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-red-500/12 border border-red-500/30 flex items-center justify-center text-red-400">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-red-300 transition">{p.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed flex-1">{p.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-300">
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-6 sm:p-10 text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white">Visit Us in {HOTEL_INFO.location}</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            {HOTEL_INFO.address} • {HOTEL_INFO.phone} • {HOTEL_INFO.email}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/rooms" className="px-6 py-3 rounded-xl text-sm font-bold gold-btn">Book a Room</Link>
            <Link href="/contact" className="px-6 py-3 rounded-xl text-sm font-semibold gold-btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      <DeveloperCTA />
    </div>
  );
}

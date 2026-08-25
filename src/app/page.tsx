'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Building2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Compass,
  Star,
  Users,
  Maximize,
  DollarSign,
  TrendingUp,
  Award,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Play,
  Eye,
} from 'lucide-react';
import AutoplayHero from '@/components/AutoplayHero';
import AutoplayCarousel from '@/components/AutoplayCarousel';
import VirtualTourViewer from '@/components/VirtualTourViewer';
import FinancialMetrics from '@/components/FinancialMetrics';
import DealRoomModal from '@/components/DealRoomModal';
import BookingModal from '@/components/BookingModal';
import ImageLightbox from '@/components/ImageLightbox';
import { HOTEL_INFO, ROOMS_SUITES, AMENITIES, DINING_VENUES, TESTIMONIALS } from '@/data/hotelData';
import { GALLERY_PHOTOS } from '@/data/galleryData';

export default function HomePage() {
  const [dealRoomOpen, setDealRoomOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedSuiteId, setSelectedSuiteId] = useState<string | undefined>(undefined);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openSuiteBooking = (suiteId: string) => {
    setSelectedSuiteId(suiteId);
    setBookingOpen(true);
  };

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  // Suite Cards for Autoplaying Carousel
  const suiteCards = ROOMS_SUITES.map((suite) => (
    <div
      key={suite.id}
      className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col h-full group"
    >
      {/* Image Thumbnail */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={suite.heroImage}
          alt={suite.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider">
            {suite.category}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 text-right">
          <span className="text-xs text-slate-300 block">Starting from</span>
          <span className="text-lg font-bold text-amber-300 font-mono">
            ${suite.pricePerNight.toLocaleString()}
            <span className="text-xs font-normal text-slate-400"> / night</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-bold font-serif-luxury text-white group-hover:text-amber-300 transition">
            {suite.name}
          </h3>
          <p className="text-xs text-slate-400 line-clamp-2">
            {suite.tagline}
          </p>

          <div className="flex items-center gap-3 text-xs text-slate-300 pt-1">
            <span>{suite.sqft.toLocaleString()} sq.ft ({suite.sqm} m²)</span>
            <span>•</span>
            <span>Up to {suite.maxGuests} Guests</span>
            <span>•</span>
            <span>{suite.bedrooms} Bed</span>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
          <button
            onClick={() => openSuiteBooking(suite.id)}
            className="text-xs font-semibold text-amber-300 hover:text-amber-200 transition flex items-center gap-1"
          >
            <span>Reserve / Inquire</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <Link
            href={`/rooms#${suite.id}`}
            className="text-xs text-slate-400 hover:text-white transition"
          >
            View Specs →
          </Link>
        </div>
      </div>
    </div>
  ));

  // Dining Cards for Autoplaying Carousel
  const diningCards = DINING_VENUES.map((venue) => (
    <div
      key={venue.id}
      className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col h-full group"
    >
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={venue.heroImage}
          alt={venue.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-xs font-bold">
            {venue.concept}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <h3 className="text-lg font-bold font-serif-luxury text-white group-hover:text-amber-300 transition">
            {venue.name}
          </h3>
          <p className="text-xs text-amber-300 font-medium">
            {venue.cuisine}
          </p>
          <p className="text-xs text-slate-400 line-clamp-2">
            {venue.description}
          </p>
        </div>

        <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-400">Capacity: {venue.seatingCapacity} seats</span>
          <Link
            href="/dining"
            className="text-amber-300 hover:text-amber-200 font-medium"
          >
            Explore Menu →
          </Link>
        </div>
      </div>
    </div>
  ));

  // Accolade Cards for Autoplaying Carousel
  const testimonialCards = TESTIMONIALS.map((t) => (
    <div
      key={t.id}
      className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full space-y-4"
    >
      <div className="space-y-3">
        <div className="flex items-center gap-1 text-amber-400">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400" />
          ))}
        </div>
        <p className="text-sm sm:text-base text-slate-200 font-serif-luxury italic leading-relaxed">
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-500/40">
          <Image src={t.avatar} alt={t.author} fill className="object-cover" />
        </div>
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-white">{t.author}</h4>
          <p className="text-[11px] text-amber-300/80">{t.title}</p>
          {t.publication && (
            <p className="text-[10px] text-slate-400 font-medium">{t.publication}</p>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="space-y-20 pb-20">
      {/* 1. AUTOPLAYING HERO SLIDESHOW */}
      <AutoplayHero />

      {/* 2. PROMINENT PROPERTY SALE & ACQUISITION BRIEF */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-950/50 via-slate-900 to-slate-950 border border-amber-500/40 p-8 sm:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  Turnkey Asset For Sale
                </span>
                <span className="text-xs text-slate-400">
                  Copyrighted by <strong className="text-white">{HOTEL_INFO.owner}</strong>
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white leading-tight">
                An Iconic Commercial Real Estate Opportunity: SWDL Luxury Resort & Residences
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                Offered with 100% Freehold Title, SWDL represents an elite trophy hospitality asset comprising 240 luxury keys, 28 standalone oceanfront villas, 4 fine-dining concepts, a 14,000 sq.ft spa, deep-water superyacht marina, and private helipad across 5.8 oceanfront acres.
              </p>

              {/* Quick Specs Pill Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Asking Price Guide</span>
                  <span className="text-base sm:text-lg font-bold text-amber-300 font-mono">{HOTEL_INFO.askingPriceGuide}</span>
                </div>
                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">2025 Audited EBITDA</span>
                  <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">$16.4M USD</span>
                </div>
                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Keys & Inventory</span>
                  <span className="text-base sm:text-lg font-bold text-white font-mono">240 Keys</span>
                </div>
                <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800">
                  <span className="text-[10px] uppercase text-slate-400 block font-semibold">Site Area</span>
                  <span className="text-base sm:text-lg font-bold text-white font-mono">5.8 Freehold Acres</span>
                </div>
              </div>
            </div>

            {/* Action Card */}
            <div className="lg:col-span-4 bg-slate-950/90 rounded-2xl p-6 border border-amber-500/30 space-y-4 shadow-xl">
              <span className="text-xs uppercase font-bold text-amber-300 tracking-wider block">
                Official Advisory Channel
              </span>
              <div className="space-y-2 text-xs text-slate-300">
                <p><strong>Entity:</strong> {HOTEL_INFO.name}</p>
                <p><strong>Owner:</strong> {HOTEL_INFO.owner}</p>
                <p><strong>Email:</strong> <span className="text-amber-300 font-mono">{HOTEL_INFO.contact.email}</span></p>
                <p><strong>Contact:</strong> <span className="text-amber-300 font-mono">{HOTEL_INFO.contact.phone}</span></p>
                <p><strong>Address:</strong> <span className="text-white">{HOTEL_INFO.contact.address}</span></p>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={() => setDealRoomOpen(true)}
                  className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm gold-btn flex items-center justify-center gap-2 shadow-lg"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Access Deal Room (NDA)</span>
                </button>
                <Link
                  href="/for-sale"
                  className="w-full py-2.5 rounded-xl font-semibold text-xs sm:text-sm gold-btn-outline flex items-center justify-center gap-2"
                >
                  <span>View Full Prospectus</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AUTOPLAYING SIGNATURE SUITES & VILLAS CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AutoplayCarousel
          title="Signature Suites & Oceanfront Villas"
          subtitle="Discover SWDL's 240 luxury keys, each meticulously crafted with floor-to-ceiling panoramic ocean horizons."
          badge="ACCOMMODATIONS INVENTORY"
          items={suiteCards}
          itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
          interval={4500}
          actionButton={
            <Link
              href="/rooms"
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold gold-btn-outline flex items-center gap-1.5"
            >
              <span>All 6 Suites</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          }
        />
      </section>

      {/* 4. INTERACTIVE VIRTUAL TOUR SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VirtualTourViewer />
      </section>

      {/* 5. WORLD-CLASS AMENITIES & LEISURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              World-Class Facilities
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white">
              Unrivaled Resort Amenities & Infrastructure
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Engineered to global 5-star benchmarks, offering guests and residents seamless private aviation, marine, and holistic wellness facilities.
            </p>
          </div>

          <Link
            href="/amenities"
            className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold gold-btn-outline flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>Explore All Amenities</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6-Grid Amenity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden group flex flex-col justify-between"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-xs font-bold uppercase">
                  {amenity.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-serif-luxury text-white group-hover:text-amber-300 transition">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-3">
                    {amenity.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex flex-wrap gap-1.5">
                    {amenity.highlights.slice(0, 2).map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/amenities"
                    className="inline-flex items-center gap-1 text-xs text-amber-300 hover:text-amber-200 font-medium pt-1"
                  >
                    <span>View Amenity Details</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. AUTOPLAYING MICHELIN GASTRONOMY CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AutoplayCarousel
          title="Michelin-Caliber Dining & Rooftop Lounges"
          subtitle="Four distinctive gastronomic concepts generating $12.8M USD in high-margin F&B annual revenue."
          badge="CULINARY EXCELLENCE"
          items={diningCards}
          itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
          interval={5000}
          actionButton={
            <Link
              href="/dining"
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold gold-btn-outline flex items-center gap-1.5"
            >
              <span>View Menus & Lounges</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          }
        />
      </section>

      {/* 7. FINANCIAL PRO FORMA & CAP RATE CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <DollarSign className="w-3.5 h-3.5 text-amber-400" />
            Investment Economics
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white">
            Audited Financial Highlights & Performance
          </h2>
          <p className="text-sm text-slate-400">
            Transparent EBITDA, RevPAR, and Pro Forma metrics for institutional buyers and family offices.
          </p>
        </div>

        <FinancialMetrics onOpenDealRoom={() => setDealRoomOpen(true)} />
      </section>

      {/* 8. AUTOPLAYING REVIEWS & ACCOLADES CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AutoplayCarousel
          title="Accolades & Industry Recognition"
          subtitle="Endorsed by global hospitality critics, high-net-worth guests, and sovereign asset advisors."
          badge="PRESTIGE & REVIEWS"
          items={testimonialCards}
          itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
          interval={6000}
        />
      </section>

      {/* 9. AUTOPLAYING PHOTO GALLERY TICKER / MOSAIC STRIP */}
      <section className="space-y-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider block">
              Curated Visual Gallery
            </span>
            <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white">
              Moments from the SWDL Estate
            </h3>
          </div>
          <Link
            href="/gallery"
            className="px-4 py-2 rounded-lg text-xs font-semibold gold-btn-outline"
          >
            View All 20+ Photos →
          </Link>
        </div>

        {/* Continuous Autoplaying Photo Ticker Strip */}
        <div className="relative w-full overflow-hidden py-2 bg-slate-950/60 border-y border-slate-900">
          <div className="flex w-max animate-ticker gap-4">
            {[...GALLERY_PHOTOS, ...GALLERY_PHOTOS].map((photo, idx) => (
              <div
                key={`${photo.id}-${idx}`}
                onClick={() => openLightbox(idx % GALLERY_PHOTOS.length)}
                className="relative w-72 h-48 rounded-xl overflow-hidden cursor-pointer group shrink-0 border border-slate-800 hover:border-amber-500/50 transition"
              >
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fill
                  sizes="300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="p-2 rounded-full bg-slate-950/80 text-amber-300 border border-amber-500/40">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-slate-950/80 rounded text-[10px] text-white truncate backdrop-blur-sm">
                  {photo.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. BOTTOM ACQUISITION CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-14 text-center space-y-6 relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 mx-auto flex items-center justify-center">
            <Building2 className="w-8 h-8" />
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-serif-luxury font-bold text-white">
              Secure Your Ownership of SWDL Today
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              For private treaty transaction details, bidding procedures, or to arrange a confidential inspection via private helicopter or yacht, contact Seedwel Investment Limited.
            </p>
          </div>

          {/* Contact Details Bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300 pt-2">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Email: <strong className="text-amber-300 font-mono">{HOTEL_INFO.contact.email}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Contact: <strong className="text-amber-300 font-mono">{HOTEL_INFO.contact.phone}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Address: <strong className="text-white">{HOTEL_INFO.contact.address}</strong></span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setDealRoomOpen(true)}
              className="px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base gold-btn shadow-xl shadow-amber-500/20"
            >
              Access Confidential Deal Room
            </button>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base gold-btn-outline"
            >
              Contact Advisory Directorate
            </Link>
          </div>

          <p className="text-xs text-slate-400 pt-4">
            {HOTEL_INFO.copyright}
          </p>
        </div>
      </section>

      {/* Modals */}
      <DealRoomModal isOpen={dealRoomOpen} onClose={() => setDealRoomOpen(false)} />
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        selectedSuiteId={selectedSuiteId}
      />
      <ImageLightbox
        photos={GALLERY_PHOTOS}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BedDouble,
  CheckCircle2,
  ChevronRight,
  Eye,
  MapPin,
  Star,
  Users,
  UtensilsCrossed,
} from 'lucide-react';
import AutoplayHero from '@/components/AutoplayHero';
import AutoplayCarousel from '@/components/AutoplayCarousel';
import BookingModal from '@/components/BookingModal';
import BookingWidget from '@/components/BookingWidget';
import RoomCard from '@/components/RoomCard';
import RoomDetailModal from '@/components/RoomDetailModal';
import ImageLightbox from '@/components/ImageLightbox';
import SectionHeading from '@/components/SectionHeading';
import DeveloperCTA from '@/components/DeveloperCTA';
import ContactForm from '@/components/ContactForm';
import HotelImage from '@/components/HotelImage';
import AmenityIcon from '@/components/AmenityIcon';
import {
  HOTEL_INFO,
  ROOMS,
  AMENITIES,
  CONFERENCE_SPACES,
  RESTAURANT_INFO,
  DINING_HALL_INFO,
  LOBBY_INFO,
  OUTDOOR_INFO,
  TESTIMONIALS,
  MENU_CATEGORIES,
} from '@/data/hotelData';
import { GALLERY_PHOTOS } from '@/data/galleryData';
import { Room } from '@/types';
import { kwacha } from '@/lib/format';

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [detailRoom, setDetailRoom] = useState<Room | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openBooking = (roomId?: string) => {
    setDetailRoom(null);
    setSelectedRoomId(roomId);
    setBookingOpen(true);
  };

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const roomCards = ROOMS.map((room) => (
    <RoomCard key={room.id} room={room} onView={setDetailRoom} onBook={openBooking} />
  ));

  const mainHall = CONFERENCE_SPACES[0];
  const breakfast = MENU_CATEGORIES[0];

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* HERO */}
      <AutoplayHero onBook={() => openBooking()} />

      {/* BOOKING WIDGET */}
      <BookingWidget onBook={openBooking} />

      {/* WELCOME */}
      <section id="explore" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-slate-800 group">
            <HotelImage
              src="/images/exterior-day.jpg"
              alt="Zambezi Palms Hotel exterior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs text-slate-200">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{HOTEL_INFO.address}</span>
            </div>
          </div>
          <div className="space-y-4">
            <SectionHeading
              badge="Welcome to Zambezi Palms"
              title="A Modern Hotel for Stays, Meetings & Celebrations"
              subtitle="Zambezi Palms Hotel & Conference Centre offers comfortable accommodation, conference facilities, a restaurant, dining hall, gardens and event spaces — all in one convenient Lusaka location."
            />
            <ul className="space-y-2.5 text-sm text-slate-300">
              {[
                'Comfortable rooms & suites with Wi-Fi and air conditioning',
                '300-seat conference hall, boardroom & training rooms',
                'Restaurant serving local & international dishes',
                'Dining & events hall for weddings and celebrations',
                'Gardens, secure parking and 24-hour reception',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link href="/rooms" className="px-6 py-3 rounded-xl text-sm font-bold gold-btn flex items-center gap-2">
                <BedDouble className="w-4 h-4" />
                <span>View Our Rooms</span>
              </Link>
              <Link href="/about" className="px-6 py-3 rounded-xl text-sm font-semibold gold-btn-outline flex items-center gap-2">
                <span>About the Hotel</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROOMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AutoplayCarousel
          title="Rooms & Accommodation"
          subtitle="Five comfortable room categories with sample rates in Zambian Kwacha. Tap any room to view photos and full details."
          badge="STAY WITH US"
          items={roomCards}
          itemsPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
          interval={5000}
          actionButton={
            <Link href="/rooms" className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold gold-btn-outline flex items-center gap-1.5">
              <span>All Rooms</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          }
        />
      </section>

      {/* CONFERENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Conference & Events"
          title="Meet, Train & Celebrate With Us"
          subtitle="Companies, churches, schools, NGOs, government departments and families all host their events here — from board meetings to 300-guest conferences and weddings."
          action={
            <Link href="/events" className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold gold-btn-outline flex items-center gap-1.5">
              <span>Conference & Events</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          }
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl overflow-hidden group">
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <HotelImage src={mainHall.image} alt={mainHall.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold font-serif-luxury text-white">{mainHall.name}</h3>
                  <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-1">
                    <Users className="w-3.5 h-3.5 text-amber-400" /> Up to {mainHall.capacity.theatre} theatre • {mainHall.capacity.banquet} banquet
                  </p>
                </div>
              </div>
            </div>
            <div className="p-5 sm:p-6 space-y-3">
              <p className="text-sm text-slate-300 line-clamp-3">{mainHall.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {mainHall.equipment.slice(0, 4).map((e) => (
                  <span key={e} className="text-[11px] px-2 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300">{e}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <span className="text-xs text-slate-400">
                  Full day <strong className="text-amber-300 font-mono">{kwacha(mainHall.rates[1].price)}</strong> <span className="text-slate-500">(sample)</span>
                </span>
                <Link href="/events" className="text-xs text-amber-300 hover:text-amber-200 font-medium">View halls & rates →</Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            {CONFERENCE_SPACES.slice(1).map((s) => (
              <Link key={s.id} href={`/events#${s.id}`} className="glass-card glass-card-hover rounded-2xl overflow-hidden group flex flex-col">
                <div className="relative h-40 overflow-hidden">
                  <HotelImage src={s.image} alt={s.name} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-slate-950/80 text-amber-300 border border-amber-500/30 text-[10px] font-bold uppercase">{s.type}</span>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition">{s.name}</h4>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{s.description}</p>
                </div>
              </Link>
            ))}
            <Link href="/events" className="rounded-2xl border border-dashed border-amber-500/40 bg-amber-500/5 p-4 flex flex-col items-start justify-center gap-2 hover:bg-amber-500/10 transition min-h-[120px]">
              <span className="text-sm font-bold text-amber-300">Half-day, full-day & evening packages</span>
              <span className="text-xs text-slate-400">Sound, projector, catering & support included options</span>
              <span className="text-xs font-semibold text-white flex items-center gap-1">See event packages <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* RESTAURANT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Restaurant"
          title={RESTAURANT_INFO.name}
          subtitle={RESTAURANT_INFO.tagline + ' — ' + RESTAURANT_INFO.hours}
          action={
            <Link href="/restaurant" className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold gold-btn-outline flex items-center gap-1.5">
              <span>Full Menu</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          }
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-800 group">
            <HotelImage src={RESTAURANT_INFO.image} alt="Hotel restaurant" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 space-y-1">
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4 text-amber-400" /> Breakfast • Lunch • Dinner
              </p>
              <p className="text-xs text-slate-300">{RESTAURANT_INFO.roomService}</p>
            </div>
          </div>
          <div className="glass-card rounded-2xl p-5 sm:p-6 space-y-4">
            <h3 className="text-base font-bold text-white">Popular right now — {breakfast.name}</h3>
            <div className="space-y-3">
              {breakfast.items.slice(0, 4).map((item) => (
                <div key={item.name} className="flex items-start justify-between gap-3 pb-3 border-b border-slate-800 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-semibold text-slate-100 flex items-center gap-2">
                      {item.name}
                      {item.tag && <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold">{item.tag}</span>}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                  <span className="text-sm font-bold text-amber-300 font-mono shrink-0">{kwacha(item.price)}</span>
                </div>
              ))}
            </div>
            <Link href="/restaurant" className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300 hover:text-amber-200">
              <span>Browse the full menu (7 categories)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* DINING HALL + LOBBY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-2xl overflow-hidden group">
          <div className="relative h-60 sm:h-64 overflow-hidden">
            <HotelImage src={DINING_HALL_INFO.image} alt={DINING_HALL_INFO.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">Dining Hall</span>
              <h3 className="text-xl font-bold font-serif-luxury text-white">{DINING_HALL_INFO.name}</h3>
            </div>
          </div>
          <div className="p-5 sm:p-6 space-y-3">
            <p className="text-sm text-slate-300">{DINING_HALL_INFO.tagline} — {DINING_HALL_INFO.capacity}.</p>
            <div className="flex flex-wrap gap-1.5">
              {DINING_HALL_INFO.uses.slice(0, 4).map((x) => (
                <span key={x} className="text-[11px] px-2 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300">{x}</span>
              ))}
            </div>
            <Link href="/dining" className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300 hover:text-amber-200">
              <span>Explore the dining hall</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="glass-card rounded-2xl overflow-hidden group">
          <div className="relative h-60 sm:h-64 overflow-hidden">
            <HotelImage src={LOBBY_INFO.image} alt={LOBBY_INFO.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">Lobby</span>
              <h3 className="text-xl font-bold font-serif-luxury text-white">{LOBBY_INFO.name}</h3>
            </div>
          </div>
          <div className="p-5 sm:p-6 space-y-3">
            <p className="text-sm text-slate-300">{LOBBY_INFO.tagline}.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
              {LOBBY_INFO.points.slice(0, 4).map((p) => (
                <li key={p} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link href="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-300 hover:text-amber-200">
              <span>More about the hotel</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* OUTDOOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Outdoors"
          title={OUTDOOR_INFO.name}
          subtitle={OUTDOOR_INFO.tagline}
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {OUTDOOR_INFO.images.map((img, i) => (
            <div key={img} className={`relative rounded-2xl overflow-hidden border border-slate-800 group ${i === 0 ? 'h-72 sm:h-80 sm:row-span-1' : 'h-56 sm:h-80'}`}>
              <HotelImage src={img} alt={`Hotel outdoor area ${i + 1}`} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-slate-950/70 px-2.5 py-1 rounded-lg border border-slate-700/60">
                {['Landscaped Gardens', 'Hotel Exterior', 'Evening View'][i]}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {OUTDOOR_INFO.points.map((p) => (
            <div key={p} className="px-3 py-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-300 text-center">{p}</div>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Amenities"
          title="Everything You Need Under One Roof"
          subtitle="Practical comforts and services for guests, delegates and event organisers."
          action={
            <Link href="/amenities" className="px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold gold-btn-outline flex items-center gap-1.5">
              <span>All Amenities</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          }
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {AMENITIES.map((a) => (
            <div key={a.id} className="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/12 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <AmenityIcon icon={a.icon} className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{a.title}</h3>
                <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-snug">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="space-y-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider block">Gallery</span>
            <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white">Moments Around the Hotel</h3>
          </div>
          <Link href="/gallery" className="px-4 py-2 rounded-lg text-xs font-semibold gold-btn-outline shrink-0">
            View Gallery →
          </Link>
        </div>
        <div className="relative w-full overflow-hidden py-2 bg-slate-950/60 border-y border-slate-900">
          <div className="flex w-max animate-ticker gap-4">
            {[...GALLERY_PHOTOS, ...GALLERY_PHOTOS].map((photo, idx) => (
              <div
                key={`${photo.id}-${idx}`}
                onClick={() => openLightbox(idx % GALLERY_PHOTOS.length)}
                className="relative w-64 sm:w-72 h-44 sm:h-48 rounded-xl overflow-hidden cursor-pointer group shrink-0 border border-slate-800 hover:border-amber-500/50 transition"
              >
                <HotelImage src={photo.url} alt={photo.title} fill sizes="300px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
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

      {/* SAMPLE TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          align="center"
          badge="Guest Feedback"
          title="What Guests Say"
          subtitle="Sample reviews shown for design purposes — a live hotel website would display real guest feedback here."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-card rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="ml-2 text-[10px] px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-400 font-bold uppercase">Sample</span>
              </div>
              <p className="text-sm text-slate-200 italic leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="pt-3 border-t border-slate-800">
                <p className="text-sm font-bold text-white">{t.author}</p>
                <p className="text-xs text-amber-300/80">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / INQUIRY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          align="center"
          badge="Get In Touch"
          title="Book a Stay or Plan Your Event"
          subtitle="Send us an inquiry for rooms, conferences, weddings or restaurant bookings — or ask about a website for your own hotel."
        />
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* DEVELOPER CTA */}
      <DeveloperCTA />

      {/* Modals — mounted fresh on each open so state always starts clean */}
      {bookingOpen && (
        <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} selectedRoomId={selectedRoomId} />
      )}
      {detailRoom && (
        <RoomDetailModal room={detailRoom} onClose={() => setDetailRoom(null)} onBook={openBooking} />
      )}
      {lightboxOpen && (
        <ImageLightbox photos={GALLERY_PHOTOS} initialIndex={lightboxIndex} isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} />
      )}
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Info } from 'lucide-react';
import PageHero from '@/components/PageHero';
import RoomCard from '@/components/RoomCard';
import RoomDetailModal from '@/components/RoomDetailModal';
import BookingModal from '@/components/BookingModal';
import SectionHeading from '@/components/SectionHeading';
import DeveloperCTA from '@/components/DeveloperCTA';
import { ROOMS } from '@/data/hotelData';
import { Room } from '@/types';

const CATEGORIES = ['All', 'Standard', 'Deluxe', 'Executive', 'Family', 'Suite'];

export default function RoomsPage() {
  const [category, setCategory] = useState('All');
  const [detailRoom, setDetailRoom] = useState<Room | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);

  const openBooking = (roomId?: string) => {
    setDetailRoom(null);
    setSelectedRoomId(roomId);
    setBookingOpen(true);
  };

  const filtered = category === 'All' ? ROOMS : ROOMS.filter((r) => r.category === category);

  return (
    <div className="space-y-14 sm:space-y-16 pb-20">
      <PageHero
        badge="Rooms & Accommodation"
        title="Comfortable Rooms for Every Guest"
        subtitle="From neat standard rooms to a spacious presidential suite — every room includes free Wi-Fi, air conditioning, a flat-screen TV and a private bathroom."
        image="/images/deluxe-room.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1">Filter:</span>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
                category === c
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-slate-900 border border-slate-700 text-slate-300 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs text-slate-400 flex gap-2">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            All rates below are <strong className="text-slate-200">sample rates in Zambian Kwacha (ZMW)</strong> shown
            for demonstration. Check-in 14:00 • Check-out 11:00 • Breakfast available on request.
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map((room) => (
            <RoomCard key={room.id} room={room} onView={setDetailRoom} onBook={openBooking} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <SectionHeading
            badge="Good to know"
            title="Every Stay Includes"
            subtitle="Standard comforts in all rooms, plus services available throughout the hotel."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-6">
            {['Free Wi-Fi', 'Air conditioning', 'Flat-screen TV', 'Private bathroom', 'Daily housekeeping', 'Room service'].map((x) => (
              <div key={x} className="px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 text-center">
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      <DeveloperCTA />

      {detailRoom && (
        <RoomDetailModal room={detailRoom} onClose={() => setDetailRoom(null)} onBook={openBooking} />
      )}
      {bookingOpen && (
        <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} selectedRoomId={selectedRoomId} />
      )}
    </div>
  );
}

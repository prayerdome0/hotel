'use client';

import React, { useState } from 'react';
import { CalendarCheck, BedDouble, Users, CalendarDays } from 'lucide-react';
import { ROOMS } from '@/data/hotelData';
import { kwacha, nightsBetween, todayISO } from '@/lib/format';

interface BookingWidgetProps {
  onBook: (roomId?: string) => void;
}

export default function BookingWidget({ onBook }: BookingWidgetProps) {
  const [roomId, setRoomId] = useState(ROOMS[1].id);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);

  const room = ROOMS.find((r) => r.id === roomId) || ROOMS[0];
  const nights = nightsBetween(checkIn, checkOut);

  return (
    <section id="book" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 scroll-mt-24">
      <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col lg:flex-row lg:items-end gap-5">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-1.5">
                <BedDouble className="w-3.5 h-3.5 text-amber-400" /> Room type
              </label>
              <select
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
              >
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name} — {kwacha(r.pricePerNight)}/night
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-1.5">
                <CalendarDays className="w-3.5 h-3.5 text-amber-400" /> Check-in
              </label>
              <input
                type="date"
                min={todayISO()}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-1.5">
                <CalendarDays className="w-3.5 h-3.5 text-amber-400" /> Check-out
              </label>
              <input
                type="date"
                min={checkIn || todayISO()}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-1.5">
                <Users className="w-3.5 h-3.5 text-amber-400" /> Guests
              </label>
              <input
                type="number"
                min={1}
                max={room.maxGuests}
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:w-56 shrink-0">
            <div className="flex-1 lg:text-center px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] uppercase text-slate-400 font-semibold block">Estimated total</span>
              <span className="text-xl font-bold text-amber-300 font-mono">
                {nights > 0 ? kwacha(nights * room.pricePerNight) : '—'}
              </span>
              <span className="text-[11px] text-slate-500 block">
                {nights > 0 ? `${nights} night${nights > 1 ? 's' : ''} • sample rate` : 'Select your dates'}
              </span>
            </div>
            <button
              onClick={() => onBook(roomId)}
              className="px-6 py-3 rounded-xl font-bold text-sm gold-btn flex items-center justify-center gap-2 shadow-lg"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>
        </div>
        <p className="text-[11px] text-slate-500 mt-4 text-center">
          Demo booking interface — sample rates in Zambian Kwacha. No real reservation is made here.
        </p>
      </div>
    </section>
  );
}

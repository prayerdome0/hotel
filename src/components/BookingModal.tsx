'use client';

import React, { useState, useEffect } from 'react';
import { X, CalendarCheck, Users, CheckCircle2, Info, Phone } from 'lucide-react';
import { ROOMS, HOTEL_INFO } from '@/data/hotelData';
import { kwacha, nightsBetween, todayISO } from '@/lib/format';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string;
}

export default function BookingModal({ isOpen, onClose, selectedRoomId }: BookingModalProps) {
  const [roomId, setRoomId] = useState(selectedRoomId || ROOMS[0].id);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const room = ROOMS.find((r) => r.id === roomId) || ROOMS[0];
  const nights = nightsBetween(checkIn, checkOut);
  const estimated = nights > 0 ? nights * room.pricePerNight : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a room"
      className="fixed inset-0 z-50 bg-white/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-gray-50 border border-red-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-gray-200 text-gray-600 hover:text-white transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif-luxury font-bold text-white">Request Received</h3>
            <p className="text-sm text-gray-700 max-w-md mx-auto">
              Thank you, <strong className="text-white">{name}</strong>. Your booking request for the{' '}
              <strong className="text-red-300">{room.name}</strong>
              {nights > 0 && (
                <>
                  {' '}({nights} night{nights > 1 ? 's' : ''}, est. <strong className="text-red-300">{kwacha(estimated)}</strong>)
                </>
              )}{' '}
              has been noted.
            </p>
            <div className="p-3.5 rounded-xl bg-white border border-gray-200 text-xs text-gray-600 flex gap-2 text-left">
              <Info className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>
                This is a <strong className="text-gray-800">demo booking interface</strong> for showcase purposes —
                no real reservation has been made and no payment was taken. Connect a booking system or
                WhatsApp line here to receive real bookings.
              </span>
            </div>
            <button onClick={onClose} className="px-6 py-2.5 rounded-lg text-sm font-bold gold-btn">
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <span className="text-[10px] px-2.5 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-bold uppercase tracking-wider">
                Demo booking
              </span>
              <h2 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white mt-2 flex items-center gap-2">
                <CalendarCheck className="w-6 h-6 text-red-400" />
                Book Your Stay
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                Check-in {HOTEL_INFO.checkIn} • Check-out {HOTEL_INFO.checkOut} • {HOTEL_INFO.reception}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Room type</label>
                <select
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-white focus:outline-none focus:border-red-400"
                >
                  {ROOMS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} — {kwacha(r.pricePerNight)}/night (sample rate)
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Check-in</label>
                  <input
                    type="date"
                    required
                    min={todayISO()}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-white focus:outline-none focus:border-red-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Check-out</label>
                  <input
                    type="date"
                    required
                    min={checkIn || todayISO()}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-white focus:outline-none focus:border-red-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-red-400" /> Guests (max {room.maxGuests})
                  </span>
                </label>
                <input
                  type="number"
                  required
                  min={1}
                  max={room.maxGuests}
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-white focus:outline-none focus:border-red-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Full name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-white focus:outline-none focus:border-red-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Phone number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+260 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-white focus:outline-none focus:border-red-400"
                  />
                </div>
              </div>

              {/* Live estimate */}
              <div className="p-4 rounded-xl bg-red-950/25 border border-red-500/30 flex items-center justify-between">
                <div className="text-xs text-gray-700">
                  <span className="block text-gray-600 uppercase font-semibold text-[10px]">Estimated total</span>
                  {nights > 0 ? (
                    <span>
                      {nights} night{nights > 1 ? 's' : ''} × {kwacha(room.pricePerNight)}
                    </span>
                  ) : (
                    <span>Select dates to see your estimate</span>
                  )}
                </div>
                <span className="text-2xl font-bold text-red-300 font-mono">
                  {nights > 0 ? kwacha(estimated) : '—'}
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-sm font-bold gold-btn shadow-lg flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Request Booking</span>
              </button>

              <p className="text-[11px] text-gray-500 text-center">
                Sample rates in Zambian Kwacha. Prefer to call?{' '}
                <a href={HOTEL_INFO.phoneHref} className="text-red-300 hover:underline inline-flex items-center gap-1">
                  <Phone className="w-3 h-3" /> {HOTEL_INFO.phone}
                </a>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

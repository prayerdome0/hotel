'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Users, BedDouble, Maximize2, Bath, CheckCircle2, CalendarCheck, Eye } from 'lucide-react';
import LodgeImage from '@/components/LodgeImage';
import { Room } from '@/types';
import { kwacha } from '@/lib/format';

interface RoomDetailModalProps {
  room: Room;
  onClose: () => void;
  onBook: (roomId: string) => void;
}

export default function RoomDetailModal({ room, onClose, onBook }: RoomDetailModalProps) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const prev = () => setImgIndex((i) => (i === 0 ? room.gallery.length - 1 : i - 1));
  const next = () => setImgIndex((i) => (i + 1) % room.gallery.length);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${room.name} details`}
      className="fixed inset-0 z-50 bg-white/92 backdrop-blur-md overflow-y-auto p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-auto bg-gray-50 border border-red-500/30 rounded-2xl shadow-2xl overflow-hidden my-4 sm:my-8 animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-lg bg-white/80 border border-gray-300 text-gray-700 hover:text-white transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery */}
        <div className="relative h-64 sm:h-96 bg-white">
          <LodgeImage
            key={room.gallery[imgIndex]}
            src={room.gallery[imgIndex]}
            alt={`${room.name} photo ${imgIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover animate-fadeIn"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent pointer-events-none" />
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 border border-red-500/30 text-white hover:bg-red-500 hover:text-white transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 border border-red-500/30 text-white hover:bg-red-500 hover:text-white transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-white/80 text-[11px] font-mono text-gray-700">
            {imgIndex + 1} / {room.gallery.length}
          </span>
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/80 text-red-300 border border-red-500/30 text-[11px] font-bold uppercase tracking-wider">
            {room.category}
          </span>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 p-3 bg-white border-b border-gray-200 overflow-x-auto no-scrollbar">
          {room.gallery.map((g, i) => (
            <button
              key={`${g}-${i}`}
              onClick={() => setImgIndex(i)}
              className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border transition ${
                i === imgIndex ? 'border-red-400 ring-2 ring-red-400/50' : 'border-gray-300 opacity-60 hover:opacity-100'
              }`}
            >
              <LodgeImage src={g} alt={`${room.name} thumbnail ${i + 1}`} fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>

        {/* Details */}
        <div className="p-5 sm:p-8 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">{room.name}</h2>
              <p className="text-sm text-red-300/90 mt-0.5">{room.tagline}</p>
              <p className="text-xs text-gray-600 mt-1">{room.view}</p>
            </div>
            <div className="sm:text-right shrink-0 bg-white border border-gray-200 rounded-xl px-4 py-2.5 self-start">
              <span className="text-2xl font-bold text-red-300 font-mono">{kwacha(room.pricePerNight)}</span>
              <span className="text-xs text-gray-600 block">per night • sample rate</span>
            </div>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">{room.description}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-gray-800">
              <BedDouble className="w-4 h-4 text-red-400 shrink-0" />
              <span>{room.bedType}</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-gray-800">
              <Users className="w-4 h-4 text-red-400 shrink-0" />
              <span>Up to {room.maxGuests} guests</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-gray-800">
              <Maximize2 className="w-4 h-4 text-red-400 shrink-0" />
              <span>{room.sizeSqm} m² room</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-gray-800">
              <Bath className="w-4 h-4 text-red-400 shrink-0" />
              <span>{room.bathrooms} bathroom{room.bathrooms > 1 ? 's' : ''}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Room features</h4>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {room.features.map((f) => (
                  <li key={f} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">Services & amenities</h4>
              <ul className="space-y-1.5 text-xs text-gray-700">
                {room.amenities.map((f) => (
                  <li key={f} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onBook(room.id)}
              className="flex-1 py-3 rounded-xl font-bold text-sm gold-btn flex items-center justify-center gap-2 shadow-lg"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book This Room — {kwacha(room.pricePerNight)}/night</span>
            </button>
            <button
              onClick={onClose}
              className="sm:w-40 py-3 rounded-xl font-semibold text-sm gold-btn-outline flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>Keep Browsing</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

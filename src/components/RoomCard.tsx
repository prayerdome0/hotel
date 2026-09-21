'use client';

import React from 'react';
import { Users, BedDouble, Maximize2, Wifi, Snowflake, Tv, Eye, CalendarCheck } from 'lucide-react';
import HotelImage from '@/components/HotelImage';
import { Room } from '@/types';
import { kwacha } from '@/lib/format';

interface RoomCardProps {
  room: Room;
  onView: (room: Room) => void;
  onBook: (roomId: string) => void;
}

export default function RoomCard({ room, onView, onBook }: RoomCardProps) {
  return (
    <div className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col h-full group">
      <div className="relative h-60 w-full overflow-hidden cursor-pointer" onClick={() => onView(room)}>
        <HotelImage
          src={room.heroImage}
          alt={room.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[11px] font-bold uppercase tracking-wider">
            {room.category}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 text-right bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60">
          <span className="text-base font-bold text-amber-300 font-mono">{kwacha(room.pricePerNight)}</span>
          <span className="text-[11px] text-slate-400 block -mt-0.5">per night • sample rate</span>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex-1 flex flex-col gap-3">
        <div>
          <h3 className="text-lg font-bold font-serif-luxury text-white group-hover:text-amber-300 transition">
            {room.name}
          </h3>
          <p className="text-xs text-slate-400 mt-0.5 line-clamp-2">{room.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-300">
          <span className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-amber-400" /> Up to {room.maxGuests} guests
          </span>
          <span className="flex items-center gap-1.5">
            <BedDouble className="w-3.5 h-3.5 text-amber-400" /> {room.bedType}
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize2 className="w-3.5 h-3.5 text-amber-400" /> {room.sizeSqm} m²
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {['Free Wi-Fi', 'Air conditioning', 'TV'].map((a) => (
            <span key={a} className="text-[10px] px-2 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300 flex items-center gap-1">
              {a === 'Free Wi-Fi' && <Wifi className="w-3 h-3 text-amber-400" />}
              {a === 'Air conditioning' && <Snowflake className="w-3 h-3 text-amber-400" />}
              {a === 'TV' && <Tv className="w-3 h-3 text-amber-400" />}
              {a}
            </span>
          ))}
        </div>

        <div className="pt-3 mt-auto border-t border-slate-800 grid grid-cols-2 gap-2">
          <button
            onClick={() => onView(room)}
            className="py-2.5 rounded-xl text-xs font-semibold gold-btn-outline flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Room</span>
          </button>
          <button
            onClick={() => onBook(room.id)}
            className="py-2.5 rounded-xl text-xs font-bold gold-btn flex items-center justify-center gap-1.5"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Compass,
  Maximize2,
  Eye,
  Layers,
  Sparkles,
  CheckCircle2,
  MapPin,
  ChevronRight,
} from 'lucide-react';

const TOUR_LOCATIONS = [
  {
    id: 'aerial',
    name: '5.8-Acre Grounds & Marina',
    category: 'Estate Overview',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1920&auto=format&fit=crop',
    description: 'Direct ocean frontage, certified helipad, deep-water superyacht slips, and private white sand shoreline.',
    hotspots: [
      { x: '24%', y: '40%', label: 'Certified Helipad' },
      { x: '68%', y: '52%', label: 'Cascade Infinity Pools' },
      { x: '45%', y: '70%', label: 'Private Marina Berths' },
    ],
  },
  {
    id: 'penthouse',
    name: 'SWDL Presidential Penthouse',
    category: 'Signature Suite',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1920&auto=format&fit=crop',
    description: '4,800 sq.ft crowning residence with 360° ocean views, private heated plunge pool, and Carrara marble finishings.',
    hotspots: [
      { x: '35%', y: '45%', label: 'Italian Marble Living Salon' },
      { x: '75%', y: '60%', label: 'Cantilevered Plunge Pool' },
    ],
  },
  {
    id: 'l-horizon',
    name: "L'Horizon Grand Michelin Dining",
    category: 'Gastronomy',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop',
    description: '140-seat oceanfront fine dining salon with open sommelier cellar and panoramic sunset glass walls.',
    hotspots: [
      { x: '50%', y: '48%', label: 'Oceanfront Dining Terraces' },
      { x: '82%', y: '65%', label: 'Sommelier Wine Vault' },
    ],
  },
  {
    id: 'spa',
    name: 'Thalasso Wellness & Thermal Circuit',
    category: 'Spa & Wellness',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1920&auto=format&fit=crop',
    description: '14,000 sq.ft hydrotherapy sanctuary with seawater vitality pools and 12 bespoke treatment pavilions.',
    hotspots: [
      { x: '40%', y: '55%', label: 'Vitality Seawater Pool' },
      { x: '70%', y: '40%', label: 'Finnish Cedar Sauna' },
    ],
  },
];

export default function VirtualTourViewer() {
  const [selectedId, setSelectedId] = useState(TOUR_LOCATIONS[0].id);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const currentLocation = TOUR_LOCATIONS.find((loc) => loc.id === selectedId) || TOUR_LOCATIONS[0];

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            Interactive 360° Property Showcase
          </div>
          <h3 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white">
            Explore SWDL Estate Viewpoints
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Select a designated zone to examine architecture, interior craftsmanship, and grounds.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {TOUR_LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              onClick={() => {
                setSelectedId(loc.id);
                setActiveHotspot(null);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                selectedId === loc.id
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold shadow'
                  : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {loc.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Main Viewport */}
      <div className="relative w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden border border-slate-800 bg-slate-950 group">
        <Image
          src={currentLocation.image}
          alt={currentLocation.name}
          fill
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

        {/* Hotspots */}
        {currentLocation.hotspots.map((spot, idx) => (
          <div
            key={idx}
            style={{ left: spot.x, top: spot.y }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
            onClick={() => setActiveHotspot(activeHotspot === spot.label ? null : spot.label)}
          >
            <div className="relative flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-amber-400 opacity-75" />
              <div className="relative w-7 h-7 rounded-full bg-slate-950/90 border-2 border-amber-400 text-amber-300 flex items-center justify-center text-xs font-bold shadow-lg hover:scale-110 transition">
                +
              </div>
            </div>

            {/* Hotspot Label Tooltip */}
            <div
              className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-slate-950/95 border border-amber-400/50 text-amber-200 text-xs font-semibold whitespace-nowrap shadow-2xl backdrop-blur-md transition-all ${
                activeHotspot === spot.label ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100'
              }`}
            >
              {spot.label}
            </div>
          </div>
        ))}

        {/* Bottom Location Info Banner */}
        <div className="absolute bottom-4 left-4 right-4 z-20 p-4 rounded-xl bg-slate-950/80 border border-slate-800 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
              {currentLocation.category}
            </span>
            <h4 className="text-sm sm:text-base font-bold text-white">
              {currentLocation.name}
            </h4>
            <p className="text-xs text-slate-300 max-w-xl">
              {currentLocation.description}
            </p>
          </div>

          <span className="text-[11px] text-amber-300/80 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 shrink-0">
            Click &apos;+&apos; pins to inspect features
          </span>
        </div>
      </div>
    </div>
  );
}

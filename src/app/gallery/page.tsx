'use client';

import React, { useState } from 'react';
import { Eye, Maximize2 } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ImageLightbox from '@/components/ImageLightbox';
import DeveloperCTA from '@/components/DeveloperCTA';
import HotelImage from '@/components/HotelImage';
import { GALLERY_PHOTOS, GALLERY_CATEGORIES } from '@/data/galleryData';

export default function GalleryPage() {
  const [category, setCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = category === 'All' ? GALLERY_PHOTOS : GALLERY_PHOTOS.filter((p) => p.category === category);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-14 sm:space-y-16 pb-20">
      <PageHero
        badge="Photo Gallery"
        title="Take a Look Around the Hotel"
        subtitle="Browse photos of our exterior, reception, rooms, conference halls, restaurant, dining hall, gardens and food. Tap any photo to view it full-screen."
        image="/images/garden.jpg"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl glass-card">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition shrink-0 ${
                  category === c
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 border border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <button
            onClick={() => openLightbox(0)}
            className="px-4 py-2 rounded-xl text-xs font-bold gold-btn flex items-center justify-center gap-1.5 shrink-0"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Fullscreen Viewer</span>
          </button>
        </div>

        <p className="text-xs text-slate-500">
          Showing {filtered.length} photo{filtered.length !== 1 ? 's' : ''}{category !== 'All' && ` in ${category}`}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer border border-slate-800 hover:border-amber-500/50 hover:shadow-xl transition-all"
            >
              <HotelImage
                src={photo.url}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition" />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[11px] font-bold uppercase">
                  {photo.category}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="p-3 rounded-full bg-slate-950/80 border border-amber-400 text-amber-300 shadow-xl">
                  <Eye className="w-5 h-5" />
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 space-y-1">
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition line-clamp-1">
                  {photo.title}
                </h4>
                <p className="text-[11px] text-slate-300 line-clamp-2">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <DeveloperCTA />

      {lightboxOpen && (
        <ImageLightbox
          photos={filtered}
          initialIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}

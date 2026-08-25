'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Eye,
  Play,
  Pause,
  Filter,
  Sparkles,
  Maximize2,
  Compass,
} from 'lucide-react';
import ImageLightbox from '@/components/ImageLightbox';
import VirtualTourViewer from '@/components/VirtualTourViewer';
import { GALLERY_PHOTOS } from '@/data/galleryData';
import { HOTEL_INFO } from '@/data/hotelData';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(false);
  const [activeAutoIndex, setActiveAutoIndex] = useState(0);

  const categories = ['All', 'Suites', 'Dining', 'Wellness', 'Grounds', 'Aerial', 'Events'];

  const filteredPhotos =
    selectedCategory === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === selectedCategory);

  // In-page auto slideshow cycling
  useEffect(() => {
    if (!isAutoCycling || filteredPhotos.length === 0) return;

    const timer = setInterval(() => {
      setActiveAutoIndex((prev) => (prev + 1) % filteredPhotos.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isAutoCycling, filteredPhotos.length]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-amber-950/40 via-slate-950 to-slate-950 border-b border-amber-500/20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1920&auto=format&fit=crop"
            alt="SWDL Media Gallery"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            High-Resolution Media & Virtual Perspectives
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-luxury font-bold text-white leading-tight">
            SWDL Visual Portfolio & Gallery
          </h1>
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl font-light">
            Explore every dimension of SWDL, from double-height penthouse suites and Michelin culinary artistry to the deep-water superyacht marina and coastal grounds.
          </p>
        </div>
      </section>

      {/* Interactive 360 Virtual Tour Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <VirtualTourViewer />
      </section>

      {/* Main Filter & Auto-Play Control Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl glass-card">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase font-bold text-slate-400 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveAutoIndex(0);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-900 border border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Autoplay Slideshow Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAutoCycling(!isAutoCycling)}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition ${
                isAutoCycling
                  ? 'bg-amber-400 text-slate-950'
                  : 'bg-slate-900 border border-amber-500/40 text-amber-300 hover:bg-amber-500/10'
              }`}
            >
              {isAutoCycling ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isAutoCycling ? 'Pause Auto Slideshow' : 'Auto-Play Slideshow'}</span>
            </button>

            <button
              onClick={() => openLightbox(0)}
              className="px-4 py-2 rounded-xl text-xs font-bold gold-btn flex items-center gap-1.5 shadow"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Fullscreen Lightbox</span>
            </button>
          </div>
        </div>
      </section>

      {/* Photo Grid with Masonry Look */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => {
            const isFeaturedAuto = isAutoCycling && idx === activeAutoIndex;

            return (
              <div
                key={photo.id}
                onClick={() => openLightbox(idx)}
                className={`group relative h-72 rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 ${
                  isFeaturedAuto
                    ? 'ring-4 ring-amber-400 border-amber-400 scale-[1.02] shadow-2xl z-10'
                    : 'border-slate-800 hover:border-amber-500/50 hover:shadow-xl'
                }`}
              >
                <Image
                  src={photo.url}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[11px] font-bold uppercase">
                    {photo.category}
                  </span>
                </div>

                {/* Hover Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="p-3 rounded-full bg-slate-950/80 border border-amber-400 text-amber-300 shadow-xl">
                    <Eye className="w-5 h-5" />
                  </span>
                </div>

                {/* Title & Caption */}
                <div className="absolute bottom-3 left-3 right-3 space-y-1">
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition line-clamp-1">
                    {photo.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        photos={filteredPhotos}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  );
}

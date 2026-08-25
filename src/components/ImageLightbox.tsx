'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ZoomIn,
  ZoomOut,
  Sparkles,
  Download,
} from 'lucide-react';
import { GalleryPhoto } from '@/types';

interface ImageLightboxProps {
  photos: GalleryPhoto[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageLightbox({
  photos,
  initialIndex = 0,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const currentPhoto = photos[currentIndex] || photos[0];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Lightbox Autoplay slideshow loop
  useEffect(() => {
    if (!isOpen || !isPlaying) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [isOpen, isPlaying, handleNext]);

  // Prevent background body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between select-none animate-fadeIn"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 sm:px-8 border-b border-slate-800 bg-slate-950/80">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider">
            {currentPhoto.category}
          </span>
          <h3 className="text-sm sm:text-base font-semibold text-white truncate max-w-md">
            {currentPhoto.title}
          </h3>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition ${
              isPlaying
                ? 'bg-amber-500 text-slate-950 font-bold'
                : 'bg-slate-900 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20'
            }`}
            title="Auto-play slideshow"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span className="hidden sm:inline">{isPlaying ? 'Pause Auto' : 'Auto-Play'}</span>
          </button>

          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition"
            title={isZoomed ? 'Zoom Out' : 'Zoom In'}
          >
            {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
          </button>

          <span className="text-xs font-mono text-slate-400 px-2 hidden sm:inline">
            {currentIndex + 1} / {photos.length}
          </span>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-red-950 hover:border-red-500 transition"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Center Display */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden">
        {/* Left Nav Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-slate-900/80 border border-amber-500/30 text-white hover:bg-amber-500 hover:text-slate-950 transition shadow-2xl backdrop-blur-md"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The Image */}
        <div
          className={`relative max-w-6xl w-full h-[60vh] sm:h-[68vh] transition-transform duration-300 ${
            isZoomed ? 'scale-125 cursor-grab' : 'scale-100'
          }`}
        >
          <Image
            src={currentPhoto.url}
            alt={currentPhoto.title}
            fill
            sizes="90vw"
            className="object-contain rounded-lg"
            priority
          />
        </div>

        {/* Right Nav Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-slate-900/80 border border-amber-500/30 text-white hover:bg-amber-500 hover:text-slate-950 transition shadow-2xl backdrop-blur-md"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Thumbnail Strip & Caption */}
      <div className="p-4 bg-slate-950/90 border-t border-slate-800 space-y-3">
        {currentPhoto.caption && (
          <p className="text-center text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto italic">
            &ldquo;{currentPhoto.caption}&rdquo;
          </p>
        )}

        {/* Thumbnail Filmstrip */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-1 max-w-5xl mx-auto scrollbar-thin">
          {photos.map((photo, idx) => (
            <button
              key={photo.id}
              onClick={() => {
                setCurrentIndex(idx);
                setIsZoomed(false);
              }}
              className={`relative shrink-0 w-14 h-10 sm:w-16 sm:h-12 rounded-md overflow-hidden transition-all ${
                idx === currentIndex
                  ? 'ring-2 ring-amber-400 scale-105 opacity-100'
                  : 'opacity-40 hover:opacity-80'
              }`}
            >
              <Image
                src={photo.url}
                alt={photo.title}
                fill
                sizes="64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

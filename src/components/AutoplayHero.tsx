'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  CalendarCheck,
  Compass,
  Wifi,
  UtensilsCrossed,
  Presentation,
} from 'lucide-react';
import LodgeImage from '@/components/LodgeImage';
import { HERO_SLIDES, HOTEL_INFO } from '@/data/hotelData';

interface AutoplayHeroProps {
  onBook: () => void;
}

const now = () => Date.now();
const SLIDE_DURATION = 6000;

export default function AutoplayHero({ onBook }: AutoplayHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number>(0);

  const currentSlide = HERO_SLIDES[currentIndex];

  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    startTimeRef.current = now();
    timerRef.current = setInterval(() => {
      const elapsed = now() - startTimeRef.current;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (elapsed >= SLIDE_DURATION) {
        setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
        startTimeRef.current = now();
        setProgress(0);
      }
    }, 50);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPlaying]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
    startTimeRef.current = now();
  };
  const prevSlide = () => goToSlide((currentIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const nextSlide = () => goToSlide((currentIndex + 1) % HERO_SLIDES.length);

  const scrollToExplore = () => {
    document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full h-[92svh] min-h-[560px] max-h-[940px] overflow-hidden bg-white select-none">
      {/* Background images */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <LodgeImage
              src={slide.image}
              alt={slide.title}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/45 to-white/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/35 to-transparent" />
          </div>
        );
      })}

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-28 sm:pb-24">
        <div key={currentSlide.id} className="max-w-3xl space-y-4 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-50/80 border border-red-400/40 backdrop-blur-md text-red-300 text-[11px] sm:text-xs font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse-glow" />
            <span>{currentSlide.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif-luxury text-white tracking-tight leading-[1.08]">
            {currentSlide.title}
          </h1>

          <p className="text-sm sm:text-lg text-gray-800 font-light max-w-2xl leading-relaxed">
            {currentSlide.subtitle}
          </p>

          <div className="pt-1 flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-gray-800">
            <span className="flex items-center gap-1.5 bg-gray-50/70 px-3 py-1.5 rounded-lg border border-gray-300/60">
              <Wifi className="w-3.5 h-3.5 text-red-400" /> Free Wi-Fi
            </span>
            <span className="flex items-center gap-1.5 bg-gray-50/70 px-3 py-1.5 rounded-lg border border-gray-300/60">
              <UtensilsCrossed className="w-3.5 h-3.5 text-red-400" /> Restaurant & Room Service
            </span>
            <span className="flex items-center gap-1.5 bg-gray-50/70 px-3 py-1.5 rounded-lg border border-gray-300/60">
              <Presentation className="w-3.5 h-3.5 text-red-400" /> 300-Seat Conference Hall
            </span>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              onClick={onBook}
              className="px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base gold-btn flex items-center justify-center gap-2 shadow-xl shadow-red-500/20"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>Book a Room</span>
            </button>
            <button
              onClick={scrollToExplore}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base gold-btn-outline backdrop-blur-md bg-gray-50/40 flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Lodge</span>
            </button>
          </div>

          <p className="text-[11px] sm:text-xs text-gray-600">
            {HOTEL_INFO.location} • {HOTEL_INFO.reception} • Check-in {HOTEL_INFO.checkIn}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-5 left-0 right-0 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                className="relative flex-1 sm:flex-none sm:w-16 md:w-20 h-1.5 rounded-full bg-gray-300/80 overflow-hidden cursor-pointer transition hover:bg-gray-500"
                aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
              >
                {isActive && (
                  <div
                    className="h-full bg-red-400 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-red-500/30 rounded-full px-2.5 py-1.5 shadow-lg">
          <button
            onClick={prevSlide}
            className="p-1.5 rounded-full hover:bg-red-500/20 text-gray-700 hover:text-red-300 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-full hover:bg-red-500/20 text-red-400 hover:text-red-300 transition"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <span className="text-xs font-mono text-gray-600 px-1">
            0{currentIndex + 1} / 0{HERO_SLIDES.length}
          </span>
          <button
            onClick={nextSlide}
            className="p-1.5 rounded-full hover:bg-red-500/20 text-gray-700 hover:text-red-300 transition"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

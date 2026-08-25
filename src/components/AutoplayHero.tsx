'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Sparkles,
  Building2,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import { HERO_SLIDES, HOTEL_INFO } from '@/data/hotelData';

export default function AutoplayHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const slideDuration = 6000; // 6 seconds per slide
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const currentSlide = HERO_SLIDES[currentIndex];

  // Autoplay loop with smooth progress tracking
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    startTimeRef.current = Date.now();
    const intervalTime = 50; // Update progress every 50ms

    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const pct = Math.min((elapsed / slideDuration) * 100, 100);
      setProgress(pct);

      if (elapsed >= slideDuration) {
        setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
        startTimeRef.current = Date.now();
        setProgress(0);
      }
    }, intervalTime);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPlaying]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-[88vh] min-h-[600px] max-h-[920px] overflow-hidden bg-slate-950 select-none">
      {/* Background Images with crossfade */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
            }`}
            style={{ transition: 'opacity 1s ease-in-out, transform 8s linear' }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Gradient Overlays for Luxury Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
          </div>
        );
      })}

      {/* Hero Content Overlay */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-24 sm:pb-28">
        <div className="max-w-3xl space-y-4">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/40 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>{currentSlide.badge}</span>
            <span className="text-amber-500">•</span>
            <span className="text-slate-300 font-normal">By {HOTEL_INFO.owner}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif-luxury text-white tracking-tight leading-tight">
            {currentSlide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
            {currentSlide.subtitle}
          </p>

          {/* Key Quick Tags */}
          <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-200">
            <span className="flex items-center gap-1.5 bg-slate-900/70 px-3 py-1 rounded-md border border-slate-700/60">
              <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
              240 Keys & 28 Oceanfront Villas
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/70 px-3 py-1 rounded-md border border-slate-700/60">
              <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
              $16.4M Audited Annual EBITDA
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900/70 px-3 py-1 rounded-md border border-slate-700/60">
              <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
              100% Freehold Title
            </span>
          </div>

          {/* CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              href={currentSlide.ctaPrimary.href}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base gold-btn flex items-center gap-2 shadow-xl shadow-amber-500/20"
            >
              <span>{currentSlide.ctaPrimary.label}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={currentSlide.ctaSecondary.href}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base gold-btn-outline backdrop-blur-md bg-slate-900/40"
            >
              <span>{currentSlide.ctaSecondary.label}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Autoplay Controls & Slide Selector Strip */}
      <div className="absolute bottom-6 left-0 right-0 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Slide Indicators with Active Progress Bar */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                className="relative flex-1 sm:w-20 md:w-24 h-1.5 rounded-full bg-slate-800/80 overflow-hidden cursor-pointer transition hover:bg-slate-700"
                aria-label={`Go to slide ${idx + 1}`}
              >
                {isActive && (
                  <div
                    className="h-full bg-amber-400 transition-all duration-75 ease-linear rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}
                {!isActive && idx < currentIndex && (
                  <div className="h-full w-full bg-amber-600/60 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Play / Pause & Prev / Next Arrows */}
        <div className="flex items-center gap-3 bg-slate-950/80 backdrop-blur-md border border-amber-500/30 rounded-full px-3 py-1.5 shadow-lg">
          <button
            onClick={prevSlide}
            className="p-1.5 rounded-full hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 transition"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={togglePlay}
            className="p-1.5 rounded-full hover:bg-amber-500/20 text-amber-400 hover:text-amber-300 transition"
            aria-label={isPlaying ? 'Pause Auto-playing Slideshow' : 'Resume Auto-playing Slideshow'}
            title={isPlaying ? 'Pause auto-play' : 'Play auto-play'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <span className="text-xs font-mono text-slate-400 px-1">
            0{currentIndex + 1} / 0{HERO_SLIDES.length}
          </span>

          <button
            onClick={nextSlide}
            className="p-1.5 rounded-full hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 transition"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

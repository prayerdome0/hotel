'use client';

import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface AutoplayCarouselProps {
  items: ReactNode[];
  itemsPerView?: { mobile: number; tablet: number; desktop: number };
  interval?: number;
  autoPlay?: boolean;
  title?: string;
  subtitle?: string;
  badge?: string;
  actionButton?: ReactNode;
}

export default function AutoplayCarousel({
  items,
  itemsPerView = { mobile: 1, tablet: 2, desktop: 3 },
  interval = 4500,
  autoPlay = true,
  title,
  subtitle,
  badge,
  actionButton,
}: AutoplayCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsive items count
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(itemsPerView.mobile);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(itemsPerView.tablet);
      } else {
        setVisibleCount(itemsPerView.desktop);
      }
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, items.length - visibleCount);

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || isHovered || maxIndex <= 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, maxIndex, interval]);

  const prev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div
      className="w-full space-y-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header section if title provided */}
      {(title || subtitle || badge || actionButton) && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            {badge && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                {badge}
              </span>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury font-bold text-white">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {actionButton}

            {/* Controls */}
            <div className="flex items-center gap-2 bg-slate-900/90 border border-amber-500/30 rounded-lg p-1">
              <button
                onClick={prev}
                className="p-2 rounded-md hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 transition"
                aria-label="Previous items"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-md hover:bg-amber-500/20 text-amber-400 hover:text-amber-300 transition"
                aria-label={isPlaying ? 'Pause autoplay' : 'Resume autoplay'}
                title={isPlaying ? 'Pause autoplay' : 'Play autoplay'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={next}
                className="p-2 rounded-md hover:bg-amber-500/20 text-slate-300 hover:text-amber-300 transition"
                aria-label="Next items"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Carousel Track Wrapper */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="shrink-0 px-2.5"
              style={{ width: `${100 / visibleCount}%` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Indicator Dots */}
      {maxIndex > 0 && (
        <div className="flex items-center justify-center gap-2 pt-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-8 bg-amber-400'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide page ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

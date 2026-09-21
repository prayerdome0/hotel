import React from 'react';
import LodgeImage from '@/components/LodgeImage';

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHero({ badge, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-red-950/30 via-white to-white border-b border-red-500/20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <LodgeImage src={image} alt={title} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-white" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/15 border border-red-400/30 text-red-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
          {badge}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-bold text-white leading-tight max-w-3xl">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-gray-700 max-w-3xl font-light leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}

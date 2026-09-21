'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, CalendarCheck, ChevronRight, MapPin, Mail } from 'lucide-react';
import { HOTEL_INFO, NAV_LINKS } from '@/data/hotelData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Always close the mobile menu on route change — it can never get stuck open
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setMobileMenuOpen(false);
  }

  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-md border-b border-amber-500/20 shadow-2xl py-3'
            : 'bg-slate-950/70 backdrop-blur-sm border-b border-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-3 shrink-0" onClick={closeMenu}>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-[1px] shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center">
                <span className="font-serif-luxury font-bold text-lg sm:text-xl text-amber-300">ZP</span>
              </div>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-amber-300 transition font-serif-luxury">
                Zambezi Palms
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 tracking-widest uppercase">
                Hotel & Conference Centre
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-2.5 xl:px-3 py-2 text-[13px] xl:text-sm font-medium rounded-md transition ${
                    isActive
                      ? 'text-amber-300 bg-amber-500/10 border border-amber-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <a
              href={HOTEL_INFO.phoneHref}
              className="px-3 py-2 rounded-lg text-xs font-semibold gold-btn-outline hidden xl:flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
            <Link
              href="/rooms"
              className="px-4 py-2 rounded-lg text-xs font-bold gold-btn flex items-center gap-1.5 shadow-md"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Book a Room</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            className="lg:hidden p-2.5 rounded-lg bg-slate-900 border border-amber-500/30 text-slate-100 hover:text-amber-300 transition shrink-0"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu: backdrop + slide-in drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop — tap outside to close */}
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" onClick={closeMenu} />

        {/* Drawer */}
        <div
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute top-0 right-0 h-full w-[86%] max-w-sm bg-slate-950 border-l border-amber-500/25 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center text-slate-950 font-serif-luxury font-bold">
                ZP
              </div>
              <div className="leading-tight">
                <p className="text-sm font-bold text-white font-serif-luxury">Zambezi Palms</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">Hotel & Conference</p>
              </div>
            </div>
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/40'
                      : 'text-slate-200 hover:bg-slate-900 border border-transparent'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </Link>
              );
            })}
          </nav>

          {/* Drawer footer */}
          <div className="p-4 border-t border-slate-800 space-y-3 bg-slate-950">
            <Link
              href="/rooms"
              onClick={closeMenu}
              className="w-full py-3 rounded-xl text-sm font-bold gold-btn flex items-center justify-center gap-2"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book a Room</span>
            </Link>
            <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-400">
              <a href={HOTEL_INFO.phoneHref} className="flex items-center gap-2 hover:text-amber-300">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{HOTEL_INFO.phone}</span>
              </a>
              <a href={`mailto:${HOTEL_INFO.email}`} className="flex items-center gap-2 hover:text-amber-300">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{HOTEL_INFO.email}</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{HOTEL_INFO.location}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

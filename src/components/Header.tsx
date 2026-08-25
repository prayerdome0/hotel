'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Building2,
  ChevronRight,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import { HOTEL_INFO } from '@/data/hotelData';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'For Sale', href: '/for-sale', badge: 'PRIME ASSET' },
  { name: 'Suites & Villas', href: '/rooms' },
  { name: 'Amenities & Spa', href: '/amenities' },
  { name: 'Dining', href: '/dining' },
  { name: 'Events & Galas', href: '/events' },
  { name: 'Gallery & Media', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-amber-500/20 shadow-2xl py-3'
          : 'bg-gradient-to-b from-slate-950/90 to-transparent backdrop-blur-sm py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-[1px] shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition">
            <div className="w-full h-full bg-slate-950 rounded-lg flex items-center justify-center">
              <span className="font-serif-luxury font-bold text-lg sm:text-xl tracking-wider text-amber-300 group-hover:text-amber-200">
                S
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-widest text-slate-100 group-hover:text-amber-300 transition font-serif-luxury">
                SWDL
              </span>
              <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold tracking-wider uppercase">
                FOR SALE
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] text-slate-400 tracking-wider uppercase font-light">
              By {HOTEL_INFO.owner}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            const isForSale = link.href === '/for-sale';

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-xs xl:text-sm font-medium tracking-wide rounded-md transition duration-200 ${
                  isActive
                    ? 'text-amber-300 bg-amber-500/10 border border-amber-500/30'
                    : isForSale
                    ? 'text-amber-400 hover:text-amber-200 hover:bg-amber-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase tracking-tighter">
                      {link.badge}
                    </span>
                  )}
                </div>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-amber-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/for-sale#deal-room"
            className="px-3.5 py-2 rounded-lg text-xs font-semibold gold-btn flex items-center gap-1.5 shadow-md"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Deal Room</span>
          </Link>

          <Link
            href="/contact"
            className="px-3.5 py-2 rounded-lg text-xs font-semibold gold-btn-outline flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Inquire</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-amber-500/30 text-slate-200 hover:text-amber-300 transition"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-Out Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-slate-950/98 backdrop-blur-xl border-t border-amber-500/20 z-50 overflow-y-auto p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-950/40 to-slate-900 border border-amber-500/30 mb-4">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Commercial Real Estate Offering
              </div>
              <p className="text-xs text-slate-300">
                SWDL 5-Star Resort is for sale by Seedwel Investment Limited.
              </p>
            </div>

            <div className="space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition ${
                      isActive
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'text-slate-200 hover:bg-slate-900 hover:text-amber-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Footer & Direct Contact Info */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/for-sale"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg text-xs font-bold gold-btn"
              >
                Sale Prospectus
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-lg text-xs font-bold gold-btn-outline"
              >
                Inquire (xxxxx)
              </Link>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-lg text-xs text-slate-400 space-y-1.5 border border-slate-800">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Email: <strong className="text-slate-200 font-mono">xxxxx</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Contact: <strong className="text-slate-200 font-mono">xxxxx</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Address: <strong className="text-slate-200">abc</strong></span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 text-center">
              {HOTEL_INFO.copyright}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

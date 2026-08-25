'use client';

import React, { useState } from 'react';
import {
  X,
  Calendar,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  Plane,
  Building2,
  Ship,
  Mail,
  Phone,
} from 'lucide-react';
import { HOTEL_INFO, ROOMS_SUITES } from '@/data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSuiteId?: string;
  isPrivateInspection?: boolean;
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedSuiteId,
  isPrivateInspection = false,
}: BookingModalProps) {
  const [suiteId, setSuiteId] = useState(selectedSuiteId || ROOMS_SUITES[0].id);
  const [inquiryType, setInquiryType] = useState<'stay' | 'inspection'>(
    isPrivateInspection ? 'inspection' : 'stay'
  );
  const [arrivalTransport, setArrivalTransport] = useState<'Commercial Flight' | 'Private Jet / Helipad' | 'Superyacht Berth'>('Commercial Flight');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    specialRequests: '',
  });

  if (!isOpen) return null;

  const currentSuite = ROOMS_SUITES.find((s) => s.id === suiteId) || ROOMS_SUITES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Inquiry & Booking Modal"
      className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-xl bg-slate-900 border border-amber-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-200 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif-luxury font-bold text-white">
              Inquiry Dispatched Successfully
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Thank you, <strong className="text-white">{formData.name}</strong>. Our executive concierge and Seedwel Investment advisory team will contact you within 4 hours.
            </p>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-left text-slate-400 space-y-1">
              <p>Direct Concierge Line: <strong className="text-amber-300 font-mono">{HOTEL_INFO.contact.phone}</strong></p>
              <p>Advisory Email: <strong className="text-amber-300 font-mono">{HOTEL_INFO.contact.email}</strong></p>
              <p>Location: <strong className="text-slate-200">{HOTEL_INFO.contact.address}</strong></p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold gold-btn"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 space-y-1">
              <span className="text-[10px] px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold uppercase tracking-wider">
                SWDL Direct Concierge
              </span>
              <h2 className="text-xl sm:text-2xl font-serif-luxury font-bold text-white">
                {inquiryType === 'inspection'
                  ? 'Private Investor Property Inspection'
                  : 'Reserve Luxury Suite Accommodation'}
              </h2>
              <p className="text-xs text-slate-400">
                Managed by {HOTEL_INFO.owner}
              </p>
            </div>

            {/* Inquiry Mode Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-950 rounded-xl border border-slate-800 mb-5">
              <button
                type="button"
                onClick={() => setInquiryType('stay')}
                className={`py-2 text-xs font-semibold rounded-lg transition ${
                  inquiryType === 'stay'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Guest Suite Reservation
              </button>
              <button
                type="button"
                onClick={() => setInquiryType('inspection')}
                className={`py-2 text-xs font-semibold rounded-lg transition ${
                  inquiryType === 'inspection'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                VIP Investor Tour (For Sale)
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {inquiryType === 'stay' ? (
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Select Suite / Villa
                  </label>
                  <select
                    value={suiteId}
                    onChange={(e) => setSuiteId(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    {ROOMS_SUITES.map((room) => (
                      <option key={room.id} value={room.id}>
                        {room.name} — ${room.pricePerNight.toLocaleString()}/night
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200">
                  <p className="font-semibold mb-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    Asset Inspection Protocol:
                  </p>
                  <p className="text-[11px] text-slate-300">
                    Complimentary VIP helicopter transfer from nearby international hub or superyacht berth included for qualified buyers during diligence.
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {inquiryType === 'stay' ? 'Departure Date' : 'Party Size'}
                  </label>
                  {inquiryType === 'stay' ? (
                    <input
                      type="date"
                      required
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  ) : (
                    <input
                      type="number"
                      min="1"
                      max="12"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 1 })}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Direct Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+xxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Arrival Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Commercial Flight', 'Private Jet / Helipad', 'Superyacht Berth'] as const).map((trans) => (
                    <button
                      type="button"
                      key={trans}
                      onClick={() => setArrivalTransport(trans)}
                      className={`px-2 py-2 rounded-lg text-[11px] font-medium transition border text-center ${
                        arrivalTransport === trans
                          ? 'border-amber-400 bg-amber-500/20 text-amber-300'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                      }`}
                    >
                      {trans === 'Private Jet / Helipad' && <Plane className="w-3.5 h-3.5 mx-auto mb-1 text-amber-400" />}
                      {trans === 'Superyacht Berth' && <Ship className="w-3.5 h-3.5 mx-auto mb-1 text-amber-400" />}
                      {trans === 'Commercial Flight' && <Users className="w-3.5 h-3.5 mx-auto mb-1 text-slate-400" />}
                      <span>{trans}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Specific Requests & Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Dietary requests, diligence documentation, meeting room requirements..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold gold-btn shadow-lg"
              >
                Submit VIP Inquiry to Seedwel Advisory
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  Calendar,
  Send,
  CheckCircle2,
  ShieldCheck,
  User,
  Clock,
  Briefcase,
} from 'lucide-react';
import { HOTEL_INFO } from '@/data/hotelData';

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState<'acquisition' | 'stay' | 'events' | 'general'>('acquisition');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    firm: '',
    email: '',
    phone: '',
    subject: 'SWDL Asset Acquisition Inquiry',
    date: '',
    budget: '$80M - $95M USD',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Direct Official Contact Info */}
      <div className="lg:col-span-5 space-y-6">
        <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-[10px] px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold uppercase tracking-wider">
              Seedwel Investment Limited
            </span>
            <h3 className="text-2xl font-serif-luxury font-bold text-white mt-2">
              SWDL Acquisition & Concierge Directorate
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Direct official contact details for institutional buyers, guest reservations, and private events.
            </p>
          </div>

          <div className="space-y-4 pt-2 border-t border-slate-800">
            {/* Brand / Legal */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Entity & Asset Name</span>
                <p className="text-sm font-bold text-white">{HOTEL_INFO.name} ({HOTEL_INFO.fullName})</p>
                <p className="text-xs text-amber-300">Owned by {HOTEL_INFO.owner}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Official Email</span>
                <p className="text-sm font-mono font-bold text-amber-300">
                  <a href={`mailto:${HOTEL_INFO.contact.email}`} className="hover:underline">
                    {HOTEL_INFO.contact.email}
                  </a>
                </p>
                <p className="text-xs text-slate-400">Response time: &lt; 4 Hours</p>
              </div>
            </div>

            {/* Contact / Phone */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Contact Telephone</span>
                <p className="text-sm font-mono font-bold text-amber-300">
                  <a href={`tel:${HOTEL_INFO.contact.phone}`} className="hover:underline">
                    {HOTEL_INFO.contact.phone}
                  </a>
                </p>
                <p className="text-xs text-slate-400">24/7 International Desk</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-slate-400 uppercase font-semibold">Official Physical Address</span>
                <p className="text-sm font-bold text-white">{HOTEL_INFO.contact.address}</p>
                <p className="text-xs text-slate-400">GPS Coordinates: {HOTEL_INFO.contact.coordinates}</p>
              </div>
            </div>
          </div>

          {/* Copyright Box */}
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-amber-500/20 text-xs text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>{HOTEL_INFO.copyright}</span>
          </div>
        </div>
      </div>

      {/* Right Column: Tabbed Interactive Form */}
      <div className="lg:col-span-7">
        <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
          {/* Form Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => {
                setActiveTab('acquisition');
                setFormData({ ...formData, subject: 'SWDL Asset Acquisition Inquiry' });
              }}
              className={`py-2 px-2 text-center text-xs font-semibold rounded-lg transition ${
                activeTab === 'acquisition'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Acquisition (Sale)
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('stay');
                setFormData({ ...formData, subject: 'Guest Suite Reservation' });
              }}
              className={`py-2 px-2 text-center text-xs font-semibold rounded-lg transition ${
                activeTab === 'stay'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Suites & Stay
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('events');
                setFormData({ ...formData, subject: 'Event & Gala Proposal RFP' });
              }}
              className={`py-2 px-2 text-center text-xs font-semibold rounded-lg transition ${
                activeTab === 'events'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Galas & Events
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab('general');
                setFormData({ ...formData, subject: 'General Concierge Inquiry' });
              }}
              className={`py-2 px-2 text-center text-xs font-semibold rounded-lg transition ${
                activeTab === 'general'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              General
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif-luxury font-bold text-white">
                Message Successfully Received
              </h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.name}</strong>. Your communication regarding <strong className="text-amber-300">{formData.subject}</strong> has been logged with <strong className="text-white">{HOTEL_INFO.owner}</strong>.
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 max-w-sm mx-auto">
                We will reply directly to <span className="text-amber-300 font-mono">{formData.email}</span> or contact you via telephone at <span className="text-amber-300 font-mono">{formData.phone || HOTEL_INFO.contact.phone}</span>.
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-lg text-xs font-semibold gold-btn"
              >
                Send Another Communication
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Rothschild"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    {activeTab === 'acquisition' ? 'Firm / Family Office *' : 'Company (Optional)'}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Hospitality Group"
                    value={formData.firm}
                    onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Direct Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Telephone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+xxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {activeTab === 'acquisition' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Capital Allocation / Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="$80M - $90M USD">$80,000,000 – $90,000,000 USD</option>
                      <option value="$90M - $100M USD">$90,000,000 – $100,000,000 USD</option>
                      <option value="Over $100M USD">Over $100,000,000 USD</option>
                      <option value="Unspecified">Unspecified Institutional Evaluation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Target Diligence Timeline
                    </label>
                    <select className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400">
                      <option>Immediate / Q1-Q2 2026</option>
                      <option>Q3-Q4 2026</option>
                      <option>Flexible Long-term Strategic</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Inquiry Details & Requirements *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Provide any specific inquiries regarding property acquisition, site inspection, private charter, or event parameters..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  Protected by Seedwel Investment Confidentiality
                </span>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold gold-btn flex items-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

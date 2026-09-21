'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, MessageCircle, BedDouble, Code2 } from 'lucide-react';
import { HOTEL_INFO, DEVELOPER_INFO, WEBSITE_SERVICES, HOTEL_INQUIRY_TYPES } from '@/data/hotelData';

type Tab = 'hotel' | 'website';

export default function ContactForm({ defaultTab = 'hotel' }: { defaultTab?: Tab }) {
  const [tab, setTab] = useState<Tab>(defaultTab);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: WEBSITE_SERVICES[0],
    inquiryType: HOTEL_INQUIRY_TYPES[0],
    message: '',
  });

  const set = (k: keyof typeof form, v: string) => setForm({ ...form, [k]: v });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ name: '', phone: '', email: '', service: WEBSITE_SERVICES[0], inquiryType: HOTEL_INQUIRY_TYPES[0], message: '' });
  };

  return (
    <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
      {/* Tabs */}
      <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-950 rounded-xl border border-slate-800">
        <button
          type="button"
          onClick={() => { setTab('hotel'); setSubmitted(false); }}
          className={`py-2.5 px-3 text-center text-xs sm:text-sm font-semibold rounded-lg transition flex items-center justify-center gap-2 ${
            tab === 'hotel' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-slate-400 hover:text-white'
          }`}
        >
          <BedDouble className="w-4 h-4" />
          <span>Hotel Inquiry</span>
        </button>
        <button
          type="button"
          id="website"
          onClick={() => { setTab('website'); setSubmitted(false); }}
          className={`py-2.5 px-3 text-center text-xs sm:text-sm font-semibold rounded-lg transition flex items-center justify-center gap-2 scroll-mt-32 ${
            tab === 'website' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' : 'text-slate-400 hover:text-white'
          }`}
        >
          <Code2 className="w-4 h-4" />
          <span>Website Inquiry</span>
        </button>
      </div>

      {submitted ? (
        <div className="text-center py-8 space-y-4 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-serif-luxury font-bold text-white">Inquiry Sent</h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Thank you, <strong className="text-white">{form.name}</strong>. Your{' '}
            {tab === 'hotel' ? 'hotel' : 'website'} inquiry has been received
            {tab === 'website' && (
              <>
                {' '}for a <strong className="text-amber-300">{form.service}</strong>
              </>
            )}
            . This is a demo form — no message was actually delivered.
          </p>
          {tab === 'website' && (
            <div className="max-w-md mx-auto space-y-2">
              <p className="text-xs text-slate-400">Prefer instant chat? Message the developer on WhatsApp:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {DEVELOPER_INFO.phones.map((p) => (
                  <a
                    key={p.display}
                    href={p.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-1.5 transition"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{p.display}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
          <button onClick={reset} className="px-6 py-2.5 rounded-lg text-xs font-bold gold-btn">
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Name *</label>
              <input
                type="text"
                required
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => set('name', e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+260 ..."
                value={form.phone}
                onChange={(e) => set('phone', e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Email *</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          {tab === 'hotel' ? (
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">What do you need? *</label>
              <select
                value={form.inquiryType}
                onChange={(e) => set('inquiryType', e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400"
              >
                {HOTEL_INQUIRY_TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          ) : (
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Service Required *</label>
              <select
                value={form.service}
                onChange={(e) => set('service', e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400"
              >
                {WEBSITE_SERVICES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Message *</label>
            <textarea
              required
              rows={4}
              placeholder={
                tab === 'hotel'
                  ? 'Tell us your dates, number of guests, event details...'
                  : 'Tell us about your hotel, lodge or business and the website you need...'
              }
              value={form.message}
              onChange={(e) => set('message', e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
            <button
              type="submit"
              className="flex-1 sm:flex-none px-8 py-3 rounded-xl text-sm font-bold gold-btn flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Send Inquiry</span>
            </button>
            {tab === 'hotel' ? (
              <a
                href={HOTEL_INFO.phoneHref}
                className="px-6 py-3 rounded-xl text-sm font-semibold gold-btn-outline flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {HOTEL_INFO.phone}</span>
              </a>
            ) : (
              <div className="flex gap-2">
                {DEVELOPER_INFO.phones.map((p) => (
                  <a
                    key={p.display}
                    href={p.tel}
                    className="flex-1 px-4 py-3 rounded-xl text-xs font-bold gold-btn-outline flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{p.display}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          <p className="text-[11px] text-slate-500">
            Demo form for showcase purposes — connect it to email or WhatsApp to receive real inquiries.
          </p>
        </form>
      )}
    </div>
  );
}

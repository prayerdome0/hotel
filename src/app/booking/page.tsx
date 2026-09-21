'use client';
import BookingWidget from '@/components/BookingWidget';
export default function BookingPage(){return <main className="max-w-4xl mx-auto px-4 py-16"><p className="text-red-700 uppercase tracking-[.25em] text-xs font-bold">SDL reservations</p><h1 className="text-5xl font-bold mt-3">Request a booking</h1><p className="text-gray-600 mt-4">Send your preferred dates and details. SDL will confirm availability directly.</p><div className="mt-10"><BookingWidget onBook={()=>{}} /></div></main>}

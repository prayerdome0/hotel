import PageHero from '@/components/PageHero';
import { HOTEL_INFO } from '@/data/hotelData';

export default function TermsPage() {
  return (
    <div className="space-y-12 pb-20">
      <PageHero
        badge="Legal"
        title="Terms of Use"
        subtitle="The basic terms for using this website and its booking inquiry features."
        image="/images/reception.jpg"
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm text-gray-700 leading-relaxed">
        <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white">1. Sample rates</h2>
          <p>
            All room rates, hall hire rates, package prices and menu prices shown on this website are sample rates in
            Zambian Kwacha (ZMW) for demonstration purposes. Confirmed prices are agreed directly with the hotel when
            booking.
          </p>
          <h2 className="text-lg font-bold text-white">2. Demo booking</h2>
          <p>
            The booking interface on this showcase website is a demonstration. Submitting a request does not create a
            confirmed reservation and no payment is processed. A live hotel website would connect this to a booking
            system, email or WhatsApp line.
          </p>
          <h2 className="text-lg font-bold text-white">3. House information</h2>
          <p>
            Check-in is from {HOTEL_INFO.checkIn} and check-out is by {HOTEL_INFO.checkOut}. Reception is open 24
            hours. Event setup times and catering arrangements are agreed per booking.
          </p>
          <h2 className="text-lg font-bold text-white">4. Contact</h2>
          <p>
            For questions about these terms, contact us at {HOTEL_INFO.email} or {HOTEL_INFO.phone}.
          </p>
        </div>
      </section>
    </div>
  );
}

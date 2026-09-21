import PageHero from '@/components/PageHero';
import { HOTEL_INFO } from '@/data/hotelData';

export default function PrivacyPage() {
  return (
    <div className="space-y-12 pb-20">
      <PageHero
        badge="Legal"
        title="Privacy Policy"
        subtitle="How we handle the personal information you share with us through this website."
        image="/images/reception.jpg"
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm text-gray-700 leading-relaxed">
        <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white">1. Information we collect</h2>
          <p>
            When you use our booking or inquiry forms, we collect the details you provide — such as your name, phone
            number, email address and message — so we can respond to your request.
          </p>
          <h2 className="text-lg font-bold text-white">2. How we use it</h2>
          <p>
            Your details are used only to handle your inquiry or booking request, for example to confirm availability
            or prepare a quotation. We do not sell your personal information to third parties.
          </p>
          <h2 className="text-lg font-bold text-white">3. Demo website notice</h2>
          <p>
            This is a showcase demonstration website. Forms on this site do not currently send data anywhere — connect
            them to an email service or booking system before using them with real guest information.
          </p>
          <h2 className="text-lg font-bold text-white">4. Contact</h2>
          <p>
            For privacy questions, contact us at {HOTEL_INFO.email} or {HOTEL_INFO.phone}.
          </p>
        </div>
      </section>
    </div>
  );
}

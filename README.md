# Zambezi Palms Hotel & Conference Centre — Showcase Website

A complete, modern hotel website built with **Next.js 16 + Tailwind CSS**, designed as a
**showcase product** for selling hotel website designs to hospitality clients in Zambia.

## What's inside

- **Home** — 6-slide autoplay hero (Book a Room / Explore Hotel), live booking widget,
  rooms, conference, restaurant, dining hall, lobby, gardens, amenities, gallery strip,
  sample testimonials, inquiry form and developer CTA
- **Rooms** — 5 room categories with sample ZMW rates, filter, photo galleries and a
  room-detail modal (bed type, occupancy, size, amenities, price, booking button)
- **Conference & Events** — 300-seat main hall, boardroom, training room, wedding/events
  hall with capacities, equipment and half-day / full-day / evening sample rates + packages
- **Restaurant** — 7-category menu (breakfast, mains, local, international, snacks,
  desserts, beverages) with sample prices in Kwacha, mobile-friendly tabs
- **Dining** — banquet & dining hall for weddings, dinners and celebrations
- **Amenities** — 12 amenities with icons, plus reception/lobby and outdoor sections
- **Gallery** — filterable photo gallery with fullscreen lightbox viewer
- **About / Contact** — hotel story, contact details and a dual hotel/website inquiry form
- **Developer CTA** — "Looking for a Hotel Website Like This?" with clickable
  `tel:` and WhatsApp contact buttons

All rates are clearly labelled **sample rates** and the booking interface is a demo —
no real reservations are made.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve production build
```

## Customising for a client

- Hotel brand, rooms, halls, menu and rates: `src/data/hotelData.ts`
- Gallery photos: `src/data/galleryData.ts`
- Developer phone numbers: `DEVELOPER_INFO` in `src/data/hotelData.ts`
- Photos: AI-generated hotel images live in `public/images/`

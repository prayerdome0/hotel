export interface RoomSuite {
  id: string;
  name: string;
  tagline: string;
  category: 'Penthouse' | 'Villa' | 'Sky Suite' | 'Deluxe' | 'Presidential';
  sqft: number;
  sqm: number;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  pricePerNight: number;
  view: string;
  heroImage: string;
  gallery: string[];
  features: string[];
  description: string;
  floorPlanUrl?: string;
  annualRevenueContribution?: string;
}

export interface Amenity {
  id: string;
  title: string;
  subtitle: string;
  category: 'Wellness & Spa' | 'Recreation' | 'Oceanfront' | 'VIP Transport' | 'Services';
  image: string;
  description: string;
  highlights: string[];
  hours?: string;
  location?: string;
}

export interface DiningVenue {
  id: string;
  name: string;
  concept: string;
  cuisine: string;
  chef: string;
  dressCode: string;
  heroImage: string;
  gallery: string[];
  description: string;
  signatureDishes: { name: string; desc: string; price: string }[];
  hours: string;
  seatingCapacity: number;
}

export interface EventSpace {
  id: string;
  name: string;
  type: 'Ballroom' | 'Boardroom' | 'Outdoor Terrace' | 'Beach Pavilion';
  capacity: { banquet: number; reception: number; theater: number; boardroom: number };
  sqft: number;
  image: string;
  description: string;
  amenities: string[];
}

export interface InvestmentMetric {
  label: string;
  value: string;
  subtext: string;
  change?: string;
}

export interface FinancialYear {
  year: string;
  revenue: string;
  occupancy: string;
  adr: string;
  revpar: string;
  ebitda: string;
  margin: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  rating: number;
  avatar: string;
  publication?: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  category: 'Suites' | 'Dining' | 'Wellness' | 'Grounds' | 'Aerial' | 'Events';
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  caption: string;
}

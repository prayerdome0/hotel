export interface Room {
  id: string;
  name: string;
  tagline: string;
  category: string;
  sizeSqm: number;
  maxGuests: number;
  bedType: string;
  bedrooms: number;
  bathrooms: number;
  pricePerNight: number; // ZMW sample rate
  view: string;
  heroImage: string;
  gallery: string[];
  features: string[];
  amenities: string[];
  description: string;
}

export interface ConferenceSpace {
  id: string;
  name: string;
  type: string;
  sizeSqm: number;
  capacity: {
    theatre: number;
    classroom: number;
    banquet: number;
    boardroom: number;
    cocktail: number;
  };
  image: string;
  description: string;
  equipment: string[];
  rates: { label: string; price: number }[]; // ZMW sample rates
}

export interface EventPackage {
  id: string;
  name: string;
  desc: string;
  price: string;
  unit: string;
}

export interface MenuItem {
  name: string;
  desc: string;
  price: number; // ZMW sample price
  tag?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  note?: string;
  items: MenuItem[];
}

export interface Amenity {
  id: string;
  title: string;
  desc: string;
  icon: string; // key mapped to a Lucide icon in AmenityIcon
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  category: 'Exterior' | 'Reception' | 'Rooms' | 'Conference' | 'Dining' | 'Food' | 'Outdoor' | 'Events';
  caption: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context: string;
  rating: number;
}

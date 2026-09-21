import { GalleryPhoto } from '@/types';

const u = (id: string) => `https://images.unsplash.com/photo-${id}?q=80&w=1600&auto=format&fit=crop`;

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    url: '/images/exterior-day.jpg',
    title: 'Lodge Exterior & Entrance',
    category: 'Exterior',
    caption: 'The front of SDL Lodge with its covered entrance and landscaped driveway.',
  },
  {
    id: 'g2',
    url: u('1566073771259-6a8506099945'),
    title: 'Lodge at Dusk',
    category: 'Exterior',
    caption: 'The hotel glowing in the evening — well-lit entrance and secure surroundings.',
  },
  {
    id: 'g3',
    url: '/images/reception.jpg',
    title: 'Reception & Lobby',
    category: 'Reception',
    caption: 'Our welcoming reception desk and comfortable lobby waiting area.',
  },
  {
    id: 'g4',
    url: '/images/standard-room.jpg',
    title: 'Standard Room',
    category: 'Rooms',
    caption: 'A neat, comfortable standard room with queen bed and work desk.',
  },
  {
    id: 'g5',
    url: '/images/deluxe-room.jpg',
    title: 'Deluxe Room',
    category: 'Rooms',
    caption: 'A bright deluxe room with king bed and modern finishes.',
  },
  {
    id: 'g6',
    url: '/images/executive-room.jpg',
    title: 'Executive Room',
    category: 'Rooms',
    caption: 'A premium executive room with seating area and work station.',
  },
  {
    id: 'g7',
    url: '/images/family-room.jpg',
    title: 'Family Room',
    category: 'Rooms',
    caption: 'A spacious family room with beds and seating for everyone.',
  },
  {
    id: 'g8',
    url: '/images/suite.jpg',
    title: 'Presidential Suite Lounge',
    category: 'Rooms',
    caption: 'The elegant lounge and dining area of our presidential suite.',
  },
  {
    id: 'g9',
    url: u('1584622650111-993a426fbf0a'),
    title: 'Modern Bathroom',
    category: 'Rooms',
    caption: 'Clean, modern bathrooms with hot showers in every room.',
  },
  {
    id: 'g10',
    url: '/images/conference-hall.jpg',
    title: 'Main Conference Hall',
    category: 'Conference',
    caption: 'Our 300-seat main hall with stage, screen and sound system.',
  },
  {
    id: 'g11',
    url: u('1431540015161-0bf868a2d407'),
    title: 'Executive Boardroom',
    category: 'Conference',
    caption: 'A professional boardroom for meetings and strategy sessions.',
  },
  {
    id: 'g12',
    url: u('1524178232363-1fb2b075b655'),
    title: 'Training Room Setup',
    category: 'Conference',
    caption: 'Classroom-style seating for workshops and training.',
  },
  {
    id: 'g13',
    url: u('1519167758481-83f550bb49b3'),
    title: 'Wedding & Events Hall',
    category: 'Events',
    caption: 'An elegant hall for weddings, dinners and celebrations.',
  },
  {
    id: 'g14',
    url: '/images/restaurant.jpg',
    title: 'The Palm Terrace Restaurant',
    category: 'Dining',
    caption: 'Our restaurant serving breakfast, lunch and dinner daily.',
  },
  {
    id: 'g15',
    url: u('1519225421980-715cb0215aed'),
    title: 'Banquet Dining Hall',
    category: 'Dining',
    caption: 'The banquet hall set for a wedding reception dinner.',
  },
  {
    id: 'g16',
    url: u('1504674900247-0877df9cc836'),
    title: 'Fresh From Our Kitchen',
    category: 'Food',
    caption: 'A sample of the fresh meals served at our restaurant.',
  },
  {
    id: 'g17',
    url: u('1414235077428-338989a2e8c0'),
    title: 'Dinner Service',
    category: 'Food',
    caption: 'Carefully plated dishes for dinner and special occasions.',
  },
  {
    id: 'g18',
    url: '/images/garden.jpg',
    title: 'Gardens & Outdoor Seating',
    category: 'Outdoor',
    caption: 'Relax in our landscaped gardens or host an outdoor function.',
  },
];

export const GALLERY_CATEGORIES = ['All', 'Exterior', 'Reception', 'Rooms', 'Conference', 'Events', 'Dining', 'Food', 'Outdoor'];

import { Room, Amenity, ConferenceSpace, EventPackage, MenuCategory, Testimonial } from '@/types';

const u = (id: string) => `https://images.unsplash.com/photo-${id}?q=80&w=1600&auto=format&fit=crop`;

// ---------------------------------------------------------------------------
// HOTEL BRAND
// ---------------------------------------------------------------------------

export const HOTEL_INFO = {
  name: 'Zambezi Palms',
  fullName: 'Zambezi Palms Hotel & Conference Centre',
  tagline: 'Comfortable stays, memorable events — in the heart of Lusaka',
  location: 'Lusaka, Zambia',
  address: 'Plot 1234, Independence Avenue, Lusaka, Zambia',
  phone: '+260 211 234 567',
  phoneHref: 'tel:+260211234567',
  mobile: '+260 977 123 456',
  mobileHref: 'tel:+260977123456',
  email: 'stay@zambezipalms.com',
  checkIn: '14:00',
  checkOut: '11:00',
  reception: '24-hour front desk',
};

export const DEVELOPER_INFO = {
  heading: 'Looking for a Hotel Website Like This?',
  text: 'Get a modern, professional website designed for your hotel, lodge, guest house, conference centre or hospitality business.',
  buttonLabel: 'Contact the Developer',
  phones: [
    {
      display: '+260 973 283 42',
      tel: 'tel:+26097328342',
      whatsapp: 'https://wa.me/26097328342?text=Hello%2C%20I%20saw%20your%20hotel%20website%20showcase%20and%20I%27d%20like%20a%20website%20for%20my%20business.',
    },
    {
      display: '+260 930 283 42',
      tel: 'tel:+26093028342',
      whatsapp: 'https://wa.me/26093028342?text=Hello%2C%20I%20saw%20your%20hotel%20website%20showcase%20and%20I%27d%20like%20a%20website%20for%20my%20business.',
    },
  ],
};

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Rooms', href: '/rooms' },
  { name: 'Conference & Events', href: '/events' },
  { name: 'Restaurant', href: '/restaurant' },
  { name: 'Dining', href: '/dining' },
  { name: 'Amenities', href: '/amenities' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const WEBSITE_SERVICES = [
  'Hotel Website',
  'Lodge Website',
  'Guest House Website',
  'Conference Website',
  'Restaurant Website',
  'Hotel Booking Website',
  'Custom Website',
];

export const HOTEL_INQUIRY_TYPES = [
  'Room Reservation',
  'Conference / Meeting Booking',
  'Wedding / Private Event',
  'Restaurant Table Booking',
  'General Inquiry',
];

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------

export const HERO_SLIDES = [
  {
    id: 1,
    image: '/images/exterior-day.jpg',
    badge: 'WELCOME TO ZAMBEZI PALMS',
    title: 'Zambezi Palms Hotel & Conference Centre',
    subtitle: 'A premium modern hotel in Lusaka offering comfortable rooms, conference facilities, a restaurant and beautiful event spaces.',
  },
  {
    id: 2,
    image: '/images/reception.jpg',
    badge: 'WARM HOSPITALITY',
    title: 'Arrive to a Warm Welcome',
    subtitle: 'Our 24-hour reception and friendly front-desk team are ready to make your stay smooth from check-in to check-out.',
  },
  {
    id: 3,
    image: '/images/deluxe-room.jpg',
    badge: 'ROOMS & SUITES',
    title: 'Restful Rooms & Suites',
    subtitle: 'From comfortable standard rooms to spacious family rooms and an executive suite — all with Wi-Fi, TV and air conditioning.',
  },
  {
    id: 4,
    image: '/images/conference-hall.jpg',
    badge: 'CONFERENCES & EVENTS',
    title: 'Conferences, Weddings & Events',
    subtitle: 'A 300-seat main hall, boardroom, training rooms and a decorated events hall with sound, projector and catering.',
  },
  {
    id: 5,
    image: '/images/restaurant.jpg',
    badge: 'RESTAURANT & DINING',
    title: 'Local & International Dining',
    subtitle: 'Start with breakfast, enjoy Zambian favourites like nshima and village chicken, or order room service to your door.',
  },
  {
    id: 6,
    image: '/images/garden.jpg',
    badge: 'GARDEN & OUTDOORS',
    title: 'Peaceful Gardens & Outdoor Space',
    subtitle: 'Relax in our landscaped gardens, host an outdoor function, or enjoy secure parking right at the entrance.',
  },
];

// ---------------------------------------------------------------------------
// ROOMS (sample rates in ZMW)
// ---------------------------------------------------------------------------

const BATHROOM_IMG = u('1584622650111-993a426fbf0a');

export const ROOMS: Room[] = [
  {
    id: 'standard-room',
    name: 'Standard Room',
    tagline: 'Comfortable and affordable for business and leisure travellers',
    category: 'Standard',
    sizeSqm: 24,
    maxGuests: 2,
    bedType: 'Queen Bed',
    bedrooms: 1,
    bathrooms: 1,
    pricePerNight: 950,
    view: 'Garden / Courtyard View',
    heroImage: '/images/standard-room.jpg',
    gallery: ['/images/standard-room.jpg', u('1578683010236-d716f9a3f461'), BATHROOM_IMG],
    description:
      'A neat, comfortable room with everything you need for a restful night: a queen bed with quality linen, a work desk, wardrobe space, a flat-screen TV and a private bathroom with hot shower. Ideal for solo travellers and couples.',
    features: [
      'Queen-size bed with quality linen',
      'Bedside tables with reading lamps',
      'Built-in wardrobe',
      'Work desk and chair',
      'Flat-screen TV with satellite channels',
      'Private bathroom with hot shower',
    ],
    amenities: ['Free Wi-Fi', 'Air conditioning', 'Room service', 'Laundry on request', 'Daily housekeeping', 'Breakfast available'],
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    tagline: 'Extra space, a king bed and elegant finishes',
    category: 'Deluxe',
    sizeSqm: 32,
    maxGuests: 2,
    bedType: 'King Bed',
    bedrooms: 1,
    bathrooms: 1,
    pricePerNight: 1350,
    view: 'Garden / Pool-Side View',
    heroImage: '/images/deluxe-room.jpg',
    gallery: ['/images/deluxe-room.jpg', u('1590490360182-c33d57733427'), BATHROOM_IMG],
    description:
      'A larger, brighter room with a king bed, comfortable armchair, spacious work desk and a modern bathroom. Perfect for guests who want extra comfort, whether visiting for business or a weekend getaway.',
    features: [
      'King-size bed with premium linen',
      'Comfortable armchair and side table',
      'Large work desk with office chair',
      'Flat-screen TV with satellite channels',
      'Modern bathroom with rainfall shower',
      'Tea and coffee making facilities',
    ],
    amenities: ['Free Wi-Fi', 'Air conditioning', 'Room service', 'Laundry on request', 'Daily housekeeping', 'Breakfast available'],
  },
  {
    id: 'executive-room',
    name: 'Executive Room',
    tagline: 'Premium comfort with a dedicated work space',
    category: 'Executive',
    sizeSqm: 38,
    maxGuests: 3,
    bedType: 'King Bed + Day Bed',
    bedrooms: 1,
    bathrooms: 1,
    pricePerNight: 1850,
    view: 'Garden / City View',
    heroImage: '/images/executive-room.jpg',
    gallery: ['/images/executive-room.jpg', u('1618773928121-c32242e63f39'), BATHROOM_IMG],
    description:
      'Designed for business travellers and guests who appreciate more room: a king bed, a separate seating area with armchairs, a full work station and a modern bathroom. Quiet floors and fast Wi-Fi help you work and rest well.',
    features: [
      'King bed plus seating area with armchairs',
      'Full work station with desk and office chair',
      'Flat-screen TV with satellite channels',
      'Modern bathroom with rainfall shower and tub',
      'Tea, coffee and mini-fridge',
      'In-room safe for valuables',
    ],
    amenities: ['Free Wi-Fi', 'Air conditioning', 'Room service', 'Laundry on request', 'Daily housekeeping', 'Breakfast available'],
  },
  {
    id: 'family-room',
    name: 'Family Room',
    tagline: 'Spacious room for the whole family',
    category: 'Family',
    sizeSqm: 45,
    maxGuests: 5,
    bedType: 'Double Bed + 2 Single Beds',
    bedrooms: 1,
    bathrooms: 1,
    pricePerNight: 2200,
    view: 'Garden View',
    heroImage: '/images/family-room.jpg',
    gallery: ['/images/family-room.jpg', u('1582719508461-905c673771fd'), BATHROOM_IMG],
    description:
      'Plenty of space for parents and children: a double bed plus two single beds, a family seating area with sofa, a work desk and a large bathroom. A practical, comfortable base for family visits, holidays and special occasions.',
    features: [
      'Double bed and two single beds',
      'Family seating area with sofa',
      'Work desk and chair',
      'Flat-screen TV with satellite channels',
      'Large bathroom with hot shower',
      'Extra storage and wardrobe space',
    ],
    amenities: ['Free Wi-Fi', 'Air conditioning', 'Room service', 'Laundry on request', 'Daily housekeeping', 'Breakfast available'],
  },
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    tagline: 'Our finest suite — bedroom, lounge and dining space',
    category: 'Suite',
    sizeSqm: 85,
    maxGuests: 4,
    bedType: 'King Bed + Lounge Convertibles',
    bedrooms: 1,
    bathrooms: 2,
    pricePerNight: 4500,
    view: 'Panoramic Garden View',
    heroImage: '/images/suite.jpg',
    gallery: ['/images/suite.jpg', u('1590490360182-c33d57733427'), BATHROOM_IMG],
    description:
      'The best of Zambezi Palms: a king bedroom, a separate elegant lounge with dining table for four, two modern bathrooms and premium finishes throughout. Ideal for executives, wedding couples, VIP guests and long stays.',
    features: [
      'King bedroom with premium bedding',
      'Separate lounge with sofa and armchairs',
      'Dining table for four guests',
      'Two modern bathrooms',
      'Large work desk and office chair',
      'Mini-fridge, safe and coffee station',
    ],
    amenities: ['Free Wi-Fi', 'Air conditioning', 'Priority room service', 'Laundry on request', 'Daily housekeeping', 'Breakfast available'],
  },
];

// ---------------------------------------------------------------------------
// CONFERENCE & EVENTS (sample rates in ZMW)
// ---------------------------------------------------------------------------

export const CONFERENCE_SPACES: ConferenceSpace[] = [
  {
    id: 'main-hall',
    name: 'Main Conference Hall',
    type: 'Conference Hall',
    sizeSqm: 420,
    capacity: { theatre: 300, classroom: 180, banquet: 220, boardroom: 60, cocktail: 350 },
    image: '/images/conference-hall.jpg',
    description:
      'Our largest venue for conferences, church services, AGMs, graduations and product launches. Theatre-style seating with a stage, large projection screen, professional sound system and full air conditioning. Ideal for companies, churches, schools, NGOs and government departments.',
    equipment: [
      'Large projector screen & projector',
      'Professional PA / sound system',
      'Wired and wireless microphones',
      'Podium and stage',
      'Flip charts and whiteboard',
      'Free Wi-Fi & air conditioning',
    ],
    rates: [
      { label: 'Half Day (up to 4 hrs)', price: 5500 },
      { label: 'Full Day (up to 8 hrs)', price: 8500 },
      { label: 'Evening Event (17:00 – 22:00)', price: 4500 },
    ],
  },
  {
    id: 'boardroom',
    name: 'Executive Boardroom',
    type: 'Boardroom',
    sizeSqm: 60,
    capacity: { theatre: 0, classroom: 0, banquet: 0, boardroom: 16, cocktail: 20 },
    image: u('1431540015161-0bf868a2d407'),
    description:
      'A quiet, professional boardroom for management meetings, interviews, strategy sessions and small committee sittings. Large conference table, executive chairs, wall-mounted screen and a calm business environment.',
    equipment: [
      'Large conference table (16 seats)',
      'Wall-mounted presentation screen',
      'Free Wi-Fi & air conditioning',
      'Whiteboard and markers',
      'Water, tea and coffee on request',
      'Printing / secretarial support',
    ],
    rates: [
      { label: 'Half Day (up to 4 hrs)', price: 1500 },
      { label: 'Full Day (up to 8 hrs)', price: 2500 },
      { label: 'Evening Session', price: 1200 },
    ],
  },
  {
    id: 'training-room',
    name: 'Seminar & Training Room',
    type: 'Training Room',
    sizeSqm: 120,
    capacity: { theatre: 80, classroom: 60, banquet: 50, boardroom: 30, cocktail: 70 },
    image: u('1524178232363-1fb2b075b655'),
    description:
      'A flexible classroom-style room for workshops, staff training, revision classes, church Bible study groups and community meetings. Classroom seating with writing tables, projector and whiteboard included.',
    equipment: [
      'Classroom tables and chairs',
      'Projector and screen',
      'Whiteboard and flip chart',
      'Free Wi-Fi & air conditioning',
      'PA speaker for large groups',
      'Stationery on request',
    ],
    rates: [
      { label: 'Half Day (up to 4 hrs)', price: 2500 },
      { label: 'Full Day (up to 8 hrs)', price: 4000 },
      { label: 'Evening Session', price: 2000 },
    ],
  },
  {
    id: 'events-hall',
    name: 'Palm Events & Wedding Hall',
    type: 'Events Hall',
    sizeSqm: 380,
    capacity: { theatre: 250, classroom: 150, banquet: 200, boardroom: 0, cocktail: 300 },
    image: u('1519167758481-83f550bb49b3'),
    description:
      'An elegant decorated hall for weddings, kitchen parties, birthdays, corporate dinners, awards nights and church celebrations. Round-table banquet setup, decorated stage, warm lighting and full catering from our kitchen.',
    equipment: [
      'Decorated stage & backdrop area',
      'Round banquet tables and chairs',
      'Sound system & microphones',
      'Decorative lighting',
      'Bridal / changing room access',
      'Free Wi-Fi & air conditioning',
    ],
    rates: [
      { label: 'Full-Day Event', price: 9500 },
      { label: 'Evening Reception', price: 7500 },
      { label: 'Wedding Package (hall + décor support)', price: 12500 },
    ],
  },
];

export const EVENT_PACKAGES: EventPackage[] = [
  {
    id: 'half-day',
    name: 'Half-Day Conference',
    desc: 'Hall hire up to 4 hours, projector & sound, 1 tea break with snacks, bottled water, Wi-Fi and parking.',
    price: 'from K6,500',
    unit: 'per event',
  },
  {
    id: 'full-day',
    name: 'Full-Day Conference',
    desc: 'Hall hire up to 8 hours, projector & sound, 2 tea breaks with snacks, buffet lunch, Wi-Fi and parking.',
    price: 'from K9,800',
    unit: 'per event',
  },
  {
    id: 'evening',
    name: 'Evening Function',
    desc: 'Evening hall hire, sound & lighting, cocktail setup or buffet dinner service, decorated tables, Wi-Fi and parking.',
    price: 'from K8,500',
    unit: 'per event',
  },
  {
    id: 'wedding',
    name: 'Wedding & Celebration',
    desc: 'Events hall, decorated stage, banquet tables, sound & MC support, bridal room, 3-course meal service for guests.',
    price: 'from K14,500',
    unit: 'per event',
  },
];

export const CONFERENCE_SUPPORT = [
  'Catering & tea breaks',
  'Projector & screens',
  'Sound system & microphones',
  'Free Wi-Fi',
  'Air conditioning',
  'Secure parking',
  'Event planning support',
  'Accommodation for delegates',
];

// ---------------------------------------------------------------------------
// RESTAURANT & MENU (sample prices in ZMW)
// ---------------------------------------------------------------------------

export const RESTAURANT_INFO = {
  name: 'The Palm Terrace Restaurant',
  tagline: 'Zambian favourites and international classics, served fresh daily',
  hours: 'Open daily: Breakfast 06:30 – 10:00 • Lunch 12:00 – 15:00 • Dinner 18:00 – 22:00',
  roomService: 'Room service available daily 07:00 – 21:30',
  image: '/images/restaurant.jpg',
  gallery: ['/images/restaurant.jpg', u('1504674900247-0877df9cc836'), u('1414235077428-338989a2e8c0')],
  points: ['Breakfast, lunch and dinner daily', 'Local & international dishes', 'Buffet on busy days & events', 'Drinks & non-alcoholic beverages', 'Room service to all rooms', 'Takeaway packs for travellers'],
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    note: 'Served 06:30 – 10:00 daily',
    items: [
      { name: 'Full English Breakfast', desc: 'Eggs, sausage, beans, toast and grilled tomato', price: 145 },
      { name: 'Zambian Village Breakfast', desc: 'Sweet potatoes, groundnuts, boiled eggs and tea', price: 85, tag: 'Local' },
      { name: 'Omelette & Toast', desc: 'Three-egg omelette with onion, tomato and green pepper', price: 95 },
      { name: 'Fruit Platter & Yoghurt', desc: 'Seasonal fresh fruits with plain yoghurt and honey', price: 75 },
      { name: 'Tea or Coffee', desc: 'Milky tea, black tea or filter coffee', price: 35 },
    ],
  },
  {
    id: 'mains',
    name: 'Main Meals',
    note: 'Served with your choice of nshima, rice, chips or salad',
    items: [
      { name: 'Grilled Chicken & Chips', desc: 'Half flame-grilled chicken with seasoned chips', price: 165 },
      { name: 'T-Bone Steak', desc: 'Grilled T-bone with pepper sauce and two sides', price: 220 },
      { name: 'Fried Bream & Nshima', desc: 'Whole fried bream fish with nshima and vegetables', price: 185, tag: 'Popular' },
      { name: 'Chicken Curry & Rice', desc: 'Mild chicken curry with fragrant rice', price: 160 },
      { name: 'Spaghetti Bolognese', desc: 'Classic beef bolognese with parmesan', price: 150 },
    ],
  },
  {
    id: 'local',
    name: 'Local Cuisine',
    note: 'Authentic Zambian dishes, freshly prepared',
    items: [
      { name: 'Nshima + Village Chicken', desc: 'Free-range village chicken stew with nshima and rape', price: 150, tag: 'Popular' },
      { name: 'Nshima + Beef Stew', desc: 'Slow-cooked beef stew with nshima and vegetables', price: 160 },
      { name: 'Nshima + Bream Fish', desc: 'Grilled or fried bream with nshima and ifisashi', price: 180 },
      { name: 'Nshima + Kapenta', desc: 'Kapenta stew with nshima and groundnut vegetables', price: 120 },
      { name: 'Nshima + Ifisashi', desc: 'Pounded groundnut vegetables (vegetarian)', price: 95, tag: 'Vegetarian' },
      { name: 'Chikanda (side)', desc: 'Traditional Zambian “African polony”', price: 60 },
    ],
  },
  {
    id: 'international',
    name: 'International Cuisine',
    items: [
      { name: 'Margherita Pizza', desc: 'Tomato, mozzarella and fresh basil', price: 140 },
      { name: 'Chicken Burger & Fries', desc: 'Grilled chicken fillet burger with seasoned fries', price: 130 },
      { name: 'Vegetable Stir-Fry & Rice', desc: 'Crisp vegetables in soy-ginger sauce', price: 125, tag: 'Vegetarian' },
      { name: 'Grilled Tilapia & Salad', desc: 'Tilapia fillet with garden salad and lemon butter', price: 175 },
    ],
  },
  {
    id: 'snacks',
    name: 'Snacks',
    items: [
      { name: 'Samosas (4 pcs)', desc: 'Beef or vegetable samosas with chilli sauce', price: 55 },
      { name: 'Chicken Wings', desc: 'Sticky grilled wings (6 pcs)', price: 95, tag: 'Popular' },
      { name: 'Spring Rolls (4 pcs)', desc: 'Crispy vegetable spring rolls', price: 60 },
      { name: 'Chips (large)', desc: 'Golden fried chips with salt and vinegar', price: 50 },
      { name: 'Meat Pie', desc: 'Flaky pastry pie with beef filling', price: 45 },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      { name: 'Ice Cream Sundae', desc: 'Three scoops with chocolate sauce and nuts', price: 60 },
      { name: 'Chocolate Cake', desc: 'Warm chocolate cake slice with cream', price: 65 },
      { name: 'Fresh Fruit Salad', desc: 'Seasonal fruits with a honey-lime dressing', price: 50 },
      { name: 'Malva Pudding', desc: 'Warm sponge pudding with custard', price: 70 },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages',
    note: 'Drinks & non-alcoholic beverages',
    items: [
      { name: 'Bottled Water (500ml)', desc: 'Still mineral water', price: 25 },
      { name: 'Soft Drink', desc: 'Assorted 330ml cans or bottles', price: 30 },
      { name: 'Fresh Fruit Juice', desc: 'Mango, orange or pineapple, freshly squeezed', price: 55 },
      { name: 'Milkshake', desc: 'Vanilla, chocolate or strawberry', price: 70 },
      { name: 'Maheu / Chibwantu', desc: 'Traditional Zambian drink (500ml)', price: 35, tag: 'Local' },
      { name: 'Cappuccino', desc: 'Freshly brewed espresso with steamed milk', price: 55 },
    ],
  },
];

// ---------------------------------------------------------------------------
// DINING HALL / LOBBY / OUTDOOR
// ---------------------------------------------------------------------------

export const DINING_HALL_INFO = {
  name: 'Zambezi Banquet & Dining Hall',
  tagline: 'A spacious hall for banquets, weddings and celebrations',
  image: u('1519225421980-715cb0215aed'),
  capacity: 'Up to 200 guests (banquet) • 300 guests (cocktail)',
  uses: ['Weddings & kitchen parties', 'Corporate dinners', 'Birthday celebrations', 'Church events & fundraisers', 'Conference lunches', 'Private functions'],
  points: ['Round or long-table banquet setup', 'Buffet stations & serving staff', 'Decorated stage and dance floor area', 'Sound system & microphones', 'Air conditioning & Wi-Fi', 'Secure parking for guests'],
};

export const LOBBY_INFO = {
  name: 'Reception & Lobby',
  tagline: 'A warm welcome, day and night',
  image: '/images/reception.jpg',
  points: [
    'Friendly 24-hour front-desk team',
    'Comfortable lounge waiting area',
    'Quick check-in & check-out',
    'Luggage assistance',
    'Tour & taxi arrangements',
    'Free Wi-Fi in the lobby',
  ],
};

export const OUTDOOR_INFO = {
  name: 'Gardens, Yard & Parking',
  tagline: 'Green space to relax — and room for outdoor functions',
  images: ['/images/garden.jpg', '/images/exterior-day.jpg', u('1566073771259-6a8506099945')],
  points: [
    'Landscaped gardens with seating',
    'Outdoor function & braai area',
    'Paved walkways & lighting',
    'Secure on-site parking',
    'Well-lit entrance & driveway',
    '24-hour security & gate',
  ],
};

// ---------------------------------------------------------------------------
// AMENITIES
// ---------------------------------------------------------------------------

export const AMENITIES: Amenity[] = [
  { id: 'wifi', title: 'Free Wi-Fi', desc: 'Complimentary Wi-Fi in rooms and public areas.', icon: 'wifi' },
  { id: 'parking', title: 'Secure Parking', desc: 'Free on-site parking with 24-hour security.', icon: 'parking' },
  { id: 'reception', title: '24-Hour Reception', desc: 'Day-and-night front desk and check-in.', icon: 'reception' },
  { id: 'restaurant', title: 'Restaurant', desc: 'Breakfast, lunch and dinner served daily.', icon: 'restaurant' },
  { id: 'conference', title: 'Conference Facilities', desc: 'Halls, boardroom and training rooms.', icon: 'conference' },
  { id: 'roomservice', title: 'Room Service', desc: 'Food and drinks delivered to your room.', icon: 'roomservice' },
  { id: 'laundry', title: 'Laundry Service', desc: 'Washing and ironing on request.', icon: 'laundry' },
  { id: 'ac', title: 'Air Conditioning', desc: 'Air-conditioned rooms and halls.', icon: 'ac' },
  { id: 'airport', title: 'Airport Transfers', desc: 'Pick-up and drop-off on request.', icon: 'airport' },
  { id: 'garden', title: 'Gardens & Outdoor Area', desc: 'Landscaped gardens and outdoor seating.', icon: 'garden' },
  { id: 'security', title: '24-Hour Security', desc: 'Manned gate and night security patrols.', icon: 'security' },
  { id: 'power', title: 'Backup Power', desc: 'Standby power for key hotel services.', icon: 'power' },
];

// ---------------------------------------------------------------------------
// SAMPLE TESTIMONIALS (clearly labelled as samples)
// ---------------------------------------------------------------------------

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'The conference facilities worked very well for our two-day workshop. The sound, projector and lunch arrangements were all handled smoothly.',
    author: 'Sample Guest Review',
    context: 'Conference organiser (sample)',
    rating: 5,
  },
  {
    id: 't2',
    quote: 'Clean room, comfortable bed and friendly staff at reception. The nshima and village chicken at the restaurant tasted like home.',
    author: 'Sample Guest Review',
    context: 'Leisure guest (sample)',
    rating: 5,
  },
  {
    id: 't3',
    quote: 'We hosted our wedding reception in the events hall and everything — the setup, food service and sound — was well organised.',
    author: 'Sample Guest Review',
    context: 'Wedding client (sample)',
    rating: 5,
  },
];

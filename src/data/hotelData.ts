export interface RoomCategory {
  id: string;
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  galleryImages: string[];
  capacity: string;
  approxSize: string;
  sampleAmenities: string[];
  viewType: string;
  isFeatured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Hotel Interiors' | 'Rooms & Suites' | 'Hotel Atmosphere' | 'Hua Hin Destination';
  imageUrl: string;
  caption: string;
  aspect?: 'landscape' | 'portrait';
}

export const HOTEL_INFO = {
  name: 'Hotel Alley',
  tagline: 'Discover Comfort, Experience Luxury, Enjoy Hua Hin.',
  phoneDisplay: '+66 81 801 1114',
  phoneTel: '+66818011114',
  address: 'Hua Hin, Hua Hin District, Prachuap Khiri Khan 77110, Thailand',
  city: 'Hua Hin',
  province: 'Prachuap Khiri Khan',
  postalCode: '77110',
  country: 'Thailand',
  email: 'info@hotelalleyhuahin.com',
  checkInTime: '14:00 (2:00 PM)',
  checkOutTime: '12:00 (12:00 PM)',
  googleMapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.994589947934!2d99.9575843!3d12.5684074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30fdab5eb089cfa1%3A0x7d022fa59f8c44c!2sHua%20Hin%2C%20Hua%20Hin%20District%2C%20Prachuap%20Khiri%20Khan%2077110%2C%20Thailand!5e0!3m2!1sen!2sth!4v1710000000000!5m2!1sen!2sth',
  googleMapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Hua+Hin+Hua+Hin+District+Prachuap+Khiri+Khan+77110+Thailand',
};

export const FEATURED_ROOMS: RoomCategory[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    tagline: 'Refined comfort with serene atmosphere',
    shortDescription:
      'A gracefully appointed room offering soothing ambient lighting, plush bedding, and an intimate sanctuary after your day in Hua Hin.',
    fullDescription:
      'The Deluxe Room at Hotel Alley blends contemporary coastal elegance with rich wooden accents and refined dark navy textures. Designed for discerning guests who appreciate quiet sophistication, this room category provides a relaxing retreat with sample premium bedding, a dedicated seating corner, and a modern en-suite bath.',
    image:
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    ],
    capacity: '2 Guests',
    approxSize: 'Sample: 32 m²',
    sampleAmenities: [
      'Plush King or Twin Bedding',
      'Rainfall Shower & Vanity',
      'Individually Controlled AC',
      'Complimentary High-Speed Wi-Fi',
      'Curated Tea & Coffee Station',
      'Flat-Screen Smart Television',
    ],
    viewType: 'Garden / Courtyard Aspect',
    isFeatured: true,
  },
  {
    id: 'superior-room',
    name: 'Superior Room',
    tagline: 'Elevated space with understated charm',
    shortDescription:
      'Featuring generous proportions, refined dark wood finishes, and expansive windows that welcome Hua Hin’s gentle coastal daylight.',
    fullDescription:
      'Our Superior Room represents the ideal balance of spatial comfort and tailored aesthetics. Decorated with subtle silver accents and deep navy tones, it boasts dedicated lounging space, custom mood lighting, and modern bath fixtures curated for your stay.',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    ],
    capacity: '2 - 3 Guests',
    approxSize: 'Sample: 40 m²',
    sampleAmenities: [
      'Luxury King Bedding',
      'Comfortable Lounge Settee',
      'Spacious Modern Bathroom',
      'Smart Climate Control',
      'High-Speed Wi-Fi Access',
      'In-Room Safety Box & Refrigerator',
    ],
    viewType: 'Urban Hua Hin View',
    isFeatured: true,
  },
  {
    id: 'luxury-suite',
    name: 'Luxury Suite',
    tagline: 'The pinnacle of bespoke hospitality',
    shortDescription:
      'An expansive private suite featuring a distinct lounge area, opulent master bedroom, and premium appointments for an unforgettable stay.',
    fullDescription:
      'The Luxury Suite at Hotel Alley is crafted for those desiring an extraordinary retreat. With an expansive open living zone, signature deep red design flourishes, and indulgent en-suite bathing space, this suite creates an exquisite haven amidst the coastal vibrancy of Hua Hin.',
    image:
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    ],
    capacity: '2 - 4 Guests',
    approxSize: 'Sample: 62 m²',
    sampleAmenities: [
      'Master King Bed with Premium Linens',
      'Separate Designer Living Salon',
      'Deep Soaking Tub & Walk-in Shower',
      'Dual Vanity Sinks',
      'Complimentary Espresso Machine',
      'Customized Lighting Scenes',
    ],
    viewType: 'Panoramic Surrounding Vista',
    isFeatured: true,
  },
];

export const ALL_ROOMS: RoomCategory[] = [
  ...FEATURED_ROOMS,
  {
    id: 'executive-studio',
    name: 'Executive Studio',
    tagline: 'Tailored for extended stays and business retreats',
    shortDescription:
      'A sleek, open-concept studio combining quiet productivity desks with plush residential comfort.',
    fullDescription:
      'Designed for travellers who desire both leisure and efficiency, the Executive Studio incorporates an ergonomic workstation, warm ambient downlights, and tranquil navy textiles.',
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    ],
    capacity: '2 Guests',
    approxSize: 'Sample: 45 m²',
    sampleAmenities: [
      'Ergonomic Work Desk & Fast Wi-Fi',
      'Plush King Mattress',
      'Spacious Dressing Wardrobe',
      'Walk-In Glass Shower',
      'Coffee & Refreshment Center',
      'City Landmark Glimpse',
    ],
    viewType: 'City / Alley View',
  },
  {
    id: 'grand-family-suite',
    name: 'Grand Family Suite',
    tagline: 'Harmonious sanctuary for family getaways',
    shortDescription:
      'Generous interconnected living quarters providing comfortable privacy for adults and children alike.',
    fullDescription:
      'The Grand Family Suite ensures loved ones can holiday together without compromising individual comfort. Thoughtful layouts, two bathroom areas, and relaxing lounge furniture make it ideal for memorable Hua Hin holidays.',
    image:
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    ],
    capacity: '4 - 5 Guests',
    approxSize: 'Sample: 75 m²',
    sampleAmenities: [
      'Master King Bed + Two Single Beds',
      'Family Lounge & Dining Corner',
      'Double Bathroom Facilities',
      'High-Speed Wi-Fi for All Devices',
      'Kid-Friendly Entertainment Setup',
      'Ample Storage & Luggage Space',
    ],
    viewType: 'Hua Hin Skyline View',
  },
  {
    id: 'penthouse-retreat',
    name: 'Penthouse Retreat',
    tagline: 'Exclusive upper-floor luxury escape',
    shortDescription:
      'An exceptional rooftop-level hideaway featuring dramatic high ceilings and refined bespoke artistry.',
    fullDescription:
      'Our Penthouse Retreat captures the essence of private luxury. High vaulted ceilings, statement red velvet seating, rich walnut finishes, and panoramic glass vistas make it a standout accommodation in Hua Hin.',
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    ],
    capacity: '2 Guests',
    approxSize: 'Sample: 80 m²',
    sampleAmenities: [
      'Custom Oversized King Bed',
      'Panoramic Private Balcony Terrace',
      'Freestanding Designer Bathtub',
      'Premium Sound System & Smart Hub',
      'Complimentary Gourmet Bar Selection',
      'Personalized Concierge Care',
    ],
    viewType: 'Top Floor Coastal Breeze View',
  },
];

export const HOTEL_EXPERIENCES = [
  {
    title: 'Comfort & Relaxation',
    description:
      'Unwind in quiet sophistication where tranquil interiors, soothing ambient lighting, and attentive service create an effortless sense of calm.',
    icon: 'Sparkles',
    highlight: 'Curated Serenity',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    link: '/rooms',
  },
  {
    title: 'Explore Hua Hin',
    description:
      'Ideally situated in Hua Hin District, allowing effortless access to scenic sandy shores, historic royal landmarks, and lively night markets.',
    icon: 'Compass',
    highlight: 'Prime Coastal Location',
    image:
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1000&q=80',
    link: '/gallery',
  },
  {
    title: 'Memorable Stays',
    description:
      'From customized assistance to refined personal touches, every moment at Hotel Alley is crafted to leave lasting impressions.',
    icon: 'HeartHandshake',
    highlight: 'Heartfelt Hospitality',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    link: '/contact',
  },
];

export const HUA_HIN_HIGHLIGHTS = [
  {
    title: 'Hua Hin Beach Coastline',
    description:
      'Miles of golden sand along the Gulf of Thailand, celebrated for morning horse rides, refreshing sea breezes, and tranquil tropical walks.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Night & Cicada Markets',
    description:
      'Vibrant local bazaars filled with freshly prepared seafood, authentic Thai flavours, handmade crafts, and atmospheric evening street culture.',
    image:
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Royal Heritage & Landmarks',
    description:
      'Famous for historic Siamese royal architecture, classical railway pavilions, and picturesque hilltop temples overlooking the ocean.',
    image:
      'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Tropical Sunset Atmosphere',
    description:
      'Golden hour skies transforming into deep crimson and navy over the calm waters of the Gulf of Siam.',
    image:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=80',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Hotel Alley Courtyard & Dusk Atmosphere',
    category: 'Hotel Atmosphere',
    imageUrl:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    caption: 'Evening calm descending upon the tranquil hotel grounds with warm golden illuminations.',
    aspect: 'landscape',
  },
  {
    id: 'gal-2',
    title: 'Welcoming Guest Reception Lounge',
    category: 'Hotel Interiors',
    imageUrl:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sophisticated lobby interior designed with dark woods, plush seating, and warm hospitality.',
    aspect: 'landscape',
  },
  {
    id: 'gal-3',
    title: 'Deluxe Suite Sleeping Quarters',
    category: 'Rooms & Suites',
    imageUrl:
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    caption: 'Crisp linens, gentle mood illumination, and cozy elegance designed for restful sleep.',
    aspect: 'landscape',
  },
  {
    id: 'gal-4',
    title: 'Superior Room Ambient Styling',
    category: 'Rooms & Suites',
    imageUrl:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    caption: 'Harmonious balance of spacious room layout with bespoke dark navy accents.',
    aspect: 'landscape',
  },
  {
    id: 'gal-5',
    title: 'Luxury Suite Living Chamber',
    category: 'Rooms & Suites',
    imageUrl:
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
    caption: 'Expansive private suite salon offering bespoke seating and elevated comfort.',
    aspect: 'landscape',
  },
  {
    id: 'gal-6',
    title: 'Marble En-Suite & Spa Bath Space',
    category: 'Hotel Interiors',
    imageUrl:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sample refined bathroom architecture with designer fixtures and rainfall bathing.',
    aspect: 'landscape',
  },
  {
    id: 'gal-7',
    title: 'Architectural Gallery Corridor',
    category: 'Hotel Atmosphere',
    imageUrl:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80',
    caption: 'Sleek dark blue passages enhanced with warm low-level lighting and refined lines.',
    aspect: 'landscape',
  },
  {
    id: 'gal-8',
    title: 'Evening Lounge & Refreshment Corner',
    category: 'Hotel Interiors',
    imageUrl:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    caption: 'An intimate setting to enjoy evening refreshments or unwind with quiet conversation.',
    aspect: 'landscape',
  },
  {
    id: 'gal-9',
    title: 'Serene Hua Hin Coastline',
    category: 'Hua Hin Destination',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    caption: 'The celebrated pristine coastline of Hua Hin, known for tranquil Gulf tides.',
    aspect: 'landscape',
  },
  {
    id: 'gal-10',
    title: 'Gulf of Thailand Sunset Glow',
    category: 'Hua Hin Destination',
    imageUrl:
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80',
    caption: 'Dramatic evening skies casting warm ruby and amber reflections over the waters.',
    aspect: 'landscape',
  },
  {
    id: 'gal-11',
    title: 'Hua Hin Evening Night Market Life',
    category: 'Hua Hin Destination',
    imageUrl:
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1200&q=80',
    caption: 'Experience world-class Thai culinary delights and handicraft night markets nearby.',
    aspect: 'landscape',
  },
  {
    id: 'gal-12',
    title: 'Hua Hin Heritage Architecture',
    category: 'Hua Hin Destination',
    imageUrl:
      'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80',
    caption: 'Historic architectural beauty reflecting Hua Hin’s royal coastal heritage.',
    aspect: 'landscape',
  },
  {
    id: 'gal-13',
    title: 'Sunlit Private Balcony Suite',
    category: 'Rooms & Suites',
    imageUrl:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    caption: 'Bright natural sunlight filtering into an open-plan executive bedroom retreat.',
    aspect: 'landscape',
  },
  {
    id: 'gal-14',
    title: 'Quiet Dusk Garden Terrace',
    category: 'Hotel Atmosphere',
    imageUrl:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    caption: 'Relaxing outdoor seating surrounded by tropical foliage and cool evening air.',
    aspect: 'landscape',
  },
];

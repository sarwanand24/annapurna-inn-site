export interface Room {
  id: string;
  name: string;
  type: 'Deluxe' | 'Suite' | 'Premium' | 'Family';
  description: string;
  price: number;
  originalPrice?: number;
  occupancy: {
    adults: number;
    children: number;
  };
  size: string;
  images: string[];
  amenities: string[];
  rating: number;
  reviewCount: number;
  features: string[];
  availability: boolean;
}

export const rooms: Room[] = [
  {
    id: 'R001',
    name: 'Himalayan Deluxe Room',
    type: 'Deluxe',
    description: 'Spacious room with mountain views, modern amenities, and traditional Nepali decor elements',
    price: 8999,
    originalPrice: 11999,
    occupancy: { adults: 2, children: 1 },
    size: '350 sq ft',
    images: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
      'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
    ],
    amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Smart TV', 'Tea/Coffee Maker', 'Safe'],
    rating: 4.7,
    reviewCount: 128,
    features: ['Mountain View', 'King Bed', 'Balcony', 'Work Desk'],
    availability: true,
  },
  {
    id: 'R002',
    name: 'Royal Heritage Suite',
    type: 'Suite',
    description: 'Luxurious suite with separate living area, panoramic views, and premium furnishings',
    price: 15999,
    originalPrice: 19999,
    occupancy: { adults: 3, children: 2 },
    size: '650 sq ft',
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg',
      'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg',
    ],
    amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Smart TV', 'Tea/Coffee Maker', 'Safe', 'Jacuzzi', 'Butler Service'],
    rating: 4.9,
    reviewCount: 95,
    features: ['Panoramic View', 'King Bed', 'Living Room', 'Dining Area', 'Premium Bathroom'],
    availability: true,
  },
  {
    id: 'R003',
    name: 'Garden View Premium',
    type: 'Premium',
    description: 'Elegant room overlooking lush gardens with modern comforts and serene ambiance',
    price: 10999,
    occupancy: { adults: 2, children: 1 },
    size: '400 sq ft',
    images: [
      'https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg',
      'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg',
      'https://images.pexels.com/photos/6492398/pexels-photo-6492398.jpeg',
    ],
    amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Smart TV', 'Tea/Coffee Maker', 'Safe', 'Rain Shower'],
    rating: 4.6,
    reviewCount: 142,
    features: ['Garden View', 'Queen Bed', 'Reading Corner', 'Private Balcony'],
    availability: true,
  },
  {
    id: 'R004',
    name: 'Family Paradise Suite',
    type: 'Family',
    description: 'Spacious family suite with interconnected rooms, kid-friendly amenities, and plenty of space',
    price: 18999,
    occupancy: { adults: 4, children: 3 },
    size: '800 sq ft',
    images: [
      'https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg',
      'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg',
      'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg',
    ],
    amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Smart TV', 'Tea/Coffee Maker', 'Safe', 'Gaming Console', 'Kids Amenities'],
    rating: 4.8,
    reviewCount: 87,
    features: ['Two Bedrooms', 'Living Area', 'Kitchenette', 'Kids Play Area', 'Mountain & Garden View'],
    availability: true,
  },
  {
    id: 'R005',
    name: 'Executive Business Room',
    type: 'Deluxe',
    description: 'Modern room designed for business travelers with work desk and high-speed connectivity',
    price: 9999,
    occupancy: { adults: 2, children: 0 },
    size: '380 sq ft',
    images: [
      'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg',
      'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg',
      'https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg',
    ],
    amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Smart TV', 'Espresso Machine', 'Safe', 'Printer/Scanner'],
    rating: 4.5,
    reviewCount: 76,
    features: ['City View', 'King Bed', 'Large Work Desk', 'Ergonomic Chair', 'Meeting Space'],
    availability: true,
  },
  {
    id: 'R006',
    name: 'Honeymoon Heaven Suite',
    type: 'Suite',
    description: 'Romantic suite with luxury amenities, private terrace, and breathtaking views',
    price: 17999,
    occupancy: { adults: 2, children: 0 },
    size: '550 sq ft',
    images: [
      'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg',
      'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg',
      'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg',
    ],
    amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Smart TV', 'Tea/Coffee Maker', 'Safe', 'Jacuzzi', 'Champagne on Arrival'],
    rating: 5.0,
    reviewCount: 134,
    features: ['Mountain View', 'King Bed', 'Private Terrace', 'Romantic Decor', 'Premium Bathroom'],
    availability: true,
  },
];

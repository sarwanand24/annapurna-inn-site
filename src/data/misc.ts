export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image: string;
  date: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  image: string;
  validUntil: string;
  terms: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'rooms' | 'dining' | 'loyalty';
}

export const testimonials: Testimonial[] = [
  {
    id: 'T001',
    name: 'Rajesh Kumar',
    location: 'Mumbai, India',
    rating: 5,
    comment: 'Absolutely wonderful experience! The hospitality was top-notch and the rooms were pristine. The Dal Bhat was authentic and delicious. Highly recommended!',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    date: '2026-01-15',
  },
  {
    id: 'T002',
    name: 'Sarah Johnson',
    location: 'London, UK',
    rating: 5,
    comment: 'Our honeymoon at Annapurna Inn was magical! The staff went above and beyond to make our stay special. The mountain views were breathtaking.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    date: '2026-01-20',
  },
  {
    id: 'T003',
    name: 'Priya Sharma',
    location: 'Delhi, India',
    rating: 5,
    comment: 'Perfect weekend getaway! Clean rooms, excellent service, and amazing food. The loyalty program is a great bonus. Will definitely visit again.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    date: '2026-01-28',
  },
  {
    id: 'T004',
    name: 'Michael Chen',
    location: 'Singapore',
    rating: 4,
    comment: 'Great location and facilities. The restaurant serves some of the best Indian food I have had. Staff is friendly and accommodating.',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
    date: '2026-02-02',
  },
  {
    id: 'T005',
    name: 'Anjali Patel',
    location: 'Ahmedabad, India',
    rating: 5,
    comment: 'We hosted our corporate retreat here and it was flawless. The conference facilities were modern and the team building activities were fun and engaging.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    date: '2026-02-05',
  },
  {
    id: 'T006',
    name: 'David Martinez',
    location: 'New York, USA',
    rating: 5,
    comment: 'An oasis of luxury and tranquility. The attention to detail is impressive. From the welcome drink to the turndown service, everything was perfect.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    date: '2026-02-06',
  },
];

export const offers: Offer[] = [
  {
    id: 'OF001',
    title: 'Early Bird Special',
    description: 'Book 30 days in advance and save 25% on room bookings',
    discount: '25% OFF',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
    validUntil: '2026-12-31',
    terms: [
      'Valid for bookings made 30 days in advance',
      'Non-refundable',
      'Subject to availability',
    ],
  },
  {
    id: 'OF002',
    title: 'Dine & Save',
    description: 'Order any 2 main courses and get 1 dessert free',
    discount: 'FREE DESSERT',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    validUntil: '2026-03-31',
    terms: [
      'Valid for dine-in only',
      'Not valid with other offers',
      'Maximum 1 dessert per table',
    ],
  },
  {
    id: 'OF003',
    title: 'Weekend Escape',
    description: 'Book weekend packages and get complimentary spa session',
    discount: 'FREE SPA',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
    validUntil: '2026-06-30',
    terms: [
      'Valid for weekend packages only',
      'Spa session worth ₹2,999',
      'Advance booking required',
    ],
  },
  {
    id: 'OF004',
    title: 'Loyalty Bonus',
    description: 'Earn double points on all bookings this month',
    discount: '2X POINTS',
    image: 'https://images.pexels.com/photos/6169047/pexels-photo-6169047.jpeg',
    validUntil: '2026-02-28',
    terms: [
      'Valid for loyalty members only',
      'Applicable on all services',
      'Points credited within 48 hours',
    ],
  },
];

export const faqs: FAQ[] = [
  {
    id: 'F001',
    question: 'What are the check-in and check-out times?',
    answer: 'Check-in time is 2:00 PM and check-out time is 12:00 PM noon. Early check-in and late check-out are subject to availability and may incur additional charges.',
    category: 'rooms',
  },
  {
    id: 'F002',
    question: 'Do you offer airport transfer services?',
    answer: 'Yes, we provide complimentary airport transfers for our premium packages. For individual bookings, airport transfers can be arranged at an additional cost.',
    category: 'general',
  },
  {
    id: 'F003',
    question: 'Is parking available?',
    answer: 'Yes, we offer complimentary parking for all our guests. Valet parking service is also available.',
    category: 'general',
  },
  {
    id: 'F004',
    question: 'What are the restaurant timings?',
    answer: 'Our restaurant is open from 7:00 AM to 11:00 PM. Room service is available 24/7.',
    category: 'dining',
  },
  {
    id: 'F005',
    question: 'How do I earn loyalty points?',
    answer: 'You earn 1 point for every ₹100 spent on room bookings, dining, spa services, and other amenities. Points can be redeemed for discounts, free services, and upgrades.',
    category: 'loyalty',
  },
  {
    id: 'F006',
    question: 'Can I cancel or modify my booking?',
    answer: 'Cancellation and modification policies vary by booking type. Standard bookings can be cancelled up to 48 hours before check-in for a full refund. Special packages may have different terms.',
    category: 'rooms',
  },
  {
    id: 'F007',
    question: 'Are pets allowed?',
    answer: 'We are pet-friendly! Small to medium-sized pets are welcome with prior notice. Additional cleaning charges may apply.',
    category: 'general',
  },
  {
    id: 'F008',
    question: 'Do you cater to dietary restrictions?',
    answer: 'Absolutely! Our chefs can prepare meals for various dietary requirements including vegetarian, vegan, gluten-free, and allergy-specific needs. Please inform us in advance.',
    category: 'dining',
  },
  {
    id: 'F009',
    question: 'What is the minimum spend for loyalty membership?',
    answer: 'There is no minimum spend. You automatically become a Silver member when you create an account. Upgrade to Gold at 5,000 points and Platinum at 10,000 points.',
    category: 'loyalty',
  },
  {
    id: 'F010',
    question: 'Is WiFi available?',
    answer: 'Yes, complimentary high-speed WiFi is available throughout the property including all rooms, restaurant, and common areas.',
    category: 'general',
  },
];

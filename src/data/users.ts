export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  membershipTier: 'Silver' | 'Gold' | 'Platinum';
  loyaltyPoints: number;
  joinedDate: string;
  preferences: {
    roomType: string[];
    cuisinePreferences: string[];
    dietaryRestrictions: string[];
  };
}

export interface Booking {
  id: string;
  userId: string;
  type: 'room' | 'package' | 'table';
  itemId: string;
  itemName: string;
  date: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  amount: number;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  bookingDate: string;
  pointsEarned: number;
}

export interface Order {
  id: string;
  userId: string;
  tableNumber?: string;
  items: {
    menuItemId: string;
    menuItemName: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  status: 'pending' | 'preparing' | 'served' | 'completed';
  orderDate: string;
  pointsEarned: number;
}

export interface LoyaltyTransaction {
  id: string;
  userId: string;
  type: 'earned' | 'redeemed';
  points: number;
  description: string;
  date: string;
}

export interface Reward {
  id: string;
  name: string;
  description: string;
  pointsRequired: number;
  type: 'discount' | 'free-item' | 'upgrade';
  value: string;
  validUntil: string;
  image: string;
}

export const mockUsers: User[] = [
  {
    id: 'U001',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+977-9841234567',
    password: 'password123',
    membershipTier: 'Gold',
    loyaltyPoints: 3450,
    joinedDate: '2024-06-15',
    preferences: {
      roomType: ['Suite', 'Deluxe'],
      cuisinePreferences: ['North Indian', 'Continental'],
      dietaryRestrictions: [],
    },
  },
  {
    id: 'U002',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+977-9851234567',
    password: 'password123',
    membershipTier: 'Platinum',
    loyaltyPoints: 8920,
    joinedDate: '2023-03-20',
    preferences: {
      roomType: ['Suite'],
      cuisinePreferences: ['Nepali', 'Indian'],
      dietaryRestrictions: ['Vegetarian'],
    },
  },
];

export const mockBookings: Booking[] = [
  {
    id: 'B001',
    userId: 'U001',
    type: 'room',
    itemId: 'R001',
    itemName: 'Himalayan Deluxe Room',
    date: '2026-03-15',
    checkIn: '2026-03-15',
    checkOut: '2026-03-17',
    guests: 2,
    amount: 17998,
    status: 'confirmed',
    bookingDate: '2026-02-01',
    pointsEarned: 180,
  },
  {
    id: 'B002',
    userId: 'U001',
    type: 'package',
    itemId: 'P003',
    itemName: 'Weekend Getaway',
    date: '2026-02-20',
    checkIn: '2026-02-20',
    checkOut: '2026-02-22',
    guests: 2,
    amount: 14999,
    status: 'completed',
    bookingDate: '2026-01-15',
    pointsEarned: 150,
  },
  {
    id: 'B003',
    userId: 'U001',
    type: 'table',
    itemId: 'T001',
    itemName: 'Table Reservation',
    date: '2026-02-10',
    guests: 4,
    amount: 2500,
    status: 'completed',
    bookingDate: '2026-02-08',
    pointsEarned: 25,
  },
];

export const mockOrders: Order[] = [
  {
    id: 'O001',
    userId: 'U001',
    tableNumber: '12',
    items: [
      { menuItemId: 'M001', menuItemName: 'Himalayan Momo Platter', quantity: 2, price: 349 },
      { menuItemId: 'M006', menuItemName: 'Butter Chicken', quantity: 1, price: 649 },
      { menuItemId: 'M015', menuItemName: 'Masala Chai', quantity: 2, price: 99 },
    ],
    total: 1545,
    status: 'completed',
    orderDate: '2026-02-05',
    pointsEarned: 15,
  },
  {
    id: 'O002',
    userId: 'U001',
    tableNumber: '8',
    items: [
      { menuItemId: 'M005', menuItemName: 'Dal Bhat Power', quantity: 2, price: 549 },
      { menuItemId: 'M017', menuItemName: 'Mango Lassi', quantity: 2, price: 149 },
    ],
    total: 1396,
    status: 'completed',
    orderDate: '2026-01-28',
    pointsEarned: 14,
  },
];

export const loyaltyTransactions: LoyaltyTransaction[] = [
  {
    id: 'LT001',
    userId: 'U001',
    type: 'earned',
    points: 180,
    description: 'Room booking - Himalayan Deluxe Room',
    date: '2026-02-01',
  },
  {
    id: 'LT002',
    userId: 'U001',
    type: 'earned',
    points: 150,
    description: 'Package booking - Weekend Getaway',
    date: '2026-01-15',
  },
  {
    id: 'LT003',
    userId: 'U001',
    type: 'redeemed',
    points: -500,
    description: 'Redeemed: 20% Discount Coupon',
    date: '2026-01-10',
  },
  {
    id: 'LT004',
    userId: 'U001',
    type: 'earned',
    points: 25,
    description: 'Table reservation',
    date: '2026-02-10',
  },
];

export const rewards: Reward[] = [
  {
    id: 'RW001',
    name: '10% Discount on Rooms',
    description: 'Get 10% off on your next room booking',
    pointsRequired: 500,
    type: 'discount',
    value: '10%',
    validUntil: '2026-12-31',
    image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
  },
  {
    id: 'RW002',
    name: '20% Discount on Dining',
    description: 'Get 20% off on restaurant bill',
    pointsRequired: 750,
    type: 'discount',
    value: '20%',
    validUntil: '2026-12-31',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
  },
  {
    id: 'RW003',
    name: 'Free Spa Session',
    description: 'Complimentary 60-minute spa treatment',
    pointsRequired: 1000,
    type: 'free-item',
    value: '₹2,999',
    validUntil: '2026-12-31',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
  },
  {
    id: 'RW004',
    name: 'Room Upgrade',
    description: 'Free upgrade to next room category',
    pointsRequired: 1500,
    type: 'upgrade',
    value: 'One Category',
    validUntil: '2026-12-31',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
  },
  {
    id: 'RW005',
    name: 'Complimentary Breakfast',
    description: 'Free breakfast for two for 3 days',
    pointsRequired: 600,
    type: 'free-item',
    value: '₹1,500',
    validUntil: '2026-12-31',
    image: 'https://images.pexels.com/photos/103124/pexels-photo-103124.jpeg',
  },
  {
    id: 'RW006',
    name: 'Free Dessert',
    description: 'Complimentary dessert with any main course',
    pointsRequired: 200,
    type: 'free-item',
    value: '₹299',
    validUntil: '2026-12-31',
    image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg',
  },
];

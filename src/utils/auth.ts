import type { User } from '../data/users';
import { mockUsers } from '../data/users';

const AUTH_STORAGE_KEY = 'annapurna_auth_user';
const TABLE_NUMBER_KEY = 'annapurna_table_number';

export const authUtils = {
  login: (email: string, password: string): User | null => {
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      const userWithoutPassword = { ...user, password: '' };
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userWithoutPassword));
      return userWithoutPassword;
    }
    return null;
  },

  signup: (userData: Omit<User, 'id' | 'membershipTier' | 'loyaltyPoints' | 'joinedDate'>): User => {
    const newUser: User = {
      ...userData,
      id: `U${Date.now()}`,
      membershipTier: 'Silver',
      loyaltyPoints: 0,
      joinedDate: new Date().toISOString().split('T')[0],
    };
    mockUsers.push(newUser);
    const userWithoutPassword = { ...newUser, password: '' };
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userWithoutPassword));
    return userWithoutPassword;
  },

  logout: (): void => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  },

  getCurrentUser: (): User | null => {
    const userJson = localStorage.getItem(AUTH_STORAGE_KEY);
    return userJson ? JSON.parse(userJson) : null;
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(AUTH_STORAGE_KEY);
  },

  setTableNumber: (tableNumber: string): void => {
    localStorage.setItem(TABLE_NUMBER_KEY, tableNumber);
  },

  getTableNumber: (): string | null => {
    return localStorage.getItem(TABLE_NUMBER_KEY);
  },

  clearTableNumber: (): void => {
    localStorage.removeItem(TABLE_NUMBER_KEY);
  },
};

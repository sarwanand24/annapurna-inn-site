import type { Booking, Order } from '../data/users';

const BOOKINGS_KEY = 'annapurna_bookings';
const ORDERS_KEY = 'annapurna_orders';
const CART_KEY = 'annapurna_cart';

export interface CartItem {
  menuItemId: string;
  menuItemName: string;
  quantity: number;
  price: number;
}

export const storageUtils = {
  getBookings: (): Booking[] => {
    const data = localStorage.getItem(BOOKINGS_KEY);
    return data ? JSON.parse(data) : [];
  },

  addBooking: (booking: Booking): void => {
    const bookings = storageUtils.getBookings();
    bookings.push(booking);
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));
  },

  getOrders: (): Order[] => {
    const data = localStorage.getItem(ORDERS_KEY);
    return data ? JSON.parse(data) : [];
  },

  addOrder: (order: Order): void => {
    const orders = storageUtils.getOrders();
    orders.push(order);
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  },

  getCart: (): CartItem[] => {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  },

  addToCart: (item: CartItem): void => {
    const cart = storageUtils.getCart();
    const existingItem = cart.find((i) => i.menuItemId === item.menuItemId);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cart.push(item);
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  },

  updateCartItem: (menuItemId: string, quantity: number): void => {
    const cart = storageUtils.getCart();
    const item = cart.find((i) => i.menuItemId === menuItemId);

    if (item) {
      item.quantity = quantity;
      if (quantity <= 0) {
        storageUtils.removeFromCart(menuItemId);
      } else {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
      }
    }
  },

  removeFromCart: (menuItemId: string): void => {
    const cart = storageUtils.getCart();
    const filteredCart = cart.filter((i) => i.menuItemId !== menuItemId);
    localStorage.setItem(CART_KEY, JSON.stringify(filteredCart));
  },

  clearCart: (): void => {
    localStorage.removeItem(CART_KEY);
  },
};

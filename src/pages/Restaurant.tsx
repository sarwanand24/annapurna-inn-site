import { useState, useEffect } from 'react';
import { Star, Plus, ShoppingCart } from 'lucide-react';
import type { MenuItem } from '../data/menu';
import { menuItems } from '../data/menu';
import { storageUtils } from '../utils/storage';
import { authUtils } from '../utils/auth';

const Restaurant = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [cart, setCart] = useState(storageUtils.getCart());
  const [tableNumber, setTableNumber] = useState<string | null>(null);

  const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Drinks'];

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const table = urlParams.get('table');
    if (table) {
      authUtils.setTableNumber(table);
      setTableNumber(table);
    } else {
      setTableNumber(authUtils.getTableNumber());
    }
  }, []);

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === selectedCategory);

  const specialItems = menuItems.filter(item => item.isSpecial);

  const addToCart = (item: MenuItem) => {
    storageUtils.addToCart({
      menuItemId: item.id,
      menuItemName: item.name,
      quantity: 1,
      price: item.price,
    });
    setCart(storageUtils.getCart());
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-cream-50">
      <div
        className="relative h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Restaurant
          </h1>
          <p className="text-lg text-gray-200">
            Authentic flavors, premium quality
          </p>
          {tableNumber && (
            <div className="mt-4 inline-block bg-primary-500 text-white px-6 py-2 rounded-full font-semibold">
              Ordering for Table {tableNumber}
            </div>
          )}
        </div>
      </div>

      <div className="section-container">
        {specialItems.length > 0 && (
          <div className="mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
              Today's Specials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {specialItems.map((item) => (
                <div key={item.id} className="glass-card rounded-2xl overflow-hidden card-hover">
                  <div className="relative h-48">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 bg-accent-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      SPECIAL
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold mb-2">{item.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary-600">₹{item.price}</span>
                      <Star className="h-5 w-5 fill-current text-yellow-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="glass-card rounded-2xl p-4 mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-gold text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="glass-card rounded-2xl overflow-hidden card-hover">
              <div className="relative h-56">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-600">
                  {item.category}
                </div>
                {item.isVeg && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-white rounded flex items-center justify-center">
                    <div className="w-3 h-3 border-2 border-green-600" />
                  </div>
                )}
                {item.isSpicy && (
                  <div className="absolute top-12 right-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    SPICY
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {item.description}
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  Prep time: {item.preparationTime}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-primary-600">
                      ₹{item.price}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm font-semibold text-gray-700">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-gradient-gold text-white p-2 rounded-lg hover:shadow-lg transition-all"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {cart.length > 0 && (
        <div className="fixed bottom-20 lg:bottom-6 right-6 glass-card rounded-2xl p-4 shadow-2xl animate-scale-in">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <ShoppingCart className="h-5 w-5 text-primary-600 mr-2" />
              <span className="font-semibold">{cart.length} items</span>
            </div>
            <span className="text-xl font-bold text-primary-600">
              ₹{cartTotal.toLocaleString()}
            </span>
          </div>
          <button className="w-full btn-primary mt-2">
            View Cart & Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Restaurant;

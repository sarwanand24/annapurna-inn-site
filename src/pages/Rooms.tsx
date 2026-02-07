import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Maximize, ArrowRight } from 'lucide-react';
import { rooms } from '../data/rooms';

const Rooms = () => {
  const [filterType, setFilterType] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<string>('All');

  const types = ['All', 'Deluxe', 'Suite', 'Premium', 'Family'];
  const priceRanges = ['All', 'Under ₹10,000', '₹10,000 - ₹15,000', 'Above ₹15,000'];

  const filteredRooms = rooms.filter((room) => {
    if (filterType !== 'All' && room.type !== filterType) return false;

    if (priceRange !== 'All') {
      if (priceRange === 'Under ₹10,000' && room.price >= 10000) return false;
      if (priceRange === '₹10,000 - ₹15,000' && (room.price < 10000 || room.price > 15000)) return false;
      if (priceRange === 'Above ₹15,000' && room.price <= 15000) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-cream-50">
      <div
        className="relative h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Rooms & Suites
          </h1>
          <p className="text-lg text-gray-200">
            Discover your perfect stay with us
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="glass-card rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Room Type
              </label>
              <div className="flex flex-wrap gap-2">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setFilterType(type)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      filterType === type
                        ? 'bg-gradient-gold text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-primary-50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => setPriceRange(range)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      priceRange === range
                        ? 'bg-gradient-gold text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-primary-50'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredRooms.length}</span> rooms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <Link
              key={room.id}
              to={`/rooms/${room.id}`}
              className="group glass-card rounded-2xl overflow-hidden card-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {room.originalPrice && (
                  <div className="absolute top-4 right-4 bg-accent-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save ₹{room.originalPrice - room.price}
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary-600">
                  {room.type}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="ml-1 text-sm font-semibold text-gray-700">
                      {room.rating}
                    </span>
                    <span className="text-gray-500 text-xs ml-1">
                      ({room.reviewCount})
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  {room.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {room.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{room.occupancy.adults + room.occupancy.children} guests</span>
                  </div>
                  <div className="flex items-center">
                    <Maximize className="h-4 w-4 mr-1" />
                    <span>{room.size}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <span className="text-2xl font-bold text-primary-600">
                      ₹{room.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500"> / night</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary-600 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;

import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Users, Maximize, Check, Calendar, ArrowLeft } from 'lucide-react';
import { rooms } from '../data/rooms';
import { useAuth } from '../context/AuthContext';

const RoomDetails = () => {
  const { id } = useParams<{ id: string }>();
  const room = rooms.find((r) => r.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!room) {
    return (
      <div className="section-container text-center">
        <h2 className="text-2xl font-bold">Room not found</h2>
        <Link to="/rooms" className="btn-primary mt-4">
          View All Rooms
        </Link>
      </div>
    );
  }

  const handleBookNow = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      alert('Booking functionality - Mock implementation');
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="section-container">
        <Link
          to="/rooms"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Rooms
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="glass-card rounded-2xl overflow-hidden mb-4">
              <img
                src={room.images[selectedImage]}
                alt={room.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-4 ring-primary-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${room.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold">
                  {room.type}
                </span>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="ml-1 text-lg font-semibold text-gray-700">
                    {room.rating}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">
                    ({room.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <h1 className="font-display text-3xl font-bold text-gray-900 mb-4">
                {room.name}
              </h1>
              <p className="text-gray-600 mb-6">{room.description}</p>

              <div className="flex items-center gap-6 text-gray-700 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary-600" />
                  <span>{room.occupancy.adults + room.occupancy.children} guests</span>
                </div>
                <div className="flex items-center">
                  <Maximize className="h-5 w-5 mr-2 text-primary-600" />
                  <span>{room.size}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">
                  Room Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {room.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Starting from</p>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-primary-600">
                        ₹{room.price.toLocaleString()}
                      </span>
                      <span className="text-gray-500 ml-2">/ night</span>
                    </div>
                    {room.originalPrice && (
                      <p className="text-sm text-gray-500 line-through mt-1">
                        ₹{room.originalPrice.toLocaleString()}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={handleBookNow}
                    className="btn-primary flex items-center"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Book Now
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-500 text-center">
                {room.availability ? '✓ Available' : 'Currently Unavailable'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;

import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Award, Calendar, UtensilsCrossed, Hotel } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockBookings, mockOrders } from '../data/users';

const Profile = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  if (!isAuthenticated || !user) {
    navigate('/login');
    return null;
  }

  const userBookings = mockBookings.filter((b) => b.userId === user.id);
  const userOrders = mockOrders.filter((o) => o.userId === user.id);

  return (
    <div className="min-h-screen bg-cream-50">
      <div
        className="relative h-48 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2347011/pexels-photo-2347011.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl font-bold">My Profile</h1>
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <div className="glass-card rounded-2xl p-6 mb-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mb-4">
                  <User className="h-12 w-12 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-1">
                  {user.name}
                </h2>
                <p className="text-primary-600 font-semibold mb-4">{user.membershipTier} Member</p>

                <div className="w-full space-y-3 text-left">
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-5 w-5 mr-3 text-primary-600" />
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-5 w-5 mr-3 text-primary-600" />
                    <span className="text-sm">{user.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-3 text-primary-600" />
                    <span className="text-sm">Member since {user.joinedDate}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Award className="h-5 w-5 mr-3 text-primary-600" />
                    <span className="text-sm">{user.loyaltyPoints} Loyalty Points</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-4">
                Preferences
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Dietary Restrictions</p>
                  <p className="text-sm text-gray-600">
                    {user.preferences.dietaryRestrictions.length > 0
                      ? user.preferences.dietaryRestrictions.join(', ')
                      : 'None specified'}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Favorite Cuisines</p>
                  <p className="text-sm text-gray-600">
                    {user.preferences.cuisinePreferences.length > 0
                      ? user.preferences.cuisinePreferences.join(', ')
                      : 'None specified'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-6 mb-6">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Hotel className="h-6 w-6 mr-2 text-primary-600" />
                Booking History
              </h3>
              {userBookings.length > 0 ? (
                <div className="space-y-4">
                  {userBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{booking.itemName}</h4>
                          <p className="text-sm text-gray-600">
                            {booking.checkIn} to {booking.checkOut}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            booking.status === 'confirmed'
                              ? 'bg-green-100 text-green-800'
                              : booking.status === 'completed'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {booking.status}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">
                          {booking.guests} guests
                        </span>
                        <span className="font-semibold text-primary-600">
                          ₹{booking.amount.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No bookings yet</p>
              )}
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <UtensilsCrossed className="h-6 w-6 mr-2 text-primary-600" />
                Dining History
              </h3>
              {userOrders.length > 0 ? (
                <div className="space-y-4">
                  {userOrders.map((order) => (
                    <div
                      key={order.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">{order.orderDate}</p>
                          <p className="text-xs text-gray-500">Table {order.tableNumber}</p>
                        </div>
                        <span className="font-semibold text-primary-600">
                          ₹{order.total.toLocaleString()}
                        </span>
                      </div>
                      <div className="space-y-1">
                        {order.items.map((item, idx) => (
                          <p key={idx} className="text-sm text-gray-700">
                            {item.quantity}x {item.menuItemName}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No orders yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import { Link } from 'react-router-dom';
import { Hotel, UtensilsCrossed, Calendar, Star, ArrowRight, MapPin, Heart } from 'lucide-react';
import { rooms } from '../data/rooms';
import { menuItems } from '../data/menu';
import { packages } from '../data/packages';
import { testimonials, offers } from '../data/misc';

const Home = () => {
  const featuredRooms = rooms.slice(0, 3);
  const popularDishes = menuItems.filter(item => item.isSpecial).slice(0, 4);
  const topPackages = packages.slice(0, 3);

  return (
    <div className="min-h-screen">
      <section
        className="relative h-[80vh] md:h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Welcome to Annapurna Inn
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            Experience luxury hospitality with breathtaking mountain views, authentic cuisine, and premium amenities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-400">
            <Link to="/rooms" className="btn-primary">
              <Hotel className="inline-block mr-2 h-5 w-5" />
              Book Rooms
            </Link>
            <Link to="/restaurant" className="btn-secondary">
              <UtensilsCrossed className="inline-block mr-2 h-5 w-5" />
              View Menu
            </Link>
            <Link to="/table-reservation" className="btn-secondary">
              <Calendar className="inline-block mr-2 h-5 w-5" />
              Reserve Table
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Rooms & Suites
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our luxurious accommodations designed for your comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRooms.map((room) => (
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
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {room.type}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-semibold text-gray-700">
                      {room.rating}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  {room.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {room.description}
                </p>
                <div className="flex items-center justify-between">
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

        <div className="text-center mt-12">
          <Link to="/rooms" className="btn-primary">
            View All Rooms
          </Link>
        </div>
      </section>

      <section className="bg-gradient-cream py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Today's Special Dishes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Savor authentic flavors crafted by our expert chefs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDishes.map((dish) => (
              <div key={dish.id} className="glass-card rounded-2xl overflow-hidden card-hover">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary-600">
                    {dish.category}
                  </div>
                  {dish.isVeg && (
                    <div className="absolute top-3 right-3 w-6 h-6 bg-white rounded flex items-center justify-center">
                      <div className="w-3 h-3 border-2 border-green-600" />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {dish.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary-600">
                      ₹{dish.price}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-sm font-semibold text-gray-700">
                        {dish.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/restaurant" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exclusive Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Curated experiences for your special occasions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topPackages.map((pkg) => (
            <div key={pkg.id} className="glass-card rounded-2xl overflow-hidden card-hover">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-accent-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {pkg.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary-600">
                      ₹{pkg.price.toLocaleString()}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-sm text-gray-400 line-through ml-2">
                        ₹{pkg.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <Link to={`/packages/${pkg.id}`} className="text-primary-600 hover:text-primary-700 font-semibold">
                    Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-accent-700 text-white py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Weddings & Events
              </h2>
              <p className="text-accent-100 mb-6 text-lg">
                Make your special day unforgettable at Annapurna Inn. Our dedicated event team and stunning venues create the perfect backdrop for weddings, celebrations, and corporate events.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3" />
                  <span>Capacity up to 500 guests</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3" />
                  <span>Indoor & outdoor venues</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3" />
                  <span>Custom catering menus</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-400 rounded-full mr-3" />
                  <span>Professional event coordination</span>
                </li>
              </ul>
              <button className="bg-white text-accent-700 font-semibold px-8 py-3 rounded-lg hover:bg-primary-50 transition-all">
                Inquire Now
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg"
                alt="Wedding"
                className="rounded-2xl w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1543762/pexels-photo-1543762.jpeg"
                alt="Event"
                className="rounded-2xl w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Current Offers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't miss our exclusive deals and promotions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="glass-card rounded-2xl p-6 card-hover">
              <div className="inline-block bg-gradient-gold text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                {offer.discount}
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                {offer.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
              <p className="text-xs text-gray-500">Valid until {offer.validUntil}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-cream py-20">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real experiences from real guests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="glass-card rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="glass-card rounded-3xl p-8 md:p-12 bg-gradient-to-r from-primary-50 to-accent-50">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="h-12 w-12 mx-auto mb-6 text-primary-600" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Loyalty Program
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Earn points on every booking and dining experience. Redeem for exclusive rewards, upgrades, and special offers.
            </p>
            <Link to="/loyalty" className="btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

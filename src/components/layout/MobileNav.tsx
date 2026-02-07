import { Link, useLocation } from 'react-router-dom';
import { Home, UtensilsCrossed, Hotel, Award, User } from 'lucide-react';

const MobileNav = () => {
  const location = useLocation();

  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/restaurant', icon: UtensilsCrossed, label: 'Restaurant' },
    { to: '/rooms', icon: Hotel, label: 'Rooms' },
    { to: '/loyalty', icon: Award, label: 'Loyalty' },
    { to: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-2xl">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.to;

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-all ${
                isActive
                  ? 'text-primary-600'
                  : 'text-gray-500 hover:text-primary-500'
              }`}
            >
              <Icon className={`h-6 w-6 ${isActive ? 'scale-110' : ''}`} />
              <span className={`text-xs mt-1 ${isActive ? 'font-semibold' : ''}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;

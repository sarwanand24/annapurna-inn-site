import { Link } from 'react-router-dom';
import { Calendar, Star, ArrowRight } from 'lucide-react';
import { packages } from '../data/packages';

const Packages = () => {
  const honeymoonPackages = packages.filter((p) => p.type === 'Honeymoon');
  const weekendPackages = packages.filter((p) => p.type === 'Weekend');
  const corporatePackages = packages.filter((p) => p.type === 'Corporate');

  const PackageCard = ({ pkg }: { pkg: typeof packages[0] }) => (
    <div className="glass-card rounded-2xl overflow-hidden card-hover">
      <div className="relative h-64 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary-600">
          {pkg.type}
        </div>
        {pkg.originalPrice && (
          <div className="absolute top-4 right-4 bg-accent-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Save ₹{pkg.originalPrice - pkg.price}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm font-semibold text-gray-700">{pkg.rating}</span>
          </div>
        </div>
        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Includes:</p>
          <ul className="space-y-1">
            {pkg.inclusions.slice(0, 3).map((item, idx) => (
              <li key={idx} className="text-sm text-gray-600">• {item}</li>
            ))}
            {pkg.inclusions.length > 3 && (
              <li className="text-sm text-primary-600 font-medium">
                +{pkg.inclusions.length - 3} more
              </li>
            )}
          </ul>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
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
          <Link to={`/packages/${pkg.id}`} className="text-primary-600 hover:text-primary-700 font-semibold flex items-center">
            Details <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream-50">
      <div
        className="relative h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Exclusive Packages
          </h1>
          <p className="text-lg text-gray-200">
            Curated experiences for every occasion
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Honeymoon Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {honeymoonPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Weekend Getaways</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weekendPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">Corporate Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corporatePackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;

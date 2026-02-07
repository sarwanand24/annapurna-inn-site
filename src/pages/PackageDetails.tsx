import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Star, Check, ArrowLeft } from 'lucide-react';
import { packages } from '../data/packages';
import { useAuth } from '../context/AuthContext';

const PackageDetails = () => {
  const { id } = useParams<{ id: string }>();
  const pkg = packages.find((p) => p.id === id);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (!pkg) {
    return (
      <div className="section-container text-center">
        <h2 className="text-2xl font-bold">Package not found</h2>
        <Link to="/packages" className="btn-primary mt-4">
          View All Packages
        </Link>
      </div>
    );
  }

  const handleBook = () => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      alert('Package booking - Mock implementation');
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <div className="section-container">
        <Link to="/packages" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Packages
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="glass-card rounded-2xl overflow-hidden">
              <img src={pkg.image} alt={pkg.name} className="w-full h-96 object-cover" />
            </div>
          </div>

          <div>
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-semibold">
                  {pkg.type}
                </span>
                <div className="flex items-center text-yellow-500">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="ml-1 text-lg font-semibold text-gray-700">{pkg.rating}</span>
                </div>
              </div>

              <h1 className="font-display text-3xl font-bold text-gray-900 mb-4">{pkg.name}</h1>
              <p className="text-gray-600 mb-6">{pkg.description}</p>

              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <Calendar className="h-5 w-5" />
                <span>{pkg.duration}</span>
              </div>

              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Package Includes</h3>
                <div className="space-y-2">
                  {pkg.inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-4">Highlights</h3>
                <div className="space-y-2">
                  {pkg.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-accent-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Package Price</p>
                    <div>
                      <span className="text-3xl font-bold text-primary-600">
                        ₹{pkg.price.toLocaleString()}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-gray-500 line-through ml-2">
                          ₹{pkg.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button onClick={handleBook} className="w-full btn-primary">
                  Book This Package
                </button>
                <p className="text-xs text-gray-500 text-center mt-3">
                  Valid until {pkg.validUntil}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;

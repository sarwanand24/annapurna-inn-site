import { Award, Gift, TrendingUp, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { rewards } from '../data/users';
import { Link } from 'react-router-dom';

const Loyalty = () => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="glass-card rounded-2xl p-8 text-center max-w-md">
          <Award className="h-16 w-16 text-primary-600 mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold mb-4">Join Our Loyalty Program</h2>
          <p className="text-gray-600 mb-6">
            Sign in or create an account to start earning rewards and exclusive benefits
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/login" className="btn-primary">Login</Link>
            <Link to="/signup" className="btn-secondary">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }

  const tierColors = {
    Silver: 'bg-gray-200 text-gray-800',
    Gold: 'bg-yellow-100 text-yellow-800',
    Platinum: 'bg-purple-100 text-purple-800',
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <div
        className="relative h-64 flex items-center justify-center text-white"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/6169047/pexels-photo-6169047.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Loyalty Program
          </h1>
          <p className="text-lg text-gray-200">
            Earn points, unlock rewards, enjoy exclusive benefits
          </p>
        </div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Award className="h-10 w-10 text-primary-600" />
              <span className={`px-4 py-1 rounded-full text-sm font-bold ${tierColors[user.membershipTier]}`}>
                {user.membershipTier}
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
              Membership Tier
            </h3>
            <p className="text-gray-600 text-sm">
              Member since {user.joinedDate}
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <Gift className="h-10 w-10 text-primary-600 mb-4" />
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
              {user.loyaltyPoints} Points
            </h3>
            <p className="text-gray-600 text-sm">
              Available for redemption
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <TrendingUp className="h-10 w-10 text-primary-600 mb-4" />
            <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
              Next Tier
            </h3>
            <p className="text-gray-600 text-sm">
              {user.membershipTier === 'Silver' ? 'Earn 5,000 points for Gold' :
               user.membershipTier === 'Gold' ? 'Earn 10,000 points for Platinum' :
               'You are at the highest tier!'}
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
            Available Rewards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards.map((reward) => (
              <div key={reward.id} className="glass-card rounded-2xl overflow-hidden card-hover">
                <div className="relative h-48">
                  <img
                    src={reward.image}
                    alt={reward.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {reward.pointsRequired} pts
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                    {reward.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{reward.description}</p>
                  <button
                    disabled={user.loyaltyPoints < reward.pointsRequired}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {user.loyaltyPoints >= reward.pointsRequired ? 'Redeem Now' : 'Insufficient Points'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 bg-gradient-to-r from-primary-50 to-accent-50">
          <div className="text-center max-w-2xl mx-auto">
            <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
              Refer a Friend
            </h2>
            <p className="text-gray-600 mb-6">
              Share the love and earn 500 bonus points for every friend who signs up and makes their first booking!
            </p>
            <button className="btn-primary">
              Get Your Referral Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loyalty;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Header from './components/layout/Header';
import MobileNav from './components/layout/MobileNav';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ForgotPassword from './pages/auth/ForgotPassword';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import Restaurant from './pages/Restaurant';
import TableReservation from './pages/TableReservation';
import Packages from './pages/Packages';
import PackageDetails from './pages/PackageDetails';
import Loyalty from './pages/Loyalty';
import Profile from './pages/Profile';
import ChatBot from './components/common/ChatBot';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/rooms/:id" element={<RoomDetails />} />
              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/table-reservation" element={<TableReservation />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/packages/:id" element={<PackageDetails />} />
              <Route path="/loyalty" element={<Loyalty />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
          <MobileNav />
          <ChatBot />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

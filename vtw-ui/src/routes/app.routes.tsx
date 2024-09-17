import React, { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { NotFound } from "../pages";
import MapComponent from "../components/map/MapComponent";
import EventPage from "../pages/Events/EventPage";
import UserProfile from "../pages/Users/UserProfile";
import SignOut from "../pages/SignOut";
import { mockUsers } from "../mock/users";
import LeaderboardPopup from "../components/LeaderboardPopup";
import DashboardLayout from "../components/layout/DashboardLayout";
import ProfilePopup from "../components/ProfilePopup"; // Import the ProfilePopup
import tokenIcon from "../assets/token.png"; // Ensure this path is correct
import profileImage from "../assets/profilepic.png"; // Add your profile image path

const AppRoutes: React.FC = () => {
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false); // State for profile popup
  const [tokenCount] = useState(100); // Example initial value

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Routes>
        <Route 
          path="/" 
          element={<Navigate to="/map" replace />}
        />
        <Route 
          path="/map" 
          element={
            <DashboardLayout 
                selectedCategory={selectedCategory} 
                handleCategoryChange={handleCategoryChange}
            >
              <MapComponent selectedCategory={selectedCategory}/>
            </DashboardLayout>}
        />
        <Route 
          path="/event/:id" 
          element={<EventPage />} 
        />
        <Route 
          path="/profile" 
          element={<UserProfile />}
        />
        <Route 
          path="/signout" 
          element={<SignOut />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <nav className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 bg-[#F3FE74] rounded-full px-6 py-3 flex items-center">
        <div className="flex items-center mr-6 cursor-pointer" onClick={() => setIsProfileOpen(true)}>
          <img src={profileImage} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
        </div>
        <div className="flex items-center mr-6">
          <img src={tokenIcon} alt="Token" className="w-6 h-6 mr-2" />
          <span className="font-bold" style={{ color: '#998321' }}>{tokenCount}</span>
        </div>
        <ul className="flex space-x-6">
          <li><Link to="/map" className="text-black hover:text-gray-700">World</Link></li>
          <li><Link to="/quests" className="text-black hover:text-gray-700">My Quests</Link></li>
          <li>
            <button 
              onClick={() => setIsLeaderboardOpen(true)} 
              className="text-black hover:text-gray-700"
            >
              Leaderboard
            </button>
          </li>
        </ul>
      </nav>

      <ProfilePopup 
        isOpen={isProfileOpen} 
        onClose={() => setIsProfileOpen(false)} 
      />
      <LeaderboardPopup 
        isOpen={isLeaderboardOpen} 
        onClose={() => setIsLeaderboardOpen(false)} 
        users={mockUsers}
      />
    </div>
  );
};

export default AppRoutes;
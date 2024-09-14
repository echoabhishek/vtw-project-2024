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

const AppRoutes: React.FC = () => {
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
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
            <DashboardLayout handleCategoryChange={handleCategoryChange}>
              <MapComponent selectedCategory={selectedCategory}/>
            </DashboardLayout>}
        />
        <Route 
          path="/event/:id" 
          element={
            <EventPage />
          } 
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

      <nav className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 bg-[#F3FE74] rounded-full px-6 py-3">
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

      <LeaderboardPopup 
        isOpen={isLeaderboardOpen} 
        onClose={() => setIsLeaderboardOpen(false)} 
        users={mockUsers}
      />
    </div>
  );
};

export default AppRoutes;

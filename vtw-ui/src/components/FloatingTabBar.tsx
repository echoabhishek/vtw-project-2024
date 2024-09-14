import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FloatingTabBar = () => {
  const location = useLocation();

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-8 bg-[#F3FE74] rounded-full p-2 shadow-lg flex items-center">
      <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
        <img 
          src="/path-to-profile-picture.jpg" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/map" className={`p-2 rounded-full ${location.pathname === '/map' ? 'bg-yellow-200' : ''}`}>
          World
        </Link>
        <Link to="/my-quests" className={`p-2 rounded-full ${location.pathname === '/my-quests' ? 'bg-yellow-200' : ''}`}>
          My Quests
        </Link>
        <Link to="/leaderboard" className={`p-2 rounded-full ${location.pathname === '/leaderboard' ? 'bg-yellow-200' : ''}`}>
          Leaderboard
        </Link>
      </div>
    </div>
  );
};

export default FloatingTabBar;
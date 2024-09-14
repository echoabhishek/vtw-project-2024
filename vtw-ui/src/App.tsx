import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './pages/SignIn/index';
import MapComponent from './components/map/MapComponent';
import EventPage from './pages/Events/EventPage';
import UserProfile from './pages/Users/UserProfile';
import DashboardLayout from './components/layout/DashboardLayout';
import LeaderboardPopup from './components/LeaderboardPopup';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
    }
  };

  // Mock user data for the leaderboard
  const mockUsers = Array.from({ length: 22 }, (_, i) => ({
    name: `User ${i + 1}`,
    title: `Title ${i + 1}`,
    tokens: Math.floor(Math.random() * 2000) + 500,
    company: `Company ${i + 1}`,
    photoUrl: `https://picsum.photos/seed/${i + 1}/200/200`
  }));

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 relative">
        <Routes>
          <Route 
            path="/" 
            element={
              isAuthenticated ? (
                <Navigate to="/map" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            } 
          />
          <Route 
            path="/map" 
            element={
              isAuthenticated ? (
                <DashboardLayout>
                    <MapComponent />
                </DashboardLayout>
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/event/:id" 
            element={
              isAuthenticated ? (
                <EventPage />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/profile" 
            element={
              isAuthenticated ? (
                <UserProfile />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
        </Routes>

        {isAuthenticated && (
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
        )}

        <LeaderboardPopup 
          isOpen={isLeaderboardOpen} 
          onClose={() => setIsLeaderboardOpen(false)} 
          users={mockUsers}
        />
      </div>
    </Router>
  );
};

export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Login from './pages/SignIn/index';
import MapComponent from './components/map/MapComponent';
import EventPage from './pages/Events/EventPage';
import UserProfile from './pages/Users/UserProfile';
import DashboardLayout from './components/layout/DashboardLayout';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
    }
  };

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
              <li><Link to="/leaderboard" className="text-black hover:text-gray-700">Leaderboard</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </Router>
  );
};

export default App;
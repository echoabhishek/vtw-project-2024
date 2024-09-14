import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/SignIn/index';
import MapComponent from './components/map/MapComponent';
import EventPage from './pages/Events/EventPage';
import UserProfile from './pages/Users/UserProfile';
import MyQuestsPage from './pages/MyQuests/MyQuestsPage';
import LeaderboardPage from './pages/Leaderboard/LeaderboardPage';
import FloatingTabBar from './components/FloatingTabBar';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
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
                <MapComponent />
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
          <Route 
            path="/my-quests" 
            element={
              isAuthenticated ? (
                <MyQuestsPage />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
          <Route 
            path="/leaderboard" 
            element={
              isAuthenticated ? (
                <LeaderboardPage />
              ) : (
                <Navigate to="/" replace />
              )
            } 
          />
        </Routes>
        {isAuthenticated && <FloatingTabBar />}
      </div>
    </Router>
  );
};

export default App;
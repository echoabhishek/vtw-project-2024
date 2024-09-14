import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import MapComponent from './components/MapComponent';
import EventPage from './pages/EventPage';
import UserProfile from './pages/UserProfile';

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
        </Routes>
      </div>
    </Router>
  );
};

export default App;
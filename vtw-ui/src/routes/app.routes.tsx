import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "../pages";
import MapComponent from "../components/map/MapComponent";
import EventPage from "../pages/Events/EventPage";
import UserProfile from "../pages/Users/UserProfile";
import SignOut from "../pages/SignOut";
import { mockUsers } from "../mock/users";
import DashboardLayout from "../components/layout/DashboardLayout";
import NavigationContainer from "../components/navigation/NavigationContainer";

const AppRoutes: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
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
      <NavigationContainer tokenCount={tokenCount} users={mockUsers} />
    </div>
  );
};

export default AppRoutes;
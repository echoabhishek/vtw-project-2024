import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { NotFound } from "../pages";
import MapComponent from "../components/map/MapComponent";
import EventPage from "../pages/Events/EventPage";
import UserProfile from "../pages/Users/UserProfile";
import SignOut from "../pages/SignOut";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<Navigate to="/map" replace />}
      />
      <Route 
        path="/map" 
        element={<MapComponent />}
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
  );
};

export default AppRoutes;

// src/components/layout/DashboardLayout.tsx

import React, { useState } from 'react';
import Banner from '../banner/Banner'; // Assuming Banner is in the components folder

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ selectedCategory, handleCategoryChange, children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Persistent Banner */}
      <Banner
        selectedCategory={selectedCategory} 
        handleCategoryChange={handleCategoryChange}/>
      {/* Page Content */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

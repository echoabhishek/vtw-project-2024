import React from 'react';
import Banner from '../banner/Banner'; // Assuming Banner is in the components folder

interface DashboardLayoutProps {
  selectedCategory: string;
  children: React.ReactNode;
  handleCategoryChange: (category: string) => void
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ selectedCategory, handleCategoryChange, children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Banner
        selectedCategory={selectedCategory} 
        handleCategoryChange={handleCategoryChange}/>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

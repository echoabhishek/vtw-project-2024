// src/components/Banner.tsx

import React from 'react';
import SearchBar from '../search/SearchBar';
import Filters from '../filters/Filters';

interface BannerProps {
  selectedCategory: string;
  handleCategoryChange: (category: string) => void
}

const Banner: React.FC<BannerProps> = ({selectedCategory, handleCategoryChange}) => {
//   const [selectedFilter, setSelectedFilter] = useState('all');

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

//   const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedFilter(e.target.value);
//   };

  return (
    // <div className="bg-white shadow-md py-4 px-8 mb-6">
    <div className='border border-[#333333] bg-[#f3fe74]'>
      <div className="flex justify-evenly items-center">
        <h1 className="font-extrabold text-[55px] text-[#333333]">
            [van]quest
        </h1>
        <div className="flex flex-col items-end p-4 space-x-4 space-y-4">
            <SearchBar onSearch={handleSearch}/>
            <Filters 
                selectedCategory={selectedCategory}
                onFilterChange={handleCategoryChange}/>   
        </div>
      </div>
    </div>
  );
};

export default Banner;

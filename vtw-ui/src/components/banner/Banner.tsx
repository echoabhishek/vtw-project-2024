import React from 'react';
import SearchBar from '../search/SearchBar';
import Filters from '../filters/Filters';

interface BannerProps {
  selectedCategory: string;
  handleCategoryChange: (category: string) => void
}

const Banner: React.FC<BannerProps> = ({selectedCategory, handleCategoryChange}) => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className='border border-[#333333] bg-[#f3fe74] p-4'>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="font-extrabold text-3xl md:text-5xl text-[#333333] mb-4 md:mb-0">
          [van]quest
        </h1>
        <div className="w-full md:w-auto">
          <SearchBar onSearch={handleSearch}/>
          <div className="mt-4">
            <Filters 
              selectedCategory={selectedCategory}
              onFilterChange={handleCategoryChange}
            />   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

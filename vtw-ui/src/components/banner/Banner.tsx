// src/components/Banner.tsx

import React, { useState } from 'react';
import SearchBar from '../search/SearchBar';
import Filters from '../filters/Filters';

const Banner: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
  };

  return (
    // <div className="bg-white shadow-md py-4 px-8 mb-6">
    <div className='border border-[#333333] bg-[#f3fe74]'>
      <div className="flex justify-evenly items-center">
        <h1 className="font-extrabold text-[55px] text-[#333333]">
            vanquest
        </h1>
        <div className="flex flex-col items-center p-4 space-x-4">
            <SearchBar onSearch={handleSearch}/>
            {/* Filters */}
            {/* <select 
            value={selectedFilter} 
            onChange={handleFilterChange}
            className="ml-4 border border-gray-300 p-2 rounded"
            >
            <option value="all">All</option>
            <option value="events">Events</option>
            <option value="users">Users</option>
            <option value="locations">Locations</option>
            </select> */}
            <Filters/>   
        </div>
      </div>
    </div>
  );
};

export default Banner;

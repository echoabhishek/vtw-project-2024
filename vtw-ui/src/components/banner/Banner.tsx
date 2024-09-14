// src/components/Banner.tsx

import React, { useState } from 'react';
import SearchBar from '../search/SearchBar';

const Banner: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
  };

  return (
    // <div className="bg-white shadow-md py-4 px-8 mb-6">
    <div className='border border-[#333333] w-[1440px] h-[157px] bg-[#f3fe74]'>
      <div className="flex justify-between items-center">
        <h1 className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-[#333333] font-extrabold text-[55px] text-[#333333]">
            vanquest
        </h1>

        {/* Search Bar */}
        {/* <input 
          type="text" 
          value={searchQuery} 
          onChange={handleSearch}
          className="border border-gray-300 p-2 rounded w-1/2"
          placeholder="Search..."
        /> */}
        <SearchBar />

        {/* Filters */}
        <select 
          value={selectedFilter} 
          onChange={handleFilterChange}
          className="ml-4 border border-gray-300 p-2 rounded"
        >
          <option value="all">All</option>
          <option value="events">Events</option>
          <option value="users">Users</option>
          <option value="locations">Locations</option>
        </select>
      </div>
    </div>
  );
};

export default Banner;

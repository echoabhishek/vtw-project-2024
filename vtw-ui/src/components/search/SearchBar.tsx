import React, { useState } from 'react';
import SearchBarLookupIcon from '../icons/SearchBarLookupIcon'

interface SearchBarProps {
  onSearch: (query: string) => void;  // Optional prop to handle search input
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="rounded-[66px] border border-[#333333] px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 flex gap-2 sm:gap-4 items-center relative w-full h-10 sm:h-12 bg-[#fefefe]">
      <SearchBarLookupIcon />
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        className="p-1 sm:p-2 rounded w-full text-sm sm:text-base"
        placeholder="Find a tech quest..."
      />
    </div>
  );
};

export default SearchBar;

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
    <div className="rounded-[66px] border border-[#333333] px-[23px] py-[17px] flex gap-4 items-center relative w-[999px] h-12 bg-[#fefefe]">
      <SearchBarLookupIcon />
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        className="p-2 rounded w-full"
        placeholder="Find a tech quest..."
      />
    </div>
  );
};

export default SearchBar;

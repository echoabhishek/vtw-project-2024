import React, { useState } from 'react';

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
      <svg
        width="27"
        height="24"
        viewBox="0 0 27 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.0009 15C27.0009 15.2652 26.8956 15.5196 26.7081 15.7071C26.5205 15.8946 26.2662 16 26.0009 16H24.0009V18C24.0009 18.2652 23.8956 18.5196 23.7081 18.7071C23.5205 18.8946 23.2662 19 23.0009 19C22.7357 19 22.4814 18.8946 22.2938 18.7071C22.1063 18.5196 22.0009 18.2652 22.0009 18V16H20.0009C19.7357 16 19.4814 15.8946 19.2938 15.7071C19.1063 15.5196 19.0009 15.2652 19.0009 15C19.0009 14.7348 19.1063 14.4804 19.2938 14.2929C19.4814 14.1054 19.7357 14 20.0009 14H22.0009V12C22.0009 11.7348 22.1063 11.4804 22.2938 11.2929C22.4814 11.1054 22.7357 11 23.0009 11C23.2662 11 23.5205 11.1054 23.7081 11.2929C23.8956 11.4804 24.0009 11.7348 24.0009 12V14H26.0009C26.2662 14 26.5205 14.1054 26.7081 14.2929C26.8956 14.4804 27.0009 14.7348 27.0009 15ZM23.4147 6L6.00095 23.4137C5.62591 23.7885 5.1174 23.9991 4.5872 23.9991C4.05699 23.9991 3.54848 23.7885 3.17345 23.4137L0.585948 20.8288C0.400182 20.643 0.252823 20.4225 0.152285 20.1798C0.0517467 19.9372 0 19.6771 0 19.4144C0 19.1517 0.0517467 18.8916 0.152285 18.6489C0.252823 18.4062 0.400182 18.1857 0.585948 18L18.0009 0.58625C18.1867 0.400484 18.4072 0.253125 18.6499 0.152587C18.8925 0.052049 19.1526 0.000302315 19.4153 0.000302315C19.678 0.000302315 19.9381 0.052049 20.1808 0.152587C20.4235 0.253125 20.644 0.400484 20.8297 0.58625L23.4147 3.17125C23.6005 3.35697 23.7478 3.57747 23.8484 3.82015C23.9489 4.06283 24.0006 4.32294 24.0006 4.58562C24.0006 4.84831 23.9489 5.10842 23.8484 5.3511C23.7478 5.59378 23.6005 5.81428 23.4147 6ZM22.0009 4.58625L19.4147 2L15.4147 6L18.0009 8.58625L22.0009 4.58625Z"
          fill="#333333"
        />
      </svg>

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

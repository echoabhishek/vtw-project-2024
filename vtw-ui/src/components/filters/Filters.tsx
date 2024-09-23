// src/components/Filters.tsx

import React, { useCallback, useState } from 'react';
import ProductFilterIcon from '../icons/ProductFilterIcon';
import DesignFilterIcon from '../icons/DesignFilterIcon';
import DevFilterIcon from '../icons/DevFilterIcon';
import TrendingFilterIcon from '../icons/TrendingFilterIcon';
import MentorshipFilterIcon from '../icons/MentorshipFilterIcon';

interface FiltersProps {
    selectedCategory: string;
    onFilterChange: (category: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ selectedCategory, onFilterChange }) => {
    // const [buttonColor, setButtonColor] = useState(true)
    const [currentSelection, setCurrentSelection] = useState(selectedCategory);
    const handleFilterClick = (category: string) => {
        console.log(`Filter applied: ${category}`);
        if (selectedCategory == category) {
            onFilterChange('');
            setCurrentSelection(''); 
        } else {
            onFilterChange(category);
            setCurrentSelection(category); 
        }
    };

    const filterStyles = {
        DESIGN: "bg-[#ff9cf5]",
        PRODUCT: "bg-[#afbeff]",
        DEV: "bg-[#bfadf4]",
        TRENDING: "bg-[#fbabb6]",
        MENTORSHIP: "bg-[#95f9ab]",
    };

    const getButtonStyle = useCallback(
        (category: string) => {
          return currentSelection === category
            ? 'rounded-[66px] border border-[#333333] px-8 py-[21px] flex gap-4 justify-center items-center relative h-10 bg-white' // Selected style
            : `rounded-[66px] border border-[#333333] px-8 py-[21px] flex gap-4 justify-center items-center relative h-10 ${filterStyles[category] || ''}`; // Default style
        },
        [currentSelection, filterStyles]
      );

    return (
        <div
            className="flex justify-between items-center relative w-[999px] bg-transparent">
            <button
                onClick={() => handleFilterClick('DESIGN')}
                className={getButtonStyle('DESIGN')}>
                <DesignFilterIcon/>
                <h4 className="text-2xl text-[#333333]">Design</h4>
            </button>

            <button 
                onClick={() => handleFilterClick('PRODUCT')}
                className={getButtonStyle('PRODUCT')}>
                <ProductFilterIcon/>
                <h4 className="text-2xl text-[#333333]">Product</h4>
            </button>
            
            <button
                onClick={() => handleFilterClick('DEV')}
                className={getButtonStyle('DEV')}>
                <DevFilterIcon/>
                <h4 className="text-2xl text-[#333333]">Dev</h4>
            </button>

            <button
                onClick={() => handleFilterClick('TRENDING')}
                className={getButtonStyle('TRENDING')}>
                <TrendingFilterIcon/>
                <h4 className="text-2xl text-[#333333]">Trending</h4>
            </button>

            <button
                onClick={() => handleFilterClick('MENTORSHIP')}
                className={getButtonStyle('MENTORSHIP')}>
                <MentorshipFilterIcon/>
                <h4 className="text-2xl text-[#333333]">Mentorship</h4>
            </button>
        </div>
    );
};

export default Filters;
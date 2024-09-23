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

    const getButtonStyle = useCallback(
        (category: string) => {
            const filterStyles = {
                DESIGN: "bg-[#ff9cf5]",
                PRODUCT: "bg-[#afbeff]",
                DEV: "bg-[#bfadf4]",
                TRENDING: "bg-[#fbabb6]",
                MENTORSHIP: "bg-[#95f9ab]",
            };
            return currentSelection === category
                ? 'rounded-[66px] border border-[#333333] px-8 py-[21px] flex gap-4 justify-center items-center relative h-10 bg-white' // Selected style
                : `rounded-[66px] border border-[#333333] px-8 py-[21px] flex gap-4 justify-center items-center relative h-10 ${filterStyles[category] || ''}`; // Default style
        },
        [currentSelection]
      );

    return (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 items-center relative w-full bg-transparent">
            {[
                { category: 'DESIGN', icon: DesignFilterIcon, label: 'Design' },
                { category: 'PRODUCT', icon: ProductFilterIcon, label: 'Product' },
                { category: 'DEV', icon: DevFilterIcon, label: 'Dev' },
                { category: 'TRENDING', icon: TrendingFilterIcon, label: 'Trending' },
                { category: 'MENTORSHIP', icon: MentorshipFilterIcon, label: 'Mentorship' },
            ].map(({ category, icon: Icon, label }) => (
                <button
                    key={category}
                    onClick={() => handleFilterClick(category)}
                    className={getButtonStyle(category)}
                >
                    <Icon />
                    <h4 className="text-[#333333]">{label}</h4>
                </button>
            ))}
        </div>
    );
};

export default Filters;
// src/components/Filters.tsx

import React, { useCallback, useState } from 'react';
import ProductFilterIcon from '../icons/ProductFilterIcon';
import DesignFilterIcon from '../icons/DesignFilterIcon';

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
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M21.3337 15.9994C21.3337 15.9994 18.6674 18.8923 18.6674 20.6654C18.6674 21.3726 18.9483 22.0508 19.4483 22.5508C19.9484 23.0508 20.6266 23.3317 21.3337 23.3317C22.0408 23.3317 22.719 23.0508 23.2191 22.5508C23.7191 22.0508 24 21.3726 24 20.6654C24 18.8923 21.3337 15.9994 21.3337 15.9994ZM2.94959 13.9997L9.33537 7.61391L15.7211 13.9997M18.0808 12.5866L6.16248 0.668213L4.28274 2.54795L7.45563 5.72084L0.589918 12.5866C-0.196639 13.3331 -0.196639 14.6263 0.589918 15.4128L7.92223 22.7451C8.30885 23.1318 8.82877 23.3317 9.33537 23.3317C9.84197 23.3317 10.3619 23.1318 10.7485 22.7451L18.0808 15.4128C18.8674 14.6263 18.8674 13.3331 18.0808 12.5866Z"
                    fill="#333333" />
                </svg>
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
                <svg
                width="31"
                height="24"
                viewBox="0 0 31 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.833984 24V21.3333H30.1673V24H0.833984ZM4.83398 20C4.10065 20 3.4731 19.7391 2.95132 19.2173C2.42954 18.6956 2.16821 18.0676 2.16732 17.3333V2.66667C2.16732 1.93333 2.42865 1.30578 2.95132 0.784C3.47398 0.262222 4.10154 0.000888889 4.83398 0H26.1673C26.9007 0 27.5287 0.261333 28.0513 0.784C28.574 1.30667 28.8349 1.93422 28.834 2.66667V17.3333C28.834 18.0667 28.5731 18.6947 28.0513 19.2173C27.5295 19.74 26.9015 20.0009 26.1673 20H4.83398ZM4.83398 17.3333H26.1673V2.66667H4.83398V17.3333Z"
                    fill="#333333" />
                </svg>
                <h4 className="text-2xl text-[#333333]">Dev</h4>
            </button>

            <button
                onClick={() => handleFilterClick('TRENDING')}
                className={getButtonStyle('TRENDING')}>
                <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_25_2694)">
                    <path
                    d="M1.99798 16.432L0.583984 15.018L7.65498 7.94696L14.019 14.311L18.262 10.068L16.519 8.32596L23.211 6.53296L21.418 13.225L19.676 11.483L14.019 17.139L7.65498 10.775L1.99798 16.432Z"
                    fill="#333333" />
                </g>
                <defs>
                    <clipPath id="clip0_25_2694">
                    <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.583984)" />
                    </clipPath>
                </defs>
                </svg>
                <h4 className="text-2xl text-[#333333]">Trending</h4>
            </button>

            <button
                onClick={() => handleFilterClick('MENTORSHIP')}
                className={getButtonStyle('MENTORSHIP')}>
                <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.6251 4.12497C17.3722 4.12448 17.1202 4.15598 16.8751 4.21872V4.12497C16.8758 3.44585 16.646 2.78661 16.2233 2.25503C15.8007 1.72346 15.2102 1.35101 14.5484 1.1986C13.8866 1.04619 13.1927 1.12283 12.5801 1.41599C11.9675 1.70915 11.4725 2.20148 11.176 2.81247C10.722 2.64266 10.2336 2.5854 9.75261 2.64559C9.27162 2.70577 8.81237 2.88162 8.41419 3.15808C8.016 3.43453 7.69074 3.80335 7.46624 4.23298C7.24174 4.6626 7.12469 5.14023 7.12511 5.62497V10.3903C6.63657 9.83296 5.95901 9.4762 5.22305 9.38877C4.48708 9.30134 3.7448 9.48943 3.13928 9.91678C2.53376 10.3441 2.10787 10.9805 1.94368 11.7032C1.7795 12.426 1.88866 13.1839 2.25011 13.8309C5.23323 20.1187 7.06417 22.875 12.0001 22.875C14.2868 22.8725 16.4792 21.963 18.0962 20.346C19.7131 18.7291 20.6226 16.5367 20.6251 14.25V7.12497C20.6251 6.32932 20.309 5.56626 19.7464 5.00365C19.1838 4.44104 18.4208 4.12497 17.6251 4.12497ZM18.3751 14.25C18.3731 15.9401 17.7008 17.5605 16.5057 18.7556C15.3106 19.9507 13.6903 20.623 12.0001 20.625C8.64105 20.625 7.3398 19.3125 4.26761 12.8306C4.25448 12.8034 4.24042 12.7762 4.22542 12.75C4.13213 12.5782 4.10961 12.3767 4.16265 12.1886C4.21569 12.0004 4.34011 11.8404 4.50939 11.7426C4.67867 11.6448 4.87944 11.617 5.06893 11.6651C5.25842 11.7132 5.42165 11.8333 5.52386 12L5.54355 12.0328L7.2948 14.8453C7.42397 15.053 7.61732 15.2129 7.84555 15.3009C8.07378 15.3888 8.32447 15.4 8.55962 15.3327C8.79478 15.2654 9.00159 15.1233 9.14875 14.928C9.2959 14.7326 9.37536 14.4946 9.37511 14.25V5.62497C9.37511 5.42606 9.45413 5.23529 9.59478 5.09464C9.73543 4.95399 9.9262 4.87497 10.1251 4.87497C10.324 4.87497 10.5148 4.95399 10.6554 5.09464C10.7961 5.23529 10.8751 5.42606 10.8751 5.62497V11.25C10.8751 11.5483 10.9936 11.8345 11.2046 12.0455C11.4156 12.2564 11.7017 12.375 12.0001 12.375C12.2985 12.375 12.5846 12.2564 12.7956 12.0455C13.0066 11.8345 13.1251 11.5483 13.1251 11.25V4.12497C13.1251 3.92606 13.2041 3.73529 13.3448 3.59464C13.4854 3.45399 13.6762 3.37497 13.8751 3.37497C14.074 3.37497 14.2648 3.45399 14.4054 3.59464C14.5461 3.73529 14.6251 3.92606 14.6251 4.12497V11.25C14.6251 11.5483 14.7436 11.8345 14.9546 12.0455C15.1656 12.2564 15.4517 12.375 15.7501 12.375C16.0485 12.375 16.3346 12.2564 16.5456 12.0455C16.7566 11.8345 16.8751 11.5483 16.8751 11.25V7.12497C16.8751 6.92606 16.9541 6.73529 17.0948 6.59464C17.2354 6.45399 17.4262 6.37497 17.6251 6.37497C17.824 6.37497 18.0148 6.45399 18.1554 6.59464C18.2961 6.73529 18.3751 6.92606 18.3751 7.12497V14.25Z"
                    fill="#333333" />
                </svg>
                <h4 className="text-2xl text-[#333333]">Mentorship</h4>
            </button>
        </div>
    );
};

export default Filters;
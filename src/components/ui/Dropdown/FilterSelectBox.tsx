import React, { useState } from 'react'
import CheckBgGreen from '../Icon/SearchResultDropdown/CheckBgGreen';
import { Dropdown } from '../Icon';

const FilterSelectBox = ({ selected, setSelected }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    //const [selected, setSelected] = useState("Trending");
    const options = ["Trending", "Best Match", "Newest"];

    return (
        <div className="relative  text-left">
            {/* Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="border border-neutral-300 rounded-lg md:px-4 px-[6px] md:py-2 py-[5px] md:text-lg text-sm shadow-sm focus:outline-none text-neutral-300 font-semibold flex items-center justify-between md:min-w-40 min-w-28 truncate"
            >
                {selected}
                <Dropdown className='text-neutral-300' />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 md:pb-3 md:px-4 px-[10px] md:py-0 py-2 md:min-w-40 min-w-28 truncate rounded-lg bg-white dark:bg-dark-500 shadow-lg ring-1 ring-black ring-opacity-5 z-10">
                    <ul className="divide-zinc-100 dark:divide-dark-200 divide-y-2">
                        {options.map((option) => {
                            const isSelected = selected === option;
                            return (
                                <li
                                    key={option}
                                    onClick={() => {
                                        setSelected(option);
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center mb-3 md:pt-5 pt-[10px] cursor-pointer md:text-base text-xs font-medium text-neutral-300"
                                >
                                    <div
                                        className={`md:w-6 md:h-6 w-4 h-4 md:mr-4 mr-2 md:border-[3px] border-[2px] rounded-sm flex items-center justify-center ${isSelected ? 'border-transparent' : 'border-neutral-300'
                                            }`}
                                    >
                                        {isSelected && <div><CheckBgGreen className='md:w-6 md:h-6 w-4 h-4' /></div>}
                                    </div>
                                    {option}
                                </li>
                            );
                        })}
                    </ul>

                </div>
            )}
        </div>
    )
}

export default FilterSelectBox

'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Dropdown } from '@/components/ui/Icon'
import DropdownBox from '../Icon/Header/DropdownBox'

const categories = [
    {
        title: 'Tech & Innovation',
        items: ['Audio', 'Education', 'Camera Gear', 'Green Tech', 'Clothe & Wearables', 'Food & Beverage', 'Health & Fitness', 'Home', 'Phones & Accessories', 'Productivity', 'Transportation', 'Travel & Outdoors']
    },
    {
        title: 'Creative Works',
        items: ['Art', 'Comics', 'Dance & Theater', 'Film', 'Music', 'Photography', 'Podcast, Blogs & Vlogs', 'Tablet Games', 'Video Games', 'Web Series', 'Architecture']
    },
    {
        title: 'Community Project',
        items: ['Culture', 'Environment', 'Human Rights', 'Local Business', 'Wellness']
    }
];

const FundraisingDropdown = () => {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    return (
        <div className="relative" ref={dropdownRef}>
            <div
                onClick={(e) => {
                    setOpen(prev => !prev);
                }}
                className="flex items-center gap-2 cursor-pointer"
            >
                <span className='text-base font-semibold text-neutral-400 dark:text-neutral-300'>Fundrising for</span>
                <Dropdown className='text-neutral-200 dark:text-neutral-300' />
            </div>

            {open && (
                <div className="absolute md:top-20 top-16 lg:-right-[333px] md:-right-[200px] lg:translate-x-0 -translate-x-12 rounded-[20px] lg:w-[1170px] md:w-[568px] w-[327px] h-[351px] z-50">
                    <div className="flex flex-col lg:flex-row justify-between ">
                        {categories.map((category, index) => (
                            <div key={index} className={` 
                                ${index === categories.length - 1
                                    ? 'bg-white dark:bg-dark-500'
                                    : index === categories.length - 2
                                        ? 'bg-stone-50 '
                                        : 'lg:bg-stone-50 bg-white dark:bg-dark-500'
                                } dark:bg-dark-400 z-20 
                                ${index === 0
                                    ? 'lg:rounded-l-[20px] lg:rounded-tr-none rounded-t-[20px]'
                                    : index === categories.length - 1
                                        ? 'lg:rounded-r-[20px] lg:rounded-bl-none rounded-b-[20px]' : ''} 
                                lg:p-10 p-5 lg:w-1/3 shadow-md`}>

                                <h3 className="font-semibold mb-4 text-neutral-500 md:text-base text-sm dark:text-white">{category.title}</h3>
                                <ul className={`${index === categories.length - 1 ? 'space-y-2' : 'grid grid-cols-2 gap-y-2 gap-x-6'} md:text-sm text-xs text-neutral-400 font-normal dark:text-neutral-300`}>
                                    {category.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className='absolute right-0 lg:-translate-x-[330px] -translate-x-[123px] -top-11'><DropdownBox className='text-white dark:text-dark-500 ' /></div>
                </div>
            )}
        </div>
    )
}

export default FundraisingDropdown

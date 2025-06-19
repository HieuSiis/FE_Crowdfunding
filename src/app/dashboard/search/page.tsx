'use client'
import { useSearchParams } from 'next/navigation'
import CampaignCard from '@/components/ui/Card/CampaignCard';
import Background from '@/assets/images/dashboard/background-category-search.svg'
import Image from 'next/image';
import { dummyData } from '@/data/dashboard';
import FilterSelectBox from '@/components/ui/Dropdown/FilterSelectBox';
import Pagination from '@/components/ui/Pagination';
import { useState } from 'react';

const ITEMS_PER_PAGE = 12

export default function SearchPage() {
    const searchParams = useSearchParams()
    const query = searchParams.get('q') || ''

    // State and handler for filter
    const [selectedFilter, setSelectedFilter] = useState('Trending');

    const currentPage = Number(searchParams.get('page')) || 1

    const results = dummyData.popular.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    )
    let filteredResults = [...results];

    if (selectedFilter === 'Newest') {
        filteredResults.sort((a, b) => b.id - a.id);
    } else if (selectedFilter === 'Best Match') {
        filteredResults.sort((a, b) => b.backers - a.backers);
    } else if (selectedFilter === 'Trending') {
        filteredResults.sort((a, b) => (b.amountRaised / b.target) - (a.amountRaised / a.target));
    }
    const totalPages = Math.ceil(filteredResults.length / ITEMS_PER_PAGE)

    // Get data for the current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const paginatedResults = filteredResults.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    // Assume results[0] contains the first item's category
    const category = results.length > 0 ? results[0].category : '';

    return (
        <div className="md:px-10">
            <div className="w-full h-40 md:h-60 rounded-3xl overflow-hidden relative md:mb-10 mb-[30px]">
                <Image
                    src={Background}
                    width={1243}
                    height={200}
                    alt="Education"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-600/60 to-transparent" />
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl md:text-4xl font-bold">
                    {category}
                </h1>
            </div>

            <div className="flex relative flex-col md:flex-row md:items-center items-start md:justify-center gap-4 md:mb-10 mb-6">
                <h1 className="text-base md:text-2xl font-semibold text-center md:text-left text-neutral-400 dark:text-whitish-500">
                    {results.length} Projects Found
                </h1>
                <div className="flex absolute justify-center md:justify-end right-0">
                    {/* <FilterSelectBox /> */}
                    <FilterSelectBox selected={selectedFilter} setSelected={setSelectedFilter} />

                </div>
            </div>
            <div className='lg:max-w-full md:max-w-[568px] max-w-[327px] overflow-x-auto'>
                <div className="flex lg:grid grid-cols-4 md:gap-6 gap-5">
                    {paginatedResults.map((item, i) => (
                        <CampaignCard key={i} {...item} />
                    ))}
                </div>
            </div>

            <Pagination totalPages={totalPages} />
        </div>
    )
}

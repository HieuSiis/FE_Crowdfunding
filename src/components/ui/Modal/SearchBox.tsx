'use client'

import { useState } from 'react'
import { Search } from '@/components/ui/Icon'
import Image from 'next/image'
import Link from 'next/link'
import Close from '../Icon/SearchBox/close'
import { dummyData } from '@/data/dashboard'

const highlightMatch = (text: string, query: string) => {
    const parts = text.split(new RegExp(`(${query})`, 'gi'))
    return parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
            <strong key={i} className="text-neutral-500 dark:text-neutral-100">
                {part}
            </strong>
        ) : (
            part
        )
    )
}

const getRelatedSearches = (
    keyword: string,
    titles: string[],
    limit = 3
): string[] => {
    const lowerKeyword = keyword.toLowerCase()

    const related = titles.filter((title) =>
        title.toLowerCase().includes(lowerKeyword)
    )

    const suggestions = new Set<string>()

    related.forEach((title) => {
        const words = title.split(/\s+/) // Split the title into words
        words.forEach((word, index) => {
            const wordLower = word.toLowerCase()
            if (
                wordLower.length > 3 && // Eliminate words that are too short
                wordLower !== lowerKeyword && // Avoid suggesting the same words the user typed.

                !suggestions.has(wordLower) //ensure no duplicate suggestions,
            ) {
                suggestions.add(
                    words.slice(index, index + 3).join(' ').toLowerCase() // Suggestions from 3 consecutive words
                )
            }
        })
    })

    return Array.from(suggestions).slice(0, limit)
}

const SearchBox = () => {
    const [query, setQuery] = useState('')
    const [showResults, setShowResults] = useState(false)
    const [relatedSearches, setRelatedSearches] = useState<string[]>([])

    const filteredResults = dummyData.popular.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    )

    const handleInputChange = (value: string) => {
        setQuery(value)
        const allTitles = dummyData.popular.map((item) => item.title)
        const suggestions = getRelatedSearches(value, allTitles)
        setRelatedSearches(suggestions)
    }

    return (
        <div className="relative sm:w-[250px] lg:w-[300px] xl:w-[458px] w-[217px] mx-auto z-50">
            <form
                className="flex py-[5px] pl-[15px] pr-[7px] shadow-sm rounded-full justify-between dark:bg-dark-500 bg-white relative z-[60]"
                onSubmit={(e) => {
                    e.preventDefault()
                    setShowResults(true)
                }}
            >
                <input
                    type="text"
                    value={query}
                    placeholder="Do fundrise now"
                    className="rounded-full md:p-[10px] p-1 md:text-sm text-xs font-normal focus:outline-none text-neutral-100 dark:text-white dark:bg-dark-500 focus:text-neutral-500 w-full"
                    onChange={(e) => handleInputChange(e.target.value)}
                />
                <button
                    type="submit"
                    className="md:py-[11px] py-[6px] md:px-[27px] px-[13px] bg-primary-500 rounded-full hover:bg-primary-600 transition-all duration-300"
                >
                    <Search />
                </button>
            </form>

            {showResults && query && (
                <div
                    className="fixed inset-0 bg-neutral-500 bg-opacity-60"
                    onClick={() => setShowResults(false)}
                />
            )}

            {showResults && query && (
                <div className="absolute md:left-0 left-1/2 -translate-x-[155px] md:translate-x-0 top-[70px] lg:w-[843px] md:w-[568px] w-[327px] bg-white dark:bg-dark-500 shadow-md rounded-[20px]  z-50">
                    <div className="bg-white dark:bg-dark-300 md:rounded-[20px] rounded-[15px] md:p-6 p-4 md:mb-5 mb-[10px]">
                        <button
                            className="absolute top-[10px] right-2  md:text-2xl text-lg text-rose-500 md:px-6 px-4 md:py-3 py-2 rounded-[10px] bg-red-100 dark:bg-dark-100 hover:bg-red-200 dark:hover:bg-red-200"
                            onClick={() => setShowResults(false)}
                        >
                            <Close className="text-error md:w-6 md:h-6 w-[18px] h-[18px]" />
                        </button>

                        <p className="text-sm text-neutral-500 dark:text-white font-medium decoration-solid underline">
                            See all {filteredResults.length} fundraiser
                        </p>
                    </div>

                    <div className="md:space-y-4 space-y-3 max-h-[300px] overflow-auto overflow-x-hidden px-6">
                        {filteredResults.map((item) => (
                            <Link
                                key={item.id}
                                href={`/dashboard/search?q=${query}`}
                                className="flex items-center gap-4"
                                onClick={() => setShowResults(false)}
                            >
                                <Image
                                    src={item.avatar}
                                    alt={item.author}
                                    width={50}
                                    height={50}
                                    className="rounded-[10px]"
                                />
                                <div className="flex-1 min-w-0 md:text-sm text-xs">
                                    <p className="font-normal text-neutral-500 dark:text-white mb-1 truncate">
                                        {highlightMatch(item.title, query)}
                                    </p>
                                    <p className="font-normal text-neutral-300 truncate">
                                        By {item.author}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {relatedSearches.length > 0 && (
                        <div className="mt-6 md:text-sm text-xs px-6 pb-6">
                            <p className="text-neutral-500 dark:text-neutral-100 font-semibold">
                                Related searches
                            </p>
                            <ul className="font-normal text-neutral-400 mt-4 space-y-2">
                                {relatedSearches.map((title, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={`/dashboard/search?q=${encodeURIComponent(title)}`}
                                            onClick={() => setShowResults(false)}
                                        >
                                            {highlightMatch(title, query)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default SearchBox

'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import PreviousIcon from '../Icon/Pagination/PreviousIcon'
import NextIcon from '../Icon/Pagination/NextIcon'

const Pagination = ({ totalPages = 4 }: { totalPages?: number }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page')) || 1

    const goToPage = (page: number) => {
        const params = new URLSearchParams(searchParams.toString())
        if (page === 1) {
            params.delete('page')
        } else {
            params.set('page', String(page))
        }
        router.push(`?${params.toString()}`)
    }

    const getPaginationRange = (currentPage: number, totalPages: number): (number | string)[] => {
        const delta = 1
        const range: (number | string)[] = []

        const left = Math.max(2, currentPage - delta)
        const right = Math.min(totalPages - 1, currentPage + delta)

        range.push(1)

        if (left > 2) {
            range.push('...')
        }

        for (let i = left; i <= right; i++) {
            range.push(i)
        }

        if (right < totalPages - 1) {
            range.push('...')
        }

        if (totalPages > 1) {
            range.push(totalPages)
        }
        return range
    }

    const paginationRange = getPaginationRange(currentPage, totalPages)

    return (
        <div className="flex items-center justify-center gap-[10px] md:mt-11 mt-10 md:pb-0 pb-10">
            {/* Previous button */}
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-8 h-8 flex items-center justify-center rounded-[10px] bg-white dark:bg-dark-200 hover:bg-secondary-400 shadow-md transition group ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
            >
                <PreviousIcon className='text-neutral-200 group-hover:text-white' />
            </button>

            {/* Page numbers */}
            {paginationRange.map((item, index) => {
                if (item === '...') {
                    return (
                        <span key={`ellipsis-${index}`} className="text-neutral-300">
                            ...
                        </span>
                    )
                }

                const page = item as number
                const isActive = page === currentPage
                return (
                    <button
                        key={page}
                        onClick={() => goToPage(page)}
                        className={`w-8 h-8 rounded-[10px] flex items-center hover:text-white justify-center text-base font-medium transition ${isActive
                            ? 'bg-secondary-400 text-white'
                            : 'text-neutral-300 hover:bg-secondary-400'
                            }`}
                    >
                        {page}
                    </button>
                )
            })}

            {/* Next button */}
            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-8 h-8 flex items-center justify-center group rounded-[10px] bg-white dark:bg-dark-200 shadow-md hover:bg-secondary-400 transition ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
            >
                <NextIcon className='text-neutral-200 group-hover:text-white' />
            </button>
        </div>
    )
}

export default Pagination

'use client'
import Close from '@/components/ui/Icon/SearchBox/close';
import Link from 'next/link';
import React from 'react'
import SuccessIcon from '../Icon/Check/SuccessIcon';
import SecondaryDarkButton from '../Button/SecondaryDarkButton';

const MessageModal = () => {

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark-600 bg-opacity-60 dark:bg-opacity-90 px-6">
            <div className="relative md:px-[108px] px-6 md:py-[77px] py-4 bg-white dark:bg-dark-500 rounded-xl shadow-lg text-center">
                <Link href={"/campaign"}>
                    <button
                        className="absolute top-4 right-4 text-gray-400 bg-error p-2 rounded-full bg-opacity-10"
                    >
                        <Close className='text-error' />
                    </button>
                </Link>

                <div className="flex items-center justify-center md:mt-0 mt-5">
                    <SuccessIcon />
                </div>

                <h2 className="md:text-[22px] text-base font-semibold text-neutral-500 dark:text-whitish-500 md:py-5 py-3">
                    Thank’s for backing campaign!
                </h2>
                <p className="md:text-sm text-xs text-neutral-300 md:mb-6 mb-5 md:max-w-[434px] max-w-[276px]">
                    Thank you so much for your support. We are so grateful to have the best backers on the planet.
                </p>
                <SecondaryDarkButton className='px-14 md:mb-0 mb-5'>
                    Share this campaign
                </SecondaryDarkButton>
            </div>
        </div>
    )
}

export default MessageModal

import { Img1 } from '@/assets/images/campaign'
import Image from 'next/image'
import React from 'react'

const FeaturedCard = () => {
    return (
        <div className="bg-white dark:bg-dark-500 rounded-lg shadow-xl mb-[30px]">
            <div className="relative w-full md:h-[232px] h-[172px] rounded overflow-hidden">
                <Image
                    src={Img1}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className='p-5 md:space-y-4 space-y-3'>
                <button type='button' className="inline-block text-xs font-medium text-white bg-secondary-400 px-3 py-1 rounded-sm">
                    Featured
                </button>
                <h4 className="md:text-xl text-sm text-neutral-500 dark:text-whitish-500 font-semibold">Special One Camera</h4>
                <p className="md:text-sm text-xs text-error font-medium">
                    <span className="font-bold md:text-xl text-sm text-neutral-500 dark:text-whitish-500">$2,724 USD</span>{' '}
                    <span className="line-through">$1,504 USD</span>{' '}
                    <span>(12% OFF)</span>
                </p>
                <p className="md:text-base text-sm text-neutral-500 dark:text-neutral-100 font-medium">Estimated Shipping <br /> <span className='text-neutral-400 dark:text-neutral-300 md:text-sm text-xs font-normal'>October 2024</span></p>
                <p className="md:text-sm text-xs text-neutral-400 dark:text-neutral-300 font-normal"><span className='text-neutral-500 dark:text-whitish-500 font-medium'>05</span> claimed</p>
                <p className="md:text-sm text-xs text-neutral-400 dark:text-neutral-300 font-normal">Ships worldwide</p>
            </div>
        </div>
    )
}

export default FeaturedCard

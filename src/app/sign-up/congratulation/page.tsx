'use client'
import React from 'react'
import Award from '@/assets/images/award.svg'
import Image from 'next/image'
import Link from 'next/link'
const Congratulation = () => {
    return (
        <div className='flex justify-center md:items-center md:w-full md:mt-0 mt-20 md:h-screen z-10'>
            <div className='bg-secondary-500 dark:bg-primary-600 bg-opacity-5 dark:bg-opacity-5 w-[2838px] h-[2838px] rounded-[2838px] absolute md:top-[528px] top-[100px] -left-[418px] -z-10'></div>
            <div className='md:py-[77px] py-[30px] md:px-11 px-[14px] rounded-xl shadow-md bg-white dark:bg-dark-500 text-center'>
                <Image src={Award} alt='' width={68} height={68} className='md:w-[68px] md:h-[68px] w-11 h-11 mx-auto md:mb-4 mb-2' />
                <h3 className='md:text-2xl text-xl font-bold text-neutral-500 dark:text-whitish-500 mb-4'>Congratulations!</h3>
                <p className='ms:text-sm text-xs text-neutral-100 dark:text-neutral-300 md:max-w-[417px] max-w-[299px] md:mb-[30px] mb-6'>Congratulations!  You have successfully completed all of the
                    steps for this verification process.</p>
                <Link href={"/"}>
                    <button type='button' className='md:w-[356px] w-[287px] py-3 bg-primary-600 hover:bg-primary-500 rounded-lg text-white text-base font-semibold'>
                        Got to homepage
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Congratulation

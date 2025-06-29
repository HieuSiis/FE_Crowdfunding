'use client'
import React, { useEffect } from 'react'
import Clap from '@/assets/images/Clap.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const Success = () => {
    const router = useRouter()
    const user = useSelector((state: RootState) => state.auth.user)
    const searchParams = useSearchParams()
    const email = searchParams.get("email")
    useEffect(() => {
        if (!user && !email) router.replace("/sign-in")
    }, [user, router])

    return (
        <div className='flex items-center justify-center w-full md:h-screen md:mt-0 mt-14 z-10'>
            <div className='bg-secondary-500 dark:bg-primary-600 bg-opacity-5 dark:bg-opacity-5 w-[2838px] h-[2838px] rounded-[2838px] absolute md:top-[528px] top-[100px] -left-[418px] -z-10'></div>

            <div className='md:py-[60px] py-[30px] md;px-[50px] px-5 rounded-xl shadow-md bg-white dark:bg-dark-500 text-center'>
                <Image src={Clap} alt='' width={46} height={46} className='mx-auto mb-6' />
                <h2 className='md:text-2xl text-xl font-bold text-neutral-500 dark:text-whitish-500 mb-4'>Password reset successful</h2>
                <p className='text-sm text-neutral-100 dark:text-neutral-300 md:mb-[30px] mb-6 max-w-[335px] mx-auto'>You can now use your new password to log in to your account</p>
                <Link href={"/"}>
                    <button type='button' className='py-3 text-white bg-primary-600 hover:bg-primary-500 rounded-lg text-base font-semibold md:w-[356px] w-[287px]'>
                        Go to homepage
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success

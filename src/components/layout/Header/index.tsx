'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { Avatar, Login, Logo } from '@/assets/images/header'
import { Dropdown, Increase } from '@/components/ui/Icon'
import SearchBox from '@/components/ui/Modal/SearchBox'
import FundraisingDropdown from '@/components/ui/Dropdown/FundraisingDropdown'
import MenuIcon from '@/components/ui/Icon/Menu/MenuIcon'
import NavbarMobile from '../NavbarMobile'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useSession } from 'next-auth/react'

const Header = () => {

    const user = useSelector((state: RootState) => state.auth.user)
    console.log("header", user)
    const [showNavbar, setShowNavbar] = useState(false)
    const pathname = usePathname()

    const { data: session, status } = useSession()
    console.log("status", session)
    // Hide Header
    if (pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up')) {
        return (
            <Link href={"/"}>
                <Image src={Logo} alt='' width={52} height={52} className='' />
            </Link>
        )
    }

    if (pathname === '/campaign/checkout' || pathname === '/campaign/shipping-address') {
        return (
            <div className='flex justify-between xl:px-20'>
                <Link href={"/"}>
                    <Image src={Logo} alt='' width={52} height={52} className='xl:w-[52px] xl:h-[52px] w-10 h-10' />
                </Link>
                <Link href={"/sign-in"}>
                    <Image src='https://res.cloudinary.com/dl1tfq8ss/image/upload/v1749271792/Avatar_wql2mh.svg' width={52} height={52} alt='avatar' className='xl:w-[52px] xl:h-[52px] w-10 h-10 rounded-full' />
                </Link>
            </div>

        )
    }

    return (
        <header>
            <div className='flex justify-between items-center'>
                <div className={`flex items-center xl:gap-20 ${showNavbar ? 'gap-[52px]' : 'gap-3'} `}>
                    {/* Hamburger menu (mobile only) */}

                    {showNavbar && (
                        <Link href={"/"} onClick={() => setShowNavbar(!showNavbar)}>
                            <Image src='https://res.cloudinary.com/dl1tfq8ss/image/upload/v1749272341/Logo_tpbwxa.svg' alt='' width={40} height={40} className='block xl:hidden' />
                        </Link>
                    )}
                    {showNavbar && (
                        <button type='button' className=' py-3 px-6 bg-secondary-400 hover:bg-secondary-500 transition-all duration-300 text-sm text-white font-semibold rounded-[5px] '>
                            Start a campaign
                        </button>
                    )}
                    <button className="sm:hidden md:hidden xl:hidden" onClick={() => setShowNavbar(!showNavbar)}>
                        <MenuIcon />
                    </button>
                    {!showNavbar && (
                        <>
                            <Link href={"/"}>
                                <Image src={Logo} alt='' width={52} height={52} className='xl:block sm:block hidden' />
                            </Link>
                            <SearchBox />
                        </>
                    )}

                </div>

                <div className='flex xl:gap-14 gap-4'>
                    <div className='md:flex hidden items-center justify-center gap-2'>
                        <Increase className='text-neutral-200 dark:text-neutral-300' />
                        <FundraisingDropdown />

                        {/* <span className='text-base font-semibold text-neutral-400'>Fundrising for</span>
                        <Dropdown /> */}
                    </div>
                    <Link href={"/campaign/start-campaign"} className='hidden md:block xl:block'>
                        <button type='button' className='py-[13px] lg:px-5 px-5 md:px-2 bg-secondary-400 hover:bg-secondary-500 transition-all duration-300 md:text-xs lg:text-base text-base text-white font-semibold rounded-[10px] '>
                            Start a campaign
                        </button>
                    </Link>

                    {!showNavbar && (
                        status === 'authenticated' ? (
                            <Image src={session?.user?.image || 'https://res.cloudinary.com/dl1tfq8ss/image/upload/v1749271792/Avatar_wql2mh.svg'} width={52} height={52} alt='avatar' className='xl:w-[52px] xl:h-[52px] w-10 h-10 rounded-full' />
                        ) : (
                            !user ? (
                                <Link href={"/sign-in"}>
                                    <Image src={Login} width={52} height={52} alt='avatar' className='xl:w-[52px] xl:h-[52px] w-10 h-10 rounded-full' />
                                </Link>
                            ) : (
                                <Image src='https://res.cloudinary.com/dl1tfq8ss/image/upload/v1749271792/Avatar_wql2mh.svg' width={52} height={52} alt='avatar' className='xl:w-[52px] xl:h-[52px] w-10 h-10 rounded-full' />
                            )

                        )
                    )}
                </div>
            </div>
            {/* Mobile Navbar Toggle */}
            {showNavbar && (
                <NavbarMobile setShowNavbar={setShowNavbar} />
            )}
        </header>
    )
}

export default Header

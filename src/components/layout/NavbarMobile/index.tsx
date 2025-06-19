'use client'
import FundraisingDropdown from '@/components/ui/Dropdown/FundraisingDropdown'
import { Campaign, Dark, Dashboard, Increase, Light, Logout, Payment, Profile, Withdraw } from '@/components/ui/Icon'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type NavbarMobileProps = {
    setShowNavbar: (value: boolean) => void;
}

const NavbarMobile = ({ setShowNavbar }: NavbarMobileProps) => {
    const { theme, setTheme } = useTheme()
    const pathname = usePathname()

    const navItems = [
        {
            href: '/dashboard',
            icon: <Dashboard className={(pathname === '/' || pathname === '/dashboard') ? 'text-primary-600' : 'text-neutral-200'} />,
            title: 'Dashboard',
            isActive: pathname === '/' || pathname === '/dashboard'
        },
        {
            href: '/campaign',
            icon: <Campaign className={pathname === '/campaign' ? 'text-primary-600' : 'text-neutral-200'} />,
            title: 'Campaign',
            isActive: pathname === '/campaign'
        },
        {
            href: '/payment',
            icon: <Payment className={pathname === '/payment' ? 'text-primary-600' : 'text-neutral-200'} />,
            title: 'Payment',
            isActive: pathname === '/payment'
        },
        {
            href: '/withdraw',
            icon: <Withdraw className={pathname === '/withdraw' ? 'text-primary-600' : 'text-neutral-200'} />,
            title: 'Withdraw',
            isActive: pathname === '/withdraw'
        },
        {
            href: '/profile',
            icon: <Profile className={pathname === '/profile' ? 'text-primary-600' : 'text-neutral-200'} />,
            title: 'Profile',
            isActive: pathname === '/profile'
        },
        {
            href: '/',
            icon: <Logout className='text-error' />,
            title: 'Logout'
        },
    ]

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className='flex md:hidden flex-col gap-[30px] mt-[30px] md:py-10 py-6  dark:bg-dark-500 shadow-sm max-h-[733px]'>
            <div className='flex md:hidden justify-start px-5 gap-2'>
                <Increase className='text-neutral-200 dark:text-neutral-300' />
                <FundraisingDropdown />
            </div>
            {navItems.map((item, index) => (
                <Link key={index} href={item.href} onClick={() => setShowNavbar(false)}>
                    <div className={`flex gap-5 items-center px-5 py-[14px] cursor-pointer font-semibold text-neutral-300 transition-all duration-300 
                        ${item.isActive ? 'bg-primary-100 dark:bg-dark-200 text-primary-600' : 'bg-transparent'}`}>
                        {item.icon} {item.title}
                    </div>
                </Link>
            ))}

            <div className='flex items-center gap-5 font-semibold text-neutral-300 px-5 py-[14px] cursor-pointer' onClick={() => { toggleTheme(); setShowNavbar(false); }} >
                {theme === 'light' ? <Dark /> : <Light />} Light/Dark
            </div>
        </div>
    )
}

export default NavbarMobile

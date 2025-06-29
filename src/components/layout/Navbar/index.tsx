'use client'
import { Campaign, Dark, Dashboard, Light, Logout, Payment, Profile, Withdraw } from '@/components/ui/Icon'
import { setAuthUser } from '@/redux/authSlice'
import { RootState } from '@/redux/store'
import axios from 'axios'
import { signOut } from 'next-auth/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_URL } from '../../../../server'

const Navbar = () => {
    const { theme, setTheme } = useTheme()
    const pathname = usePathname()
    const user = useSelector((state: RootState) => state.auth.user)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    // Hide Navbar
    if (pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up') || pathname === '/campaign/checkout' || pathname === '/campaign/shipping-address') {
        return null
    }

    const navItems = [
        {
            href: '/dashboard',
            icon: <Dashboard className={(pathname === '/' || pathname === '/dashboard') ? 'text-primary-600' : 'text-neutral-200'} />,
            isActive: pathname === '/' || pathname === '/dashboard'
        },
        {
            href: '/campaign',
            icon: <Campaign className={pathname.startsWith('/campaign') ? 'text-primary-600' : 'text-neutral-200'} />,
            isActive: pathname.startsWith('/campaign')
        },
        {
            href: '/payment',
            icon: <Payment className={pathname === '/payment' ? 'text-primary-600' : 'text-neutral-200'} />,
            isActive: pathname === '/payment'
        },
        {
            href: '/withdraw',
            icon: <Withdraw className={pathname === '/withdraw' ? 'text-primary-600' : 'text-neutral-200'} />,
            isActive: pathname === '/withdraw'
        },
        {
            href: '/profile',
            icon: <Profile className={pathname === '/profile' ? 'text-primary-600' : 'text-neutral-200'} />,
            isActive: pathname === '/profile'
        },
        // {
        //     href: '/',
        //     icon: <Logout className='text-error' />,
        // },
    ]

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const SignOut = async () => {
        setLoading(true)
        try {
            window.confirm('Are you sure you want to log out?')
            await axios.post(`${API_URL}/users/sign-out`, {
                withCredentials: true
            })
            dispatch(setAuthUser(null)) // Clear user state
        } catch (error) {
            alert('Error logging out. Please try again.')
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='md:flex hidden flex-col mt-4 px-[14px] py-10 rounded-[20px] dark:bg-dark-500 shadow-md h-[550px] justify-between'>
            <div className='flex flex-col gap-[20px]'>
                {navItems.map((item, index) => (
                    <Link key={index} href={item.href}>
                        <div className={`flex items-center justify-center p-[10px] rounded-[10px] cursor-pointer transition-all duration-300 
                        ${item.isActive ? 'bg-primary-100 dark:bg-dark-200' : 'bg-transparent'}`}>
                            {item.icon}
                        </div>
                    </Link>
                ))}
                {/* Sign out */}
                <div
                    className="flex items-center justify-center p-[10px] rounded-[10px] cursor-pointer transition-all duration-300 bg-transparent"
                    onClick={() => {
                        // const confirmed = window.confirm('Are you sure you want to log out?');
                        // if (confirmed) {

                        //     dispatch(setAuthUser(null)); // Clear user state
                        //     signOut({ callbackUrl: '/' });

                        // }

                        SignOut()
                    }}
                >
                    <Logout className="text-error" />
                </div>
            </div>
            <div className='flex items-center justify-center p-[10px] rounded-[10px] cursor-pointer shadow-md dark:bg-dark-400 ' onClick={toggleTheme}>
                {theme === 'light' ? <Dark /> : <Light />}
            </div>
        </div>
    )
}

export default Navbar

'use client'
import { Star } from '@/components/ui/Icon'
import UnionIcon from '@/components/ui/Icon/Withdraw/UnionIcon'
import Image from 'next/image'
import React from 'react'
import USD from '@/assets/images/flags/usa.svg'
import DownloadIcon from '@/components/ui/Icon/Withdraw/DownloadIcon'
import PrimaryButton from '@/components/ui/Button/PrimaryButton'
import { campaigns, walletList } from '@/data/withdraw'

const Withdraw = () => {
    return (
        <div className="md:px-10 pb-5 mx-auto flex lg:flex-row md:flex-col flex-col-reverse md:gap-10 gap-5 overflow-auto">
            <div className="bg-white dark:bg-dark-500 rounded-2xl shadow-md overflow-auto">
                <table className="text-sm text-left ">
                    <thead className="text-neutral-500 dark:text-whitish-500 md:text-sm text-xs bg-neutral-50 dark:bg-dark-400 font-semibold border-separate border-spacing-y-10">
                        <tr>
                            <th className="py-5 md:pl-[30px] pl-[15px]">Campaign</th>
                            <th className="py-5 md:px-14 px-28">Category</th>
                            <th className="py-5 md:px-10 px-0">Amount</th>
                            <th className="py-5 md:px-10 px-24">Backer</th>
                        </tr>
                    </thead>
                    <tbody >
                        {campaigns.map((item, i) => (
                            <tr key={i} className={`hover:bg-primary-100 dark:hover:bg-dark-200 cursor-pointer`}>
                                <td className="md:pl-[30px] pl-[15px] py-4">
                                    <div className="flex items-center gap-4">
                                        <Image src={item.image} alt="Campaign" width={66} height={50} className='w-[66px] h-[50px] rounded' />
                                        <div className='whitespace-nowrap'>
                                            <div className="font-medium text-xs text-neutral-500 dark:text-whitish-500 mb-1">{item.title}</div>
                                            <div className="text-xs font-medium text-neutral-300">{item.date}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="md:px-14 px-28 py-4 text-xs font-medium text-neutral-300 whitespace-nowrap">
                                    {item.category}
                                </td>
                                <td className="md:px-10 px-0 py-4 font-semibold text-neutral-500 dark:text-whitish-500">
                                    {item.amount}
                                </td>
                                <td className="md:px-10 px-24 py-4">
                                    <div className="flex items-center gap-4">
                                        <Image src={item.backer.avatar} alt="User" width={40} height={40} className='w-10 h-10 rounded-full' />
                                        <div>
                                            <span className="font-medium text-xs text-neutral-500 dark:text-whitish-500 whitespace-nowrap">{item.backer.name}</span>
                                            <div className="flex gap-1 mt-1">
                                                {Array(5).fill(0).map((_, index) => (
                                                    <div key={index}>
                                                        <Star className={`w-[10px] h-[10px] ${index < item.backer.rating ? 'text-amber-500' : 'text-amber-100'}`} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Balance & Activity */}
            <div className="relative bg-whitish-500 dark:bg-dark-500 rounded-lg md:w-[407px] w-[327px] shadow-md md:px-5 px-4 md:py-10 py-6 overflow-hidden">
                <div className="absolute md:-top-[67px] md:-left-[116px] md:w-[232px] md:h-[232px] -top-[54px] -left-[93px] w-[186px] h-[186px] blur-[60px] rounded-full bg-lime-400  z-10" />
                <div className="absolute md:-top-[67px] md:left-[90px] md:w-[238px] md:h-[238px] md:blur-[75px] -top-[54px] left-[72px] w-[191px] h-[191px] blur-[60px] rounded-full bg-yellow-300 z-0" />
                <div className="absolute md:-top-[87px] md:left-[238px] md:w-[238px] md:h-[238px] md:blur-[75px] -top-[69px] left-[191px] w-[190px] h-[190px] blur-[60px] rounded-full bg-cyan-200 z-10" />

                <div className="text-center relative z-10">
                    <div className='bg-primary-200 rounded-full mx-auto flex justify-center items-center md:w-[100px] md:h-[100px] w-[60px] h-[60px] mb-4'>
                        <UnionIcon className='md:w-11 md:h-11 w-8 h-8' />
                    </div>
                    <div className="md:text-sm text-xs font-medium text-neutral-400 dark:text-whitish-500 md:mb-3 mb-1">Your Balance</div>
                    <div className="md:text-[40px] text-2xl text-neutral-500 dark:text-whitish-500 font-bold md:mb-2 mb-1">1,206.89</div>
                    <div className='flex justify-center items-center md:gap-2 gap-1 mb-5'>
                        <Image src={USD} alt='' width={16} height={16} className='md:w-4 md:h-4 w-3 h-3' />
                        <div className="md:text-sm text-xs text-gray-400 dark:text-whitish-500">USD</div>
                    </div>
                    <PrimaryButton className='flex items-center mx-auto gap-2 px-14'>
                        <DownloadIcon /> Withdraw
                    </PrimaryButton>
                </div>

                <div className="md:mt-14 mt-6">
                    <div className="flex md:px-4 px-2 justify-between items-center md:mb-5 mb-4">
                        <h3 className="md:text-xl text-base text-neutral-500 dark:text-whitish-500 font-semibold">Activity</h3>
                        <a href="#" className="text-secondary-500 md:text-base text-xs font-semibold">View All</a>
                    </div>
                    <div>
                        {walletList.map((item, i) => (
                            <div key={i} className="flex justify-between items-center px-[10px] md:py-3 py-[9px]">
                                <div className="flex items-center md:gap-5 gap-2">
                                    <div className="md:p-4 p-3 rounded-lg bg-secondary-100 dark:bg-secondary-400 dark:bg-opacity-5 flex items-center justify-center">
                                        <Image src={item.logo} alt='' width={30} height={28} className='md:w-[30px] md:h-7 w-6 h-[22px]' />

                                    </div>
                                    <div>
                                        <p className="md:text-base text-xs text-neutral-500 dark:text-whitish-500 font-medium mb-1">{item.name}</p>
                                        <p className="md:text-base text-xs text-neutral-100 dark:text-neutral-300">{item.dateTime}</p>
                                    </div>
                                </div>
                                <div className="text-error md:text-lg text-sm font-medium">${item.amount.toFixed(2)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Withdraw

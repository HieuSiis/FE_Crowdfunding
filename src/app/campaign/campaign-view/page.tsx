'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Bg from '@/assets/images/dashboard/background-category-search.svg'
import { Facebook, Folder, Share, Star, Twitter } from '@/components/ui/Icon'
import { Avatar } from '@/assets/images/header'
import { Img1, Img2, Img3, Img4 } from '@/assets/images/campaign'
import CampaignCard from '@/components/ui/Card/CampaignCard'
import BackProjectModal from '@/components/ui/Modal/BackProjectModal'
import PrimaryButton from '@/components/ui/Button/PrimaryButton'
import FeaturedCard from '@/components/ui/Card/FeaturedCard'
import SecondaryDarkButton from '@/components/ui/Button/SecondaryDarkButton'
import { dummyData } from '@/data/dashboard'

const images = [Img1, Img2, Img3, Img4,];

const CampaignView = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <div className={`md:px-10 md:mt-[10px]`}>
            {isOpen && <BackProjectModal onClose={() => setIsOpen(false)} />}
            <div className="rounded-3xl overflow-hidden relative md:mb-10 mb-[30px] md:w-[580px] lg:w-full">
                <Image
                    src={Bg}
                    width={1243}
                    height={140}
                    alt="Education"
                    className="w-full md:h-[140px] h-[119px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h1 className="absolute inset-0 flex items-center justify-center text-white md:text-[40px] text-xl font-bold">
                    Education
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row md:gap-10 gap-5 items-center">
                {/* Left: Video + Play button */}
                <div className="relative">
                    {/* <iframe
                        className="md:w-[583px] w-[327px] md:h-[266px] h-[210px] rounded-3xl"
                        src={srcVideo}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe> */}


                    <video className='w-full md:max-w-[583px] max-w md:h-[398px] h-[210px] rounded-3xl overflow-hidden object-cover' controls>
                        <source
                            src='https://res.cloudinary.com/dl1tfq8ss/video/upload/v1749269897/nzqjpfyzalnkkh08din0.mp4'
                            type='video/mp4'
                        />
                        <track src='captions.vtt' kind='captions' label='English captions' />
                    </video>
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white bg-opacity-70 rounded-full p-3">
                                <Play className="w-6 h-6 text-gray-700" />
                            </div>
                        </div> */}


                </div>

                {/* Right: Details */}
                <div className="flex flex-col">
                    {/* Tag */}
                    <div className='flex justify-between items-center'>
                        <div className="flex items-center gap-2 text-sm font-medium text-neutral-300 mb-3">
                            <Folder width={24} height={24} />
                            <span>Film</span>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Facebook />
                            <Twitter />
                            <Share />
                        </div>
                    </div>


                    <h2 className="md:text-xl text-base font-bold text-neutral-500 dark:text-white mb-4">
                        Meet - AI Virtual Background 4K Webcam
                    </h2>
                    <p className="max-w-[413px] md:text-sm text-xs font-normal text-neutral-300  md:leading-[22px] leading-[18px]">
                        The first-ever 4K webcam that embeded AI technology to
                        protect your background during video calls.
                    </p>
                    <div className="flex items-center md:space-x-5 space-x-3">

                        <Image src={Avatar} alt='avatar' className='md:w-[52px] md:h-[52px] w-10 h-10 rounded-full' />

                        <div className='md:py-6 py-5'>
                            <div className="flex items-center sm:space-x-4 space-x-3">
                                <h3 className="md:text-lg text-sm font-medium text-neutral-500 dark:text-whitish-500">Saiful Islam</h3>
                                <div className='flex gap-1'>
                                    {Array(5).fill(0).map((item, index) => (
                                        <div key={index}>
                                            <Star className='md:w-4 md:h-4 w-[11px] h-[11px] text-amber-500' />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center md:text-sm text-xs space-x-2">
                                <span className="text-primary-500 font-semibold">02 Campaign</span>
                                <span className="w-[6px] h-[6px] bg-neutral-300 rounded-full"></span>
                                <span className='text-neutral-300 font-normal'>Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>

                    <div className='py-[10px] mb-3'>
                        {/* Progress bar */}
                        <div className="h-[5px] bg-zinc-100 rounded-md">
                            <div className="h-full bg-green-500 rounded-md w-[62%]"></div>
                        </div>
                    </div>


                    {/* Stats */}
                    <div className="flex md:gap-[65px] gap-8 md:text-base text-sm font-normal text-neutral-100 dark:text-neutral-300">
                        <div>
                            <p className="md:text-xl text-base font-bold text-neutral-400 dark:text-neutral-100">$2,000</p>
                            <p>Raised of $2,500</p>
                        </div>
                        <div>
                            <p className="md:text-xl text-base font-bold text-neutral-400 dark:text-neutral-100">173</p>
                            <p>Total backers</p>
                        </div>
                        <div>
                            <p className="md:text-xl text-base font-bold text-neutral-400 dark:text-neutral-100">30</p>
                            <p>Days left</p>
                        </div>
                    </div>
                    {/* <button type='button' onClick={() => setIsOpen(true)} className='bg-primary-600 hover:brightness-90 text-white text-base font-semibold py-3 rounded-lg mt-4'>
                        Back this project
                    </button> */}
                    <PrimaryButton type='button' onClick={() => setIsOpen(true)} className='mt-4'>
                        Back this project
                    </PrimaryButton>
                </div>
            </div>
            <div className="md:flex hidden space-x-5 mt-[30px] ml-[85px]">
                {images.map((src, index) => (
                    <div key={index} className="w-[89px] h-[70px] rounded-md hover:shadow-lg transition">
                        <Image
                            src={src}
                            alt={`Camera ${index + 1}`}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>

            <div className="absolute inset-x-0 shadow-sm bg-white dark:bg-dark-500 lg:px-[135px] px-6 md:py-5 py-3 flex items-center justify-between md:mt-[165px] mt-[30px]">
                {/* Tabs */}
                <div className="flex md:space-x-[60px] space-x-[26px] md:text-sm text-xs font-medium">
                    <a href="#" className="text-secondary-500 font-semibold">Campaign</a>
                    <a href="#" className="text-neutral-300 hover:text-secondary-500 hover:font-semibold">Risks</a>
                    <a href="#" className="text-neutral-300 hover:text-secondary-500 hover:font-semibold">FAQ</a>
                    <a href="#" className="text-neutral-300 hover:text-secondary-500 hover:font-semibold">Updates</a>
                    <a href="#" className="text-neutral-300 hover:text-secondary-500 hover:font-semibold">Comments</a>
                </div>

                {/* Button */}
                <PrimaryButton type='button' onClick={() => setIsOpen(true)} className='md:block hidden px-10'>
                    Back this project
                </PrimaryButton>
            </div>

            <div className="lg:px-5 md:-ml-10 md:mt-[280px] mt-[95px]">
                <div className="flex lg:flex-row flex-col md:gap-32 gap-10">
                    {/* Left Column - Story */}
                    <div className="space-y-2">
                        <h2 className="md:text-lg text-sm py-2 font-semibold text-neutral-500 dark:text-whitish-500">STORY</h2>

                        {[1, 2, 3].map((_, index) => (
                            <div key={index}>
                                <div className="relative lg:w-[605px] md:w-[527px] md:h-[400px] w-[327px] h-[216px] overflow-hidden">
                                    <Image
                                        src={Img1}
                                        alt={`Camera ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="mt-5 mb-9 md:pt-[10px] md:pl-[30px] pl-4 md:max-w-[543px] max-w-[297px] text-neutral-300 md:text-base text-xs font-normal md:leading-6 leading-5">
                                    {index === 0 && (
                                        <div>
                                            Capture everything in 4k, with extended battery life and pro-grade inspired features.
                                            Choose from three <span className='text-neutral-400 dark:text-neutral-100 font-semibold'>4k recording modes</span>
                                            : UHD, HD and cinematic 24p. Use the Wi-Fi feature to connect and stream your footage wirelessly
                                            directly to your iOS and Android smartphones or tablets for instant sharing. The monitor has a 3.5&quot;
                                            touch screen for easy navigation and built-in Wi-Fi that automatically connects to the last used smartphone or tablet once paired.
                                        </div>
                                    )}
                                    {index === 1 && (
                                        <div>
                                            Built with an advanced
                                            <span className='text-neutral-400 dark:text-neutral-100 font-semibold'> 4K image sensor and a Super 35 </span>
                                            imaging processer the GH4 is able to capture cinema quality images
                                            with astonishing detail. This camera has evolved into a great
                                            all-rounder for photography or filmmaking.
                                        </div>
                                    )}
                                    {index === 2 && (
                                        <div>
                                            <h3 className='py-2 text-neutral-500 dark:text-whitish-500 md:text-xl text-base font-semibold'>Digital Cameras</h3>
                                            <ul className='md:space-y-4 space-y-2 sm:text-base text-xs text-neutral-400 font-normal mt-2'>
                                                <li>1. Images can be instantly checked, and retaken if necessary.</li>
                                                <li>2. Black and White and sepia-tone photos can be easily created.</li>
                                                <li>3. Macro photography lets you shoot down to a few centimeters away.</li>
                                                <li>4. Most digital cameras can also take moving pictures.</li>
                                                <li>5. No film purchase or development costs, Rechargeable battery packs are economical🤑🤑🤑.</li>
                                                <li>6. Macro photography lets you shoot down to a few centimeters away.</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Support */}
                    <div className="md:-ml-20 lg:-ml-0">
                        <h2 className="md:text-lg text-sm py-2 font-semibold text-neutral-500 dark:text-whitish-500">Support</h2>
                        {/* Pledge Box */}
                        <div className="bg-white dark:bg-dark-500 md:py-5 py-4 md:px-6 px-5 rounded-lg shadow mt-2 md:space-y-5 space-y-4 md:mb-[60px] mb-10">
                            <h3 className="md:text-xl text-base font-medium text-center text-neutral-300 p-2">Pledge without reward</h3>
                            <input
                                type="text"
                                placeholder="$10"
                                className="w-full dark:bg-dark-500 px-5 py-2 border dark:border-dark-200 rounded-md md:text-lg text-base font-medium focus:outline-none focus:ring-1 focus:ring-secondary-400 focus:border-transparent"
                            />
                            <div className='md:p-5 p-4 rounded-lg bg-neutral-50 dark:bg-dark-600 md:text-sm text-xs'>
                                <p className="font-semibold text-neutral-400 dark:text-whitish-500 md:mb-5 mb-2">
                                    Back it because you believe in it.
                                </p>
                                <p className='text-neutral-300 font-normal'>
                                    Support the project for no reward, just because it speaks to you.
                                </p>
                            </div>

                            <SecondaryDarkButton type='button' className='w-full'>
                                Continue
                            </SecondaryDarkButton>
                        </div>

                        {/* Reward Tiers */}
                        {[1, 2, 3].map((_, i) => (
                            <FeaturedCard key={i} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='md:-ml-20 lg:-ml-0'>
                <h2 className="md:text-xl text-lg font-semibold md:mb-10 mb-5 md:mt-[70px] mt-[10px] text-neutral-500 dark:text-white">You also may be interested in</h2>
                <div className='lg:max-w-full md:max-w-[627px] max-w-[327px] overflow-x-auto'>
                    <div className="flex lg:grid md:grid-cols-2 lg:grid-cols-4 gap-[30px] md:pb-0 pb-4">
                        {dummyData.popular.map((c: any, i: number) => (
                            <CampaignCard key={i} {...c} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CampaignView

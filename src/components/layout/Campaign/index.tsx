import { Folder } from '@/components/ui/Icon'
import Link from 'next/link'
import React from 'react'

interface CampaignComponentProps {
    category: string,
    title: string,
    description: string,
    srcVideo: string,
    raised: number,
    target: number,
    backer: number,
    day: number
}

const CampaignComponent: React.FC<CampaignComponentProps> = ({ category, title, description, srcVideo, raised, target, backer, day }) => {
    return (

        <div className="flex flex-col lg:flex-row lg:gap-[30px] rounded-3xl gap-5 items-center hover:cursor-pointer lg:hover:shadow dark:bg-black">
            {/* Left: Video + Play button */}
            <div className="relative">
                {/* <iframe
                        className="lg:w-[583px] w-[327px] lg:h-[266px] h-[210px] rounded-3xl"
                        src={srcVideo}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe> */}

                <video className='w-full max-w-[583px] lg:h-auto h-[210px] rounded-3xl overflow-hidden object-fill' controls>
                    <source
                        src={srcVideo}
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
            <Link href={"/campaign/campaign-view"}>
                <div className="flex flex-col">
                    {/* Tag */}
                    <div className="flex items-center gap-2 text-sm font-medium text-neutral-300 mb-3">
                        <Folder width={24} height={24} />
                        <span>{category}</span>
                    </div>

                    <h2 className="lg:text-xl text-base font-bold text-neutral-500 dark:text-white mb-4">
                        {title}
                    </h2>
                    <p className="max-w-[413px] lg:text-sm text-xs font-normal text-neutral-300 mb-3 leading-[22px]">
                        {description}
                    </p>

                    <div className='py-[10px] mb-3'>
                        {/* Progress bar */}
                        <div className="h-[5px] bg-zinc-100 dark:bg-dark-200 rounded-md">
                            <div className="h-full bg-green-500 rounded-md w-[62%]"></div>
                        </div>
                    </div>


                    {/* Stats */}
                    <div className="flex lg:gap-[65px] gap-8 lg:text-base text-sm font-normal text-neutral-100 dark:text-neutral-300">
                        <div>
                            <p className="lg:text-xl text-base font-bold text-neutral-400 dark:text-neutral-100">${raised.toLocaleString()}</p>
                            <p>Raised of ${target.toLocaleString()}</p>
                        </div>
                        <div>
                            <p className="lg:text-xl text-base font-bold text-neutral-400 dark:text-neutral-100">{backer}</p>
                            <p>Total backers</p>
                        </div>
                        <div>
                            <p className="lg:text-xl text-base font-bold text-neutral-400 dark:text-neutral-100">{day}</p>
                            <p>Days left</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default CampaignComponent

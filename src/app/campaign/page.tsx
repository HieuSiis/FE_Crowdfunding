'use client'
import CampaignComponent from '@/components/layout/Campaign'
import SecondaryLightButton from '@/components/ui/Button/SecondaryLightButton'
import { dataCampaign } from '@/data/campaign'
import Link from 'next/link'
import React, { useState } from 'react'

const Campaign = () => {

    const [showCreated, setShowCreated] = useState(3);
    const [showFeatured, setShowFeatured] = useState(3);

    return (
        <div className='md:px-2 lg:px-10 w-full'>
            <div className='lg:px-10 px-4 md:py-8 py-5 md:rounded-[20px] rounded-2xl bg-white dark:bg-dark-500 md:mb-10 mb-[30px]'>
                <div className='flex md:flex-row flex-col justify-between items-center '>
                    <div className='flex md:gap-6 gap-4'>
                        <div className='flex justify-center md:text-2xl text-lg items-center md:w-[54px] md:h-[54px] w-10 h-10 text-white rounded-full bg-secondary-300 cursor-pointer '>+</div>
                        <div className='flex flex-col gap-2 md:text-sm text-xs font-normal'>
                            <h3 className='md:text-[22px] text-sm font-semibold text-neutral-500 dark:text-white'>Create Your Campaign</h3>
                            <p className='text-neutral-300 md:w-full w-[219px]'>Jump right into our editor and create your first Virtue campaign!</p>
                            <p className='text-primary-600'>Need any help? Learn More...</p>
                        </div>
                    </div>
                    <Link href={"/campaign/start-campaign"}>
                        <SecondaryLightButton className='md:px-12 px-6 md:mt-0 mt-4'>
                            Create campaign
                        </SecondaryLightButton>
                    </Link>
                </div>
            </div>
            <h2 className="text-lg font-semibold mb-5">Your Campaign <span className='text-secondary-500'>({dataCampaign.createdCampaigns.length})</span></h2>

            {dataCampaign.createdCampaigns.slice(0, showCreated).map((item, index) => (
                <div key={index} className='mb-10'>
                    <CampaignComponent
                        category={item.category}
                        title={item.title}
                        description={item.description}
                        srcVideo={item.srcVideo}
                        raised={item.raised}
                        target={item.target}
                        backer={item.backer}
                        day={item.day}
                    />
                </div>
            ))}

            <div className='flex justify-center mb-10'>
                <SecondaryLightButton
                    className={`md:px-12 px-8 ${showCreated >= dataCampaign.createdCampaigns.length ? 'cursor-not-allowed pointer-events-none opacity-50' : ''}`}
                    onClick={() => setShowCreated(prev => prev + 3)} >
                    See more+
                </SecondaryLightButton>
            </div>


            <h2 className="text-lg font-semibold mb-5">Your Campaign <span className='text-secondary-500'>({dataCampaign.featuredCampaigns.length})</span></h2>

            {dataCampaign.featuredCampaigns.slice(0, showFeatured).map((itm, idx) => (
                <div key={idx} className='mb-10'>
                    <CampaignComponent
                        category={itm.category}
                        title={itm.title}
                        description={itm.description}
                        srcVideo={itm.srcVideo}
                        raised={itm.raised}
                        target={itm.target}
                        backer={itm.backer}
                        day={itm.day}
                    />
                </div>
            ))}
            <div className='flex justify-center mb-10'>
                <SecondaryLightButton
                    className={`md:px-12 px-8 ${showFeatured >= dataCampaign.featuredCampaigns.length ? 'cursor-not-allowed pointer-events-none opacity-50' : ''}`}
                    onClick={() => setShowFeatured(prev => prev + 3)} >

                    See more+
                </SecondaryLightButton>
            </div>
        </div>
    )
}

export default Campaign

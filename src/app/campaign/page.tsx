'use client'
import SecondaryLightButton from '@/components/ui/Button/SecondaryLightButton'
import { CampaignData } from '@/types/campaign/campaign'

import { dataCampaignStatic } from '@/data/campaign'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../../server'
import { useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import dynamic from 'next/dynamic'

const CampaignComponent = dynamic(() => import('@/components/layout/Campaign'), {
    ssr: false,
})

const Campaign = () => {

    const [showCreated, setShowCreated] = useState(3);
    const [showFeatured, setShowFeatured] = useState(3);

    const [dataCampaign, setDataCampaign] = useState<CampaignData>({ createdCampaigns: [] });

    const user = useSelector((state: RootState) => state.auth.user)

    const { status } = useSession()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${API_URL}/campaigns/my-campaigns`, {
                    withCredentials: true, // if has cookie token
                });
                setDataCampaign(res.data.data);
            } catch (err) {
                console.error(err);
            }
        };
        if (status === "authenticated" || user) fetchData()
        else {
            setDataCampaign({ createdCampaigns: [] });
        }
    }, [status, user]);

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
                        category={item?.category}
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


            <h2 className="text-lg font-semibold mb-5">Your Campaign <span className='text-secondary-500'>({dataCampaignStatic.featuredCampaigns.length})</span></h2>

            {dataCampaignStatic.featuredCampaigns.slice(0, showFeatured).map((itm, idx) => (
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
                    className={`md:px-12 px-8 ${showFeatured >= dataCampaignStatic.featuredCampaigns.length ? 'cursor-not-allowed pointer-events-none opacity-50' : ''}`}
                    onClick={() => setShowFeatured(prev => prev + 3)} >

                    See more+
                </SecondaryLightButton>
            </div>
        </div>
    )
}

export default Campaign

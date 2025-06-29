'use client'
import React from 'react'

import CampaignCard from '@/components/ui/Card/CampaignCard';
import CampaignComponent from '@/components/layout/Campaign';
import { dummyData } from '@/data/dashboard';
import { dataCampaignStatic } from '@/data/campaign';

const Dashboard = () => {
    const firstCampaign = dataCampaignStatic.createdCampaigns[0];
    return (
        <main className="lg:px-10 md:px-5">
            {/* Your Campaign */}
            <section className="mb-[30px]">
                <h2 className="text-lg font-semibold mb-5">Your Campaign <span className='text-secondary-500'>({dataCampaignStatic.createdCampaigns.length})</span></h2>
                {firstCampaign && (
                    <div className='mb-10'>
                        <CampaignComponent
                            category={firstCampaign.category}
                            title={firstCampaign.title}
                            description={firstCampaign.description}
                            srcVideo={firstCampaign.srcVideo}
                            raised={firstCampaign.raised}
                            target={firstCampaign.target}
                            backer={firstCampaign.backer}
                            day={firstCampaign.day}
                        />
                    </div>
                )}

            </section>
            <div className='flex flex-col gap-[30px]'>
                {/* Popular Campaign */}
                <div>
                    <h2 className="text-lg font-semibold mb-[10px] text-neutral-500 dark:text-white py-[10px]">Popular Campaign</h2>
                    <div className='lg:max-w-full md:max-w-[527px] max-w-[327px] overflow-x-auto scroll-smooth snap-x snap-mandatory'>
                        <div className="flex lg:grid md:grid-cols-2 lg:grid-cols-4 gap-[30px] md:pb-0 pb-4">
                            {dummyData.popular.slice(0, 4).map((c: any, i: number) => (
                                <CampaignCard key={i} {...c} />
                            ))}
                        </div>
                    </div>
                </div>
                {/* Recent Campaign */}
                <div>
                    <h2 className="text-lg font-semibold mb-[10px] text-neutral-500 dark:text-white py-[10px]">Recent Campaign</h2>
                    <div className='lg:max-w-full md:max-w-[527px] max-w-[327px] overflow-x-auto scroll-smooth snap-x snap-proximity'>
                        <div className="flex lg:grid md:grid-cols-2 lg:grid-cols-4 gap-[30px] md:pb-0 pb-4">
                            {dummyData.recent.slice(0, 4).map((c: any, i: number) => (
                                <CampaignCard key={i} {...c} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Dashboard

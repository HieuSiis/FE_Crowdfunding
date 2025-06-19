'use client'
import PaymentOption from '@/components/ui/Option/PaymentOption';
import PrimaryButton from '@/components/ui/Button/PrimaryButton';
import SummaryCard from '@/components/ui/Card/SummaryCard';
import { Dropdown } from '@/components/ui/Icon';
import Back from '@/components/ui/Icon/Campaign/Back';
import MessageModal from '@/components/ui/Modal/MessageModal';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const ShippingAddress = () => {
    const [selectedMethod, setSelectedMethod] = useState('paypal');

    const router = useRouter();
    const [message, setMessage] = useState(false)
    return (
        <div className="flex md:flex-col flex-col-reverse lg:px-10 md:mt-[10px] md:gap-0 gap-[30px] mx-auto">
            {message && <MessageModal />}
            <div>
                <button onClick={router.back} className="text-sm text-primary-600 md:flex hidden items-center gap-2 font-semibold mb-[30px]"><Back /> Back</button>
                <div className='flex md:flex-row flex-col lg:gap-[74px] gap-[30px]'>

                    <form className="md:space-y-6 text-neutral-400 dark:text-neutral-300">
                        <h2 className="md:text-3xl text-lg text-neutral-500 dark:text-whitish-500 font-bold md:p-2 md:mb-0 mb-2">Shipping Address</h2>

                        <div className="grid md:grid-cols-2 lg:gap-11 gap-1">
                            <div>
                                <label className="block text-sm font-medium py-2">Fast Name *</label>
                                <input
                                    type="text"
                                    className="w-full border border-whitish-200 dark:border-dark-200 dark:bg-dark-600 dark:text-whitish-500 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="Jhon"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium py-2">Last Name *</label>
                                <input
                                    type="text"
                                    className="w-full border border-whitish-200 dark:border-dark-200 dark:bg-dark-600 dark:text-whitish-500 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>


                        <div>
                            <label className="block text-sm font-medium py-2">
                                Country *
                            </label>
                            <div className="relative cursor-pointer group">
                                <select
                                    className="w-full appearance-none border bg-whitish-500 dark:bg-dark-600  border-whitish-200 dark:border-dark-200 dark:text-whitish-500 rounded-md py-4 px-6 text-neutral-100 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent"
                                >
                                    <option value="" disabled selected>
                                        Select country
                                    </option>

                                    <option value="us" className="text-neutral-500 dark:text-whitish-500 hover:bg-primary-600">United States</option>
                                    <option value="vn" className="text-neutral-500 dark:text-whitish-500">Vietnam</option>
                                </select>
                                <div className="absolute pointer-events-none top-0 right-0 pr-6 py-4">
                                    <Dropdown className="text-neutral-200" />
                                </div>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:gap-11 gap-1">
                            <div>
                                <label className="block text-sm font-medium py-2">Street Address *</label>
                                <input
                                    type="text"
                                    className="w-full border border-whitish-200 dark:border-dark-200 dark:bg-dark-600 dark:text-whitish-500 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="Jhon"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium py-2">City *</label>
                                <input
                                    type="text"
                                    className="w-full border border-whitish-200 dark:border-dark-200 dark:bg-dark-600 dark:text-whitish-500 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:gap-11 gap-1">
                            <div>
                                <label className="block text-sm font-medium py-2">Postal Code *</label>
                                <input
                                    type="text"
                                    className="w-full border border-whitish-200 dark:border-dark-200 dark:bg-dark-600 dark:text-whitish-500 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="123456"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium py-2">Phone Number *</label>
                                <input
                                    type="text"
                                    className="w-full border border-whitish-200 dark:border-dark-200 dark:bg-dark-600 dark:text-whitish-500 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent"
                                    placeholder="+123 456 789"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-5 mt-6">
                            <input type="checkbox" className="w-5 h-5 accent-green-600" id="remember" />
                            <label htmlFor="remember" className="text-sm text-neutral-400 dark:text-neutral-300 font-normal max-w-[325px]">
                                Remember this address for next time use
                            </label>
                        </div>
                    </form>
                    <div>
                        {/* Contribution Summary */}
                        <SummaryCard
                            onSubmitButton={
                                <PrimaryButton onClick={() => setMessage(true)} className='w-full md:mb-6'>Submit Payment</PrimaryButton>
                            }
                        />
                    </div>
                </div>
            </div>

            {/*Payment Method */}
            <div className='md:mt-11'>
                <PaymentOption selected={selectedMethod} setSelected={setSelectedMethod} />
            </div>

            <button onClick={router.back} className="text-sm text-primary-600 flex md:hidden items-center gap-2 font-semibold md:mb-[30px]"><Back /> Back</button>

        </div>
    )
}

export default ShippingAddress

"use client";
import { Payoneer, PayoneerDark, Paypal } from "@/assets/images/payment";
import SecondaryLightButton from "@/components/ui/Button/SecondaryLightButton";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useState } from 'react'

const Payment = () => {

    const { theme } = useTheme()
    const [connected, setConnected] = useState('');

    const paymentOptions = [
        {
            id: "paypal",
            name: "PayPal",
            description: "Get paid directly via Paypal.",
            image: Paypal,
        },
        {
            id: "payoneer",
            name: "Payoneer",
            description: "Get paid worldwide your Work.",
            image: theme === 'dark' ? PayoneerDark : Payoneer,
        },
    ]
    return (
        <div className="md:px-10 mx-auto md:mt-[66px] mt-[10px]">
            <div className="text-center">
                <div>
                    <h2 className="md:text-2xl text-lg font-bold text-neutral-500 dark:text-whitish-500">
                        Connect Your Payment Processor
                    </h2>
                    <p className="md:text-base text-xs text-neutral-300 mt-2 font-normal md:max-w-[544px] max-w-[271px]">
                        To Start Processing credit card payments and donations, you will need
                        to select either Paypal or Payoneer
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center md:gap-10 gap-5 md:mt-[60px] mt-6">
                    {/* Payment Options Card */}
                    {paymentOptions.map((option) => (
                        <div key={option.id} className="bg-white dark:bg-dark-500 flex flex-col items-center md:p-6 p-5 rounded-[20px] shadow-md ">
                            <Image src={option.image} alt={option.name} width={80} height={80} className="md:mt-3 md:w-20 w-16 md:h-20 h-16" />
                            <p className="md:text-sm text-xs text-neutral-300 md:mt-10 mt-6">{option.description}</p>
                            <SecondaryLightButton onClick={() => setConnected(option.id)} className={`md:mt-6 mt-5 px-20 dark:rounded-md ${connected === option.id ? 'bg-secondary-400 dark:bg-secondary-400 text-white' : 'bg-secondary-100 text-secondary-500 hover:bg-secondary-200'}`}>
                                {connected === option.id ? 'Connected' : 'Connect'}
                            </SecondaryLightButton>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Payment

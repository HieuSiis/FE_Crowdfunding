'use client'
import PaymentOption from '@/components/ui/Option/PaymentOption';
import PrimaryButton from '@/components/ui/Button/PrimaryButton';
import SummaryCard from '@/components/ui/Card/SummaryCard';
import Back from '@/components/ui/Icon/Campaign/Back';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Checkout = () => {
    const router = useRouter();
    const [selectedMethod, setSelectedMethod] = useState('paypal');
    return (
        <div className="md:px-20 md:mt-[10px]">
            <button onClick={() => router.back()} className="text-sm text-primary-600 flex items-center gap-2 font-semibold md:mb-[30px] mb-5"><Back /> Back</button>
            <div className='flex lg:flex-row flex-col items-start md:gap-[135px] gap-[30px]'>
                {/* Back and Payment Method */}
                <PaymentOption selected={selectedMethod} setSelected={setSelectedMethod} />

                {/* Contribution Summary */}
                <SummaryCard
                    onSubmitButton={
                        <Link href={"/campaign/shipping-address"}>
                            <PrimaryButton className='w-full md:mb-6'>
                                Submit Payment
                            </PrimaryButton>
                        </Link>
                    }
                />
            </div>

        </div>
    )
}

export default Checkout

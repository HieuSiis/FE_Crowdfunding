import { Payoneer, PayoneerDark, Paypal } from '@/assets/images/payment';
import Image from 'next/image';
import React from 'react'
import Check from '@/components/ui/Icon/Campaign/Check';
import { useTheme } from 'next-themes';

const PaymentOption = ({ selected, setSelected }: { selected: string, setSelected: (id: string) => void }) => {

    const { theme } = useTheme();
    const paymentMethods = [
        { id: 'paypal', label: 'PayPal', icon: Paypal },
        { id: 'payoneer', label: 'Payoneer', icon: theme === 'dark' ? PayoneerDark : Payoneer, },
    ];
    return (
        <div className="flex flex-col items-start md:gap-8 gap-5">
            <h2 className="md:text-3xl text-lg text-neutral-500 dark:text-whitish-500 font-bold md:p-2">Payment</h2>
            <div className="flex md:gap-8 gap-4">
                {paymentMethods.map((method) => (
                    <div
                        key={method.id}
                        onClick={() => setSelected(method.id)}
                        className={`relative rounded-2xl md:px-10 px-[30px] md:py-6 py-[18px] flex items-center justify-center bg-white dark:bg-dark-500 shadow-md cursor-pointer border 
                            ${selected === method.id ? 'border-primary-500' : 'border-transparent'}`}
                    >
                        <Image
                            src={method.icon}
                            alt={method.label}
                            width={52}
                            height={52}
                            className="md:w-[52px] md:h-[52px] w-10 h-10"
                        />
                        {selected === method.id && (
                            <div className="absolute md:top-3 top-2 md:right-3 right-2">
                                <Check />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PaymentOption

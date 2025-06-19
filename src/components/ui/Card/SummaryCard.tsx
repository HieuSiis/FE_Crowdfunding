import { Img3 } from '@/assets/images/campaign';
import Image from 'next/image';
import React, { ReactNode } from 'react'

type SummaryCardProps = {
    onSubmitButton?: ReactNode;
};

const SummaryCard = ({ onSubmitButton }: SummaryCardProps) => {
    return (
        <div className="bg-white dark:bg-dark-500 rounded-[20px] shadow md:px-5 px-4 md:py-4 py-6">
            <h3 className="md:text-lg text-xs font-semibold text-neutral-500 dark:text-whitish-500 md:mb-4 mb-5 md:p-[10px]">Contribution Summary</h3>

            <div className="flex items-center gap-4 bg-secondary-100 dark:bg-dark-200 rounded-lg md:px-5 px-4 md:py-4 py-3 mb-4">
                <div className="md:w-[89px] w-16 md:h-[70px] h-[50px] bg-gray-100 rounded-md flex items-center justify-center">
                    <Image src={Img3} alt="Camera" width={89} height={70} />
                </div>
                <div className="flex-1">
                    <p className="md:text-base text-xs font-medium text-neutral-500 dark:text-whitish-500">Special One Camera</p>
                </div>
                <div className="md:text-base text-xs font-bold text-neutral-500 dark:text-whitish-500">$2,724 USD</div>
            </div>

            <div className="md:text-base text-xs text-neutral-400 dark:text-neutral-300 font-medium mb-2">Subtotal <span className="float-right">$2,724 USD</span></div>
            <div className="md:text-base text-xs text-neutral-400 dark:text-neutral-300 font-medium md:mb-[30px] mb-5">Shipping <span className="float-right">$0 USD</span></div>

            <div className="md:text-base text-xs text-neutral-500 dark:text-whitish-500 font-bold md:mb-5 mb-3">TOTAL <span className="float-right">$2,724 USD</span></div>

            <div className="flex items-start md:gap-5 gap-3 mb-3 py-[10px]">
                <input type="checkbox" className="mt-1 w-5 h-5 accent-green-600" id="terms" />
                <label htmlFor="terms" className="md:text-sm text-xs text-neutral-400 dark:text-neutral-300 font-normal max-w-[325px]">
                    I agree to the <a href="#" className="text-secondary-500">Terms of Use</a> and have read and understand the <a href="#" className="text-secondary-500">Privacy policy</a>.
                </label>
            </div>
            {onSubmitButton}
        </div>
    )
}

export default SummaryCard

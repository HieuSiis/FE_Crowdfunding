import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
    children: React.ReactNode,
    className?: string
} & ComponentProps<"button">

const SecondaryLightButton = ({ children, className = "", ...rest }: ButtonProps) => {
    return (
        <button type='button' className={twMerge("md:py-[13px] py-[9px] bg-secondary-100 rounded-[10px] dark:bg-[#352A65] hover:text-white transition-all duration-300 text-secondary-500 dark:text-white hover:bg-secondary-400 dark:hover:bg-secondary-400 md:text-base dark:rounded-full md:dark:rounded-[10px] text-sm font-semibold", className)} {...rest}>
            {children}
        </button>
    )
}

export default SecondaryLightButton

import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
    children: React.ReactNode,
    className?: string
} & ComponentProps<"button">

const PrimaryButton = ({ children, className = "", ...rest }: ButtonProps) => {
    return (
        <button className={twMerge("bg-primary-600 hover:opacity-90 transition duration-300 text-white md:py-[13px] py-[9px] rounded-lg md:text-base text-sm font-semibold", className)} {...rest}>
            {children}
        </button>
    )
}

export default PrimaryButton

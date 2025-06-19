import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = {
    children: React.ReactNode,
    className?: string
} & ComponentProps<"button">

const SecondaryDarkButton = ({ children, className = "", ...rest }: ButtonProps) => {
    return (
        <button type='button' className={twMerge("bg-secondary-400 hover:bg-secondary-500 text-white md:py-[13px] py-[9px] rounded-lg md:text-base text-sm font-semibold", className)} {...rest}>
            {children}
        </button>
    )
}

export default SecondaryDarkButton

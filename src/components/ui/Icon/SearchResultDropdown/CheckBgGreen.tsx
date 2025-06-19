import React from 'react'

type CheckBgGreenProps = {
    className: string
}
const CheckBgGreen = ({ className }: CheckBgGreenProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
            <g clipPath="url(#clip0_5256_4049)">
                <path d="M3.6 0H20.4C22.44 0 24 1.56 24 3.6V20.4C24 22.44 22.44 24 20.4 24H3.6C1.56 24 0 22.44 0 20.4V3.6C0 1.56 1.56 0 3.6 0Z" fill="#1DC071" />
                <path d="M9.60029 13.92L6.48029 10.8L4.80029 12.48L9.60029 17.28L19.2003 7.68L17.5203 6L9.60029 13.92Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_5256_4049">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default CheckBgGreen

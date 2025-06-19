import React from 'react'

interface CloseProps {
    className: string
}
const Close: React.FC<CloseProps> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
            <g clipPath="url(#clip0_5256_4511)">
                <path d="M20 5.61143L18.3886 4L12 10.3886L5.61143 4L4 5.61143L10.3886 12L4 18.3886L5.61143 20L12 13.6114L18.3886 20L20 18.3886L13.6114 12L20 5.61143Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_5256_4511">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Close

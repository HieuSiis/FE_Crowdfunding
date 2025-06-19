import React from 'react'

interface DropdownBoxProps {
    className: string
}
const DropdownBox: React.FC<DropdownBoxProps> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="69" height="64" viewBox="0 0 69 64" fill="none" className={className}>
            <g filter="url(#filter0_d_5256_4280)">
                <path d="M29.1699 11.5C31.0944 8.16667 35.9056 8.16667 37.8301 11.5L57.3157 45.25C59.2402 48.5833 56.8346 52.75 52.9856 52.75H14.0144C10.1654 52.75 7.7598 48.5833 9.6843 45.25L29.1699 11.5Z" fill="currentColor" />
            </g>
            <defs>
                <filter id="filter0_d_5256_4280" x="0.00683594" y="0" width="68.9863" height="63.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1" dy="1" />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.545098 0 0 0 0 0.631373 0 0 0 0 0.560784 0 0 0 0.05 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5256_4280" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5256_4280" result="shape" />
                </filter>
            </defs>
        </svg>
    )
}

export default DropdownBox

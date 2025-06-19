import React from 'react'

interface NextIconProps {
    className: string
}

const NextIcon: React.FC<NextIconProps> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M10 17L15 12L10 7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    )
}

export default NextIcon

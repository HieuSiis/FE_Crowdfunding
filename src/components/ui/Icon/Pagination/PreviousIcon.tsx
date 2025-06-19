import React from 'react'

interface PreviousIconProps {
    className: string
}
const PreviousIcon: React.FC<PreviousIconProps> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M15 7L10 12L15 17" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    )
}

export default PreviousIcon

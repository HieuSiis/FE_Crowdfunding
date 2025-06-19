import React from 'react'

interface DropdownProps {
    className: string
}

const Dropdown: React.FC<DropdownProps> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" />
        </svg>
    )
}

export default Dropdown

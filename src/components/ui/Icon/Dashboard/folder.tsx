import React from 'react'

interface FolderProps {
    width: number
    height: number
}
const Folder: React.FC<FolderProps> = ({ width, height }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_5237_3724)">
                <path d="M9.17 6L11.17 8H20V18H4V6H9.17ZM10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z" fill="#808191" />
            </g>
            <defs>
                <clipPath id="clip0_5237_3724">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Folder

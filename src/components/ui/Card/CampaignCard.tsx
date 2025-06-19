import Image from "next/image";
import { Folder } from "../Icon";

interface CampaignCardProps {
    image: string;
    category: string;
    title: string;
    description: string;
    amountRaised: number;
    target: number;
    backers: number;
    author: string;
    avatar: string;
}

export default function CampaignCard({
    image,
    category,
    title,
    description,
    amountRaised,
    target,
    backers,
    author,
    avatar
}: CampaignCardProps) {
    return (
        <div className="bg-white dark:bg-dark-500 rounded-2xl shadow-sm flex-col md:w-auto w-[327px] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden">
                <Image src={image} alt={title} width={288} height={158} className="w-full h-full object-cover" />
            </div>
            <div className="px-5">
                <div className="flex items-center mt-4 gap-[10px]">
                    <Folder width={18} height={18} />
                    <div className=" text-xs font-medium text-neutral-300">{category}</div>
                </div>
                <h3 className="font-semibold text-base text-neutral-500 dark:text-white mt-4">{title}</h3>
                <p className="text-neutral-300 font-normal text-xs mt-1">{description}</p>
                <div className="flex space-x-12 mt-4">
                    <div className="">
                        <p className="text-sm font-semibold text-neutral-400 dark:text-neutral-100">${amountRaised.toLocaleString()}</p>
                        <p className="text-neutral-100 dark:text-neutral-300 text-xs font-normal">Raised of ${target.toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-neutral-400 dark:text-neutral-100">{backers}</p>
                        <p className="text-neutral-100 dark:text-neutral-300 text-xs font-normal">Total backers</p>
                    </div>

                </div>

                <div className="flex items-center mt-5 mb-4 gap-[10px]">
                    <Image src={avatar} alt={author} width={30} height={30} className="rounded-full" />
                    <div className="text-neutral-300 text-xs font-normal">
                        by
                        <span className=" text-neutral-400 dark:text-neutral-100 font-semibold"> {author}</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

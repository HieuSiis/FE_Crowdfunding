import Close from '../Icon/SearchBox/close';
import Link from 'next/link';
import PrimaryButton from '../Button/PrimaryButton';
import FeaturedCard from '../Card/FeaturedCard';
import SecondaryDarkButton from '../Button/SecondaryDarkButton';

type BackProjectModalProps = {
    onClose: () => void;
};

export default function BackProjectModal({ onClose }: BackProjectModalProps) {
    return (
        <div className="absolute top-0 left-0 right-0 z-50 flex justify-center ">
            <div onClick={onClose} className='fixed inset-0 -z-10 bg-dark-600 bg-opacity-60 dark:bg-opacity-90'></div>
            <div className="w-full max-w-md bg-white dark:bg-dark-500 md:rounded-[20px] rounded-2xl md:px-10 md:py-[10px] p-5 shadow-xl md:mt-[200px] mt-20">
                <div className="flex justify-end md:py-[10px]">
                    <button onClick={onClose} className="text-gray-400 hover:text-black">
                        <Close className='text-neutral-300 dark:text-neutral-100 hover:text-error dark:hover:text-error' />
                    </button>
                </div>
                <h2 className="md:text-2xl text-xl text-center font-bold text-neutral-500 dark:text-whitish-500 md:mb-10 mb-2">Back this project</h2>
                <div>
                    <label className="block text-sm font-medium py-2 dark:text-neutral-300">Enter the contribute amount</label>
                    <input
                        type="text"
                        placeholder="$10"
                        className="w-full px-6 py-4 border dark:border-dark-200 dark:bg-dark-500 rounded-md text-sm font-medium focus:outline-none focus:ring-1 focus:ring-secondary-400 focus:border-transparent"
                    />
                </div>
                <p className="md:text-sm text-xs text-neutral-300 py-5">
                    Contribution are not associatied with perks
                </p>
                <PrimaryButton type='button' className='md:mb-[60px] mb-[30px] px-10'>
                    Continue
                </PrimaryButton>

                {/* Card */}
                {Array(3).fill(0).map((item, i) => (
                    <div key={i}>
                        <FeaturedCard />
                        <Link href={"/campaign/checkout"}>
                            <SecondaryDarkButton className='w-full mb-10'>
                                Get this perk
                            </SecondaryDarkButton>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

'use client';
import PrimaryButton from '@/components/ui/Button/PrimaryButton';
import { CalendarIcon, EditIcon, EmailIcon, EyeOffIcon, EyeOnIcon, LockIcon } from '@/components/ui/Icon';
import { RootState } from '@/redux/store';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { API_URL } from '../../../server';
import axios from 'axios';
import { Loader } from 'lucide-react';

export default function AccountInformation() {
    const [isEditingPersonal, setIsEditingPersonal] = useState(false);
    const [isEditingCredentials, setIsEditingCredentials] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [loading, setLoading] = useState(false)
    const { status, data: session } = useSession()
    const router = useRouter();
    const user = useSelector((state: RootState) => state.auth.user)

    console.log(user)
    const [form, setForm] = useState({
        firstName: 'Mahfuzul Islam',
        lastName: 'Nabil',
        dob: '1998-09-27',
        mobile: '+123 456 7890',
        email: 'hellouihut@gmail.com',
        // password: 'password',
        // confirmPassword: 'password',
    });

    const [errors, setErrors] = useState({
        newPassword: '',
        confirmPassword: ''
    });
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: ''
    });

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({ ...prev, [name]: value }));

    };
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name } = e.target;
        setErrors((prev) => ({ ...prev, [name]: '' }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        let message = ''


        if (name === 'newPassword') {
            if (!value || value.length < 8) {
                message = 'Password must be 8 character'
            }
        }

        if (name === 'confirmPassword') {
            if (!value || value.length < 8) {
                message = 'Password must be 8 character'
            } else {
                const form = e.currentTarget.form;
                if (form) {
                    const formData = new FormData(form);
                    const newPassword = formData.get('newPassword') as string;
                    if (newPassword !== value) {
                        message = 'Password not matched';
                    }
                }
            }
        }

        setErrors(prev => ({ ...prev, [name]: message }))
    }

    useEffect(() => {
        if (status === 'loading') return;
        if (status !== 'authenticated' && !user) {
            router.replace('/sign-in');
        }
        if (status === 'authenticated' && session?.user) {
            setForm(prev => ({
                ...prev,
                firstName: session?.user?.name?.split(' ')[0] || '',
                lastName: session?.user?.name?.split(' ').slice(1).join(' ') || '',
                email: session?.user?.email || ''
            }));
        }
        if (user) {
            setForm(prev => ({
                ...prev,
                email: user.email || ''
            }));
        }
    }, [status, router, session, user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmitPersonal = () => {
        setIsEditingPersonal(false);
        console.log('Personal Info:', form);
    };

    // const handleSubmitCredentials = async () => {
    //     if (!formData.newPassword || !formData.confirmPassword) {
    //         alert("Please fill in all fields.");
    //         return;
    //     }

    //     if (formData.newPassword.length < 8) {
    //         setErrors(prev => ({ ...prev, newPassword: 'Password must be at least 8 characters' }));
    //         return;
    //     }

    //     if (formData.newPassword !== formData.confirmPassword) {
    //         setErrors(prev => ({ ...prev, confirmPassword: 'Passwords do not match' }));
    //         return;
    //     }

    //     setLoading(true)

    //     try {
    //         const data = { email: user?.email, password: formData.newPassword, passwordConfirm: formData.confirmPassword };

    //         const response = await axios.post(`${API_URL}/users/reset-password`, data, { withCredentials: true })
    //         alert("Password updated successfully!");
    //         setIsEditingCredentials(false);

    //     } catch (error) {
    //         console.log(error)
    //         alert(error)
    //     } finally {
    //         setLoading(false)
    //     }
    // };

    const handleSubmitCredentials = async () => {
        if (!formData.newPassword || !formData.confirmPassword) {
            alert("Please fill in all fields.");
            return;
        }

        if (formData.newPassword.length < 8) {
            setErrors(prev => ({ ...prev, newPassword: 'Password must be at least 8 characters' }));
            return;
        }

        if (formData.newPassword !== formData.confirmPassword) {
            setErrors(prev => ({ ...prev, confirmPassword: 'Passwords do not match' }));
            return;
        }

        setLoading(true);

        try {
            // 1. Gửi OTP đến email
            await axios.post(`${API_URL}/users/forget-password`, { email: user?.email }, { withCredentials: true });

            // 2. Lưu dữ liệu tạm
            localStorage.setItem('pendingResetPassword', JSON.stringify({
                email: user?.email,
                newPassword: formData.newPassword,
                confirmPassword: formData.confirmPassword,
            }));

            // 3. Điều hướng tới verify-otp
            router.push('/profile/verify-otp');
        } catch (error) {
            console.log(error);
            alert('Failed to send OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const isFormValid = () => {
        return (
            formData.newPassword.length >= 8 &&
            formData.confirmPassword.length >= 8 &&
            formData.newPassword === formData.confirmPassword
        );
    };
    return (
        <div className='lg:px-36 md:px-10 pb-11'>
            <div className="lg:w-[1097px] md:w-[568px] w-[327px] lg:px-[130px] px-5 md:py-14 py-6 bg-white dark:bg-dark-500 rounded-xl shadow-sm">
                <h2 className="md:text-2xl text-lg font-bold text-neutral-500 dark:text-white">Account Information</h2>
                <p className="md:text-sm text-xs text-neutral-300 mt-1">Update your account information</p>

                {/* PERSONAL INFO */}
                <div className="md:mt-14 mt-10">
                    <div className="flex justify-between items-center">
                        <h3 className="md:text-xl text-base md:font-bold font-semibold text-neutral-500 dark:text-white">Personal Information</h3>
                        <button onClick={() => setIsEditingPersonal(!isEditingPersonal)} className="flex gap-2 items-center text-secondary-400 md:text-xl text-sm font-semibold">
                            <EditIcon /> Edit
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-y-6 gap-y-1 md:mt-9 mt-4">
                        <div>
                            <label className="block text-sm font-medium py-2 text-neutral-400 dark:text-neutral-300">First Name*</label>
                            <input
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                readOnly={!isEditingPersonal}
                                className="w-full text-sm border border-whitish-200 dark:bg-dark-500 dark:border-dark-200 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-secondary-400 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium py-2 text-neutral-400 dark:text-neutral-300">Last Name*</label>
                            <input
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                readOnly={!isEditingPersonal}
                                className="w-full text-sm border border-whitish-200 dark:border-dark-200 dark:bg-dark-500 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-secondary-400 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="  block text-sm font-medium py-2 text-neutral-400 dark:text-neutral-300">Date of Birth</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    name="dob"
                                    value={form.dob}
                                    onChange={handleChange}
                                    readOnly={!isEditingPersonal}
                                    className="custom-date w-full text-sm bg-white border border-whitish-200 dark:border-dark-200 dark:bg-dark-500 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-secondary-400 focus:border-transparent"
                                />
                                <div className="absolute top-4 right-6 text-neutral-400 pointer-events-none cursor-pointer">
                                    <CalendarIcon />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium py-2 text-neutral-400 dark:text-neutral-300">Mobile Number</label>
                            <input
                                name="mobile"
                                value={form.mobile}
                                onChange={handleChange}
                                readOnly={!isEditingPersonal}
                                className="w-full text-sm border border-whitish-200 dark:border-dark-200 dark:bg-dark-500 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-secondary-400 focus:border-transparent"
                            />
                        </div>
                    </div>

                    {isEditingPersonal && (
                        <button
                            onClick={handleSubmitPersonal}
                            className="md:mt-[30px] md:text-base text-sm mt-6 bg-primary-600 text-white md:px-14 px-10 py-3 rounded-lg hover:bg-primary-500"
                        >
                            Update
                        </button>
                    )}
                </div>

                {/* CREDENTIALS */}
                <div className="mt-[51px]">
                    <div className="flex justify-between items-center">
                        <h3 className="md:text-xl text-base md:font-bold font-semibold text-neutral-500 dark:text-white">Credentials</h3>
                        <button onClick={() => setIsEditingCredentials(!isEditingCredentials)} className="flex gap-2 items-center text-secondary-400 md:text-xl text-sm font-semibold">
                            <EditIcon /> Edit
                        </button>
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-medium py-2 text-neutral-400 dark:text-neutral-300">Email</label>
                        <div className="relative">
                            <span className="absolute left-6 top-[14px]">
                                <EmailIcon />
                            </span>
                            <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                readOnly
                                className="w-full text-sm border pl-16 border-whitish-200 dark:border-dark-200 dark:bg-dark-500 rounded-lg py-4 px-6 focus:outline-none focus:ring-1 focus:ring-secondary-400 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <label className="block text-sm font-medium py-2 text-neutral-400 dark:text-neutral-300">New Password</label>
                            <div className="relative">
                                <span className="absolute left-6 top-[14px]">
                                    <LockIcon />
                                </span>
                                <input
                                    type={showPassword || errors.newPassword ? 'text' : 'password'}
                                    name="newPassword"
                                    value={isEditingCredentials ? errors.newPassword || formData.newPassword : formData.newPassword}
                                    onBlur={!isEditingCredentials ? undefined : handleBlur}
                                    onFocus={handleFocus}
                                    onChange={handleChanges}
                                    readOnly={!isEditingCredentials}
                                    className={`w-full rounded-lg pl-16 dark:bg-dark-500 py-4 px-6 focus:outline-none focus:border-transparent text-sm focus:ring-1 ${errors.newPassword && isEditingCredentials
                                        ? 'border border-error focus:ring-error text-error placeholder-error'
                                        : 'border border-whitish-200 dark:border-dark-200 dark:text-whitish-500 dark:placeholder:text-neutral-400 focus:ring-secondary-400'
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 inset-y-0"
                                >
                                    {showPassword ? <EyeOnIcon className='text-neutral-200' /> : <EyeOffIcon className='text-neutral-200' />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium py-2 text-neutral-400 dark:text-neutral-300">Confirm Password</label>
                            <div className="relative">
                                <span className="absolute left-6 top-[14px]">
                                    {/* Lock */}
                                    <LockIcon />
                                </span>
                                <input
                                    type={showConfirm || errors.confirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    value={isEditingCredentials ? errors.confirmPassword || formData.confirmPassword : formData.confirmPassword}
                                    onBlur={!isEditingCredentials ? undefined : handleBlur}
                                    onFocus={handleFocus}
                                    onChange={handleChanges}
                                    readOnly={!isEditingCredentials}
                                    className={`w-full rounded-lg pl-16 dark:bg-dark-500 py-4 px-6 focus:outline-none focus:border-transparent text-sm focus:ring-1 ${errors.confirmPassword && isEditingCredentials
                                        ? 'border border-error focus:ring-error text-error placeholder-error'
                                        : 'border border-whitish-200 dark:border-dark-200 dark:text-whitish-500 dark:placeholder:text-neutral-400 focus:ring-secondary-400'
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute right-3 inset-y-0"
                                >
                                    {showConfirm ? <EyeOnIcon className='text-neutral-200' /> : <EyeOffIcon className='text-neutral-200' />}
                                </button>
                            </div>
                        </div>
                    </form>

                    {isEditingCredentials && (
                        <PrimaryButton onClick={handleSubmitCredentials} disabled={loading || !isFormValid()} className='md:mt-[30px] disabled:bg-primary-300 mt-6 md:px-14 px-10'>
                            {loading ? <Loader className='animate-spin' /> : 'Update'}
                        </PrimaryButton>
                    )}
                </div>
            </div>
        </div>

    );
}

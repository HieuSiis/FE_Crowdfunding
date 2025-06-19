'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Google from '@/assets/images/logos/Google.svg'
import Image from 'next/image'
import { EyeOffIcon, EyeOnIcon } from '@/components/ui/Icon'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import axios from 'axios'
import { API_URL } from '../../../../server'
import { useRouter } from 'next/navigation'
import { Loader } from 'lucide-react'

const CreateNewPassword = () => {
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const email = useSelector((state: RootState) => state.auth.user?.email)
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const user = useSelector((state: RootState) => state.auth.user)
    const [errors, setErrors] = useState({
        newPassword: '',
        confirmPassword: ''
    });
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: ''
    });

    useEffect(() => {
        if (!user) router.replace("/sign-in")
    }, [user, router])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const handleSubmit = async () => {
        if (!email || !formData.newPassword || !formData.confirmPassword) {
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

        setLoading(true)

        try {
            const data = { email, password: formData.newPassword, passwordConfirm: formData.confirmPassword };

            const response = await axios.post(`${API_URL}/users/reset-password`, data, { withCredentials: true })
            router.push('/sign-in/password-reset-success')
        } catch (error) {
            console.log(error)
            alert(error)
        } finally {
            setLoading(false)
        }
    }
    const isFormValid = () => {
        return (
            formData.newPassword.length >= 8 &&
            formData.confirmPassword.length >= 8 &&
            formData.newPassword === formData.confirmPassword
        );
    };
    return (
        <div className='flex items-center justify-center w-full md:h-screen md:mt-0 mt-14 z-10'>
            <div className='bg-secondary-500 dark:bg-primary-600 bg-opacity-5 dark:bg-opacity-5 w-[2838px] h-[2838px] rounded-[2838px] absolute md:top-[528px] top-[100px] -left-[418px] -z-10'></div>
            <div className='md:py-[50px] py-[30px] md:px-[60px] px-5 rounded-xl bg-white dark:bg-dark-500 shadow-md'>
                <h2 className='md:text-2xl text-xl font-bold text-neutral-500 dark:text-whitish-500 md:mb-5 mb-4'>Create new password</h2>
                <p className='md:max-w-[296px] max-w-[254px] md:text-sm text-xs text-neutral-100 dark:text-neutral-300'>Your new password must be different from previous used passwords.</p>
                <form className="mt-2 text-neutral-400" >
                    <div className='mb-3'>
                        <label className="block text-sm font-medium py-2">New password *</label>
                        <div className="relative">
                            <input
                                name='newPassword'
                                onBlur={handleBlur}
                                type={showNewPassword || errors.newPassword ? 'text' : 'password'}
                                onFocus={handleFocus}
                                onChange={handleChange}
                                value={errors.newPassword ? errors.newPassword : formData.newPassword}
                                placeholder="New Password"
                                className={`w-full rounded-lg dark:bg-dark-500 py-4 px-6 focus:outline-none focus:border-transparent text-sm focus:ring-1 ${errors.newPassword
                                    ? 'border border-error focus:ring-error text-error placeholder-error'
                                    : 'border border-whitish-200 dark:border-dark-200 dark:text-whitish-500 dark:placeholder:text-neutral-400 focus:ring-primary-400'
                                    }`}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-6 flex items-center"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                            >
                                {showNewPassword ? <EyeOnIcon className='text-neutral-200 dark:text-neutral-400' /> : <EyeOffIcon className='text-neutral-200 dark:text-neutral-400' />}
                            </button>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <label className="block text-sm font-medium py-2">Password *</label>
                        <div className="relative mb-3">
                            <input
                                name='confirmPassword'
                                onBlur={handleBlur}
                                type={showConfirmPassword || errors.confirmPassword ? 'text' : 'password'}
                                onFocus={handleFocus}
                                onChange={handleChange}
                                value={errors.confirmPassword ? errors.confirmPassword : formData.confirmPassword}
                                placeholder="Confirm Password"
                                className={`w-full rounded-lg py-4 px-6 focus:outline-none dark:bg-dark-500 focus:border-transparent text-sm focus:ring-1 ${errors.confirmPassword
                                    ? 'border border-error focus:ring-error text-error placeholder-error'
                                    : 'border border-whitish-200 dark:border-dark-200 dark:text-whitish-500 dark:placeholder:text-neutral-400 focus:ring-primary-400'
                                    }`}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-6 flex items-center"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <EyeOnIcon className='text-neutral-200 dark:text-neutral-400' /> : <EyeOffIcon className='text-neutral-200 dark:text-neutral-400' />}
                            </button>
                        </div>
                    </div>

                    {/* Submit */}

                    <button
                        onClick={handleSubmit}
                        type="submit"
                        disabled={loading || !isFormValid()}
                        className="md:w-[356px] w-[287px] disabled:bg-primary-300 bg-primary-600 flex justify-center text-white rounded-lg py-3 font-semibold hover:bg-primary-500"
                    >

                        {loading ? <Loader className='animate-spin' /> : 'Continue'}
                    </button>
                </form>
            </div>

        </div>
    )
}

export default CreateNewPassword

'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Google from '@/assets/images/logos/Google.svg'
import Image from 'next/image'
import { EyeOffIcon, EyeOnIcon } from '@/components/ui/Icon'
import axios from 'axios'
import { API_URL } from '../../../server'
import { Loader } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { setAuthUser } from '@/redux/authSlice'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
const SignUp = () => {

    const dispatch = useDispatch()
    const router = useRouter()
    const { status } = useSession();

    const [agreeTerms, setAgreeTerms] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        password: '',
    });
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        if (status === 'authenticated') {
            alert('Logged in successfully!');
            router.push('/');
            dispatch(setAuthUser(null));
        }
    }, [status, router, dispatch]);
    console.log(formData)
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

        if (name === 'fullName') {
            if (value.trim().length < 3) {
                message = 'Full name must be at least 3 characters';
            } else if (/^\d/.test(value.trim())) {
                message = 'Full name should not start with a number';
            }
        }

        if (name === 'email') {
            if (!value.trim()) {
                message = 'Email is required'
            } else if (!/^\S+@\S+\.\S{2,}$/.test(value)) {
                message = 'Invalid email format'
            }
        }

        if (name === 'password') {
            if (!value || value.length < 8) {
                message = 'Password must be 8 character'
            }
        }

        setErrors(prev => ({ ...prev, [name]: message }))
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await axios.post(`${API_URL}/users/sign-up`, formData, {
                withCredentials: true
            })

            const user = response.data.data.user
            dispatch(setAuthUser(user))
            router.push('/sign-up/verify')
        } catch (error: any) {
            setErrors((prev) => ({
                ...prev,
                email: error.response.data.message
            }));
        } finally {
            setLoading(false)
        }
    }

    const isFormValid = () => {
        return (
            formData.fullName.trim().length >= 3 &&
            !/^\d/.test(formData.fullName.trim()) &&
            /^\S+@\S+\.\S{2,}$/.test(formData.email.trim()) &&
            formData.password.length >= 8 && agreeTerms
        );
    };

    return (
        <div className="flex md:items-center justify-center w-full md:h-screen z-20">
            <div className='bg-secondary-500 dark:bg-primary-600 bg-opacity-5 dark:bg-opacity-5 w-[2838px] h-[2838px] rounded-[2838px] absolute md:top-[528px] top-[100px] -left-[418px] -z-10 '></div>
            <div className="bg-white dark:bg-dark-500 shadow-md rounded-xl md:py-[50px] py-[30px] md:px-[60px] px-5 relative">
                <h2 className="text-center md:text-xl text-lg font-semibold text-neutral-500 dark:text-whitish-500">Sign Up</h2>
                <p className="text-center md:text-sm text-xs text-neutral-300 md:mt-2 mt-1">
                    Already have an account?{' '}
                    <Link href="/sign-in" className="text-primary-600 font-medium hover:underline">
                        Sign in
                    </Link>
                </p>

                {/* Google Sign up */}
                <button onClick={() => signIn('google')} className="md:mt-[30px] mt-6 w-full flex items-center justify-center gap-2 border dark:hover:bg-dark-300 dark:border-dark-200 border-whitish-200 rounded-lg py-3 hover:bg-whitish-300">
                    <Image src={Google} alt='' width={24} height={24} />
                    <span className="text-base font-semibold text-neutral-400 dark:text-whitish-500">Sign up with google</span>
                </button>

                <div className="text-center md:text-sm text-xs text-neutral-400 dark:text-whitish-500 py-2 mt-2">Or sign up with email</div>

                {/* Form */}
                <form className="md:mt-2 mt-1 md:space-y-4 space-y-1 text-neutral-400" onSubmit={submitHandler}>
                    <div>
                        <label className="block text-sm font-medium py-2">Full Name *</label>
                        <input
                            name="fullName"
                            value={errors.fullName ? errors.fullName : formData.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}

                            placeholder={errors.fullName || 'John Doe'}
                            className={`w-full rounded-lg py-4 px-6 focus:outline-none dark:bg-dark-500 focus:border-transparent focus:ring-1 ${errors.fullName
                                ? 'border border-error focus:ring-error text-error placeholder-error'
                                : 'border border-whitish-200 dark:border-dark-200 dark:text-whitish-500 dark:placeholder:text-neutral-400 focus:ring-primary-400'
                                }`}
                        />


                    </div>
                    <div>
                        <label className="block text-sm font-medium py-2">Email *</label>
                        <input
                            name="email"
                            type="email"
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                            onChange={handleChange}
                            value={errors.email ? errors.email : formData.email}
                            placeholder='example@gmail.com'
                            className={`w-full rounded-lg py-4 px-6 focus:outline-none dark:bg-dark-500  focus:border-transparent focus:ring-1 ${errors.email
                                ? 'border border-error focus:ring-error text-error placeholder-error'
                                : 'border border-whitish-200 dark:border-dark-200 dark:text-whitish-500 dark:placeholder:text-neutral-400 focus:ring-primary-400'
                                }`}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium py-2">Password *</label>
                        <div className="relative">
                            <input
                                name='password'
                                onBlur={handleBlur}
                                type={showPassword || errors.password ? 'text' : 'password'}
                                onFocus={handleFocus}
                                onChange={handleChange}
                                value={errors.password ? errors.password : formData.password}
                                placeholder="Create a password"
                                className={`w-full rounded-lg py-4 px-6 dark:bg-dark-500  focus:outline-none focus:border-transparent focus:ring-1 ${errors.password
                                    ? 'border border-error focus:ring-error text-error placeholder-error'
                                    : 'border border-whitish-200 dark:border-dark-200 dark:text-whitish-500 dark:placeholder:text-neutral-400 focus:ring-primary-400'
                                    }`}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-6 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOnIcon className='text-neutral-200 dark:text-neutral-400' /> : <EyeOffIcon className='text-neutral-200 dark:text-neutral-400' />}
                            </button>
                        </div>
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-5 py-[10px]">
                        <input
                            type="checkbox"
                            className="mt-1 w-5 h-5 accent-green-600"
                            id="terms"
                            checked={agreeTerms}
                            onChange={() => setAgreeTerms(!agreeTerms)}
                        />

                        <label htmlFor="terms" className="md:text-sm text-xs text-neutral-400 font-normal max-w-[325px]">
                            I agree to the <a href="#" className="text-secondary-500 hover:underline">Terms of Use</a> and have read and understand the <a href="#" className="text-secondary-500 hover:underline">Privacy policy</a>.
                        </label>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading || !isFormValid()}
                        className={`md:w-[436px] w-full bg-primary-600 disabled:bg-primary-300 rounded-lg py-3 font-semibold text-white hover:bg-primary-500  flex justify-center`}
                    >
                        {loading ? <Loader className='animate-spin' /> : 'Create my account'}
                    </button>

                </form>
            </div>
        </div>
    )
}

export default SignUp

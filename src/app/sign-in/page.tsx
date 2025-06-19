'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Google from '@/assets/images/logos/Google.svg'
import Image from 'next/image'
import { EyeOffIcon, EyeOnIcon } from '@/components/ui/Icon'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { API_URL } from '../../../server'
import { setAuthUser } from '@/redux/authSlice'
import { Loader } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'

const SignIn = () => {


    const dispatch = useDispatch()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [loadingForgot, setForgotLoading] = useState(false)
    const { status } = useSession();
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        if (status === 'authenticated') {
            alert('Logged in successfully!');
            router.push('/');
            dispatch(setAuthUser(null));
        }
    }, [status, router, dispatch]);
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

        if (name === 'fullName' && !value.trim()) {
            message = 'Full name is required'
        }

        if (name === 'email') {
            if (!value.trim()) {
                message = 'Email is required'
            } else if (!/^\S+@\S+\.\S{2,}$/.test(value)) {
                message = 'Invalid email format'
            } else if (value === 'example@gmail.com') {
                message = 'This email already registered'
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
            const response = await axios.post(`${API_URL}/users/sign-in`, formData, {
                withCredentials: true
            })

            const user = response.data.data.user
            console.log('verify', user.isVerified)
            dispatch(setAuthUser(user))
            if (!user.isVerified) {
                router.push('/sign-up/verify')
            } else {
                alert("Login successfully !!!")
                router.push('/')
            }

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
            /^\S+@\S+\.\S{2,}$/.test(formData.email.trim()) &&
            formData.password.length >= 8
        );
    };

    const forgotHandler = async () => {
        setForgotLoading(true)
        try {
            if (!formData.email.trim()) {
                setErrors(prev => ({ ...prev, email: 'Please enter your email to reset password' }));
                return;
            } else if (!/^\S+@\S+\.\S{2,}$/.test(formData.email)) {
                setErrors(prev => ({ ...prev, email: 'Invalid email format' }));
                return;
            }
            await axios.post(`${API_URL}/users/forget-password`, { email: formData.email }, { withCredentials: true })
            router.push(`/sign-in/forgot-password?email=${encodeURIComponent(formData.email)}`)
        } catch (error: any) {
            setErrors((prev) => ({
                ...prev,
                email: error.response.data.message
            }));
        } finally {
            setForgotLoading(false)
        }

    }
    return (
        <div className="flex items-center justify-center w-full md:h-screen md:mt-0 mt-14  z-20 ">
            <div className='bg-secondary-500 dark:bg-primary-600 bg-opacity-5 dark:bg-opacity-5 w-[2838px] h-[2838px] rounded-[2838px] absolute md:top-[528px] top-[100px] -left-[418px] -z-10 '></div>
            <div className="bg-white dark:bg-dark-500 shadow-md rounded-xl md:py-[50px] py-[30px] md:px-[60px] px-5 relative">
                <h2 className="text-center md:text-xl text-lg font-semibold text-neutral-500 dark:text-white">Welcome Back!</h2>
                <p className="text-center md:text-sm text-xs text-neutral-300 mt-2">
                    Dont have an account?{' '}
                    <Link href="/sign-up" className="text-primary-600 font-medium hover:underline">
                        Sign up
                    </Link>
                </p>

                {/* Google Sign up */}
                <button onClick={() => signIn('google')} className="md:mt-[30px] mt-6 w-full flex items-center justify-center gap-2 border border-whitish-200 dark:border-dark-200 rounded-lg py-3 hover:bg-whitish-300 dark:hover:bg-dark-300">
                    <Image src={Google} alt='' width={24} height={24} />
                    <span className="text-base font-semibold text-neutral-400 dark:text-white">Sign in with google</span>
                </button>

                {/* Form */}
                <form className="mt-2 md:space-y-4 space-y-1 text-neutral-400 dark:text-neutral-300" onSubmit={submitHandler}>
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
                            className={`w-full rounded-lg py-4 px-6 placeholder:text-neutral-100 dark:placeholder:text-neutral-400 focus:outline-none focus:border-transparent bg-white dark:bg-dark-500 text-sm focus:ring-1 ${errors.email
                                ? 'border border-error focus:ring-error text-error placeholder-error'
                                : 'border border-whitish-200 dark:text-whitish-500 dark:border-dark-200 focus:ring-primary-400'
                                }`}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium py-2">Password *</label>
                        <div className="relative ">
                            <input
                                name='password'
                                onBlur={handleBlur}
                                type={showPassword || errors.password ? 'text' : 'password'}
                                onFocus={handleFocus}
                                onChange={handleChange}
                                value={errors.password ? errors.password : formData.password}
                                placeholder="Enter Password"
                                className={`w-full rounded-lg py-4 placeholder:text-neutral-100 dark:placeholder:text-neutral-400 px-6 focus:outline-none focus:border-transparent bg-white dark:bg-dark-500 text-sm focus:ring-1 ${errors.password
                                    ? 'border border-error focus:ring-error text-error placeholder-error'
                                    : 'border border-whitish-200 dark:text-whitish-500 dark:border-dark-200 focus:ring-primary-400'
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
                    <div className='flex gap-2 justify-end py-3'>
                        {loadingForgot && <Loader className='animate-spin' />}

                        <button
                            type='button'
                            onClick={forgotHandler}
                            className="text-primary-600 text-sm font-medium hover:underline">
                            Forgot password
                        </button>
                    </div>


                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading || !isFormValid()}
                        className="md:w-[436px] flex justify-center w-[287px] disabled:bg-primary-300 disabled:cursor-not-allowed bg-primary-600 text-white rounded-lg py-3 font-semibold hover:bg-primary-500"
                    >
                        {loading ? <Loader className='animate-spin' /> : 'Sign in'}

                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignIn

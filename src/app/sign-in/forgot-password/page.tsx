'use client'
import Back from '@/components/ui/Icon/Campaign/Back'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import axios from 'axios'
import { API_URL } from '../../../../server'
import { Loader } from 'lucide-react'
import { setAuthUser } from '@/redux/authSlice'

const ForgotPassword = () => {

    const searchParams = useSearchParams()
    const email = searchParams.get("email")

    const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const [loadingResend, setResendLoading] = useState(false)
    const [loadingConfirm, setConfirmLoading] = useState(false)
    const dispatch = useDispatch()

    const router = useRouter()
    const user = useSelector((state: RootState) => state.auth.user)

    useEffect(() => {
        if (!user) router.replace("/sign-in")
    }, [user, router])

    const handleChange = (
        index: number,
        event: ChangeEvent<HTMLInputElement>
    ): void => {
        const { value } = event.target;
        const newOtp = [...otp];
        newOtp[index] = value;

        setOtp(newOtp);

        if (value.length === 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (
        index: number,
        event: KeyboardEvent<HTMLInputElement>
    ): void => {
        if (event.key === 'Backspace' && !inputRefs.current[index]?.value && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1]?.focus()
        }
    }
    console.log("email", email)
    const handleResendOtp = async () => {
        setResendLoading(true);
        try {
            await axios.post(`${API_URL}/users/forget-password`, { email }, { withCredentials: true });

        } catch (error: any) {
            console.log(error)
            alert(error.response.data.message)
        } finally {
            setResendLoading(false);
        }
    }

    const handleSubmit = async () => {
        setConfirmLoading(true);
        try {
            const otpValue = otp.join("");
            const response = await axios.post(`${API_URL}/users/verify-forgot-password`
                ,
                { otp: otpValue },
                { withCredentials: true }
            );
            router.push('/sign-in/create-new-password')
            // const user = response.data.data.user

            // setTimeout(() => {
            //     dispatch(setAuthUser(user))
            // }, 100);
        } catch (error: any) {
            console.log(error)
            alert(error.response.data.message)
        } finally {
            setConfirmLoading(false);
        }
    }
    return (
        <div className="flex items-center justify-center md:h-screen md:mt-0 mt-14 w-full z-20">
            <div className='bg-secondary-500 dark:bg-primary-600 bg-opacity-5 dark:bg-opacity-5 w-[2838px] h-[2838px] rounded-[2838px] absolute md:top-[528px] top-[100px] -left-[418px] -z-10'></div>
            <div className="bg-white dark:bg-dark-500 rounded-xl shadow-md md:py-9 py-[30px] md:px-[50px] px-5 md:space-y-5 space-y-3">
                <h2 className="md:text-2xl text-xl font-bold text-neutral-500 dark:text-whitish-500">Forgot Password</h2>
                <div className='md:text-sm text-xs'>
                    <p className="text-neutral-300"> Please Enter the OTP you receive to</p>
                    <p className="font-semibold text-neutral-400 dark:text-whitish-500">{email}</p>
                </div>

                {/* OTP Input Boxes */}
                <div className="flex justify-center gap-5 md:py-2 py-5">
                    {[0, 1, 2, 3].map((i) => (
                        <input
                            key={i}
                            type="number"
                            maxLength={1}
                            value={otp[i]}
                            onChange={(e) => handleChange(i, e)}
                            ref={(el) => { inputRefs.current[i] = el }}
                            onKeyDown={(e) => handleKeyDown(i, e)}
                            className="no-spinner w-12 h-12 text-center border border-whitish-200 dark:bg-dark-500 dark:border-dark-200 rounded-md text-lg focus:outline-none focus:ring-1 focus:ring-primary-500"
                        />
                    ))}
                </div>

                {/* Resend */}
                <div className="pb-3 flex items-center gap-2">
                    <button
                        disabled={loadingResend}
                        onClick={handleResendOtp}
                        className={`${loadingResend ? '' : 'hover:underline'}text-sm font-semibold text-secondary-400 `}>
                        Resend OTP
                    </button>
                    {loadingResend && <Loader className='animate-spin' />}
                </div>

                {/* Confirm Button */}
                {/* <Link href={"/sign-in/create-new-password"}>
                    <button className="md:w-[355px] w-[287px] bg-primary-600 hover:bg-primary-500 text-base text-white font-semibold py-3 rounded-lg transition">
                        Confirm
                    </button>
                </Link> */}

                <button
                    onClick={handleSubmit}
                    disabled={otp.some((digit) => digit === "") || loadingConfirm}
                    className={`md:w-[355px] w-[287px] text-base font-semibold flex justify-center text-white py-3 rounded-lg transition 
                            ${otp.some((digit) => digit === "") || loadingConfirm
                            ? "bg-primary-300 cursor-not-allowed"
                            : "bg-primary-600 hover:bg-primary-500"}
                    `}
                >
                    {loadingConfirm ? <Loader className='animate-spin' /> : 'Confirm'}
                </button>

                {/* Back to login */}
                <div className="flex items-center gap-2 py-2">
                    <Back />
                    <a href="/sign-in" className="text-sm font-semibold text-secondary-400 hover:underline">
                        Back to login
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword

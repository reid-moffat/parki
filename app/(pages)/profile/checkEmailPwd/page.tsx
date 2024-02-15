import React from 'react';
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";

const CheckEmailPwdPage = () => {
    return (
        <>
            <div className="flex flex-row justify-left py-3 pl-10 pt-5 text-xl">
                <Link href='/profile/signIn' className='pt-5'>
                    <MdArrowBackIos/>
                </Link>
            </div>

            <div className="text-center text-3xl font-bold pt-10">
                Check your Email!
            </div>

            <div className="w-100vw justify-center items-center text-center text-md py-3 px-12 text-sm">
                We’ve sent password recovery instructions to your email.
            </div>

            <div className='w-full px-10 bg-transparent flex flex-col gap-2'>
                <Link href="/profile" className='w-full mt-1 text-center py-3 outline-none rounded-2xl bg-[#FF4251] text-[#FCF9EF] font-bold font-3xl'>
                    Open Email
                </Link>

                <Link href="/profile/signIn" className='w-full mt-1 text-center py-3 outline-none rounded-2xl border-2 border-[#343632] text-[#343632] font-bold font-3xl'>
                    Back to Login
                </Link>
            </div>
        </>
    );
}

export default CheckEmailPwdPage;

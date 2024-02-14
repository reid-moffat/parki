import React from 'react';
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";

const CheckEmailPwdPage = () => {
    return (
        <>
            <div className="flex flex-row justify-around py-3 pl-10 pt-5 text-xl">
                <Link href={{
                    pathname: '/profile/signIn'
                }}>
                    <MdArrowBackIos/>
                </Link>
                <MdArrowBackIos color="transparent"/>
            </div>

            <div className="text-center text-3xl font-bold pt-10">
                Check your Email!
            </div>

            <div className="text-center text-md pt-10">
                We’ve sent password recovery instructions to your email.
            </div>

            <div className='w-full px-10 bg-transparent flex flex-col gap-2'>
                <Link href="/profile" className='w-full bg-[#FF4251] py-3 rounded-[20px] text-[#FCF9EF]'>
                    Open Email
                </Link>

                <Link href="/profile/signIn" className='w-full bg-[#FF4251] py-3 rounded-[20px] text-[#FCF9EF]'>
                    Back to Login
                </Link>
            </div>
        </>
    );
}

export default CheckEmailPwdPage;

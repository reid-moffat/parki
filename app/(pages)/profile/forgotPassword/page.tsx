"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { callApi } from "@/config/firebase";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleSendResetEmail = async () => {
        await callApi('resetPassword')({email: email})
            .then(() => setIsEmailSent(true))
            .catch((err) => console.log(err));
    }

    const renderContent = () => {
        if (isEmailSent) {
            return (
                <>
                    <div className="text-center text-3xl font-bold pt-10">
                        Check your Email!
                    </div>

                    <div className="w-100vw justify-center items-center text-center text-md py-3 px-12 text-sm">
                        We’ve sent password recovery instructions to your email.
                    </div>

                    <div className='w-full px-10 bg-transparent flex flex-col gap-2'>
                        <Link
                            href="/profile/signIn"
                            className='w-full mt-1 text-center py-3 outline-none rounded-2xl border-2 border-[#343632] text-[#343632] font-bold font-3xl'
                        >
                            Back to Login
                        </Link>
                    </div>
                </>
            );
        }

        return (
            <>
                <div className="text-center text-3xl font-bold pt-10">
                    Forgot Password
                </div>

                <div className="w-100vw justify-center items-center text-center text-md py-3 px-10 text-sm">
                    Enter the email associated with your account and we’ll send an email with instructions to reset your
                    password
                </div>

                <div className={"flex flex-col justify-center items-center w-100vw"}>
                    <div className="w-full px-10 bg-transparent flex flex-col gap-2">
                        <input
                            className='py-3 px-5 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20'
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <div
                            onClick={handleSendResetEmail}
                            className='w-full mt-1 text-center py-3 outline-none rounded-2xl bg-[#343632] text-[#FCF9EF] font-bold font-3xl'
                        >
                            Send Instructions
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="flex flex-row justify-left py-3 pl-10 pt-5 text-xl">
                <Link href='/profile/signIn' className='pt-5'>
                    <MdArrowBackIos/>
                </Link>
            </div>

            {renderContent()}
        </>
    );
}

export default ForgotPassword;

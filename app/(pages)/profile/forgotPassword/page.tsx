"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import TextBox from "@/components/auth/TextBox";
import { httpsCallable } from "@firebase/functions";
import { functions } from "@/config/firebase";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");

    const handleSendResetEmail = async () => {
        await httpsCallable(functions, 'resetPassword')({email: email})
            .then((res) => {
                alert("Password reset email sent! Please check your email");
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <>
            <div className="flex flex-row justify-left py-3 pl-10 pt-5 text-xl">
                <Link href='/profile/signIn' className='pt-5'>
                    <MdArrowBackIos/>
                </Link>
            </div>

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
                    {/* <button onClick={handleSendResetEmail} className='black_btn'>Send Instructions</button> */}
                    <Link href="/profile/checkEmailPwd" onClick={handleSendResetEmail} className='w-full mt-1 text-center py-3 outline-none rounded-2xl bg-[#343632] text-[#FCF9EF] font-bold font-3xl'>
                        Send Instructions
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;

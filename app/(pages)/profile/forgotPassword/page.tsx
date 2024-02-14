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
            <div className="flex flex-row justify-around py-3 pl-10 pt-5 text-xl">
                <Link href='/profile/signIn'>
                    <MdArrowBackIos/>
                </Link>
                <MdArrowBackIos color="transparent"/>
            </div>

            <div className="text-center text-3xl font-bold pt-10">
                Forgot Password
            </div>

            <div className="text-center text-md pt-10 p-4">
                Enter the email associated with your account and we’ll send an email with instructions to reset your
                password
            </div>

            <div className={"flex flex-col justify-center items-center"}>
                <div className="w-full px-10 bg-transparent flex flex-col gap-2">
                    <TextBox
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* <button onClick={handleSendResetEmail} className='black_btn'>Send Instructions</button> */}
                    <Link href="/profile/checkEmailPwd" onClick={handleSendResetEmail} className='black_btn'>
                        Send Instructions
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ForgotPassword;

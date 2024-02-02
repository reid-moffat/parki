"use client";
import React, { useState } from 'react'
import TextBox from './TextBox'
import { httpsCallable } from "@firebase/functions";
import { functions } from '@/config/firebase'

const ForgotPasswordPage = () => {
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
        <div className={"flex flex-col justify-center items-center"}>
            <div className="w-full px-10 bg-transparent flex flex-col gap-2">
                <TextBox
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSendResetEmail} className='black_btn'>Send Instructions</button>
            </div>
        </div>
    )
}

export default ForgotPasswordPage;

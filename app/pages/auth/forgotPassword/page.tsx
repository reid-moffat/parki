"use client";
import React, { useState } from 'react'
import TextBox from '../../../components/TextBox'
import { httpsCallable } from "@firebase/functions";
import { functions } from '../../../firebase/config'

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
        <div
            className={
                "flex flex-col justify-center items-center"
            }
        >
            <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
                <TextBox
                    labelText="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSendResetEmail} className='black_btn'>Send reset link</button>
            </div>
        </div>
    )
}

export default ForgotPasswordPage;

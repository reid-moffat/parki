"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";

const SignIn = () => {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const signin = async () => {

        if (!email) {
            setError("Email is required");
            return;
        }
        if (!password) {
            setError("Password is required");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        await signInWithEmailAndPassword(auth, email, password)
            .then(() => router.push("/profile"))
            .catch((error) => {
                if (error.code === 'auth/invalid-email') {
                    setError("Invalid email");
                } else if (error.code === 'auth/invalid-credential') {
                    setError("Invalid email/password credentials");
                } else if (error.message.includes(`The email \\"${email}\\" has not been verified. Please check your email`)) {
                    setError("Please verify your email");
                } else {
                    setError("An error occurred, please try again later");
                }
            })
    }

    return (
        <>
            <div className="flex flex-row justify-left py-3 pl-10 pt-5 text-xl">
                <Link href='/welcome' className='pt-5'>
                    <MdArrowBackIos/>
                </Link>
            </div>

            <div className="text-center text-3xl font-bold pt-10">
                Welcome Back!
            </div>

            <div className={"flex flex-col justify-center items-center w-100vw"}>
                <div className="w-full px-10 py-6 bg-transparent flex flex-col gap-2">
                    <input
                        className='py-3 px-5 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20'
                        value={email}
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='my-1 py-3 px-5 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20'
                        placeholder='Password'
                        type={"password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Link href="/profile/forgotPassword" className='w-100vw underline text-right text-sm'>Forgot password?</Link>

                    <button
                        onClick={async () => await signin()}
                        className='w-full bg-[#FF4251] py-3 rounded-2xl text-[#FCF9EF] font-bold font-3xl'
                    >
                        SIGN IN
                    </button>

                    <div className='flex justify-center items-center text-sm'>
                        Don't have an account?&nbsp;
                        <Link href="/profile/signUp" className='text-blue-500 flex-end text-sm underline'>Sign up</Link>
                    </div>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
            </div>
        </>
    );
}

export default SignIn;

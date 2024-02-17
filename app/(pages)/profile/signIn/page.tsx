"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { redirect } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Error message to display to the user (e.g. 'Invalid email/password')
    const [error, setError] = useState(null);

    const signin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(`Successful login for ${userCredential.user.uid}`)
                redirect("/");
            })
            .catch((error) => {
                console.error(`Error signing in: ${error.message}`)
                if (error.code === 'auth/invalid-login-credentials') {
                    // @ts-ignore
                    setError("Invalid email/password");
                } else {
                    setError(error.code);
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
                    {/* TODO onclick go to the profile page */}
                    {/*  for future reference:
                    <Link href="/about">
                    <a onClick={handleClick}>About</a>
                    </Link> */}
                    <button onClick={signin} className='w-full bg-[#FF4251] py-3 rounded-2xl text-[#FCF9EF] font-bold font-3xl'>SIGN IN
                    </button>

                    {/* <Image
                    src={'../../signInWithGoogle.png'}
                    onClick={signInWithGoogle}
                    style={{'cursor': 'pointer'}}
                    alt={"Sign in with Google"}
                    /> */}

                    <div className='flex justify-center items-center text-sm'>
                        Don't have an account?&nbsp;
                        <Link href="/profile/signUp" className='text-blue-500 flex-end text-sm underline'>Sign up</Link>
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                </div>
            </div>
        </>
    );
}

export default SignIn;

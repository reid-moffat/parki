"use client";
import React, { useState } from 'react';
import { MdArrowBackIos } from "react-icons/md";
import Link from "next/link";
import { httpsCallable } from "@firebase/functions";
import { functions } from "@/config/firebase";
import { useRouter } from 'next/navigation';

const SignUp = () => {

    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [error, setError] = useState("");
    const [isSignedUp, setIsSignedUp] = useState(false);


    const handleSignUp = async () => {

        if (!name) {
            setError("Name is required");
            return;
        }
        if (!email) {
            setError("Email is required");
            return;
        }
        if (!password) {
            setError("Password is required");
            return;
        }
        if (!passwordConfirm) {
            setError("Password confirmation is required");
            return;
        }
        if (password !== passwordConfirm) {
            setError("Password does not match");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        await httpsCallable(functions, 'createAccount')({email: email, password: password})
            .then(() => setIsSignedUp(true))
            .catch((err) => setError(err.message));
    }

    const goBack = () => {
        if (isSignedUp) {
            setIsSignedUp(false);
            return;
        }
        router.push("/profile");
    }

    const renderContent = () => {
        if (isSignedUp) {
            return (
                <>
                    <div className="text-center text-3xl font-bold pt-10">
                        Check your Email!
                    </div>

                    <div className="w-100vw justify-center items-center text-center text-md py-6 px-12 text-sm">
                        You’ve entered <strong>{email}</strong> as the email address for your account. Please check
                        your email to verify it, then sign in with the button below:
                    </div>
                    <div className="flex items-center w-full">
                        <Link
                            href="/profile/signIn"
                            className='w-[80%] ml-[10%] bg-[#FF4251] py-3 rounded-2xl text-center text-[#FCF9EF] font-bold font-3xl'
                        >
                            Sign In
                        </Link>
                    </div>
                </>
            );
        }

        return (
            <>
                <div className="text-center text-3xl font-bold pt-10">
                    Create Account
                </div>

                <div className={"flex flex-col justify-center items-center w-100vw"}>
                    <div className="w-full px-10 py-6 bg-transparent flex flex-col gap-5">

                        <input
                            className='py-3 px-5 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20'
                            value={name}
                            placeholder='Name'
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className='py-3 px-5 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20'
                            value={email}
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            className=' py-3 px-5 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20'
                            placeholder='Password'
                            type={"password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            className='py-3 px-5 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20'
                            value={passwordConfirm}
                            type={'password'}
                            placeholder='Confirm Password'
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />

                        <button
                            onClick={async () => await handleSignUp()}
                            className='w-full bg-[#FF4251] py-3 rounded-2xl text-white p-2 font-bold font-3x1'
                        >
                            SIGN UP
                        </button>

                        <div className='flex justify-center items-center text-sm'>
                            Already have an account?&nbsp;
                            <Link href="/profile/signIn" className='text-blue-500 flex-end text-sm'>Sign in</Link>
                        </div>

                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="flex flex-row justify-left py-3 pl-10 pt-5 text-xl">
                <div onClick={goBack} className='pt-5'>
                    <MdArrowBackIos/>
                </div>
            </div>

            {renderContent()}
        </>
    );
}

export default SignUp;

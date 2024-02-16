"use client";
import React, { useState } from 'react';
import { MdArrowBackIos } from "react-icons/md";
import Link from "next/link";
import { redirect } from "next/navigation";
import { httpsCallable } from "@firebase/functions";
import { auth, functions } from "@/config/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Router } from 'express';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setEmail } from '@/app/GlobalRedux/Features/auth'

const SignUp = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [error, setError] = useState("");


    const handleSignUp = async () => {
        
        if (password !== passwordConfirm) {
            //alert("Password does not match!")
            setError("Password does not match");
            return;
        }

        await httpsCallable(functions, 'createAccount')({email: email, password: password})
            .then((res) => {
                alert("Successfully created new user! Please check your email and confirm your email.");
                //redirect('/profile/signUp/confirmEmail');
                dispatch(setEmail(email));
                const router = useRouter();
                router.push('/profile/signUp/confirmEmail');
            })
            .catch((err) => {
                //alert(err)
                if(err.code == "functions/invalid-argument" )
                    setError("Invalid email/password");
                else if (err.code == "Password does not match")
                    setError(err.code);
                else if (err.code == "functions/already-exists")
                    setError("Email is already registered with us");
            });
    }

    const handleSignUpWithGoogle = async () => {
        await signInWithPopup(auth, new GoogleAuthProvider())
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const user = result.user;
                console.log(`Successfully signed up with Google. Credential: ${credential} User: ${user}`);
            }).catch((error) => {
                console.log(`Error while signing up with Google: ${error}`);
            });
    }

    return (
        <>
            <div className="flex flex-row justify-left py-3 pl-10 pt-5 text-xl">
                <Link href='/profile' className='pt-5'>
                    <MdArrowBackIos/>
                </Link>
            </div>
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
                    
                    <button onClick={handleSignUp} className='w-full bg-[#FF4251] py-3 rounded-2xl text-white p-2 font-bold font-3x1'>SIGN UP</button>
                    {error && <p className="text-red-500">{error}</p>}

                    <div className='flex justify-center items-center text-sm py-4'>
                        Already have an account?&nbsp;
                        <Link href="/profile/signIn" className='text-blue-500 flex-end text-sm'>Sign in</Link>

                    </div>      
                    {/*<Image
                        src={'@/public/signInWithGoogle.png'}
                        onClick={handleSignUpWithGoogle}
                        style={{'cursor': 'pointer'}}
                        alt="Sign up with Google"
                    />*/}
                </div>
            </div>
        </>
    );
}

export default SignUp;

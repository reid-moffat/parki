"use client";
import React, { useState } from 'react'
import TextBox from '@/components/auth/TextBox'
import Link from 'next/link'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useRouter } from 'next/navigation';
import Image from 'next/image'

const SignInPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Error message to display to the user (e.g. 'Invalid email/password')
    const [error, setError] = useState(null);

    const router = useRouter();

    const signin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(`Successful login for ${userCredential.user.uid}`)
                router.push('/')
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

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, new GoogleAuthProvider())
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const user = result.user;

                console.log(`Successfully signed in: ${credential} ${user}`);
            }).catch((error) => {
                console.log(`Error caught: ${error}`);
            });
    }

    return (
        <div className={"flex flex-col justify-center items-center w-100vw"}>
            <div className="w-full px-10 bg-transparent flex flex-col gap-2">
                <TextBox
                    className='py-2'
                    value={email}
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextBox
                    placeholder='Password'
                    type={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Link href="/profile/forgotPassword" className='w-100vw underline flex-end'>Forgot password?</Link>
                <button onClick={signin} className='w-full bg-[#FF4251] rounded-full text-[#FCF9EF] '>Sign In</button>
                {error && <p className="text-red-500">{error}</p>}
                {/* <Image
                    src={'../../signInWithGoogle.png'}
                    onClick={signInWithGoogle}
                    style={{'cursor': 'pointer'}}
                    alt={"Sign in with Google"}
                /> */}
            </div>
        </div>
    )
}

export default SignInPage;

"use client";
import React, { useState } from 'react'
import TextBox from '@/components/auth/TextBox'
import { httpsCallable } from "@firebase/functions";
import { auth, functions } from '@/config/firebase'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';

const SignUpPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const router = useRouter();

    const handleSignUp = async () => {
        if (password !== passwordConfirm) {
            alert("Password does not match!")
            return;
        }

        await httpsCallable(functions, 'createAccount')({email: email, password: password})
            .then((res) => {
                alert("Successfully created new user! Please check your email and confirm your email.");
                router.push('/pages/auth/signIn');
            })
            .catch((err) => {
                alert(err)
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
        <div className={"flex flex-col justify-center items-center w-100vw"}>
            <div className="w-full px-10 bg-transparent flex flex-col gap-5">

                <TextBox
                    value={email}
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextBox
                    type={"password"}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextBox
                    type={"password"}
                    placeholder='Confirm Password'
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                <button onClick={handleSignUp} className='create-account'>Sign Up</button>
                
                <div className='flex justify-center items-center'>
                    Already have an account?&nbsp;
                    <Link href="/profile/signIn" className='text-blue-500 flex-end'>Sign in</Link>


                </div>
                {/*<Image
                    src={'@/public/signInWithGoogle.png'}
                    onClick={handleSignUpWithGoogle}
                    style={{'cursor': 'pointer'}}
                    alt="Sign up with Google"
    />*/}
            </div>
        </div>
    )
}

export default SignUpPage;

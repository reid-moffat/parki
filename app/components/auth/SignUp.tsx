"use client";
import React, { useState } from 'react'
import TextBox from '@/app/components/auth/TextBox'
import { httpsCallable } from "@firebase/functions";
import { auth, functions } from '@/app/config/config'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import Image from 'next/image'

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
        <div className={"flex flex-col justify-center items-center"}>
            <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
                <TextBox
                    labelText="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextBox
                    labelText="Password"
                    type={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextBox
                    labelText="Confirm Password"
                    type={"password"}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                />

                <button onClick={handleSignUp} className='black_btn'>Sign Up</button>
                <Image
                    src={'../../signInWithGoogle.png'}
                    onClick={handleSignUpWithGoogle}
                    style={{'cursor': 'pointer'}}
                    alt="Sign up with Google"
                />
            </div>
        </div>
    )
}

export default SignUpPage;

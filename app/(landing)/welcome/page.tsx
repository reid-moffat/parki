"use client";
import React, { useState } from "react";
import "../../globals.css";
import Image from "next/image";
import logo from "@/public/logo.png";
import BottomBar from "@/components/helpers/BottomBar";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/config/firebase";
import { useRouter } from "next/navigation";

const Welcome = () => {

    const router = useRouter();

    const [isSignIn, setIsSignIn] = useState(false);

    const signInWithGoogle = () => {
        return signInWithPopup(auth, new GoogleAuthProvider())
            .then(() => {
                router.push("/map");
            }).catch((error) => {
                console.log(`Error signing up/in: ${error}`);
            });
    }

    return (
        <div className="text-white">
            <Image src={logo} alt={"Parki Logo"} className="w-[60%] mt-52 ml-[20%]"/>

            <div className="flex rounded-2xl bg-[#4472CA] p-2 pl-8 pr-8 ml-10 mr-10 mt-40 text-xl font-[500]">
                <div className="rounded-3xl bg-white p-1">
                    <FcGoogle className="w-full h-full"/>
                </div>
                <div className="pl-4" onClick={async () => await signInWithGoogle()}>
                    Sign {isSignIn ? "In" : "Up"} with Google
                </div>
            </div>
            <div className="flex rounded-2xl bg-[#FF4251] p-2 pl-8 pr-8 ml-10 mr-10 mt-6 text-xl">
                <div className="rounded-3xl ml-1">
                    <MdEmail className="w-full h-full"/>
                </div>
                <div className="pl-4" onClick={() => router.push(`/profile/${isSignIn ? "signIn" : "signUp"}`)}>
                    Sign {isSignIn ? "In" : "Up"} with Email
                </div>
            </div>
            <div className="flex justify-center items-center mt-8 text-sm">
                {isSignIn ? "Don't have an account?" : "Already have an account?"}
                <div className="text-[#FBDC6C] ml-1" onClick={() => setIsSignIn(!isSignIn)}>Sign {isSignIn ? "Up" : "In"}</div>
            </div>

            <BottomBar/>
        </div>
    );
}

export default Welcome;

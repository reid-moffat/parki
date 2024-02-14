import React from 'react';
import { MdArrowBackIos } from "react-icons/md";
import SignUpPage from "@/components/auth/SignUp";
import Link from "next/link";

const SignUp = () => {
    return (
        <>
            <div className="flex flex-row justify-left py-3 pl-10 pt-5 text-xl">
                <Link href={{
                    pathname: '/profile'
                }}>
                    <MdArrowBackIos/>
                </Link>
            </div>
            <div className="text-center text-3xl font-bold pt-10 mb-8">
                Create Account
            </div>

            <SignUpPage/>
        </>
    );
}

export default SignUp;

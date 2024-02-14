import React from 'react';
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import SignInPage from '@/components/auth/SignIn';

const SignIn = () => {
    return (
        <>
            <div className="flex flex-row justify-left py-3 pl-10 pt-5 text-xl">
                <Link href={{
                    pathname: '/profile'
                }}>
                    <MdArrowBackIos/>
                </Link>
            </div>

            <div className="text-center text-3xl font-bold pt-10">
                Welcome Back!
            </div>

            <SignInPage/>
        </>
    );
}

export default SignIn;

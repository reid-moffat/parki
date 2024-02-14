import React from 'react';
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import ForgotPasswordPage from '@/components/auth/ForgotPassword';

const ForgotPassword = () => {
    return (
        <>
            <div className="flex flex-row justify-around py-3 pl-10 pt-5 text-xl">
                <Link href={{ pathname: '/profile/signIn' }}>
                    <MdArrowBackIos/>
                </Link>
                <MdArrowBackIos color="transparent"/>
            </div>

            <div className="text-center text-3xl font-bold pt-10">
                Forgot Password
            </div>

            <div className="text-center text-md pt-10 p-4">
                Enter the email associated with your account and we’ll send an email with instructions to reset your
                password
            </div>

            <ForgotPasswordPage/>
        </>
    );
}

export default ForgotPassword;

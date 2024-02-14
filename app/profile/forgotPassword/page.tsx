import React from 'react';
import BottomBar from "@/components/helpers/BottomBar";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import ForgotPasswordPage from '@/components/auth/ForgotPassword';

const ForgotPassword = () => {
    return (
        <div style={{backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10'}}>
            <Image src={logo} alt="Parki logo" className='w-[120vw] h-[8vh] object-contain mt-3 mb-4'/>

            <div className="absolute ml-[2vw] h-[79.5vh] w-[96vw] rounded-xl z-50 bg-[#FCF9EF] text-[#343632]">
                <div className="flex flex-row justify-around py-3 pl-10 pt-5 text-xl">
                    <Link href={{
                        pathname: '/profile/signIn'
                    }}>
                        <MdArrowBackIos/>
                    </Link>
                    <MdArrowBackIos color="transparent"/>
                </div>

                <div className="text-center text-3xl font-bold pt-10">
                    Forgot Password
                </div>

                <div className="text-center text-md pt-10">
                    Enter the email associated with your account and we’ll send an email with instructions to reset your
                    password
                </div>

                <ForgotPasswordPage/>

            </div>

            <BottomBar/>
        </div>
    );
}

export default ForgotPassword;

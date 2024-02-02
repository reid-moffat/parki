import React from 'react';
import BottomBar from "@/components/helpers/BottomBar";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import ForgotPasswordPage from '@/components/auth/ForgotPassword';

const CheckEmailPwdPage = () => {
    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10' }}>
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
                    Check your Email!
                </div>

                <div className="text-center text-md pt-10">
                We’ve sent password recovery instructions to your email.
                </div>

                <div className='w-full px-10 bg-transparent flex flex-col gap-2'>
                    <Link href="/profile" className='w-full bg-[#FF4251] py-3 rounded-[20px] text-[#FCF9EF]'>
                        Open Email
                    </Link>

                    <Link href="/profile/signIn" className='w-full bg-[#FF4251] py-3 rounded-[20px] text-[#FCF9EF]'>
                        Back to Login
                    </Link>

                </div>

                
            </div>

            <BottomBar/>
        </div>
    );
}

export default CheckEmailPwdPage;

import React from 'react';
import BottomBar from "@/components/helpers/BottomBar";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import SignInPage from '@/components/auth/SignIn';


const SignIn = () => {
    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10' }}>
            {/* This is the bottom row (minus the sign in w/ google/email side) in auth section on figma auth
            Note that this only needs email sign-in, google sign in is done through a pop-up on the main screen */}
            <Image src={logo} alt="Parki logo" className='w-[120vw] h-[8vh] object-contain mt-3 mb-4'/>

            <div className="absolute ml-[2vw] h-[79.5vh] w-[96vw] rounded-xl z-50 bg-[#FCF9EF] text-[#343632]">
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
                
            </div>

            <BottomBar/>
        </div>
    );
}

export default SignIn;

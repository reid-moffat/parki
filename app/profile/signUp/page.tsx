import React from 'react';
import BottomBar from "@/components/helpers/BottomBar";
import { MdArrowBackIos } from "react-icons/md";
import logo from "@/public/logo.png";

import SignUpPage from "@/components/auth/SignUp";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10' }}>
            <Image src={logo} alt="Parki logo" className='w-[120vw] h-[8vh] object-contain mt-3 mb-4'/>
            <div className="absolute ml-[2vw] h-[79.5vh] w-[96vw] rounded-xl z-50 bg-[#FCF9EF] text-[#343632]">

                {/*Top row in figma auth section (minus the choose to sign up/in page)*/}
                
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
            </div>
    
                <BottomBar/>
        </div>
        
        
    );
}

export default SignUp;

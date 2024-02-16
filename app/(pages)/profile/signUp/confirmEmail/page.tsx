"use client";
import React from 'react';
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { useSelector} from "react-redux";
import {getEmail } from '@/app/GlobalRedux/Features/auth';

const CheckEmailPwdPage = () => {

    const openMail = () => {
        //open mail logic
    }
    const email = useSelector(getEmail);

    return (
        <>
            <div className={"flex flex-col justify-center items-center w-100vw"}>
                <div className="w-full px-10 py-6 bg-transparent flex flex-col gap-2">                
                    <Link href='/profile/signIn' className='pt-5'>
                    <MdArrowBackIos/>
                    </Link>

            <div className="text-center text-3xl font-bold pt-10">
                Check your Email!
            </div>

            <div className="w-100vw justify-center items-center text-center text-md py-6 px-12 text-sm">
                You’ve entered {email}
                as the email address for your account. Please verify this email address to use Parki by clicking the button below.
            </div>
            <div>
                <button onClick={openMail} className='w-full bg-[#FF4251] py-3 rounded-2xl text-[#FCF9EF] font-bold font-3xl'>Open Mail</button>
            </div>

                </div>
        </div>
            
            
        </>
    );
}

export default CheckEmailPwdPage;

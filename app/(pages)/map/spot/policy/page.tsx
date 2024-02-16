"use client";
import Image from "next/image";
import React from "react";
import Respect from "@/public/spot/respect.png";
import Duration from "@/public/spot/duration.png";
import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";

const PolicyPage = () => {

    const [toggle, setToggle] = React.useState(false);

    const getToggle = () => {
        return toggle
            ? <FaToggleOn size={100} className={'ml-4'} onClick={() => setToggle(false)}/>
            : <FaToggleOff size={100} className={'ml-4'} onClick={() => setToggle(true)}/>;
    }

    return (
        <>
            <div className='flex text-3xl font-bold p-8'>
                <Link href="/map/spot">
                    <MdOutlineArrowBackIos className='w-10 h-10 mr-2'/>
                </Link>
                Highlighted Policy
            </div>

            <div className="flex mt-6">
                <Image src={Respect} alt="Respect" className='w-24 m-4 ml-8'/>
                <div className='mr-8'>
                    <div className='text-2xl font-bold'>
                        Respect
                    </div>
                    <div className='font-light'>
                        Users must be considerate of other users and property in the parking facility.
                    </div>
                </div>
            </div>

            <div className='flex mt-8'>
                <Image src={Duration} alt="Duration" className='w-24 m-4 ml-8'/>
                <div className='mr-8'>
                    <div className='text-2xl font-bold'>
                        Booking Duration
                    </div>
                    <div className='font-light  '>
                        Users must park only in the designated space assigned during booking.
                    </div>
                </div>
            </div>

            <div className='font-normal flex p-2 ml-8 mr-8'>
                <div className='pt-6 text-sm font-semibold'>
                    I understand that my account may be suspended if I break these rules
                </div>
                {getToggle()}
            </div>

            <div className='flex justify-center mt-8'>
                <Link href="/map/spot/booking" className={'rounded-2xl bg-[#FF4251] p-2 text-white text-xl ps-20' +
                    ' pe-20' + (toggle ? "" : " pointer-events-none")}>
                    CONFIRM
                </Link>
            </div>
        </>
    );
}

export default PolicyPage;

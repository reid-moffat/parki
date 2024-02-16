"use client";
import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";
import React from "react";

const Booking = () => {

    const [toggle, setToggle] = React.useState(true);

    return (
        <div>
            <div className='flex text-3xl font-bold p-8'>
                <Link href="/map/spot">
                    <MdOutlineArrowBackIos className='w-10 h-10 mr-2'/>
                </Link>
                <div className="pl-6">
                    Your Booking
                </div>
            </div>

            <div className='flex justify-center mt-8'>
                <Link href="/map/spot/booking/review" className={'rounded-2xl bg-[#FF4251] p-2 text-white text-xl' +
                    ' ps-20 pe-20' + (toggle ? "" : " pointer-events-none")}>
                    CONFIRM
                </Link>
            </div>
        </div>
    );
}

export default Booking;

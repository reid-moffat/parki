"use client";
import React from 'react'
import BottomBar from "@/components/helpers/BottomBar";
import Image from 'next/image';
import logo from '../../public/logo.png';

// @ts-ignore
const SpotsPage = ({ searchParams }) => {
    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10' }}>
            <Image src={logo} alt="Parki logo" className='w-[120vw] h-[8vh] object-contain mt-3 mb-4'/>

            <div className="absolute ml-[2vw] h-[79.5vh] w-[96vw] rounded-xl z-50 bg-[#FCF9EF] text-[#343632]">
            <div className="flex flex-row justify-left py-3 pl-10 pt-5 text-xl">
            </div>

            <div className="text-center text-3xl font-bold pt-10">
            Look at all these spots!
            </div>
    
        </div>

<BottomBar/>
</div>
    );
}

export default SpotsPage;

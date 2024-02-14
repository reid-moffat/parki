"use client";
import React from 'react';

// @ts-ignore
const SpotsPage = ({searchParams}) => {
    return (
        <div className="absolute ml-[2vw] h-[79.5vh] w-[96vw] rounded-xl z-50 bg-[#FCF9EF] text-[#343632]">
            <div className="flex flex-row justify-left py-3 pl-10 pt-5 text-xl">
            </div>
            <div className="text-center text-3xl font-bold pt-10 mx-6 p-6">
                My Spots
            </div>
            <div className="flex flex-row border-2 mx-6 rounded-full overflow-hidden h-10 border-black font-bold">
                <button className="flex items-center justify-center w-1/2 bg-[#FF4251]">
                    My Listings
                </button>
                <button className="flex w-1/2 items-center justify-center">
                    My Rentals
                </button>

            </div>
            <div className="text-left text-lg font-bold pt-10 mx-6 p-6">
                Current & Upcoming
            </div>
            <div>
                <img
                    src="https://media.licdn.com/dms/image/C4D03AQHU3breVJ_JJg/profile-displayphoto-shrink_400_400/0/1641764344286?e=1712188800&v=beta&t=ZWi-gluB9v7I5dQKWut51BOSRG0q4kHj4NWtxt4Jxn4"/>
            </div>
        </div>
    );
}

export default SpotsPage;

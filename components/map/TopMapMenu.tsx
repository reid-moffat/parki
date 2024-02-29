import React from 'react';
import { MdSearch } from "react-icons/md";
import { FaFilterCircleXmark } from "react-icons/fa6";
import Link from "next/link";

// @ts-ignore
const TopMapMenu = ({ setPageState, location }) => {
    return (
        <div className="absolute flex items-center pt-4 px-6 space-x-4 z-20">
            <div
                className="h-min w-[70vw] bg-white rounded-full px-3 py-2 shadow-xl text-[#343632] cursor-pointer"
                onClick={() => setPageState("search")}
            >
                <div className="flex flex-row items-center">
                    <MdSearch size={24} color="#FF4251" className="mr-2"/>
                    {location ? location.street + ", " + location.city : "Queen's University"}
                </div>
            </div>

            <Link
                className="flex flex-row w-min h-min items-center bg-[#FF4251] p-[0.7rem] rounded-full mx-auto text-[#FCF9EF] active:opacity-50 duration-75 shadow-xl"
                href='/map/filter'
            >
                <FaFilterCircleXmark size={22} title={"Filter spots"}/>
            </Link>
        </div>
    );
}

export default TopMapMenu;

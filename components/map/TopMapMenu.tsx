import React from 'react';
import { MdSearch } from "react-icons/md";
import { FaFilterCircleXmark } from "react-icons/fa6";
import Link from "next/link";

const TopMapMenu = ({
    location, range, price, amenities
}: {
    location: string, range: number, price: number, amenities: any
}) => {
    return (
        <div className="flex justify-center items-center pt-4 px-6 space-x-4">

            <Link
                className="flex h-min w-full bg-white rounded-full px-3 py-2 shadow-xl text-[#343632] cursor-pointer"
                href="/map/search"
            >
                <div className="flex flex-row items-center">
                    <MdSearch size={24} color="#FF4251" className="mr-2"/>
                    {location}
                </div>
            </Link>

            <Link
                className="flex flex-row w-min h-min items-center bg-[#FF4251] p-[0.7rem] rounded-full mx-auto text-[#FCF9EF] active:opacity-50 duration-75 shadow-xl"
                href={{ pathname: '/map/filter', query: { range, price, amenities } }}
            >
                <FaFilterCircleXmark alt="filter" size={22}/>
            </Link>
        </div>
    );
}

export default TopMapMenu;

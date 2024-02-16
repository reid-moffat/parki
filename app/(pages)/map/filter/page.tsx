"use client";
import React from 'react';
import { MdArrowBackIos, MdLocalParking } from "react-icons/md";
import { FaCarTunnel, FaFilterCircleXmark } from "react-icons/fa6";
import { LuClock5 } from "react-icons/lu";
import Slider from '@mui/material/Slider';
import { FaWheelchair } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { RiBattery2ChargeLine } from "react-icons/ri";
import { IoSnowSharp } from "react-icons/io5";
import Divider from "@/components/helpers/Divider";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { getRange, setRange, getPrice, setPrice, getAmenities, updateAmenity } from "@/app/GlobalRedux/Features/filters";

const FilterPage = () => {

    const dispatch = useDispatch();

    const range = useSelector(getRange);
    const price = useSelector(getPrice);
    const amenities = useSelector(getAmenities);

    const renderAmenities = () => {
        const allAmenities: React.JSX.Element[] = [
            <FaWheelchair key={"Accessible"}/>,
            <MdLocalParking key={"Self-Park"}/>,
            <RiBattery2ChargeLine key={"EV Charging"}/>,
            <FaCarTunnel key={"Covered"}/>,
            <FaWheelchair key={"On-Site Staff"}/>,
            <IoSnowSharp key={"Shovelling Included"}/>,
        ];

        return allAmenities.map((amenity : React.JSX.Element) => {
            // @ts-ignore
            const isClicked = amenities[amenity.key];



            return (
                <div className="flex justify-center items-center" key={amenity.key}>
                    <div
                        className={(isClicked ? "bg-[#343632] text-[#FCF9EF]" : "bg-[#FCF9EF]" +
                                " text-black") +
                            " flex justify-center items-center w-[100vw] rounded-full border-[#343632] border-[1px] m-1 py-1 text-sm font-light"}
                        onClick={() => {dispatch(updateAmenity(amenity.key));console.log(typeof amenity.key)}}
                    >
                        <IconContext.Provider value={{color: '#FF4251'}}>
                            {amenity}
                        </IconContext.Provider>
                        &nbsp;
                        {amenity.key as string}
                    </div>
                    <br/><br/>
                </div>
            )
        });
    }

    return (
        <>
            <div className="flex flex-row justify-left py-3 pl-10 pt-5 text-xl">
                <Link href='/map' className='pt-5'>
                    <MdArrowBackIos/>
                </Link>
            </div>

            <div className="flex justify-center items-center font-outfit font-bold text-2xl">
                <FaFilterCircleXmark className="mr-1"/>
                Filter
            </div>
            
            <br/>

            <div className='w-[80vw] mx-auto'>
                <Divider/>
            </div>

            <div className="text-center font-bold">
                Parking Ending On
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center w-3/6 rounded-full text-white bg-[#343632]">
                    <LuClock5/> &nbsp; December 20, 2023
                </div>
            </div>
            
            <div className='w-[80vw] mx-auto'>
                <Divider/>
            </div>

            <div className="text-center">
                Within <span
                className="text-blue-500">{range * 100 < 1000 ? (range * 100) + "m" : (range === 30 ? "any distance" : (range / 10) + "km")}</span>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-5/6">
                    <Slider value={range} onChange={(_, newValue) => dispatch(setRange(newValue))} min={0} max={30} color="error"/>
                </div>
            </div>

            <div className='w-[80vw] mx-auto'>
                <Divider/>
            </div>

            <div className="text-center">
                Price Range:<p/>
                $<span className="text-blue-500">{price[0]}</span> to $<span
                className="text-blue-500">{price[1] < 200 ? price[1] : "Infinite"}</span>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-5/6">
                    <Slider value={price} onChange={(_, newValue) => dispatch(setPrice(newValue))} min={0} max={200} color="error"/>
                </div>
            </div>
            <br/>

            <div className='w-[80vw] mx-auto'>
                <Divider/>
            </div>

            <br/>
            <div className='flex flex-col w-[80vw] mx-auto'>
                <div className='text-md font-bold py-3'>Amenities</div>
                <div className='grid grid-cols-2'>
                        {renderAmenities()}
                </div>
            </div>

            <div className='flex flex-row justify-between w-[80vw] mx-auto'>
                <button>Reset</button>
                <button>Apply Filters</button>
            </div>
            <br/>
        </>
    );
}

export default FilterPage;

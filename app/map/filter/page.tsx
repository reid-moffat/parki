"use client";
import React, { useState } from 'react';
import { MdArrowBackIos, MdLocalParking } from "react-icons/md";
import { FaCarTunnel, FaFilterCircleXmark } from "react-icons/fa6";
import { LuClock5 } from "react-icons/lu";
import Slider from '@mui/material/Slider';
import { FaWheelchair } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { RiBattery2ChargeLine } from "react-icons/ri";
import { IoSnowSharp } from "react-icons/io5";
import Divider from "@/components/helpers/Divider";
import Image from "next/image";
import logo from "@/public/logo.png";
import Link from 'next/link';

// @ts-ignore
const FilterPage = ({ searchParams  }) => {

    const [range, setRange] = useState(30);
    const [price, setPrice] = useState([0, 200]);
    const [amenities, setAmenities] = useState({
        "Accessible": false,
        "Self-Park": false,
        "EV Charging": false,
        "Covered": false,
        "On-Site Staff": false,
        "Shovelling Included": false
    });

    const renderAmenities = () => {
        const allAmenities: React.JSX.Element[] = [
            <FaWheelchair key={"Accessible"}/>,
            <MdLocalParking key={"Self-Park"}/>,
            <RiBattery2ChargeLine key={"EV Charging"}/>,
            <FaCarTunnel key={"Covered"}/>,
            <FaWheelchair key={"On-Site Staff"}/>,
            <IoSnowSharp key={"Shovelling Included"}/>,
        ];

        return allAmenities.map((amenity) => {
            const isClicked = amenities[amenity.key];

            return (
                <div className="flex justify-center items-center" key={amenity.key}>
                    <div
                        className={(isClicked ? "bg-[#343632] text-white" : "bg-[#ffffff]" +
                                " text-black") +
                            " flex justify-center items-center w-3/6 rounded-full border-black border-2"}
                        // @ts-ignore
                        onClick={() => setAmenities((oldState: object) => ({
                            ...oldState,
                            [amenity.key as string]: !isClicked
                        }))}

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

    const handleRangeUpdate = (event: Event, newValue: number | number[]) => {
        setRange(newValue as number);
    }

    const handlePriceUpdate = (event: Event, newValue: number | number[]) => {
        setPrice(newValue as number[]);
    }

    return (
        <div style={{backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10'}}>
            <Image src={logo} alt="Parki logo" className='w-[100vw] h-[8vh] object-contain mt-3 mb-4'/>

        <div className="absolute ml-[2vw] h-[86.5vh] w-[96vw] rounded-xl z-50 bg-[#FCF9EF] text-[#343632]">

        <div className="flex flex-row justify-around py-3 text-xl">
            <Link href={{pathname: '/map'}}>
                <MdArrowBackIos/>
            </Link>
                <div className="flex items-center font-passion">
                    <FaFilterCircleXmark className="mr-1"/>
                    Filter
                </div>
                <MdArrowBackIos color="transparent"/>
            </div>

            <div className="text-center font-bold">
                Parking Ending On
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center w-3/6 rounded-full text-white bg-[#343632]">
                    <LuClock5/> &nbsp; December 20, 2023
                </div>
            </div>
            <br/>
            <div className="text-center">
                Within <span
                className="text-blue-500">{range * 100 < 1000 ? (range * 100) + "m" : (range === 30 ? "any distance" : (range / 10) + "km")}</span>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-5/6">
                    <Slider value={range} onChange={handleRangeUpdate} min={0} max={30} color="error"/>
                </div>
            </div>

            <div className="text-center">
                Price Range:<p/>
                $<span className="text-blue-500">{price[0]}</span> to $<span
                className="text-blue-500">{price[1] < 200 ? price[1] : "Infinite"}</span>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-5/6">
                    <Slider value={price} onChange={handlePriceUpdate} min={0} max={200} color="error"/>
                </div>
            </div>
            <br/><br/>

            <Divider/>

            <br/>
            <div className="flex justify-center items-center">
                <div className="w-5/6 font-bold">
                    Amenities
                </div>
            </div>
            {renderAmenities()}
            <br/>
        </div>
        </div>
    );
}

export default FilterPage;

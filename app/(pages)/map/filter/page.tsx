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
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { getRange, setRange, getPrice, setPrice, getAmenities, updateAmenity } from "@/app/GlobalRedux/Features/filtersSlice";

const FilterPage = () => {

    const dispatch = useDispatch();

    const range = useSelector(getRange);
    const price = useSelector(getPrice);
    const amenities = useSelector(getAmenities);

    // const [amenities, setAmenities] = useState({
    //     "Accessible": searchParams.amenities?.includes("Accessible"),
    //     "Self-Park": searchParams.amenities?.includes("Self-Park"),
    //     "EV Charging": searchParams.amenities?.includes("EV Charging"),
    //     "Covered": searchParams.amenities?.includes("Covered"),
    //     "On-Site Staff": searchParams.amenities?.includes("On-Site Staff"),
    //     "Shovelling Included": searchParams.amenities?.includes("Shovelling Included")
    // });

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
                        className={(isClicked ? "bg-[#343632] text-white" : "bg-[#ffffff]" +
                                " text-black") +
                            " flex justify-center items-center w-3/6 rounded-full border-black border-2"}
                        onClick={() => dispatch(updateAmenity(amenity.key))}
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
            <div className="flex flex-row justify-around py-3 text-xl">
                <Link href={{
                    pathname: '/map',
                    query: {
                        range,
                        price,
                        // @ts-ignore
                        amenities: Object.keys(amenities).filter((amenity: string) => amenities[amenity])
                    }
                }}>
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
                    <Slider value={range} onChange={(_, newValue) => dispatch(setRange(newValue))} min={0} max={30} color="error"/>
                </div>
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

            <Divider/>

            <br/>
            <div className="flex justify-center items-center">
                <div className="w-5/6 font-bold">
                    Amenities
                </div>
            </div>
            {renderAmenities()}
            <br/>
        </>
    );
}

export default FilterPage;

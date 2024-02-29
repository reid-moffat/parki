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
import { useDispatch, useSelector } from "react-redux";
import { getRange, setRange, getPrice, setPrice, getAmenities, updateAmenity } from "@/app/GlobalRedux/Features/filters";

// @ts-ignore
const Filter = ({ setPageState }) => {

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
                        onClick={() => { dispatch(updateAmenity(amenity.key)); console.log(typeof amenity.key); }}
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
            <div className="flex font-bold text-2xl pt-6 mb-6">
                <MdArrowBackIos className='ml-10' size={25} onClick={() => setPageState("map")}/>
                <div className="flex pl-[4.5rem]">
                    <FaFilterCircleXmark className="mr-2"/>
                    Filter
                </div>
            </div>

            <div className='flex flex-row w-[80vw] mx-auto'>
                <div className='text-md font-bold py-3 pt-0'>Available Starting: </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center mb-3 w-3/6 rounded-full text-white bg-[#343632]">
                    <LuClock5/> &nbsp; December 20, 2023
                </div>
            </div>

            <div className='w-[80vw] mx-auto'>
                <Divider/>
            </div>

            <div className='flex flex-row w-[80vw] mx-auto'>
                <div className='text-md font-bold py-3'>Distance (km): </div>
                <span
                className="text-[#FF4251] text-md py-3 px-2">{range * 100 < 1000 ? (range * 100) + "m" : (range === 30 ? "any distance" : (range / 10) + "km")}</span>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-5/6">
                    <Slider value={range} onChange={(_, newValue) => dispatch(setRange(newValue))} min={0} max={30} color="error"/>
                </div>
            </div>

            <div className='w-[80vw] mx-auto'>
                <Divider/>
            </div>

            <div className='flex flex-row w-[80vw] mx-auto'>
                <div className='text-md font-bold py-3'>Price (CAD):</div>
                <div className="text-md py-3 px-2">
                    $<span className="text-[#FF4251]">{price[0]}</span> to $<span
                    className="text-[#FF4251]">{price[1] < 200 ? price[1] : "Infinite"}</span>
                </div>
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
                <div className='text-md font-bold py-3 pt-0'>Amenities</div>
                <div className='grid grid-cols-2'>
                        {renderAmenities()}
                </div>
            </div>

            <div className='flex flex-row justify-between w-[80vw] mx-auto pt-2'>
                <button
                    className='w-[30vw] mt-1 text-center py-3 mr-3 outline-none rounded-2xl border-2 border-[#343632] text-[#343632] font-bold font-3xl'
                    onClick={()=>{ dispatch(setRange(30)); dispatch(setPrice([0,200])); }}
                >
                    Reset
                </button>
                <div
                    onClick={() => setPageState("map")}
                    className='w-full mt-1 text-center py-3 outline-none rounded-2xl bg-[#FF4251] text-[#FCF9EF] font-bold font-3xl'
                >
                    Apply Filters
                </div>
            </div>
            <br/>
        </>
    );
}

export default Filter;

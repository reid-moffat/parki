import React from 'react';
import { MdArrowBackIos, MdLocalParking } from "react-icons/md";
import { FaCarTunnel, FaFilterCircleXmark } from "react-icons/fa6";
import { LuClock5 } from "react-icons/lu";
import { States } from "@/app/pages/map/page";
import Slider from '@mui/material/Slider';
import Divider from "@/public/Line.png";
import Image from 'next/image';
import { FaWheelchair } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { RiBattery2ChargeLine } from "react-icons/ri";
import { IoSnowSharp } from "react-icons/io5";

// @ts-ignore
const FilterPage = ({setPageState, range, setRange, price, setPrice, amenities, setAmenities}) => {

    const renderAmenities = () => {
        const allAmenities = [
            <FaWheelchair key={"Accessible"}/>,
            <MdLocalParking key={"Self-Park"}/>,
            <RiBattery2ChargeLine key={"EV Charging"}/>,
            <FaCarTunnel key={"Covered"}/>,
            <FaWheelchair key={"On-Site Staff"}/>,
            <IoSnowSharp key={"Shovelling Included"}/>,
        ];

        return allAmenities.map((amenity) => {
            // @ts-ignore
            const isClicked = amenities[amenity.key];

            return (
                <div className="flex justify-center items-center" key={amenity.key}>
                    <div
                        className={(isClicked ? "bg-[#343632] text-white" : "bg-[#ffffff]" +
                                " text-black") +
                            " flex justify-center items-center w-3/6 rounded-full border-black border-2"}
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
        <div className="absolute ml-[2vw] h-[86.5vh] w-[96vw] rounded-xl z-50 bg-[#FCF9EF] text-[#343632]">

            <div className="flex flex-row justify-around py-3 text-xl">
                <MdArrowBackIos onClick={() => setPageState(States.MAP)}/>
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

            <div className="flex justify-center items-center">
                <Image src={Divider} alt={"Divider"}/>
            </div>
            <br/>

            <div className="flex justify-center items-center">
                <div className="w-5/6 font-bold">
                    Amenities
                </div>
            </div>
            {renderAmenities()}
            <br/>
        </div>
    );
}

export default FilterPage;

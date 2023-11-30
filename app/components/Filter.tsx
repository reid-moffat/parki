import React, { useState } from 'react';
import { MdArrowBackIos } from "react-icons/md";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { LuClock5 } from "react-icons/lu";
import { States } from "@/app/pages/map/page";
import Slider from '@mui/material/Slider';
import Divider from "@/public/Line.png";
import Image from 'next/image';
import { FaWheelchair } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { MdLocalParking } from "react-icons/md";
import { RiBattery2ChargeLine } from "react-icons/ri";
import { FaCarTunnel } from "react-icons/fa6";
import { IoSnowSharp } from "react-icons/io5";

// @ts-ignore
const FilterPage = ({ setPageState }) => {

    const [range, setRange] = useState(5);
    const [price, setPrice] = useState([70, 100]);
    const [amenities, setAmenities] = useState({ "Accessible": false,
        "Self-Park": false, "EV Charging": false, "Covered": false, "On-Site Staff": false, "Shovelling Included": false });

    const renderAmenities = () => {
        const allAmenities = [
            [<FaWheelchair/>, "Accessible"],
            [<MdLocalParking/>, "Self-Park"],
            [<RiBattery2ChargeLine/>, "EV Charging"],
            [<FaCarTunnel/>, "Covered"],
            [<FaWheelchair/>, "On-Site Staff"],
            [<IoSnowSharp/>, "Shovelling Included"],
        ];

        return allAmenities.map((amenity) => (
            <div className="flex justify-center items-center">
                <div
                    className={"flex justify-center items-center w-3/6 rounded-full border-black border-2 " +
                        (amenities[amenity[1]] ? "bg-[#343632] text-white" : "bg-[#ffffff] text-black")}
                    onClick={() => setAmenities((oldState) => ({ ...oldState, [amenity[1]]: !oldState[amenity[1]] }))}
                >
                    <IconContext.Provider value={{ color: '#FF4251' }}>
                        {amenity[0]}
                    </IconContext.Provider>
                    &nbsp;
                    {amenity[1]}
                </div>
                <br/><br/>
            </div>
        ));
    }

    const handleRangeUpdate = (event: Event, newValue: number) => {
        setRange(newValue);
    }

    const handlePriceUpdate = (event: Event, newValue: number[]) => {
        setPrice(newValue);
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
                Within <span className="text-blue-500">{range * 100 < 1000 ? (range * 100) + "m" : (range / 10) + "km"}</span>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-5/6">
                    <Slider value={range} onChange={handleRangeUpdate} min={0} max={30} color="error" />
                </div>
            </div>

            <div className="text-center">
                Price Range:<p/>
                $<span className="text-blue-500">{price[0]}</span> to $<span className="text-blue-500">{price[1]}</span>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-5/6">
                    <Slider value={price} onChange={handlePriceUpdate} min={0} max={200} color="error" />
                </div>
            </div>
            <br/><br/><br/>

            <div className="flex justify-center items-center">
                <Image src={Divider} alt={"Divider"}/>
            </div>
            <br/><br/>

            {renderAmenities()}
        </div>
    );
}

export default FilterPage;

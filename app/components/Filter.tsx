import React from 'react';
import { MdArrowBackIos } from "react-icons/md";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { LuClock5 } from "react-icons/lu";
import { States } from "@/app/pages/map/page";
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
    const renderAmenities = () => {
        const amenities = [
            [<FaWheelchair/>, "Accessible"],
            [<MdLocalParking/>, "Self-Park"],
            [<RiBattery2ChargeLine/>, "EV Charging"],
            [<FaCarTunnel/>, "Covered"],
            [<FaWheelchair/>, "On-Site Staff"],
            [<IoSnowSharp/>, "Shovelling Included"],
        ];

        return amenities.map((amenity) => (
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center w-3/6 rounded-full text-white bg-[#343632]">
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
                Within <span className="text-blue-500">25</span> km
            </div>
            [Distance slider]

            <div className="text-center">
                Price Range:
                <p/>
                $<span className="text-blue-500">0</span> to $<span className="text-blue-500">5</span>
            </div>
            [Price slider]
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

import React from 'react';
import Link from "next/link";
import { useSelector } from "react-redux";
import { getSpot } from "@/app/GlobalRedux/Features/currentSpot";

const Spot = () => {

    const currentSpot = useSelector(getSpot);
    const TEMP_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG/1200px-Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG";

    return (
        <div className="absolute w-[92.5vw] bottom-24 bg-[#FCF9EF] p-6 rounded-2xl shadow-xl mx-[2vw] mt-[33vh] z-50">
            <div
                className="h-[20vh] p-4 rounded-xl border-2 text-white"
                style={{
                    backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), "+"url("+TEMP_IMAGE+")",
                    backgroundSize: "cover"
                }}
            >
                <div className="flex flex-row mb-auto">
                    <div>
                        <div className="text-2xl font-bold">{currentSpot.address}</div>
                        <div>Kingston, ON</div>
                    </div>
                    <div className="ml-auto">
                        <div className="text-3xl font-bold">${currentSpot.price}</div>
                        <div className="text-sm">per {currentSpot.period}</div>
                    </div>
                </div>
                <div className="flex flex-row mt-[8vh]">
                    <div className="text-xs">{Math.round(currentSpot.distance) >= 1000 ? Math.round(currentSpot.distance / 100) / 10 + "km" : Math.round(currentSpot.distance) + "m"} away</div>
                    <div className="flex ml-auto space-x-2 items-center">
                        {currentSpot.amenities.map((amenity, key) => (
                            <div key={key} className="text-[10px] border-[1px] border-block rounded-full px-2">{amenity}</div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-md mt-2 mb-2">
                {currentSpot.description}
            </div>
            <Link
                className="flex justify-center bg-[#FF4251] py-3 text-2xl font-passion font-medium text-[#FCF9EF] text-center shadow-xl rounded-2xl active:opacity-50 duration-75"
                href='/map/spot'
            >
                More Details
            </Link>
        </div>
    );
};

export default Spot;

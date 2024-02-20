"use client";
import { MdChevronLeft, MdLocalParking } from "react-icons/md";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DummyMap from "@/public/spot/dummy_map.png";
import { FaWheelchair } from "react-icons/fa";
import { RiBattery2ChargeLine } from "react-icons/ri";
import { FaCarTunnel } from "react-icons/fa6";
import { IoSnowSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons";

const AddSpot = () => {

    const router = useRouter();

    const [currentStep, setCurrentStep] = useState(1);
    const [amenities, setAmenities] = useState({
        "Accessible": false,
        "Self-Park": false,
        "EV Charging": false,
        "Covered": false,
        "On-Site Staff": false,
        "Shovelling Included": false,
    });

    const steps = {
        1: (
            <>
                <div className="text-3xl font-bold mt-8">
                    Tell us about your spot!
                </div>

                <div className="mt-4">
                    Where is it?
                </div>

                <input type="text" placeholder="Address" className="w-full bg-[#4472CA33] rounded-xl mt-6 px-6 py-3"/>

                <div
                    className="absolute w-full bottom-8 bg-[#FF4251] text-center text-white text-2xl font-semibold rounded-2xl p-3"
                    onClick={() => setCurrentStep(2)}
                >
                    Let's Go!
                </div>
            </>
        ),
        2: (
            <>
                <div className="text-3xl font-bold mt-8">
                    Confirm Location
                </div>

                <div className="mt-4">
                    Adjust map to the exact location
                </div>

                <Image src={DummyMap} alt={"Map"} className="mt-4 mb-4"/>

                <div
                    className="absolute w-full bottom-8 bg-[#FF4251] text-center text-white text-2xl font-semibold rounded-2xl p-3"
                    onClick={() => setCurrentStep(3)}
                >
                    Confirm
                </div>
            </>
        ),
        3: (
            <>
                <div className="text-3xl font-bold mt-8">
                    What features does it have?
                </div>

                <div className="mt-4 mb-6">
                    Please select all the features your parking spot offers:
                </div>

                {[<FaWheelchair key={"Accessible"}/>, <MdLocalParking key={"Self-Park"}/>, <RiBattery2ChargeLine key={"EV Charging"}/>,
                    <FaCarTunnel key={"Covered"}/>, <FaWheelchair key={"On-Site Staff"}/>, <IoSnowSharp key={"Shovelling Included"}/>]
                    .map((amenity) => {
                        // @ts-ignore
                        const isClicked = amenities[amenity.key];

                        return (
                            <div className="flex justify-center items-center" key={amenity.key}>
                                <div
                                    className={(isClicked ? "bg-[#343632] text-[#FCF9EF]" : "bg-[#FCF9EF] text-black") +
                                        " flex justify-center items-center w-full rounded-full border-[#343632]" +
                                        " border-[1px] mx-2 my-2 py-1 text-sm font-light"}
                                    onClick={() => {
                                        // @ts-ignore
                                        setAmenities({...amenities, [amenity.key]: !isClicked});
                                    }}
                                >
                                    <IconContext.Provider value={{color: '#FF4251'}}>
                                        {amenity}
                                    </IconContext.Provider>
                                    &nbsp;
                                    {amenity.key as string}
                                </div>
                            </div>
                        )
                    })
                }

                <div
                    className="absolute w-full bottom-8 bg-[#FF4251] text-center text-white text-2xl font-semibold rounded-2xl p-3"
                    onClick={() => setCurrentStep(4)}
                >
                    Confirm Features
                </div>
            </>
        ),
        4: (
            <>
                <div className="text-3xl font-bold mt-8">
                    Upload photos
                </div>

                <div className="mt-4">
                    Hold and drag to rearrange photos!
                </div>

                <div className="text-[#343632B2]">
                    <u>Photo Tips:</u> Take the photo during the day with plenty of natural light! Make sure to include
                    any elements that will help drivers identify the specific parking spot.
                </div>

                <div className="w-full bg-[#dae2f0] rounded-xl mt-6 px-32 py-24">
                    <FaPlus/>
                    <br/>
                    Add Photo
                </div>

                <div
                    className="absolute w-full bottom-8 bg-[#FF4251] text-center text-white text-2xl font-semibold rounded-2xl p-3"
                    onClick={() => setCurrentStep(5)}
                >
                    Confirm Photos
                </div>
            </>
        ),
        5: (
            <>
                <div className="text-3xl font-bold mt-8">
                    Additional information
                </div>

                <div className="mt-4">
                    Where is it?
                </div>

                <input
                    type="text"
                    placeholder="Aditional information"
                    className="w-full bg-[#dae2f0] rounded-xl mt-6 px-32 py-24"
                />

                <div
                    className="absolute w-full bottom-8 bg-[#FF4251] text-center text-white text-2xl font-semibold rounded-2xl p-3"
                    onClick={() => console.log("add spot")}
                >
                    Confirm Info
                </div>
            </>
        )
    };

    const onClickBack = () => {
        if (currentStep === 1) {
            router.push('/spots');
            return;
        }
        setCurrentStep(currentStep - 1);
    }

    return (
        <div className="relative h-full mx-6">
            <div className="pt-10">
                <MdChevronLeft size={42} onClick={onClickBack}/>
            </div>

            { /* @ts-ignore */ }
            {steps[currentStep]}
        </div>
    );
}

export default AddSpot;

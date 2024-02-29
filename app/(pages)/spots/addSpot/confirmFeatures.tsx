import { FaWheelchair } from "react-icons/fa";
import { MdChevronLeft, MdLocalParking } from "react-icons/md";
import { RiBattery2ChargeLine } from "react-icons/ri";
import { FaCarTunnel } from "react-icons/fa6";
import { IoSnowSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import { useState } from "react";

// @ts-ignore
const ConfirmFeatures = ({ setStep }) => {

    const [amenities, setAmenities] = useState({
        "Accessible": false,
        "Self-Park": false,
        "EV Charging": false,
        "Covered": false,
        "On-Site Staff": false,
        "Shovelling Included": false,
    });

    return (
        <>
            <div className="pt-10">
                <MdChevronLeft size={42} onClick={() => setStep("confirmLocation")}/>
            </div>
            <div className="text-3xl font-bold mt-8">
                What features does it have?
            </div>

            <div className="mt-4 mb-6">
                Please select all the features your parking spot offers:
            </div>

            {[<FaWheelchair key={"Accessible"}/>, <MdLocalParking key={"Self-Park"}/>,
                <RiBattery2ChargeLine key={"EV Charging"}/>,
                <FaCarTunnel key={"Covered"}/>, <FaWheelchair key={"On-Site Staff"}/>,
                <IoSnowSharp key={"Shovelling Included"}/>]
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
                onClick={() => setStep("uploadPhotos")}
            >
                Confirm Features
            </div>
        </>
    );
}

export default ConfirmFeatures;

import React from 'react'
import Image from 'next/image';
import car from "@/public/parked_car.jpg";
import line from "@/public/Line.png";
import locationIcon from "@/public/pins/OtherSpot.png";
import { States } from "@/app/pages/map/page";
import { MdArrowBackIos, MdArrowForwardIos, MdLocalParking } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";
import { RiBattery2ChargeLine } from "react-icons/ri";
import { FaCarTunnel } from "react-icons/fa6";
import { IoSnowSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

// @ts-ignore
const DetailsPage = ({setPageState, spotData}) => {

    const renderAmenities = () => {
        const allAmenities = [
            <FaWheelchair key={"Accessible"}/>,
            <MdLocalParking key={"Self-Park"}/>,
            <RiBattery2ChargeLine key={"EV Charging"}/>,
            <FaCarTunnel key={"Covered"}/>,
            <FaWheelchair key={"On-Site Staff"}/>,
            <IoSnowSharp key={"Shovelling Included"}/>,
        ];

        return allAmenities.filter((amenity) => spotData.amenities.includes(amenity.key))
            .map((amenity) => {
                return (
                    <div className="flex justify-center items-center" key={amenity.key}>
                        <div
                            className={"bg-[#343632] text-white flex justify-center items-center w-3/6 rounded-full border-black border-2"}
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
        <div
            className='ml-[2vw] h-[86.5vh] w-[96vw] rounded-xl z-50 bg-[#FCF9EF] text-[#343632] font-passion overflow-y-scroll no-scrollbar'>
            <div className='bg-[#FCF9EF] border-0 rounded-t-xl h-[100%] pb-[40rem]'>

                <div className="absolute pl-2 py-2 m-3 border-2 rounded-full">
                    <MdArrowBackIos onClick={() => setPageState(States.MAP)} color="#FCF9EF"/>
                </div>

                <Image src={car} alt={"Parking_Lot_pic"} className='border-0 rounded-xl overflow-hidden'/>

                <div className='p-5'>
                    <div className='text-[1.75rem] font-normal'>{spotData.address}</div>
                    <div className='flex flex-row w-[100%] items-center -mt-3'>
                        <Image src={locationIcon} alt={"Location_Icon"} className='w-[5%] h-[5%] mr-3'/>
                        <div className='text-[1.25rem]'>Kingston, ON</div>
                    </div>
                    <div className='text-[1rem] font-outfit mt-3'>
                        {spotData.description}
                    </div>
                </div>

                <div className='flex justify-center'>
                    <Image src={line} alt={"line_divider_1"} className='w-[85vw]'/>
                </div>
                <div className='p-5 text-[1.5rem] font-normal'>
                    Amenities
                </div>
                {renderAmenities()}
                {/* <div className='flex justify-center'>
                <Image src={line} alt={"line_divider_2"} className='w-[85vw]'/>
            </div>
            <div className='p-[5%]'>
                <Image src={map} alt={"map"} className='border-0 rounded-[1.25rem] h-[8rem] w-[100%] overflow-hidden'/>
                <br/>
                <button className='flex flex-row border-[1px] border-[#343632] w-[100%] rounded-[2.5rem] h-[5%] items-center justify-center font-outfit'>
                    Availability
                    <MdArrowForwardIos className='w-[5%] h-[5%]'/>
                </button>
            </div> */}
                <div className='flex justify-center'>
                    <Image src={line} alt={"line_divider_3"} className='w-[85vw]'/>
                </div>
                <div className='p-[5%]'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='text-[1.5rem] font-normal'>Reviews</div>
                        <div className="flex items-center">
                            <div
                                className='text-[1.125rem] font-bold mr-1'>{Math.floor(spotData.rating * 10) / 10}</div>
                            stars
                        </div>
                    </div>
                    <button
                        className='flex flex-row border-[1px] border-[#343632] w-[100%] rounded-[2.5rem] h-[5%] items-center justify-center font-outfit'>
                        Show all {Math.floor(Math.random() * 20)} reviews
                        <MdArrowForwardIos className='w-[4%] h-[4%] ml-2'/>
                    </button>
                </div>
                <br/><br/><br/><br/><br/>
            </div>
            <div
                className='absolute w-[96vw] pl-[5%] pr-[5%] bottom-[4.5vw] flex flex-row h-[8%] bg-[#ff4251] rounded-b-xl justify-between items-center'>
                <div className='text-[#FCF9EF] text-[1.75rem] font-normal'>$110/month</div>
                {/* <button className='flex bg-[#343632] text-3xl text-[#FCF9EF] px-[10%] py-[1%] rounded-full font-normal'>RESERVE</button> */}
            </div>
        </div>
    )
}

export default DetailsPage

"use client";
import React from 'react'
import Image from 'next/image';
import car from "@/public/parked_car.jpg";
import locationIcon from "@/public/pins/OtherSpot.png";
import { MdArrowBackIos, MdArrowForwardIos, MdLocalParking } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";
import { RiBattery2ChargeLine } from "react-icons/ri";
import { FaCarTunnel } from "react-icons/fa6";
import { IoSnowSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import Divider from "@/components/helpers/Divider";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getSpot } from "@/app/GlobalRedux/Features/currentSpot";
import dynamic from "next/dynamic";
import { auth } from "@/config/firebase";
import { redirect } from "next/navigation";

const MiniMap = dynamic(() => import('@/components/map/MiniMap'), {ssr: false});

const DetailsPage = () => {

    const currentSpot = useSelector(getSpot);
    const TEMP_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG/1200px-Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG";

    const renderAmenities = () => {
        const allAmenities = [
            <FaWheelchair key={"Accessible"}/>,
            <MdLocalParking key={"Self-Park"}/>,
            <RiBattery2ChargeLine key={"EV Charging"}/>,
            <FaCarTunnel key={"Covered"}/>,
            <FaWheelchair key={"On-Site Staff"}/>,
            <IoSnowSharp key={"Shovelling Included"}/>,
        ];

        // @ts-ignore
        return allAmenities.filter((amenity) => currentSpot.amenities?.includes(amenity.key))
            .map((amenity) => {
                return (
                    <div className="flex" key={amenity.key}>
                        <div
                            className={"bg-[#343632] text-white text-sm font-light flex justify-center items-center w-[100vw] rounded-full m-1 py-1"}
                        >
                            <IconContext.Provider value={{color: '#FF4251'}}>
                                {amenity}
                            </IconContext.Provider>
                            &nbsp;
                            {amenity.key as string}
                        </div>
                    </div>
                )
            });
    }

    return (
        <div className='h-[79.5vh] rounded-xl overflow-y-scroll no-scrollbar'>
            <div className='bg-[#FCF9EF] border-0 rounded-t-xl h-[100%] pb-[40rem]'>

                <div className="flex flex-row justify-left py-3 pl-10 pt-5 text-xl">
                    <Link href='/map' className='pt-5'>
                        <MdArrowBackIos/>
                    </Link>
                </div>

                <div className="text-center text-3xl font-bold">
                Parking Details
                </div>

                <div className='flex flex-row items-center justify-center py-2'>
                    <Image src={car} alt={"Parking_Lot_pic"} className='w-[80vw] h-[20vh] border-0 rounded-xl overflow-hidden'/>
                </div>

                <div className='flex flex-col w-[80vw] mx-auto '>
                    <div className='text-2xl font-bold'>{currentSpot.address}</div>
                    <div className='flex flex-row w-[100%] items-center'>
                        <Image src={locationIcon} alt={"Location_Icon"} className='w-[5%] h-[5%] mr-1'/>
                        <div className='text-md'>Kingston, ON</div>
                    </div>
                    <div className='text-sm my-1 mb-2'>
                        {currentSpot.description}
                    </div>
                </div>

                <div className='w-[80vw] mx-auto'>
                    <Divider/>
                </div>


                <div className='flex flex-col w-[80vw] mx-auto'>
                    <div className='text-md font-bold py-3'>Amenities</div>
                    <div className='grid grid-cols-2'>
                         {renderAmenities()}
                    </div>
                </div>

                <br/>

                <div className='w-[80vw] mx-auto'>
                    <Divider/>
                </div>

                <div className='flex flex-col w-[80vw] mx-auto py-3'>
                    <div className='w-[80vw] h-[20vh] border-0 rounded-xl overflow-hidden mb-3 relative z-1'>
                        <MiniMap lat={currentSpot.latitude} lng={currentSpot.longitude}/>
                    </div>
                    <button
                        className='flex flex-row border-[1px] border-[#343632] w-[100%] rounded-[2.5rem] h-[5%] items-center justify-center font-normal py-1'>
                        Availability
                        <MdArrowForwardIos className='w-[4%] h-[4%] ml-2'/>
                    </button>
                </div>

                <div className='w-[80vw] mx-auto'>
                    <Divider/>
                </div>

                <div className='flex flex-col w-[80vw] mx-auto'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='text-md font-bold py-3'>Reviews</div>
                        <div className="flex items-center">
                            <div className='text-[1.125rem] font-bold mr-1'>{currentSpot.rating}</div>
                            stars
                        </div>
                    </div>
                    <button
                        className='flex flex-row border-[1px] border-[#343632] w-[100%] rounded-[2.5rem] h-[5%] items-center justify-center font-normal py-1'>
                        Show all {Math.floor(Math.random() * 20)} reviews
                        <MdArrowForwardIos className='w-[4%] h-[4%] ml-2'/>
                    </button>
                </div>
                <br/><br/><br/><br/>
            </div>
            <div
                className='absolute w-[96vw] pl-[5%] pr-[5%] bottom-[20vw] flex flex-row h-[8%] bg-[#ff4251] rounded-b-xl justify-between items-center z-10'
            >
                <div className='text-[#FCF9EF] text-[1.75rem] font-normal'>${currentSpot.price}/month</div>
                <Link
                    href={auth.currentUser === null ? "/welcome" : '/map/spot/policy'}
                    className={'text-white bg-[#343632] p-2 rounded-xl ps-8 pe-8 ' + (auth.currentUser === null ? 'text-sm' : 'text-xl')}
                >
                    {auth.currentUser === null ? "Login to reserve" : "RESERVE"}
                </Link>
            </div>
        </div>
    )
}

export default DetailsPage

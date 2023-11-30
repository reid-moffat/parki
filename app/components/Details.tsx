import React from 'react'
import Image from 'next/image';
import car from "@/public/parked_car.jpg";
import line from "@/public/Line.png";
import map from "@/public/mapPlaceholder.png";
import rightArrow from "@/public/icon_chevron_right.png";
import leftArrow from "@/public/icon_chevron_left.png";
import locationIcon from "@/public/pins/OtherSpot.png";
import { States } from "@/app/pages/map/page";

// @ts-ignore
const DetailsPage = ({ setPageState }) => {
  return (
    <div className='ml-[2vw] h-[86.5vh] w-[96vw] rounded-xl z-50 bg-[#FCF9EF] text-[#343632] font-passion overflow-y-scroll no-scrollbar'>
        <div className='bg-[#FCF9EF] border-0 rounded-t-xl h-[100%] pb-[40rem]'>
            <div>
                <div>
                    <Image src={car} alt={"Parking_Lot_pic"} className='border-0 rounded-xl overflow-hidden'/>
                </div>
                <Image src={leftArrow} alt={"Left_Arrow"} onClick={() => setPageState(States.MAP)}/>
            </div>
            <div className='p-5 px-8'>
                <div className='text-[1.75rem] font-normal'>163 Union Street</div>
                <div className='flex flex-row w-[100%] items-center'>
                    <Image src={locationIcon} alt={"Location_Icon"} className='w-[5%] h-[5%] mr-3'/>
                    <div className='text-[1.25rem]'>Kingston, ON</div>
                </div>
                <div className='text-[1rem] font-outfit mt-3'>
                    Here is my parking spot. Wow! It{"'"}s such a cool parking spot. It has these things! Here is an important thing to know.
                </div>
            </div>
            <div className='flex justify-center'>
                <Image src={line} alt={"line_divider_1"} className='w-[85vw]'/>
            </div>
            <div className='p-5 text-[1.5rem] font-normal'>
                Amenities
            </div>
            <div className='flex justify-center'>
                <Image src={line} alt={"line_divider_2"} className='w-[85vw]'/>
            </div>
            <div className='p-[5%]'>
                <Image src={map} alt={"map"} className='border-0 rounded-[1.25rem] h-[8rem] w-[100%] overflow-hidden'/>

                <button className='flex flex-row border-[1px] border-[#343632] w-[100%] rounded-[2.5rem] h-[5%] items-center justify-center font-outfit'>
                    Availability
                    <Image src={rightArrow} alt={"Arrow1"} className='w-[5%] h-[5%]'/>
                </button>
            </div>
            <div className='flex justify-center'>
                <Image src={line} alt={"line_divider_3"} className='w-[85vw]'/>
            </div>
            <div className='p-[5%]'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='text-[1.5rem] font-normal'>Reviews</div>
                    <div>
                        <div className='text-[1.125rem] font-bold'>4.0</div>
                        stars
                    </div>
                </div>
                <button className='flex flex-row border-[1px] border-[#343632] w-[100%] rounded-[2.5rem] h-[5%] items-center justify-center font-outfit'>
                    Show all 6 reviews
                    <Image src={rightArrow} alt={"Arrow2"} className='w-[5%] h-[5%]'/>
                </button>
            </div>
        </div>
        <div className='absolute w-[96vw] pl-[5%] pr-[5%] bottom-[4.5vw] flex flex-row h-[8%] bg-[#ff4251] rounded-b-xl justify-between items-center'>
            <div className='text-[#FCF9EF] text-[1.75rem] font-normal'>$12/day</div>
            <button className='flex bg-[#343632] text-[#FCF9EF] pl-[10%] pr-[10%] pt-[3%] pb-[3%] rounded-[2.5rem] font-normal'>RESERVE</button>
        </div>
    </div>
  )
}

export default DetailsPage

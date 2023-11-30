import React from 'react'
import Image from 'next/image';
import car from "@/public/parked_car.jpg";
import line from "@/public/Line.png";
import map from "@/public/mapPlaceholder.png";
import rightArrow from "@/public/icon_chevron_right.png";
import locationIcon from "@/public/pins/OtherSpot.png";

const Details = () => {
  return (
    <div className='w-[100%]'>
        <div className='bg-[#FCF9EF] border-0 rounded-t-[1.25rem] h-[90%] pb-[17%]'>
            <div>
                <div>
                    <Image src={car} alt={"Parking_Lot_pic"} className='border-0 rounded-[1.25rem] overflow-hidden'/>
                </div>
            </div>
            <div className='p-[5%]'>
                <div className='text-[#343632] text-[1.75rem] font-normal'>163 Union Street</div>
                <div className='flex flex-row w-[100%] items-start'>
                    <Image src={locationIcon} alt={"Location_Icon"} className='w-[5%] h-[5%]'/>
                    Kingston, ON
                </div>
                Here is my parking spot. Wow! It's such a cool parking spot. It has these things! Here is an important thing to know.
            </div>
            <div className='flex justify-center'>
                <Image src={line} alt={"line_divider_1"} />
            </div>
            <div className='p-[5%]'>
                Amenities
            </div>
            <div className='flex justify-center'>
                <Image src={line} alt={"line_divider_2"}/>
            </div>
            <div className='p-[5%]'>
                <Image src={map} alt={"map"} className='border-0 rounded-[1.25rem] h-[8rem] w-[100%] overflow-hidden'/>

                <button className='flex flex-row border-[1px] border-[#343632] w-[100%] rounded-[2.5rem] h-[5%] items-center justify-center'>
                    Availability
                    <Image src={rightArrow} alt={"Arrow1"} className='w-[5%] h-[5%]'/>
                </button>
            </div>
            <div className='flex justify-center'>
                <Image src={line} alt={"line_divider_3"}/>
            </div>
            <div className='p-[5%]'>
                <div className='flex flex-row justify-between items-center'>
                    Reviews
                    <div>
                        4.0
                        stars
                    </div>
                </div>
                <button className='flex flex-row border-[1px] border-[#343632] w-[100%] rounded-[2.5rem] h-[5%] items-center justify-center'>
                    Show all 6 reviews
                    <Image src={rightArrow} alt={"Arrow2"} className='w-[5%] h-[5%]'/>
                </button>
            </div>
        </div>
        <div className='absolute w-[90%] pl-[5%] pr-[5%] bottom-[10%] flex flex-row h-[7%] bg-[#ff4251] rounded-b-[1.25rem] justify-between items-center'>
            <div className='text-[#FCF9EF] text-[1.75rem] font-normal'>$12/day</div>
            <button className='flex bg-[#343632] text-[#FCF9EF] pl-[10%] pr-[10%] pt-[3%] pb-[3%] rounded-[2.5rem]'>RESERVE</button>
        </div>
    </div>
  )
}

export default Details

import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";
import React from "react";

const ReviewBooking = () => {
    return (
        <div>
            <div className='flex text-3xl font-bold p-8'>
                <Link href="/map/spot/booking">
                    <MdOutlineArrowBackIos className='w-10 h-10 mr-2'/>
                </Link>
                <div className="pl-2">
                    Review Summary
                </div>
            </div>
        </div>
    );
}

export default ReviewBooking;

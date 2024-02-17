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

            <div className="rounded-xl border-2 border-black mt-4 ml-10 mr-10 pt-4 pb-4 pl-4 pr-4 font-outfit">
                <div className="flex justify-between">
                    <div>
                        Address
                    </div>
                    <div className="font-bold">
                        163 Union Street
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        Vehicle Make
                    </div>
                    <div className="font-bold">
                        Honda Civic
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        License
                    </div>
                    <div className="font-bold">
                        HYAN 041
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        Date
                    </div>
                    <div className="font-bold">
                        December 12-15
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        Duration
                    </div>
                    <div className="font-bold">
                        4 days
                    </div>
                </div>
            </div>

            <div className="rounded-xl border-2 border-black mt-4 ml-10 mr-10 pt-4 pb-4 pl-4 pr-4 font-outfit">
                <div className="flex justify-between">
                    <div>
                        Amount
                    </div>
                    <div className="font-bold">
                        $36.00
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                        Taxes (13% HST)
                    </div>
                    <div className="font-bold">
                        $4.68
                    </div>
                </div>
                <div className="bg-black h-[0.5px] mt-2 mb-2"/>
                <div className="flex justify-between">
                    <div>
                        Total
                    </div>
                    <div className="font-bold">
                        $40.68
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <div
                    className="rounded-2xl bg-[#FF4251] p-2 text-center text-white text-xl pl-14 pr-14 mt-10"
                >
                    CONFIRM PAYMENT
                </div>
            </div>
        </div>
    );
}

export default ReviewBooking;

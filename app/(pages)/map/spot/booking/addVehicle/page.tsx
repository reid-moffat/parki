"use client";
import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";
import React from "react";

const AddVehicle = () => {

    const [toggle, setToggle] = React.useState(true);

    return (
        <div>
            <div className='flex text-3xl font-bold p-8'>
                <Link href="/map/spot/booking">
                    <MdOutlineArrowBackIos className='w-10 h-10 mr-2'/>
                </Link>
                <div className="pl-2">
                    Add New Vehicle
                </div>
            </div>

            <div className="font-bold font-outfit ml-8 mr-8 mt-4">
                <div>
                    License Plate
                </div>
                <input type="text" className="bg-[#dae2f0] rounded-2xl w-full h-12 mb-4 p-2"/>

                <div>
                    Make & Model
                </div>
                <input type="text" className="bg-[#dae2f0] rounded-2xl w-full h-12 mb-4 p-2"/>

                <div>
                    Color
                </div>
                <input type="text" placeholder="Optional"
                       className="bg-[#dae2f0] rounded-2xl w-full h-12 mb-4 p-2"/>

                <div className='flex justify-center mt-8'>
                    <Link href="/map/spot/booking" className={'rounded-2xl bg-[#FF4251] p-2 text-white text-xl' +
                        ' ps-20 pe-20 mt-40 ' + (toggle ? "" : " pointer-events-none")}>
                        ADD VEHICLE
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AddVehicle;

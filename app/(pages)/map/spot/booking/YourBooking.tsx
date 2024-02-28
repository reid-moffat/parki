"use client";
import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { useAsync } from "react-async-hook";
import { callApi } from "@/config/firebase";
import Image from "next/image";
import Car from "@/public/spot/car.png";
import { CiClock2 } from "react-icons/ci";

// @ts-ignore
const YourBooking = ({ setPage, dates }) => {

    const defaultVehicle = useAsync(callApi('getDefaultVehicle'), []);
    const epoch = new Date(0);

    const renderVehicle = () => {
        if (defaultVehicle.result && defaultVehicle.result.data !== null) {
            const vehicle = defaultVehicle.result.data;

            return (
                <div
                    className="flex border-solid border-black border-2 rounded-2xl m-2 ml-6 mr-6"
                    onClick={() => setPage("vehicleSelect")}
                >
                    <Image src={Car} alt={"Car"} className="w-12 h-8 m-4"/>
                    <div className="flex-col m-2">
                        <div className="font-bold">
                            { /* @ts-ignore */ }
                            {vehicle.make + " " + vehicle.model}
                        </div>
                        { /* @ts-ignore */ }
                        {vehicle.license}
                    </div>
                    <div className="ml-auto mr-8 mt-4 text-blue-500 underline">
                        Change
                    </div>
                </div>
            );
        }

        return (
            <div
                className="flex border-solid border-black border-2 rounded-2xl m-2 ml-6 mr-6"
                onClick={() => setPage("addVehicle")}
            >
                <CiSquarePlus className="m-4" size={30}/>
                <div className="font-bold m-4 ml-16">
                    Select Vehicle
                </div>
            </div>
        );
    }

    const renderDates = () => {
        // Check if dates are selected (both required)
        if (dates[0].getTime() !== epoch.getTime() && dates[1].getTime() !== epoch.getTime()) {

            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            const getDatePeriod = () => {
                const startMonth = monthNames[dates[0].getMonth()];
                const endMonth = monthNames[dates[1].getMonth()];

                return startMonth + " " + dates[0].getDate() + " - " + (endMonth !== startMonth ? endMonth + " " : "") + dates[1].getDate();
            }

            return (
                <div className="flex border-solid border-black border-2 rounded-2xl m-2 ml-6 mr-6"
                     onClick={() => setPage("selectDates")}>
                    <CiClock2 className="my-6 mx-4" size={30}/>
                    <div className="my-4">
                        <div className="font-bold">
                            {getDatePeriod()}
                        </div>
                        {Math.round((dates[1].getTime() - dates[0].getTime()) / 1000 / 3600 / 24 + 1)} days
                    </div>
                </div>
            );
        }

        return (
            <div className="flex border-solid border-black border-2 rounded-2xl m-2 ml-6 mr-6"
                 onClick={() => setPage("selectDates")}>
                <CiSquarePlus className="m-4" size={30}/>
                <div className="font-bold m-4 ml-16">
                    Add Day(s)
                </div>
            </div>
        );
    }

    return (
        <>
            <div className='flex text-3xl font-bold p-8'>
                <Link href="/map/spot">
                    <MdOutlineArrowBackIos className='w-10 h-10 mr-2'/>
                </Link>
                <div className="pl-6">
                    Your Booking
                </div>
            </div>
            <div className="ml-6 mb-2 font-bold">
                Select Vehicle
            </div>
            {renderVehicle()}

            <div className="ml-6 mb-2 font-bold">
                Select Dates
            </div>
            {renderDates()}

            <div className='flex justify-center mt-8'>
                <div
                    className={'rounded-2xl bg-[#FF4251] p-2 text-white text-xl ps-20 pe-20 mt-60 ' + ((defaultVehicle.result?.data && dates) ? "bg-[#FF4251]" : "bg-[#FF8D94] pointer-events-none")}
                    onClick={() => setPage("review")}>
                    CONFIRM
                </div>
            </div>
        </>
    )
}

export default YourBooking;

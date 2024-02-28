import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Image from "next/image";
import Car from "@/public/spot/car.png";
import { CiSquarePlus } from "react-icons/ci";

// @ts-ignore
const YourBooking = ({ setPage }) => {
    var valid = 0;
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
            <div className="flex border-solid border-black border-2 rounded-2xl m-2 ml-6 mr-6" onClick={() => {setPage("addVehicle")
                    valid += 1;
                }}>

                <Image src={Car} alt={"Car"} className="w-12 h-8 m-4"/>
                <div className="flex-col m-2">
                    <div className="font-bold">
                        Honda civic
                    </div>
                    HYAN 041
                </div>
                <div className="ml-auto mr-8 mt-4 text-blue-500 underline">
                    Change
                </div>
            </div>

            <div className="ml-6 mb-2 font-bold">
                Select Date
            </div>
            <div className="flex border-solid border-black border-2 rounded-2xl m-2 ml-6 mr-6" onClick={() => {setPage("selectDates")
                    valid += 1;
                }}>

                <CiSquarePlus className="m-4" size={30}/>
                <div className="font-bold m-4 ml-16">
                    Add Day(s)
                </div>
            </div>

            <div className='flex justify-center mt-8'>
                <div className={'rounded-2xl bg-[#FF4251] p-2 text-white text-xl ps-20 pe-20 mt-60' + (valid >= 2 ? "bg-[#ff8d94]" : "bg-[#FF4251]")} onClick={() => setPage("review")}>
                    CONFIRM
                </div>
            </div>
        </>
    )
}

export default YourBooking;

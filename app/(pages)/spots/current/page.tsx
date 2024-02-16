import Link from "next/link";
import { MdChevronLeft } from "react-icons/md";

export default function CurrentSpot({}) {

    const TEMP_SPOT = {
        time: "2:20:10:21",
        address: "163 Union St",
        vehicle: "Honda Civic",
        license: "HYAN 041",
        date: "February 12-15",
        duration: "4 days"
    }

    const TEMP_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG/1200px-Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG";

    return (
        <div className="flex flex-col h-full pb-6">
            <div className="flex flex-row items-center justify-between text-center text-3xl font-bold pt-10 p-6">
                <Link href="/spots"><MdChevronLeft size={42} /></Link>
                <div className="w-auto">Current Parking</div>
                <MdChevronLeft size={42} color="transparent" />
            </div>

            <div 
                className="mx-6 my-auto border-4 rounded-full text-center py-12 text-3xl text-white font-bold border-[#FF4251]"
                style={{
                    backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), "+"url("+TEMP_IMAGE+")",
                    backgroundSize: "cover"
                }}
            >
                {TEMP_SPOT.time}
            </div>

            <div className="mt-auto mx-6 p-4 space-y-1 border-2 border-gray-500 rounded-xl text-lg">
                <div className="flex flex-row justify-between">
                    <div>Address</div>
                    <div className="font-bold">{TEMP_SPOT.address}</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div>Vehicle</div>
                    <div className="font-bold">{TEMP_SPOT.vehicle}</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div>License</div>
                    <div className="font-bold">{TEMP_SPOT.license}</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div>Date</div>
                    <div className="font-bold">{TEMP_SPOT.date}</div>
                </div>
                <div className="flex flex-row justify-between">
                    <div>Duration</div>
                    <div className="font-bold">{TEMP_SPOT.duration}</div>
                </div>
            </div>

            <button 
                className="p-4 mx-6 mt-4 bg-gray-800 text-white font-bold text-xl rounded-xl"
            >
                More Details
            </button>
            <button 
                className="p-4 mx-6 mt-4 bg-[#FF4251] text-white font-bold text-xl rounded-xl"
            >
                Extend Time
            </button>

        </div>
    )
}
"use client";
import Link from "next/link";
import { MdChevronLeft } from "react-icons/md";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/config/firebase";

const CurrentSpot = () => {

    if (auth.currentUser === null) {
        redirect("/welcome");
    }

    const router = useRouter();

    const TEMP_SPOT = {
        time: "2:20:10:21",
        address: "163 Union St",
        vehicle: "Honda Civic",
        license: "HYAN 041",
        date: "February 12-15",
        duration: "4 days"
    }

    const [percentDone, setPercentDone] = useState(0);

    // temp code to simulate time
    useEffect(() => {
        if (percentDone > 1) return;
        const interval = setInterval(() => { setPercentDone((prev) => prev + 0.001)}, 100);
        return () => clearInterval(interval);
    });

    return (
        <div className="flex flex-col h-full pb-6">
            <div className="flex flex-row items-center justify-between text-center text-3xl font-bold pt-10 p-6">
                <Link href="/spots">
                    <MdChevronLeft size={42}/>
                </Link>
                <div className="w-auto">Current Parking</div>
                <MdChevronLeft size={42} color="transparent"/>
            </div>

            <div className="relative flex justify-center">
                <div
                    style={{backgroundImage: `conic-gradient(#FF4251 0% ${percentDone * 100}%, #343632 ${percentDone * 100}% 100%)`}}
                    className={"w-52 h-52 bg-[#FF4251] rounded-full"}
                />
                <div className="absolute mt-4 w-44 h-44 bg-[#FCF9EF] rounded-full text-center">
                    <div className="font-passion text-4xl mt-14">
                        2:20:10:21
                    </div>
                    <div className="flex justify-between text-xs px-3">
                        <div className="">days</div>
                        <div className="">hours</div>
                        <div className="">minutes</div>
                        <div className="">seconds</div>
                    </div>
                </div>
                <a
                    href={"https://www.google.com.sa/maps/search/44.2301366957068,-76.49587512239601"}
                    target="_blank"
                    className="absolute -bottom-4 right-5 underline text-sm"
                >
                    Directions
                </a>
            </div>

            <div className="mt-auto mx-6 px-4 py-2 space-y-1 border-2 border-gray-500 rounded-xl text-lg">
                <div className="flex justify-between">
                    <div>Address</div>
                    <div className="font-bold">{TEMP_SPOT.address}</div>
                </div>
                <div className="flex justify-between">
                    <div>Vehicle</div>
                    <div className="font-bold">{TEMP_SPOT.vehicle}</div>
                </div>
                <div className="flex justify-between">
                    <div>License</div>
                    <div className="font-bold">{TEMP_SPOT.license}</div>
                </div>
                <div className="flex justify-between">
                    <div>Date</div>
                    <div className="font-bold">{TEMP_SPOT.date}</div>
                </div>
                <div className="flex justify-between">
                    <div>Duration</div>
                    <div className="font-bold">{TEMP_SPOT.duration}</div>
                </div>
            </div>

            <button
                className="px-4 py-3 mx-6 mt-4 bg-gray-800 text-white font-bold text-xl rounded-xl"
            >
                More Details
            </button>
            <button
                className="px-4 py-3 mx-6 mt-4 bg-[#FF4251] text-white font-bold text-xl rounded-xl"
                onClick={() => router.push("/spots/extend")}
            >
                Extend Time
            </button>
        </div>
    )
}

export default CurrentSpot;

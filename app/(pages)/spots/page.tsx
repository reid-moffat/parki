"use client";

import Link from "next/link";
import { useState } from "react";


const SpotsPage = () => {

    const TEMP_LISTINGS = [
        { location: "650 Princess St.", city: "Kingston, ON", vacant: true },
        { location: "651 Princess St.", city: "Kingston, ON", vacant: false },
    ]

    const TEMP_CURRENT_RENTALS = [
        { location: "650 Princess St.", city: "Kingston, ON", startTime: "February 15 @ 10:00am", endTime: "February 19 @ 2:00pm", price: "$40.68" },
    ]

    const TEMP_PAST_RENTALS = [
        { location: "650 Princess St.", city: "Kingston, ON", days: "January 12 - 15", price: "$40.68" },
        { location: "650 Princess St.", city: "Kingston, ON", days: "January 12 - 15", price: "$40.68" },
        { location: "650 Princess St.", city: "Kingston, ON", days: "January 12 - 15", price: "$40.68" },
    ]

    const TEMP_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG/1200px-Blue_Disc_Parking_Area_Markings_Blue_Paint.JPG";

    const [tab, setTab] = useState("rentals");  // 'listings' or 'rentals'

    const listingsTab = (
        <div className="flex flex-col w-full h-auto">
            <div className="flex flex-row w-full">
                <div className="text-xl font-bold">Manage your listings</div>
                {/* TODO - implement create listing */}
                {/* <MdOutlineAddBox size={38} className="ml-auto" /> */}
            </div>
            <div className="flex flex-col mt-6 space-y-6">
                {TEMP_LISTINGS.map((listing, key) => (
                    <button 
                        key={key}
                        className="flex flex-row items-center p-3 border-[1px] border-[#47BB00] rounded-2xl"
                        onClick={() => alert(listing.location)}
                    >
                        <div 
                            className="h-10 w-10 rounded-lg mr-4" 
                            style={{
                                backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), "+"url("+TEMP_IMAGE+")",
                                backgroundSize: "cover"
                            }}
                        />
                        <div className="flex flex-col">
                            <div className="text-md font-bold">{listing.location}</div>
                            <div className="text-sm">{listing.city}</div>
                        </div>
                        <div className="ml-auto text-[#47BB00]">{ listing.vacant ? "Leased" : "Vacant" }</div>
                    </button>
                ))}
            </div>
        </div>
    )

    const rentalsTab = (
        <div className="flex flex-col w-full h-auto">
            <div className="text-xl font-bold">Current & Upcoming</div>
            <div className="flex flex-col mt-6 space-y-6">
                { TEMP_CURRENT_RENTALS.map((rental, key) => (
                    <Link 
                        key={key}
                        className="flex flex-col py-6 items-center justify-center bg-gray-700 rounded-xl text-white"
                        href="/spots/current"
                        style={{
                            backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), "+"url("+TEMP_IMAGE+")",
                            backgroundSize: "cover"
                        }}
                    >
                        <div className="text-xl font-bold">{rental.location}</div>
                        <div className="text-md">{rental.city}</div>
                        <div className="mt-2 text-sm">{rental.startTime}</div>
                        <div className="text-sm">{rental.endTime}</div>
                        <div className="mt-2">{rental.price}</div>
                    </Link>
                ))}
            </div>
            <div className="text-xl font-bold mt-8">Past</div>
            <div className="flex flex-col mt-6 space-y-6">
                { TEMP_PAST_RENTALS.map((rental, key) => (
                    <div 
                        className="flex flex-row py-4 px-6 items-end bg-gray-700 rounded-xl text-white"
                        style={{
                            backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), "+"url("+TEMP_IMAGE+")",
                            backgroundSize: "cover"
                        }}
                    >
                        <div className="flex flex-col">
                            <div className="text-lg">{rental.location}</div>
                            <div className="text-lg">{rental.city}</div>
                        </div>
                        <div className="flex flex-col ml-auto text-sm text-right">
                            <div>{rental.days}</div>
                            <div>{rental.price}</div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )

    return (
        <div className="flex flex-col h-full overflow-scroll">
            
            <div className="text-center text-3xl font-bold pt-10 mx-6 p-6">
                My Spots
            </div>

            <div className="flex flex-row border-2 mx-6 rounded-full border-black font-bold text-lg text-white">
                <button 
                    className={"flex items-center justify-center w-1/2 h-10 rounded-l-full " + (tab === "listings" ? "bg-[#FF4251]" : "bg-black")}
                    onClick={() => setTab("listings")}
                >
                    My Listings
                </button>
                <button 
                    className={"flex w-1/2 items-center justify-center rounded-r-full " + (tab === "rentals" ? "bg-[#FF4251]" : "bg-black")}
                    onClick={() => setTab("rentals")}
                >
                    My Rentals
                </button>
            </div>

            <div className="flex w-auto h-auto mx-6 mt-6 mb-10">
                { tab === "listings" ? listingsTab : rentalsTab }
            </div>
            
        </div>
    );
}

export default SpotsPage;

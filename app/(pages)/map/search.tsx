"use client";
import React, { useState } from 'react';
import Image from "next/image";
import X from "@/public/search/x.png";
import Back from "@/public/search/back.png";
import Map from "@/public/search/map.png";
import Arrow from "@/public/search/arrow.png";
import Line from "@/public/Line.png";
import { useRouter } from "next/navigation";
import { callApi } from "@/config/firebase";
import { MdChevronLeft } from 'react-icons/md';

// @ts-ignore
const Search = ({ setPageState, location, setLocation }) => {

    const [search, setSearch] = useState(location ? location.street + ", " + location.city : "");

    const router = useRouter();

    const adresses: { street: string, city: string }[] = [
        {
            street: '1 Queen St',
            city: 'Kingston, ON',
        },
        {
            street: '1 Queen St',
            city: 'Toronto, ON',
        },
        {
            street: '3 Queen St',
            city: 'Ottawa, ON',
        },
        {
            street: '5 Queen St',
            city: 'Montreal, QC',
        },
        {
            street: '7 Queen St',
            city: 'Vancouver, BC',
        },
        {
            street: '23 Union street',
            city: 'London, ON',
        },
        {
            street: '21 Westside street',
            city: 'London, ON',
        },
        {
            street: '26 Eastside street',
            city: 'Milton, ON',
        },
        {
            street: '22 Southside street',
            city: 'Orillia, ON',
        },
        {
            street: '25 Northside street',
            city: 'Huntsville, ON',
        },
    ];

    const handleSelect = async (street: string, city: string) => {

        const coords: { lat: number, lng: number } = await callApi("getLatLngFromAddress")({ address: `${street}, ${city}` })
            .then((result) => result.data as { lat: number, lng: number });

        await setLocation({ lat: coords.lat, lng: coords.lng, street, city });

        setPageState("map");
    }

    return (
        <>
            <div
                className="ml-[4vw] mt-6 h-[6vh] w-[88vw] rounded-[2rem] border-black border-solid border-[1px] inline-flex font-mono"
            >

                {/* <Image src={Back} alt={"Go back"} className={"w-[3vw] h-[3vh] ml-[6vw] mt-[1.5vh]"} onClick={() => setPageState("map")} /> */}
                
                <div className="pt-1">
                    <MdChevronLeft size={42} onClick={() => setPageState("map")} />
                </div>


                <input
                    type="text"
                    className={"w-[55vw] ml-[8vw] mt-[1vh] mb-[1vh] bg-[#FCF9EF] outline-none"}
                    placeholder={"Search..."}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Image
                    src={X} alt={"Clear search query"}
                    className={"w-[4vw] h-[4vw] mt-[2vh] ml-[7vw]"}
                    onClick={() => setSearch("")}
                />
            </div>

            <div className="h-[65vh] overflow-y-scroll font-mono">
                {adresses
                    .filter((address) =>
                        address.street.toLowerCase().includes(search.toLowerCase()) || address.city.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((address) =>
                        <>
                            <div className={"inline-flex mt-[1vh]"} onClick={async () => await handleSelect(address.street, address.city)}>
                                <Image
                                    src={Map}
                                    alt={"Clock icon"}
                                    className={"w-[8vw] h-[9vw] mt-[2vh] ml-[8vw] mb-[2vh]"}
                                />
                                <div className={"w-[50vw] ml-[10vw] mt-[1vh]"}>
                                    {address.street}
                                    <br />
                                    {address.city}
                                </div>
                                <Image
                                    src={Arrow}
                                    alt={"Select this address"}
                                    className={"w-[7vw] h-[7vw] mt-[2vh] ml-[6vw]"}
                                />
                            </div>
                            <Image src={Line} alt={"Line icon"} className={"w-[80vw] ml-[8vw]"} />
                        </>
                    )}
            </div>
        </>
    );
}

export default Search;
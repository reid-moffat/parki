"use client";
import React, { useState } from 'react';
import BottomBar from "@/components/helpers/BottomBar";
import logo from "@/public/logo.png";
import Image from "next/image";

import X from "@/public/search/x.png";
import Back from "@/public/search/back.png";
import Map from "@/public/search/map.png";
import Arrow from "@/public/search/arrow.png";
import Line from "@/public/Line.png";
import Link from "next/link";

const Search = () => {

    const [query, setQuery] = useState("");

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

    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10' }}>
            <Image src={logo} alt="Parki logo" className='w-[120vw] h-[8vh] object-contain mt-3 mb-4'/>

            <div className="ml-[2vw] h-[79.5vh] w-[96vw] pt-[2vh] rounded-xl bg-[#FCF9EF] font-mono">
                <div className="ml-[4vw] h-[6vh] w-[88vw] rounded-[2rem] border-black border-solid border-[1px] inline-flex">
                    <Link href={"/map"}>
                        <Image src={Back} alt={"Go back"} className={"w-[3vw] h-[3vh] ml-[6vw] mt-[1.5vh]"}/>
                    </Link>
                    <input
                        type="text"
                        className={"w-[55vw] ml-[8vw] mt-[1vh] mb-[1vh] bg-[#FCF9EF] outline-none"}
                        placeholder={"Search..."}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Image src={X} alt={"Clear search query"} className={"w-[4vw] h-[4vw] mt-[2vh] ml-[7vw]"} onClick={() => setQuery("")}/>
                </div>

                <div className={"h-[65vh] overflow-y-scroll"}>
                    {adresses
                        .filter((address) =>
                            address.street.toLowerCase().includes(query.toLowerCase()) || address.city.toLowerCase().includes(query.toLowerCase())
                        )
                        .map((address) =>
                            <>
                                <div className={"inline-flex mt-[1vh]"}>
                                    <Image
                                        src={Map}
                                        alt={"Clock icon"}
                                        className={"w-[8vw] h-[9vw] mt-[2vh] ml-[8vw] mb-[2vh]"}
                                    />
                                    <div className={"w-[50vw] ml-[10vw] mt-[1vh]"}>
                                        {address.street}
                                        <br/>
                                        {address.city}
                                    </div>
                                    <Link href={{ pathname: "/map", query: { street: address.street, city: address.city } }}>
                                        <Image
                                            src={Arrow}
                                            alt={"Select this address"}
                                            className={"w-[7vw] h-[7vw] mt-[2vh] ml-[6vw]"}
                                        />
                                    </Link>
                                </div>
                                <Image src={Line} alt={"Line icon"} className={"w-[80vw] ml-[8vw]"}/>
                            </>
                        )}
                </div>

            </div>
            <BottomBar/>
        </div>
    );
}

export default Search;

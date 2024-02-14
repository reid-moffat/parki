"use client";
import React from 'react';
import Image from "next/image";
import X from "@/public/search/x.png";
import Back from "@/public/search/back.png";
import Map from "@/public/search/map.png";
import Arrow from "@/public/search/arrow.png";
import Line from "@/public/Line.png";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from '@/app/GlobalRedux/store';
import { set, clear } from "@/app/GlobalRedux/Features/search/searchSlice";

const Search = () => {

    const dispatch = useDispatch();
    const query = useSelector((state: RootState) => state.search.value);

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
        <>
            <div
                className="ml-[4vw] mt-6 h-[6vh] w-[88vw] rounded-[2rem] border-black border-solid border-[1px] inline-flex font-mono">
                <Link href={"/map"}>
                    <Image src={Back} alt={"Go back"} className={"w-[3vw] h-[3vh] ml-[6vw] mt-[1.5vh]"}/>
                </Link>
                <input
                    type="text"
                    className={"w-[55vw] ml-[8vw] mt-[1vh] mb-[1vh] bg-[#FCF9EF] outline-none"}
                    placeholder={"Search..."}
                    value={query}
                    onChange={(e) => dispatch(set(e.target.value))}
                />
                <Image src={X} alt={"Clear search query"} className={"w-[4vw] h-[4vw] mt-[2vh] ml-[7vw]"}
                       onClick={() => dispatch(clear())}/>
            </div>

            <div className="h-[65vh] overflow-y-scroll font-mono">
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
                                <Link href={{pathname: "/map", query: {street: address.street, city: address.city}}}>
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
        </>
    );
}

export default Search;

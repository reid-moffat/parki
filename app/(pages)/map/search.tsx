"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import X from "@/public/search/x.png";
import Map from "@/public/search/map.png";
import Arrow from "@/public/search/arrow.png";
import Line from "@/public/Line.png";
import { callApi } from "@/config/firebase";
import { MdChevronLeft } from 'react-icons/md';
import { useDispatch } from "react-redux";
import { clearSpot } from "@/app/GlobalRedux/Features/currentSpot";

// @ts-ignore
const Search = ({ setPageState, location, setLocation }) => {

    const [search, setSearch] = useState(location ? location.street + ", " + location.city : "");

    const [recommendations, setRecommendations] = useState([] as { street: string, city: string }[]);

    const dispatch = useDispatch();

    useEffect(() => {
        if (search === "") return;

        callApi("autocompleteAddress")({ search } )
            .then((result) => setRecommendations(result.data as { street: string, city: string }[]))
            .catch((err) => console.log(`Error calling autocomplete API: ${err}`));
    }, [search]);

    const handleSelect = async (street: string, city: string) => {

        const coords: { lat: number, lng: number } = await callApi("getLatLngFromAddress")({ address: `${street}, ${city}` })
            .then((result) => result.data as { lat: number, lng: number });

        await setLocation({ lat: coords.lat, lng: coords.lng, street, city });

        dispatch(clearSpot());

        setPageState("map");
    }

    return (
        <>
            <div
                className="ml-[4vw] mt-6 h-[6vh] w-[88vw] rounded-[2rem] border-black border-solid border-[1px] inline-flex font-mono"
            >

                {/* <Image src={Back} alt={"Go back"} className={"w-[3vw] h-[3vh] ml-[6vw] mt-[1.5vh]"} onClick={() => setPageState("map")} /> */}

                <div className="pt-1 pl-2">
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
                    src={X}
                    alt={"Clear search query"}
                    className="w-5 h-5 ml-1 mt-[14px]"
                    onClick={() => setSearch("")}
                />
            </div>

            <div className="h-[65vh] overflow-y-scroll font-mono">
                {recommendations
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

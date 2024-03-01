"use client";
import { MdChevronLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { callApi } from "@/config/firebase";
import Image from "next/image";
import Map from "@/public/search/map.png";
import Arrow from "@/public/search/arrow.png";
import Line from "@/public/Line.png";

// @ts-ignore
const GetAddress = ({ setStep, address, setAddress }) => {

    const router = useRouter();

    const [places, setPlaces] = useState([] as { street: string, city: string }[]);

    useEffect(() => {
        if (address === "") return;

        callApi("autocompleteAddress")({ search: address } )
            .then((result) => setPlaces(result.data as { street: string, city: string }[]))
            .catch((err) => console.log(`Error calling autocomplete API: ${err}`));
    }, [address]);

    return (
        <>
            <div className="pt-10">
                <MdChevronLeft size={42} onClick={() => router.push('/spots')}/>
            </div>
            <div className="text-3xl font-bold mt-4">
                Tell us about your spot!
            </div>

            <div className="mt-4">
                Where is it?
            </div>

            <input
                type="text"
                placeholder="Address"
                className="w-full bg-[#4472CA33] rounded-xl mt-2 px-6 py-3"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />

            <div className="mt-2 ml-2">
                {!address.length
                    ? <div className="italic text-center pt-6">Please enter a search query...</div>
                    : places
                        .map((address, index) =>
                            <div className="w-full">
                                <div
                                    className={"inline-flex mt-1"}
                                    onClick={() => { setAddress(address.street + ", " + address.city); setStep("confirmLocation"); }}
                                >
                                    <Image
                                        src={Map}
                                        alt={"Clock icon"}
                                        className={"w-[8vw] h-[9vw] mt-[2vh] ml-2 mb-4"}
                                    />
                                    <div className={"w-[50vw] ml-[10vw] mt-[1vh]"}>
                                        {address.street}
                                        <br />
                                        {address.city}
                                    </div>
                                    <Image
                                        src={Arrow}
                                        alt={"Select this address"}
                                        className={"w-[7vw] h-[7vw] mt-[2vh]"}
                                    />
                                </div>
                                {index !== places.length - 1 && <Image src={Line} alt={"Line icon"} className="" />}
                            </div>
                        )}
            </div>
        </>
    );
}

export default GetAddress;

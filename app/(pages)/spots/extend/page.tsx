"use client";
import Link from "next/link";
import { MdChevronLeft } from "react-icons/md";
import Slider from '@mui/material/Slider';
import { setRange } from "@/app/GlobalRedux/Features/filters";
import React, { useState } from "react";
import { auth } from "@/config/firebase";
import { redirect } from "next/navigation";

const Extend = () => {

    if (auth.currentUser === null) {
        redirect("/welcome");
    }

    const [daysToExtend, setDaysToExtend] = useState(0);

    return (
        <div className="w-full">
            <div className="flex flex-row items-center justify-between text-center text-3xl font-bold pt-10 p-6">
                <Link href="/spots">
                    <MdChevronLeft size={42}/>
                </Link>
                <div className="w-auto">Extend time</div>
                <MdChevronLeft size={42} color="transparent"/>
            </div>

            <div className="px-10 font-semibold text-lg">
                <div>
                    Add duration
                </div>

                <Slider
                    value={daysToExtend}
                    /* @ts-ignore */
                    onChange={(_, newValue) => setDaysToExtend(newValue)}
                    min={0}
                    max={30}
                    color="error"
                    className="mt-1"
                />
            </div>

            <div className="font-semibold px-10">
                Payment details
            </div>

            <div className="rounded-xl border-black border-solid border-2 mx-10 mt-2 p-2">
                <div className="flex justify-between">
                    <div>Address</div>
                    <div className="font-bold">163 Union St</div>
                </div>
                <div className="flex justify-between">
                    <div>Amount</div>
                    <div className="font-bold">$12.00</div>
                </div>
                <div className="flex justify-between">
                    <div>Taxes (13% HST)</div>
                    <div className="font-bold">$1.56</div>
                </div>
                <div className="bg-black h-[0.5px] mt-2 mb-2"/>
                <div className="flex justify-between">
                    <div>Address</div>
                    <div className="font-bold">$13.56</div>
                </div>
            </div>

            <div className="px-10">
                <button
                    className="w-full py-3 mt-56 bg-[#FF4251] text-white font-bold text-xl rounded-xl"
                >
                    Confirm extension
                </button>
            </div>
        </div>
    );
}

export default Extend;

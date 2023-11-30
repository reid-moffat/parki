import React from 'react';
import { MdCalendarToday, MdLocationPin, MdFilterAlt } from "react-icons/md";
import { States } from "@/app/pages/map/page";

// @ts-ignore
const TopMapMenu = ({setPageState, setTimeframe, timeframe, location, date}) => {

    return (
        <div className="mt-[4vh] mx-[10%] font-passion">
            <div className="flex flex-row justify-around bg-[#343632] rounded-xl px-3 py-1 text-[#FCF9EF]">
                <div className={"w-min px-2 rounded-full duration-200" + (timeframe=="Hourly" ? " bg-[#FF4251]" : "")} onClick={() => setTimeframe("Hourly")}>Hourly</div>
                <div className={"w-min px-2 rounded-full duration-200" + (timeframe=="Weekly" ? " bg-[#FF4251]" : "")} onClick={() => setTimeframe("Weekly")}>Weekly</div>
                <div className={"w-min px-2 rounded-full duration-200" + (timeframe=="Monthly" ? " bg-[#FF4251]" : "")} onClick={() => setTimeframe("Monthly")}>Monthly</div>
            </div>
            <div className="bg-[#FCF9EF] rounded-xl px-3 py-1 mt-2 shadow-xl text-[#343632]">
                <div className="flex flex-row items-center">
                    <MdLocationPin size={20} color="#FF4251" className="mr-2"/>
                    {location}
                </div>
                <div className=" border-t-[1px] my-1" />
                <div className="flex flex-row items-center">
                    <MdCalendarToday size={20} color="#FF4251" className="mr-2"/>
                    {date}
                </div>
            </div>
            <div
                className="flex flex-row items-center bg-[#FF4251] w-min pl-8 pr-10 py-1 rounded-full mt-3 mx-auto text-[#FCF9EF] shadow-xl active:opacity-50 duration-75"
                onClick={() => setPageState(States.FILTERS)}
            >
                <MdFilterAlt size={16} color="#FCF9EF" className="mr-1"/>
                Filter
            </div>
        </div>
    )

}

export default TopMapMenu;

import React from 'react';
import { MdCalendarToday, MdFilterAlt, MdLocationPin } from "react-icons/md";
import { States } from "@/app/pages/map/page";

interface Timeframes {
    Hourly: boolean,
    Weekly: boolean,
    Monthly: boolean,
}

// @ts-ignore
const TopMapMenu = ({setPageState, setTimeframes, timeframes, location, date}) => {
    const updateTimeframes = (timeFrame: string) => {
        const numActive = Object.values(timeframes).reduce((a: number, key) => a + (key ? 1 : 0), 0);

        switch (timeFrame) {
            case "Hourly":
                if (timeframes.Hourly === true && numActive === 1) {
                    return;
                }
                setTimeframes((oldState: Timeframes) => ({...oldState, Hourly: !oldState.Hourly}));
                break;
            case "Weekly":
                if (timeframes.Weekly === true && numActive === 1) {
                    return;
                }
                setTimeframes((oldState: Timeframes) => ({...oldState, Weekly: !oldState.Weekly}));
                break;
            case "Monthly":
                if (timeframes.Monthly === true && numActive === 1) {
                    return;
                }
                setTimeframes((oldState: Timeframes) => ({...oldState, Monthly: !oldState.Monthly}));
                break;
            default:
                throw new Error(`Invalid time frame: ${timeFrame}`);
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div className="mt-[4vh] mx-[10%] font-passion">
                <div className="flex flex-row justify-around bg-[#343632] rounded-xl px-6 py-2 text-[#FCF9EF]">
                    <div
                        className={"w-min px-2 mx-2 rounded-full duration-200" + (timeframes.Hourly ? " bg-[#FF4251]" : "")}
                        onClick={() => updateTimeframes("Hourly")}
                    >
                        Hourly
                    </div>
                    &nbsp;
                    <div
                        className={"w-min px-2 mx-2 rounded-full duration-200" + (timeframes.Weekly ? " bg-[#FF4251]" : "")}
                        onClick={() => updateTimeframes("Weekly")}
                    >
                        Weekly
                    </div>
                    &nbsp;
                    <div
                        className={"w-min px-2 mx-2 rounded-full duration-200" + (timeframes.Monthly ? " bg-[#FF4251]" : "")}
                        onClick={() => updateTimeframes("Monthly")}
                    >
                        Monthly
                    </div>
                </div>
                <div className="bg-[#FCF9EF] rounded-xl px-3 py-1 mt-2 shadow-xl text-[#343632]">
                    <div className="flex flex-row items-center">
                        <MdLocationPin size={20} color="#FF4251" className="mr-2"/>
                        {location}
                    </div>
                    <div className=" border-t-[1px] my-1"/>
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
        </div>
    )

}

export default TopMapMenu;

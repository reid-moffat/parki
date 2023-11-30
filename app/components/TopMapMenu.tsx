// @ts-ignore
import React from 'react';

import { MdCalendarToday, MdLocationPin } from "react-icons/md";

const TopMapMenu = ({timeframe, location, date}) => {

    return (
        <div className="mt-[10%] mx-[10%] font-passion">
            <div className="bg-gray-700 rounded-xl px-3 py-1">
                {timeframe}
            </div>
            <div className="bg-yellow-50 rounded-xl px-3 py-1 mt-2">
                <div className="flex flex-row items-center">
                    <MdLocationPin color="#FF4251" className="mr-2"/>
                    {location}
                </div>
                <div className=" border-t-[1px] my-1" />
                <div className="flex flex-row items-center">
                    <MdCalendarToday color="#FF4251" className="mr-2"/>
                    {date}
                </div>
            </div>
        </div>
    )

}

export default TopMapMenu;
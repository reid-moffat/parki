import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";
import React from "react";
import Line from "@/public/line.png";
import Image from "next/image";

const BookingDates = () => {

    const getCalendarRow = (startNum: number, maxDays: number) => {

        const overflow = (num: number) => {
            if (num > maxDays) {
                num = num - maxDays;
            }
            if (num < 10) {
                return <>{num}</>;
            }
            return num;
        }

        const dayNumbers = [
            overflow(startNum),
            overflow(startNum + 1),
            overflow(startNum + 2),
            overflow(startNum + 3),
            overflow(startNum + 4),
            overflow(startNum + 5),
            overflow(startNum + 6)
        ];

        return (
            <div className="flex justify-between w-full mt-2">
                {dayNumbers.map((dayNum, index) => <div className="w-6 text-center">{dayNum}</div>)}
            </div>
        );
    }

    const renderMonths = () => {

        const months: [string, number, number, number][] = [
            ["February", 28, 29, 31],
            ["March", 25, 31, 29],
            ["April", 31, 30, 31],
            ["May", 28, 31, 20],
            ["June", 26, 30, 31],
            ["July", 30, 31, 30],
            ["August", 28, 31, 31],
            ["September", 1, 30, 31],
            ["October", 29, 31, 30],
            ["November", 27, 30, 31],
            ["December", 1, 31, 30],
            ["January", 29, 31, 31]
        ];

        return (
            <div className="h-[80%] overflow-y-scroll mb-40">
                {months.map((monthData, index) =>
                    <div className="m-4 ml-8 mr-10 font-outfit text-sm">
                        <div className="font-bold text-xl mb-2">
                            {monthData[0]} {monthData[0] === "January" ? 2025 : 2024}
                        </div>
                        <div className="flex justify-between w-full">
                            <div className="w-6">Sun</div>
                            <div className="w-6">Mon</div>
                            <div className="w-6">Tue</div>
                            <div className="w-6">Wed</div>
                            <div className="w-6">Thu</div>
                            <div className="w-6">Fri</div>
                            <div className="w-6">Sat</div>
                        </div>
                        {getCalendarRow(monthData[1], monthData[3])}
                        {getCalendarRow((monthData[1] + 7) % monthData[3], monthData[2])}
                        {getCalendarRow((monthData[1] + 14) % monthData[3], monthData[2])}
                        {getCalendarRow((monthData[1] + 21) % monthData[3], monthData[2])}
                        {getCalendarRow((monthData[1] + 28) % monthData[3], monthData[2])}

                        <Image src={Line} alt={"Dividing line"} className="mt-4 mb-4"/>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="h-full">
            <div className='flex text-3xl font-bold p-8'>
                <Link href="/map/spot/booking">
                    <MdOutlineArrowBackIos className='w-10 h-10 mr-2'/>
                </Link>
                <div className="pl-16">
                    Dates
                </div>
            </div>

            {renderMonths()}
        </div>
    );
}

export default BookingDates;

"use client";
import Link from "next/link";
import { MdOutlineArrowBackIos } from "react-icons/md";
import React, { useState } from "react";
import Line from "@/public/Line.png";
import Image from "next/image";

const BookingDates = () => {

    const [numMonths, setNumMonths] = useState(3);

    const epoch = new Date(0);
    const [selectedDays, setSelectedDays] = useState<[Date, Date]>([epoch, epoch]);

    const daySelected = (year: number, month: number, day: number) => {

        const givenDate = new Date(year, month, day);
        if (givenDate.getTime() === selectedDays[0].getTime() || givenDate.getTime() === selectedDays[1].getTime()) {
            return 2;
        }
        if (givenDate.getTime() > selectedDays[0].getTime() && givenDate.getTime() < selectedDays[1].getTime()) {
            return 1;
        }

        return null;
    }

    const handleClickDay = (year: number, month: number, day: number) => {

        // For dummy days (empty days to show spaces on the calendar)
        if (day <= 0) {
            return;
        }

        const givenDate = new Date(year, month, day);
        if (selectedDays[0].getTime() === epoch.getTime()) {
            setSelectedDays([givenDate, selectedDays[1]]);
        } else if (selectedDays[1].getTime() === epoch.getTime()) {
            setSelectedDays([selectedDays[0], givenDate]);
        }

        if (selectedDays[0].getTime() !== epoch.getTime() && selectedDays[1].getTime() !== epoch.getTime()) {
            setSelectedDays([givenDate, epoch]);
        }
    }

    const renderMonths = () => {

        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDate();

        const monthData = {
            0: {
                name: "January",
                days: 31
            },
            1: {
                name: "February",
                days: 28,
            },
            2: {
                name: "March",
                days: 31,
            },
            3: {
                name: "April",
                days: 30,
            },
            4: {
                name: "May",
                days: 31,
            },
            5: {
                name: "June",
                days: 30,
            },
            6: {
                name: "July",
                days: 31,
            },
            7: {
                name: "August",
                days: 31,
            },
            8: {
                name: "September",
                days: 30,
            },
            9: {
                name: "October",
                days: 31,
            },
            10: {
                name: "November",
                days: 30,
            },
            11: {
                name: "December",
                days: 31,
            }
        }

        const monthComponents: any[] = [];

        for (let i = 0; i < numMonths; ++i) {
            const currentMonth = (month + i) % 12;
            const currentYear = year + (month + i >= 12 ? 1 : 0);

            // @ts-ignore
            const monthInfo = monthData[currentMonth];

            // Leap year
            if (monthInfo.name === "February") {
                if (new Date(currentYear, 1, 29).getMonth() == 1) {
                    monthInfo.days = 29;
                } else {
                    monthInfo.days = 28;
                }
            }

            const monthRows = [];

            let currDay = -(new Date(currentYear, currentMonth, 1).getDay()) + 1;
            while (true) {
                const days = new Array(7).fill(null);
                let flag = false;

                for (let i = 0; i < days.length; ++i) {
                    days[i] = currDay++;

                    if (currDay > monthInfo.days) {
                        flag = true;
                        break;
                    }
                }

                monthRows.push(
                    <div className="flex justify-between w-full mt-2">
                        {days.map((dayNum: number) => {
                            const selected = daySelected(currentYear, currentMonth, dayNum);
                            const selectedStyle = selected === 2 ? "bg-[#FF4251]" : (selected === 1 ? "bg-[#FF4251A6]" : "");

                            return (
                                <div
                                    className={"w-8 h-8 text-center rounded-2xl pt-1 " + selectedStyle + " " +
                                        (i === 0 && dayNum === day ? "text-[#FBDC6C]" : (i === 0 && dayNum < day ? "text-[#A9A9A9]" : ""))}
                                    onClick={() => handleClickDay(currentYear, currentMonth, dayNum)}
                                >
                                    {dayNum <= 0 ? "" : dayNum}
                                </div>
                            );
                        })}
                    </div>
                );

                if (flag) break;
            }

            monthComponents.push(
                <div className="m-4 ml-8 mr-10 font-outfit text-sm">
                    <div className="font-bold text-xl mb-2">
                        {monthInfo.name}
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

                    {monthRows}

                    <Image src={Line} alt={"Dividing line"} className="mt-4 mb-4"/>
                </div>
            );
        }

        return monthComponents;
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

            <div className="h-[80%] overflow-y-scroll mb-40">
                {renderMonths()}

                {numMonths < 12 &&
                    <div
                        className="rounded-2xl bg-[#FF4251] p-2 text-center text-white text-xl ml-20 mr-20 mt-10"
                        onClick={() => setNumMonths(numMonths + 3)}
                    >
                        More months
                    </div>
                }
            </div>
        </div>
    );
}

export default BookingDates;

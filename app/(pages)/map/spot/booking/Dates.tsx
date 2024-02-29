import React, { useState } from "react";
import Image from "next/image";
import Line from "@/public/Line.png";
import { MdChevronLeft, MdOutlineArrowBackIos } from "react-icons/md";

// @ts-ignore
const SelectDates = ({ setPage, dates, setDates }) => {

    const [numMonths, setNumMonths] = useState(3);

    const epoch = new Date(0);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Removes time from the date - just the current day

    const daySelected = (year: number, month: number, day: number) => {

        // Ignore dummy days (parts of the week before/after the month starts/ends)
        if (day <= 0) return;

        const givenDate = new Date(year, month, day);
        if (givenDate.getTime() === dates[0].getTime() || givenDate.getTime() === dates[1].getTime()) {
            return 2;
        }
        if (dates[0].getTime() !== epoch.getTime() && dates[1].getTime() !== epoch.getTime()) {
            if (dates[0].getTime() < dates[1].getTime()) {
                if (givenDate.getTime() > dates[0].getTime() && givenDate.getTime() < dates[1].getTime()) {
                    return 1;
                }
            } else {
                if (givenDate.getTime() < dates[0].getTime() && givenDate.getTime() > dates[1].getTime()) {
                    return 1;
                }
            }
        }

        return null;
    }

    const handleClickDay = (year: number, month: number, day: number) => {

        // Ignore dummy days (parts of the week before/after the month starts/ends)
        if (day <= 0) return;

        // Don't select days before today
        const givenDate = new Date(year, month, day);
        if (givenDate < currentDate) return;

        if (dates[0].getTime() === epoch.getTime()) {
            setDates([givenDate, dates[1]]);
        } else if (dates[1].getTime() === epoch.getTime()) {
            setDates([dates[0], givenDate]);
        }

        if (dates[0].getTime() !== epoch.getTime() && dates[1].getTime() !== epoch.getTime()) {
            setDates([givenDate, epoch]);
        }
    }

    const renderMonths = () => {

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
            const month = (currentDate.getMonth() + i) % 12;
            const year = currentDate.getFullYear() + (currentDate.getMonth() + i >= 12 ? 1 : 0);

            // @ts-ignore
            const monthInfo = monthData[month];

            // Leap year
            if (monthInfo.name === "February") {
                if (new Date(year, 1, 29).getMonth() == 1) {
                    monthInfo.days = 29;
                } else {
                    monthInfo.days = 28;
                }
            }

            const monthRows = [];

            let currDay = -(new Date(year, month, 1).getDay()) + 1;
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
                            const selected = daySelected(year, month, dayNum);
                            const selectedStyle = selected === 1 ? "bg-[#FF4251A6] " : (selected === 2 ? "bg-[#FF4251] " : "");
                            const numberStyle = (i === 0 && dayNum === currentDate.getDate())
                                ? "text-[#FBDC6C]"
                                : (i === 0 && dayNum < currentDate.getDate() ? "text-[#A9A9A9]" : "");

                            return (
                                <div
                                    className={"w-8 h-8 text-center rounded-2xl pt-1 " + selectedStyle + " " + numberStyle}
                                    onClick={() => handleClickDay(year, month, dayNum)}
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
                {/* <MdOutlineArrowBackIos className='w-10 h-10 mr-2' /> */}
                <MdChevronLeft size={55} className='-ml-3 pr-4 -mt-2' onClick={() => { setDates([epoch, epoch]); setPage("yourBooking");}}/>
                <div className="pl-16">
                    Dates
                </div>
            </div>

            <div
                className="absolute rounded-2xl bg-[#FF4251] text-center text-white text-xl bottom-[14vh] left-[15vw] w-[70vw] p-2"
                onClick={() => setPage("yourBooking")}
            >
                Select Date(s)
            </div>

            <div className="h-[80%] overflow-y-scroll mb-40">
                {renderMonths()}

                {numMonths < 12 &&
                    <div
                        className="rounded-2xl bg-[#FF4251] p-2 text-center text-white text-xl mx-20 mt-10 mb-20"
                        onClick={() => setNumMonths(numMonths + 3)}
                    >
                        More months
                    </div>
                }
            </div>
        </div>
    );
}

export default SelectDates;

"use client";
import { useState } from "react";
import YourBooking from "@/app/(pages)/map/spot/booking/YourBooking";
import Review from "@/app/(pages)/map/spot/booking/Review";
import AddVehicle from "@/app/(pages)/map/spot/booking/AddVehicle";
import SelectDates from "@/app/(pages)/map/spot/booking/Dates";

const Booking = () => {

    const [toggle, setToggle] = useState(true);

    const [page, setPage] = useState("yourBooking");

    const renderPage = () => {
        switch (page) {
            case "yourBooking":
                return <YourBooking setPage={setPage}/>;
            case "review":
                return <Review setPage={setPage}/>;
            case "addVehicle":
                return <AddVehicle setPage={setPage}/>;
            case "selectDates":
                return <SelectDates setPage={setPage}/>;
            default:
                throw new Error(`Invalid page state: ${page}`);
        }
    }

    return (
        <>
            {renderPage()}
        </>
    );
}

export default Booking;

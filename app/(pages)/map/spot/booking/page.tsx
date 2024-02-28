"use client";
import { useState } from "react";
import YourBooking from "@/app/(pages)/map/spot/booking/YourBooking";
import Review from "@/app/(pages)/map/spot/booking/Review";
import AddVehicle from "@/app/(pages)/map/spot/booking/AddVehicle";
import SelectDates from "@/app/(pages)/map/spot/booking/Dates";
import VehicleSelect from "@/app/(pages)/map/spot/booking/VehicleSelect";

const Booking = () => {

    const [toggle, setToggle] = useState(true);

    const [page, setPage] = useState("yourBooking");

    const renderPage = () => {
        switch (page) {
            case "yourBooking":
                return <YourBooking setPage={setPage}/>;
            case "vehicleSelect":
                return <VehicleSelect setPage={setPage}/>;
            case "addVehicle":
                return <AddVehicle setPage={setPage}/>;
            case "selectDates":
                return <SelectDates setPage={setPage}/>;
            case "review":
                return <Review setPage={setPage}/>;
            default:
                throw new Error(`Invalid page state: ${page}`);
        }
    }

    return renderPage();
}

export default Booking;

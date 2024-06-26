"use client";
import { useState } from "react";
import YourBooking from "@/app/(pages)/map/spot/booking/YourBooking";
import Review from "@/app/(pages)/map/spot/booking/Review";
import AddVehicle from "@/app/(pages)/map/spot/booking/AddVehicle";
import SelectDates from "@/app/(pages)/map/spot/booking/Dates";
import VehicleSelect from "@/app/(pages)/map/spot/booking/VehicleSelect";
import Confirmation from "@/app/(pages)/map/spot/booking/Confirmation";
import { auth } from "@/config/firebase";
import { redirect } from "next/navigation";

const Booking = () => {

    if (auth.currentUser === null) {
        redirect("/welcome");
    }

    const epoch = new Date(0);
    const [dates, setDates] = useState<[Date, Date]>([epoch, epoch]);

    const [page, setPage] = useState("yourBooking");

    const renderPage = () => {
        switch (page) {
            case "yourBooking":
                return <YourBooking setPage={setPage} dates={dates}/>;
            case "vehicleSelect":
                return <VehicleSelect setPage={setPage}/>;
            case "addVehicle":
                return <AddVehicle setPage={setPage}/>;
            case "selectDates":
                return <SelectDates setPage={setPage} dates={dates} setDates={setDates}/>;
            case "review":
                return <Review setPage={setPage} dates={dates}/>;
            case "confirmation":
                return <Confirmation/>;
            default:
                throw new Error(`Invalid page state: ${page}`);
        }
    }

    return renderPage();
}

export default Booking;

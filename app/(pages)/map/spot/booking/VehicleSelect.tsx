"use client";
import { MdOutlineArrowBackIos } from "react-icons/md";
import Image from "next/image";
import Car from "@/public/spot/car.png";
import CarUnselected from "@/public/spot/car_unselected.png";
import { FaRegCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";
import { useState } from "react";
import { callApi } from "@/config/firebase";
import { useAsync } from "react-async-hook";

// @ts-ignore
const VehicleSelect = ({ setPage }) => {

    const vehicles = useAsync(callApi('getVehicles'), []);

    const [selected, setSelected] = useState<null|{ id: string, make: string, model: string, license: string }>(null);

    const renderVehicles = () => {
        if (!vehicles.result) {
            return;
        }
        // @ts-ignore
        if (vehicles.result.data.length === 0) {
            setPage("addVehicle");
        }

        return (
            <>
                { /* @ts-ignore */ }
                {vehicles.result.data.map((vehicle, index) => (
                    <div className="flex border-solid border-black border-2 rounded-2xl my-2" onClick={() => setSelected(vehicle)}>
                        <Image src={selected && selected.license === vehicle.license ? Car : CarUnselected} alt={"Car"} className="w-12 h-8 m-4"/>
                        <div className="flex-col m-2">
                            <div className="font-bold">
                                {vehicle.make + " " + vehicle.model}
                            </div>
                            {vehicle.license}
                        </div>
                        {selected && selected.license === vehicle.license
                            ? <FaRegDotCircle size={20} className="ml-auto mr-6 mt-5 text-blue-500"/>
                            : <FaRegCircle size={20} className="ml-auto mr-6 mt-5 text-blue-500"/>}
                    </div>
                ))}
            </>
        );
    }

    const handleConfirm = async () => {

        if (!selected) return;

        await callApi('setDefaultVehicle')({ id: selected.id, make: selected.make, model: selected.model, license: selected.license})
            .catch((error) => console.log(`Error adding default vehicle: ${error}`));

        setPage("yourBooking");
    }

    return (
        <div className="px-6">
            <div className='flex text-3xl font-bold py-8'>
                <MdOutlineArrowBackIos className='w-10 h-10 mr-2' onClick={() => setPage("yourBooking")}/>
                <div className="pl-6">
                    Select Vehicle
                </div>
            </div>

            {renderVehicles()}

            <div className='rounded-2xl bg-[#FF4251] p-2 text-white text-xl text-center mt-4'
                 onClick={async () => await handleConfirm()}>
                CONFIRM VEHICLE
            </div>

            <div className='rounded-2xl bg-[#343632] p-2 text-white text-xl text-center mt-60'
                 onClick={() => setPage("addVehicle")}>
                ADD NEW VEHICLE
            </div>
        </div>
    );
}

export default VehicleSelect;

"use client";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { callApi } from "@/config/firebase";
import { useState } from "react";

// @ts-ignore
const AddVehicle = ({ setPage }) => {

    const [license, setLicense] = useState("");
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [color, setColor] = useState("");

    const handleAdd = async () => {

        if (!license || !make || !model) return;

        await callApi('addVehicle')({ license, make, model, color })
            .catch((error) => console.log(`Error adding vehicle: ${error}`));

        setPage("yourBooking");
    }

    return (
        <>
            <div className='flex text-3xl font-bold p-8'>
                <MdOutlineArrowBackIos className='w-10 h-10 mr-2' onClick={() => setPage("vehicleSelect")}/>
                <div className="pl-2">
                    Add New Vehicle
                </div>
            </div>

            <div className="font-bold font-outfit ml-8 mr-8 mt-4">
                <div>
                    License Plate
                </div>
                <input
                    type="text"
                    className="bg-[#dae2f0] rounded-2xl w-full h-12 mb-4 p-2"
                    onChange={(e) => setLicense(e.target.value)}
                />

                <div>
                    Make
                </div>
                <input
                    type="text"
                    className="bg-[#dae2f0] rounded-2xl w-full h-12 mb-4 p-2"
                    onChange={(e) => setMake(e.target.value)}
                />

                <div>
                    Model
                </div>
                <input
                    type="text"
                    className="bg-[#dae2f0] rounded-2xl w-full h-12 mb-4 p-2"
                    onChange={(e) => setModel(e.target.value)}
                />

                <div>
                    Color
                </div>
                <input
                    type="text"
                    placeholder="Optional"
                    className="bg-[#dae2f0] rounded-2xl w-full h-12 mb-4 p-2"
                    onChange={(e) => setColor(e.target.value)}
                />

                <div className='flex justify-center mt-8'>
                    <div className={'rounded-2xl bg-[#FF4251] p-2 text-white text-xl ps-20 pe-20 mt-24'}
                         onClick={async () => handleAdd()}>
                        ADD
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddVehicle;

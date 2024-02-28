"use client";
import Image from 'next/image';
import DummyPFP from '@/public/profile/dummyPfp.png';
import React, { useEffect, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import Link from "next/link";
import { httpsCallable } from "@firebase/functions";
import { functions } from "@/config/firebase";
import { useRouter } from "next/navigation";

const EditProfile = () => {

    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [etransfer, setEtransfer] = useState("");

    useEffect(() => {
        if (email !== "") {
            return;
        }

        httpsCallable(functions, "getProfile")()
            .then((response) => {
                console.log(`Profile info: ${JSON.stringify(response.data, null, 4)}`);

                // @ts-ignore
                setName(response.data.name ?? ""); // @ts-ignore
                setEmail(response.data.email ?? ""); // @ts-ignore
                setPhone(response.data.phone ?? ""); // @ts-ignore
                setEtransfer(response.data.etransfer ?? "");
            })
            .catch((err) => console.log(`Error fetching profile info: ${err}`));
    });

    const updatePhone = (number: string) => {
        number = number.replace(/[^0-9]/g, '');
        if ((number.substring(number.length - 1) < '0' || number.substring(number.length - 1) > '9') && number.length > 0) {
            return;
        }
        if (number.length > 10) {
            return;
        }
        setPhone(number);
    }

    const renderPhone = (number: string) => {
        if (number.length <= 3) {
            return number;
        } else if (number.length <= 6) {
            return `(${number.substring(0, 3)})-${number.substring(3, 6)}`;
        } else {
            return `(${number.substring(0, 3)})-${number.substring(3, 6)}-${number.substring(6, 10)}`;
        }
    }

    const handleUpdate = async () => {
        const data = {
            name: name,
            phone: phone.replace(/[^0-9]/g, ''),
            etransfer: etransfer
        };

        httpsCallable(functions, "updateProfile")(data)
            .then((response) => console.log(`Profile updated: ${response.data}`))
            .catch((err) => console.log(`Error updating profile: ${err}`));
    }

    return (
        <div className="mx-10">
            <div className="flex py-3 pt-5 text-xl">
                <MdArrowBackIos size={30} className="mt-6" onClick={() => router.push("/profile")}/>
                <div className="text-center text-4xl font-bold pt-6 pl-6">
                    Edit Profile
                </div>
            </div>

            <Image
                src={DummyPFP}
                alt={"Profile Picture"}
                className="rounded-full h-40 w-40 mx-auto mt-6"
            />

            <div>Name</div>
            <input
                className='w-full py-3 px-5 mb-1 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20'
                value={name}
                disabled={email === ""}
                onChange={(e) => setName(e.target.value)}
            />

            <div>Email</div>
            <input
                className='w-full py-3 px-5 mb-1 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20'
                value={email}
            />

            <div>Phone number</div>
            <input
                className='w-full py-3 px-5 mb-1 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20'
                value={renderPhone(phone)}
                disabled={email === ""}
                onChange={(e) => updatePhone(e.target.value)}
            />

            <div>E-Transfer address</div>
            <input
                className='w-full py-3 px-5 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20'
                value={etransfer}
                disabled={email === ""}
                onChange={(e) => setEtransfer(e.target.value)}
            />

            <div className="flex justify-between mt-8">
                <div className="underline font-bold" onClick={() => router.push("/profile")}>
                    Cancel
                </div>
                <div
                    className="text-center text-white text-lg font-bold rounded-xl bg-[#FF4251] py-1 px-12"
                    onClick={async () => await handleUpdate()}
                >
                    Update
                </div>
            </div>
        </div>
    )
}

export default EditProfile;

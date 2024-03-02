"use client";
import Image from 'next/image';
import DummyPFP from '@/public/profile/dummyPfp.png';
import React, { useEffect, useState } from "react";
import { MdArrowBackIos, MdChevronLeft } from "react-icons/md";
import { auth, callApi } from "@/config/firebase";
import { redirect, useRouter } from "next/navigation";

const EditProfile = () => {

    if (auth.currentUser === null) {
        redirect("/welcome");
    }

    const router = useRouter();

    const [name, setName] = useState("");
    const [originalName, setOriginalName] = useState("");

    const [email, setEmail] = useState("");

    const [phone, setPhone] = useState("");
    const [originalPhone, setOriginalPhone] = useState("");

    const [etransfer, setEtransfer] = useState("");
    const [originalEtransfer, setOriginalEtransfer] = useState("");

    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        if (email !== "" && !updating) {
            return;
        }

        callApi("getProfile")()
            .then((response) => {

                // @ts-ignore
                setName(response.data.name ?? ""); // @ts-ignore
                setEmail(response.data.email ?? ""); // @ts-ignore
                setPhone(response.data.phone ?? ""); // @ts-ignore
                setEtransfer(response.data.etransfer ?? "");

                if (response.data && (originalName === "" && originalPhone === "" && originalEtransfer === "") || updating) {
                    // @ts-ignore
                    setOriginalName(response.data.name); // @ts-ignore
                    setOriginalPhone(response.data.phone); // @ts-ignore
                    setOriginalEtransfer(response.data.etransfer);
                }

                setUpdating(false);
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
        const data = {};
        if (originalName !== name) { // @ts-ignore
            data.name = name;
        }
        if (originalPhone !== phone) { // @ts-ignore
            data.phone = phone.replace(/[^0-9]/g, '');
        }
        if (originalEtransfer !== etransfer) { // @ts-ignore
            data.etransfer = etransfer;
        }

        await callApi("updateProfile")(data)
            .then((response) => console.log(`Profile updated: ${response.data}`))
            .catch((err) => console.log(`Error updating profile: ${err}`));

        setUpdating(true);
    }

    return (
        <div className="mx-10">
            <div className="flex py-3 pt-5 text-xl">
                <MdChevronLeft size={55} className='-ml-3 pr-4 mt-4' onClick={() => router.push("/profile")} />
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
                className={'w-full py-3 px-5 mb-1 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20 ' + (originalName !== name ? 'text-red-600' : 'text-black')}
                value={name}
                disabled={email === "" || updating}
                onChange={(e) => setName(e.target.value)}
            />

            <div>Email</div>
            <input
                className='w-full py-3 px-5 mb-1 outline-none rounded-2xl bg-[#4472CA] text-[#707070] bg-opacity-20'
                value={email}
                disabled={true}
            />

            <div>Phone number</div>
            <input
                className={'w-full py-3 px-5 mb-1 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20 ' + (originalPhone !== phone ? 'text-red-600' : 'text-black')}
                value={renderPhone(phone)}
                disabled={email === "" || updating}
                onChange={(e) => updatePhone(e.target.value)}
            />

            <div>E-Transfer address</div>
            <input
                className={'w-full py-3 px-5 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20 ' + (originalEtransfer !== etransfer ? 'text-red-600' : 'text-black')}
                value={etransfer}
                disabled={email === "" || updating}
                onChange={(e) => setEtransfer(e.target.value)}
            />

            <div className="flex justify-between mt-8">
                <div className="underline font-bold" onClick={() => router.push("/profile")}>
                    Cancel
                </div>
                <div
                    className={"text-center text-white text-lg font-bold rounded-xl py-1 px-12 " +
                        (originalName === name && originalPhone === phone && originalEtransfer === etransfer ? "bg-[#FF8D94] pointer-events-none" : "bg-[#FF4251]")}
                    onClick={async () => await handleUpdate()}
                >
                    Update
                </div>
            </div>
        </div>
    )
}

export default EditProfile;

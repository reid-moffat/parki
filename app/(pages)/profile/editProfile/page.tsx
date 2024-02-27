"use client";
import Image from 'next/image';
import DummyPFP from '@/public/profile/dummyPfp.png';
import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import Link from "next/link";

const EditProfile = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [etransfer, setEtransfer] = useState("");

    return (
        <div className="mx-10">
            <div className="flex py-3 pt-5 text-xl">
                <Link href='/profile' className='pt-6'>
                    <MdArrowBackIos size={30}/>
                </Link>
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
                className='w-full py-3 px-10 mb-1 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20'
                value={name}
                onChange={(e) => setEmail(e.target.value)}
            />

            <div>Email</div>
            <input
                className='w-full py-3 px-5 mb-1 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <div>Phone number</div>
            <input
                className='w-full py-3 px-5 mb-1 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20'
                value={phone}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
            />

            <div>E-Transfer address</div>
            <input
                className='w-full py-3 px-5 outline-none rounded-2xl bg-[#4472CA] bg-opacity-20'
                value={etransfer}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex justify-between mt-8">
                <div className="underline font-bold">
                    Cancel
                </div>
                <div className="text-center text-white text-lg font-bold rounded-xl bg-[#FF4251] py-1 px-12">
                    Update
                </div>
            </div>
        </div>
    )
}

export default EditProfile;

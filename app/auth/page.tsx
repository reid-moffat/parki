"use client";
import React from 'react'
import TextBox from '../components/elements/TextBox'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

const page = () => {
    //add hook for email and password

    const signin = () => {
        const email = "18rem8@queensu.ca";
        const pass = "password12345";

        signInWithEmailAndPassword(auth, email, pass)
            .then(() =>
                console.log('success login')
            )
            .catch((error) =>
                console.log(`err signing in ${error}`)
            )


    }

    return (

        <div
            className={
                "flex flex-col justify-center items-center"
            }
        >
            <div className="px-7 py-4 shadow bg-blue rounded-md flex flex-col gap-2">
                <TextBox
                    labelText="User Name"

                />
                <TextBox
                    labelText="Password"
                    type={"password"}
                />
                <button onClick={signin} className='black_btn'>Login</button>
            </div>
        </div>
    )
}

export default page

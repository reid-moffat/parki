"use client";
import React from 'react'
import TextBox from '../../../components/TextBox'
import Link from 'next/link'
import { useRef } from "react";
import { httpsCallable } from "@firebase/functions";
import { useState } from 'react';
import { functions } from '../../../firebase/config'

const SignUpPage = () => {
  // TODO: handle password confirmation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    await httpsCallable(functions, 'createAccount')({email: email, password: password})
      .then((res) => {
        console.log("account created successfully")
      })
      .catch((err) => {
        console.log(`Error caught: ${err}`)
      });
  }

  return (

    <div
      className={
        "flex flex-col justify-center items-center"
      }
    >
      <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2">
        <TextBox
          labelText="User Name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextBox
          labelText="Password"
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextBox
          labelText="Confirm Password"
          type={"password"}
        />
        <button onClick = {handleSignUp} className='black_btn'>Sign Up</button>
      </div>
    </div>
  )
}

export default SignUpPage

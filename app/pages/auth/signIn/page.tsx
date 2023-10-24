"use client";
import React from 'react'
import TextBox from '../../../components/TextBox'
import Link from 'next/link'
import { useRef } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase/config";
import {useState } from 'react';

const signInPage = () => {
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

  const signInWithGoogle = async () => {
    const provider = await new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(`Signed in: ${credential} ${user}`);
        }).catch((error) => {
            console.log(`Error caught: ${error}`);
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
          
        />
        <TextBox
          labelText="Password"
          type={"password"}
        />
        <button onClick = {signin} className='black_btn'>Login</button>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      </div>
    </div>
  )
}

export default signInPage
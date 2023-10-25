"use client";
import React from 'react'
import TextBox from '../../../components/TextBox'
import Link from 'next/link'
import { useRef } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../../firebase/config";
import {useState } from 'react';
import { useRouter} from 'next/navigation';


const SignInPage = () => {

  const router = useRouter();


  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [error, setError] = useState(null); // State to hold error messages



  const signin = () => {
    //sample creds
    //const email = "18rem8@queensu.ca";
    //const pass = "password12345";

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('success login')
        router.push('/')
      })
      .catch((error) => {
        console.error(`err signing in: ${error.message}`)
        setError(error.code)
      })
  }

  const signInWithGoogle = async () => {
    const provider = await new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            //const token = credential.accessToken;
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
          value = {email}
          onChange={(e) => setEmail(e.target.value)}

        />
        <TextBox
          labelText="Password"
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick = {signin} className='black_btn'>Login</button>
        {error && <p className = "text-red-500">{error}</p>}
        <button onClick={signInWithGoogle}>Sign In With Google</button>
      </div>
    </div>
  )
}

export default SignInPage

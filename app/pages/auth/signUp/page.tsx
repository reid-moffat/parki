"use client";
import React from 'react'
import TextBox from '../../../components/TextBox'
import Link from 'next/link'
import { useRef } from "react";
import { httpsCallable } from "@firebase/functions";
import { useState } from 'react';
import { auth, functions } from '../../../firebase/config'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== password2) {
      alert("Password does not match!")
      return
    }
    const result = await httpsCallable(functions, 'createAccount')({email: email, password: password})
      .then((res) => {
        alert("Successfully created new user! Please check your email and confirm your email.");
        router.push('/pages/auth/signIn');
      })
      .catch((err) => {
        alert(err)
      });
  }

  const handleSignUpWithGoogle = async () => {
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
          labelText="Email"
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
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button onClick = {handleSignUp} className='black_btn'>Sign Up</button>
          <img
              src={'../../signInWithGoogle.png'}
              onClick={handleSignUpWithGoogle}
              style={{'cursor': 'pointer'}}
          />
      </div>
    </div>
  )
}

export default SignUpPage

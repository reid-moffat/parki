import React from 'react'
import TextBox from '../components/elements/TextBox'
import Link from 'next/link'
import { useRef } from "react";

const page = () => {
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
        <Link href="" className='black_btn'>Login</Link>
      </div>
    </div>
  )
}

export default page
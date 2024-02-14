import './globals.css'
import { Inter } from 'next/font/google'
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import BottomBar from "@/components/helpers/BottomBar";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="absolute h-full w-full bg-[#343632]">
            <Image src={logo} alt="Parki logo" className='w-[100vw] h-[8vh] object-contain mt-3 mb-4'/>
            <div className="ml-[2vw] h-[79.5vh] w-[96vw] rounded-xl  bg-[#FCF9EF] text-[#343632] -z-50">
                {children}
            </div>
            <BottomBar/>
        </div>
        </body>
        </html>
    )
}

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
        <div style={{backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10'}}>
            <Image src={logo} alt="Parki logo" className='w-[100vw] h-[8vh] object-contain mt-3 mb-4'/>
            {children}
            <BottomBar/>
        </div>
        </body>
        </html>
    )
}

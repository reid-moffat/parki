import '../globals.css'
import { Inter } from 'next/font/google'
import React from "react";
import BottomBar from "@/components/helpers/BottomBar";

const inter = Inter({subsets: ['latin']})

// @ts-ignore
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="absolute h-full w-full bg-[#343632]">
            {children}
            <BottomBar/>
        </div>
        </body>
        </html>
    )
}

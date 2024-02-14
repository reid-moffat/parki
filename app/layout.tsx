import React from "react";
import BottomBar from "@/components/helpers/BottomBar";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ['latin']})

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

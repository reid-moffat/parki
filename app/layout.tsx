import './globals.css'
import { Inter } from 'next/font/google'
import React from "react";
import Navigator from "@/app/Navigator";

const inter = Inter({subsets: ['latin']})

export default function RootLayout() {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main className='app'>
            <Navigator/>
        </main>
        </body>
        </html>
    )
}

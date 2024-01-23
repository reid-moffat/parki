import './globals.css'
import { Inter } from 'next/font/google'
import React from "react";
import MapPage from "@/app/map/page";

const inter = Inter({subsets: ['latin']})

/*
export default function RootLayout() {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main className='app'>
            <MapPage/>
        </main>
        </body>
        </html>
    )
}*/


export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    )
}

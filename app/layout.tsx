import './globals.css'
import { Inter } from 'next/font/google'
import React from "react";
import MapSelectionPage from "@/app/pages/map/page";
import DetailsPage from '@/app/pages/details/page';

const inter = Inter({subsets: ['latin']})

export default function RootLayout() {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className='app'>
                    <MapSelectionPage/>
                    {/* <DetailsPage/> */}
                </main>
            </body>
        </html>
    )
}

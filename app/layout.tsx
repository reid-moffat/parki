import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Maps from "@/app/components/Map";
import React from "react";
import dynamic from 'next/dynamic';
import SearchBar from './components/SearchBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}


const DynamicHeader = dynamic(() => import('../app/components/Map'), {
    ssr: false,
})

export default function RootLayout() {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className='app'>
                    <DynamicHeader />
                    <div>
                        <SearchBar />
                    </div>
                </main>
            </body>
        </html>
    )
}


import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import React from 'react'

const Nav = () => {
    const isUserLoggedIn = false;
    return (

        // remove background on final, currently being used to view spacing
        <nav className="flex-between w-full mb-2 p-6 bg-orange-200">
            <Link href="/" className='flex gap-2 flex-center'>
                <Image src="/next.svg"
                    alt="QTMA Parking Logo"
                    width={50}
                    height={500}
                    className="object-contain" />
            </Link>

            {/* Mobile Navigation */}

            <div className='sm:flex hidden'>
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/pages/auth/signIn" className="black_btn">
                        Sign In
                    </Link>
                    <Link href="/pages/auth/signUp" className="black_btn">
                        Sign Up
                    </Link>
                </div>

            </div>


        </nav>
    )
}

export default Nav

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import React from 'react'

const Nav = () => {
    const isUserLoggedIn = false;
    return (


        <nav className="flex-between w-full mb-10 p-6 ">
            <Link href="/" className='flex gap-2 flex-center'>
                <Image src="../../public/next.svg"
                    alt="QTMA Parking Logo"
                    width={100}
                    height={100}
                    className="object-contain" />
            </Link>

            {/* Mobile Navigation */}

            <div className='sm:flex hidden'>
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/pages/auth/signIn" className="black_btn">
                        Sign In / Up
                    </Link>
                </div>

            </div>


        </nav>
    )
}

export default Nav

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import React from 'react'

const Nav = () => {
    const isUserLoggedIn = false;
    return (


        <nav className="flex-between w-full mb-10 p-6 ">
            <Link href="/" className='flex gap-2 flex-center'>
                <Image src="../assets/images/logo.svg"
                    alt="QTMA Parking Logo"
                    width={30}
                    height={30}
                    className="object-contain" />
            </Link>

            {/* Mobile Navigation */}

            <div className='sm:flex hidden'>
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/auth" className="black_btn">
                        Sign In
                    </Link>

                </div>

            </div>


        </nav>
    )
}

export default Nav
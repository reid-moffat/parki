import React from 'react';
import BottomBar from "@/components/helpers/BottomBar";
import Link from "next/link";

import '../globals.css'
import parkilogo from '../../public/logo.png';
import Image from 'next/image';

const Profile = () => {
    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10' }}>
            {/* If the user is not signed n:
            -This is the top left and bottom left in figma auth (create acc/sign in buttons, and sign in w/ google/email)
            If the user is signed in:
            -This is the profile page */}

        <div className='entire-conainer'>
            <div className= 'parki-logo-div'>
                <Image src={parkilogo} alt="" className='parki-logo'/>
            </div>
            <div className='button-container'>
                <Link
                    className='create-account'
                    href={{ pathname: '/profile/signUp'}}
                >
                    Create Account
                </Link>
                <Link
                    className='w-full p-2 text-white cursor-pointer text-center rounded-2xl mt-2 border-solid border-2 border-[#FCF9EF]'
                    href={{ pathname: '/profile/signIn' }}
                >
                    Sign in
                </Link>
            </div>
        </div>
        <h2 className='conditions-text'>
            By continuing, you confirm you&apos;ve read and agreed to our <Link style={{color:"#5dafde"}} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Terms and Conditions</Link> and <Link style={{color:"#5dafde"}} href="https://www.linkedin.com/in/gcarkner/">Privacy Policy</Link>
        </h2>
        <BottomBar/>
        </div>
    );
}

export default Profile;

import React from 'react';
import BottomBar from "@/components/helpers/BottomBar";
import Link from "next/link";

const Profile = () => {
    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10' }}>
            If the user is not signed n:
            -This is the top left and bottom left in figma auth (create acc/sign in buttons, and sign in w/ google/email)
            If the user is signed in:
            -This is the profile page

            <div>
                <Link
                    className="flex flex-row items-center bg-transparent w-4/5 py-2 rounded-lg mt-3 mx-auto text-[#FCF9EF] border-2 border-[#FCF9EF]"
                    href={{ pathname: '/profile/signIn' }}
                >
                    Sign in
                </Link>
            </div>

            <BottomBar/>
        </div>
    );
}

export default Profile;

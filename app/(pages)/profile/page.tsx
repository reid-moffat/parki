import React from 'react';
import '../globals.css'
import { redirect } from 'next/navigation';
import { auth } from "@/config/firebase";

const Profile = () => {
    if (!auth.currentUser) {
        redirect('/profile/signIn');
    }

    return (
        <>
            Profile
        </>
    );
}

export default Profile;

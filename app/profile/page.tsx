import React from 'react';
import BottomBar from "@/components/helpers/BottomBar";

const Profile = () => {
    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10' }}>
            If the user is not signed n:
            -This is the top left and bottom left in figma auth (create acc/sign in buttons, and sign in w/ google/email)
            If the user is signed in:
            -This is the profile page

            <BottomBar/>
        </div>
    );
}

export default Profile;

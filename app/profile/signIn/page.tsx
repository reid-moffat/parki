import React from 'react';
import BottomBar from "@/components/helpers/BottomBar";

const SignIn = () => {
    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10' }}>
            This is the bottom row (minus the sign in w/ google/email side) in auth section on figma auth
            Note that this only needs email sign-in, google sign in is done through a pop-up on the main screen
            <BottomBar/>
        </div>
    );
}

export default SignIn;

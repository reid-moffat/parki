"use client";
import React from 'react'
import BottomBar from "@/components/helpers/BottomBar";

// @ts-ignore
const SpotsPage = ({ searchParams }) => {
    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10' }}>
            Spots page
            <BottomBar/>
        </div>
    );
}

export default SpotsPage;

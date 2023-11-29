"use client";
import React, { useEffect, useState } from 'react'
import style from '@/app/styles/Map.module.css'
import Image from 'next/image';
import logo from "@/public/logo.png";
import Maps from "@/app/components/Map";
import footer from "@/public/map/bottom.png";
import profileIcon from "@/public/map/user.png";
import mapIcon from "@/public/map/map.png";
import settingsIcon from "@/public/map/settings.png";

function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                // @ts-ignore
                width: window.innerWidth,
                // @ts-ignore
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}

const MapSelectionPage = () => {
    const size = useWindowSize();

    return (
    <div style={{ 'backgroundColor': '#343632' }}>
        {/*<div className={style.header}>*/}
        {/*    <text className={style.headerText}>PARKI</text>*/}
        {/*</div>*/}
        <div className={style.logoContainer}>
            {/* @ts-ignore */}
            <Image className={style.logo} src={logo} width={size.width * 0.25} height={size.height * 0.1} alt="Parki logo"/>
        </div>

        <div className={style.mapContainer}>
            <Maps/>
        </div>
        <div className={style.footerContainer}>
            <Image src={footer} alt={"Bottom bar"}/>
            <Image src={profileIcon} alt={"Bottom bar"} className={style.footerProfileIcon}/>
            <Image src={mapIcon} alt={"Bottom bar"} className={style.footerMapIcon}/>
            <Image src={settingsIcon} alt={"Bottom bar"} className={style.footerSettingsIcon}/>
        </div>
        {/*<SearchBar/>*/}
    </div>
  )
}

export default MapSelectionPage;

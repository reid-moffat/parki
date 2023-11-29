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

// Gets window dimensions (and updates if they change)
const useWindowSize = () => {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                // @ts-ignore
                width: window.innerWidth,
                // @ts-ignore
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize); // Update on window resize

        // Call right away to get initial dimensions, and clean up event listener
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

const MapSelectionPage = () => {
    let size = { width: undefined, height: undefined};
    if (typeof window !== "undefined") {
        size = useWindowSize();
    }

    return (
        <div style={{'backgroundColor': '#343632'}}>
            <div className={style.logoContainer}>
                {/* @ts-ignore */}
                <Image className={style.logo} src={logo} width={size.width * 0.25} height={size.height * 0.1}
                       alt="Parki logo"/>
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
        </div>
    )
}

export default MapSelectionPage;

"use client";
import React from 'react'
import style from '@/app/styles/Map.module.css'
import Image from 'next/image';
import logo from "@/public/logo.png";
import footer from "@/public/map/bottom.png";
import profileIcon from "@/public/map/user.png";
import mapIcon from "@/public/map/map.png";
import settingsIcon from "@/public/map/settings.png";
import dynamic from "next/dynamic";

const Map = dynamic(() => import('@/app/components/Map'), { ssr: false });

const MapSelectionPage = () => {
    return (
        <div style={{'backgroundColor': '#343632'}}>
            <div className={style.headerContainer}>
                <div className={style.logoContainer}>
                    {/* @ts-ignore */}
                    <Image src={logo} alt="Parki logo"/>
                </div>
            </div>

            <div className={style.mapContainer}>
                <Map/>
            </div>

            <div className={style.footerContainer}>
                <Image src={footer} alt={"Bottom bar"} style={{ width: '100%' }}/>
                <Image src={profileIcon} alt={"Bottom bar"} className={style.footerProfileIcon}/>
                <Image src={mapIcon} alt={"Bottom bar"} className={style.footerMapIcon}/>
                <Image src={settingsIcon} alt={"Bottom bar"} className={style.footerSettingsIcon}/>
            </div>
        </div>
    )
}

export default MapSelectionPage;

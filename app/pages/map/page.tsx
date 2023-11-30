"use client";
import React, { useState } from 'react'
import style from '@/app/styles/Map.module.css'
import Image from 'next/image';
import logo from "@/public/logo.png";
import footer from "@/public/map/bottom.png";
import profileIcon from "@/public/map/user.png";
import mapIcon from "@/public/map/map.png";
import settingsIcon from "@/public/map/settings.png";
import dynamic from "next/dynamic";
import TopMapMenu from '@/app/components/TopMapMenu';
import FilterPage from '@/app/components/Filter';

const Map = dynamic(() => import('@/app/components/Map'), { ssr: false });

const MapSelectionPage = () => {

    const [timeframe, setTimeframe] = useState("Monthly");
    const [showFilters, setShowFilters] = useState(true);

    const map = (<>
        <Map/>
        <TopMapMenu 
            setShowFilters={setShowFilters}
            setTimeframe={setTimeframe}
            timeframe={timeframe}
            location="Queen's Unviersity"
            date="December 2, 2023"
        />
    </>)

    const filter = (
        <FilterPage setShowFilters={setShowFilters}/>
    )

    return (
        <div className={style.mapPage}>
            <Image src={logo} alt="Parki logo" className='w-[100vw] h-[8vh] object-contain mt-3 mb-4'/>

            { showFilters ? null : map }

            { showFilters ? filter : null }

            <div className="fixed bottom-0 w-[100vw]">
                <Image src={footer} alt={"Bottom bar"} style={{ width: '100%' }}/>
                <Image src={profileIcon} alt={"Bottom bar"} className={style.footerProfileIcon}/>
                <Image src={mapIcon} alt={"Bottom bar"} className={style.footerMapIcon}/>
                <Image src={settingsIcon} alt={"Bottom bar"} className={style.footerSettingsIcon}/>
            </div>
        </div>
    )
}

export default MapSelectionPage;

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

const Slide = dynamic(() => import('@/app/components/Slider'), { ssr: false });
const Map = dynamic(() => import('@/app/components/Map'), { ssr: false });

const MapSelectionPage = () => {

    const [timeframe, setTimeframe] = useState("Monthly");
    const [showFilters, setShowFilters] = useState(false);

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

        </div>
    )
}

export default MapSelectionPage;

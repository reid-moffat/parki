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
import DetailsPage from "@/app/components/Details";

const Map = dynamic(() => import('@/app/components/Map'), { ssr: false });

export enum States {
    MAP,
    FILTERS,
    DETAILS,
}

const MapSelectionPage = () => {

    const [timeframes, setTimeframes] = useState({ Hourly: true, Weekly: true, Monthly: true });
    const [pageState, setPageState] = useState(States.MAP);

    const renderPage = () => {
        switch (pageState) {
            case States.MAP:
                return (<>
                    <Map timeframes={timeframes}/>
                    <TopMapMenu
                        setPageState={setPageState}
                        setTimeframes={setTimeframes}
                        timeframes={timeframes}
                        location="Queen's Unviersity"
                        date="December 2, 2023"
                    />
                </>);
            case States.FILTERS:
                return <FilterPage setPageState={setPageState}/>;
            case States.DETAILS:
                return <DetailsPage setPageState={setPageState}/>;
            default:
                throw new Error("Invalid page state: " + pageState);
        }
    }

    return (
        <div className={style.mapPage}>
            <Image src={logo} alt="Parki logo" className='w-[100vw] h-[8vh] object-contain mt-3 mb-4'/>

            {renderPage()}
        </div>
    )
}

export default MapSelectionPage;

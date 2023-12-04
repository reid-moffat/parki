"use client";
import React, { useState } from 'react'
import style from '@/app/styles/Map.module.css'
import Image from 'next/image';
import logo from "@/public/logo.png";
import dynamic from "next/dynamic";
import TopMapMenu from '@/app/components/TopMapMenu';
import FilterPage from '@/app/components/Filter';
import DetailsPage from "@/app/components/Details";
import Slider from '@/app/components/Slider';
import dummyData from "@/app/pages/map/dummyData";

const Slide = dynamic(() => import('@/app/components/Slider'), {ssr: false});
const Map = dynamic(() => import('@/app/components/Map'), {ssr: false});

export enum States {
    MAP,
    FILTERS,
    DETAILS,
}

const MapSelectionPage = () => {

    const [pageState, setPageState] = useState(States.MAP);
    const [timeframes, setTimeframes] = useState({Hourly: false, Weekly: false, Monthly: true});

    // Filters
    const [range, setRange] = useState(30);
    const [price, setPrice] = useState([0, 200]);
    const [amenities, setAmenities] = useState({
        "Accessible": false,
        "Self-Park": false, "EV Charging": false, "Covered": false, "On-Site Staff": false, "Shovelling Included": false
    });

    // Details
    const [currentSpot, setCurrentSpot] = useState(dummyData[Math.floor(Math.random() * dummyData.length)]);

    const renderPage = () => {
        switch (pageState) {
            case States.MAP:
                return (<>
                    <Map
                        timeframes={timeframes}
                        range={range}
                        price={price}
                        amenities={amenities}
                    />
                    <TopMapMenu
                        setPageState={setPageState}
                        setTimeframes={setTimeframes}
                        timeframes={timeframes}
                        location="Queen's University"
                        date="December 2, 2023"
                    />
                    <Slider setPageState={setPageState} setCurrentSpot={setCurrentSpot}/>
                </>);
            case States.FILTERS:
                return (
                    <FilterPage
                        setPageState={setPageState}
                        range={range}
                        setRange={setRange}
                        price={price}
                        setPrice={setPrice}
                        amenities={amenities}
                        setAmenities={setAmenities}
                    />
                );
            case States.DETAILS:
                return <DetailsPage setPageState={setPageState} spotData={currentSpot}/>;
            default:
                throw new Error("Invalid page state: " + pageState);
        }
    }

    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', 'zIndex': '10' }}>
            <Image src={logo} alt="Parki logo" className='w-[100vw] h-[8vh] object-contain mt-3 mb-4'/>

            {renderPage()}
        </div>
    )
}

export default MapSelectionPage;

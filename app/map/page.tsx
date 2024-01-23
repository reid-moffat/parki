"use client";
import React, { useState } from 'react'
import dynamic from "next/dynamic";
import TopMapMenu from '@/components/map/TopMapMenu';
import DetailsPage from "@/components/map/Details";
import Slider from '@/components/map/Slider';
import dummyData from "@/config/dummyData";
import logo from "@/public/logo.png";
import Image from "next/image";
import { States } from "@/app/map/states";

const Map = dynamic(() => import('@/components/map/Map'), {ssr: false});

const MapPage = () => {

    const [pageState, setPageState] = useState(States.MAP);
    const [timeframes, setTimeframes] = useState({Hourly: false, Weekly: false, Monthly: true});

    // Filters
    const [range, setRange] = useState(30);
    const [price, setPrice] = useState([0, 200]);
    const [amenities, setAmenities] = useState({
        "Accessible": false, "Self-Park": false, "EV Charging": false, "Covered": false, "On-Site Staff": false, "Shovelling Included": false
    });

    // Details
    const [currentSpot, setCurrentSpot] = useState(dummyData[Math.floor(Math.random() * dummyData.length)]);

    const renderPage = () => {
        switch (pageState) {
            case States.MAP:
                return (<>

                </>);
            case States.DETAILS:
                return <DetailsPage setPageState={setPageState} spotData={currentSpot}/>;
            default:
                throw new Error(`Invalid page state: ${pageState}`);
        }
    }

    return (
        <div style={{ backgroundColor: '#343632', position: 'absolute', height: '100vh', width: '100vw', zIndex: '10' }}>
            <Image src={logo} alt="Parki logo" className='w-[100vw] h-[8vh] object-contain mt-3 mb-4'/>

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
                date="February 2, 2024"
            />
            <Slider setPageState={setPageState} setCurrentSpot={setCurrentSpot}/>
        </div>
    );
}

export default MapPage;

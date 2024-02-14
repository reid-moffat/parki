"use client";
import React, { useState } from 'react'
import dynamic from "next/dynamic";
import TopMapMenu from '@/components/map/TopMapMenu';
import Spot from '@/components/map/Spot';


const Map = dynamic(() => import('@/components/map/Map'), {ssr: false});

const MapPage = () => {

    const [spotInfo, setSpotInfo] = useState();


    return (
        <>
            <Map currentSpotInfo={spotInfo} onMarkerClick={setSpotInfo}/>
            <TopMapMenu location="Queen's University"/>
            {spotInfo ? <Spot spot={spotInfo}/> : null}
        </>
    );
}

export default MapPage;

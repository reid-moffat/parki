"use client";
import React, { useState } from 'react'
import dynamic from "next/dynamic";
import TopMapMenu from '@/components/map/TopMapMenu';
import Spot from '@/components/map/Spot';
import { useSelector } from "react-redux";
import { currentSpotExists } from "@/app/GlobalRedux/Features/currentSpot";
import { getLocation } from "@/app/GlobalRedux/Features/search";


const Map = dynamic(() => import('@/components/map/Map'), {ssr: false});

const MapPage = () => {

    const currentSpotSelected = useSelector(currentSpotExists);

    const location = useSelector(getLocation);

    const [center, setCenter] = useState({lat: location.lat ?? 44.236524, lng: location.lng ?? -76.495791 });

    return (
        <>
            <Map center={center}/>
            <TopMapMenu/>
            {currentSpotSelected && <Spot/>}
        </>
    );
}

export default MapPage;

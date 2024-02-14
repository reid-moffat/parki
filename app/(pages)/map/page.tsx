"use client";
import React from 'react'
import dynamic from "next/dynamic";
import TopMapMenu from '@/components/map/TopMapMenu';
import Spot from '@/components/map/Spot';
import { useSelector } from "react-redux";
import { currentSpotExists } from "@/app/GlobalRedux/Features/currentSpot";


const Map = dynamic(() => import('@/components/map/Map'), {ssr: false});

const MapPage = () => {

    const currentSpotSelected = useSelector(currentSpotExists);

    return (
        <>
            <Map/>
            <TopMapMenu/>
            {currentSpotSelected && <Spot/>}
        </>
    );
}

export default MapPage;

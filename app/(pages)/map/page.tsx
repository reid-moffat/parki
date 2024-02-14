"use client";
import React from 'react'
import dynamic from "next/dynamic";
import TopMapMenu from '@/components/map/TopMapMenu';
import Spot from '@/components/map/Spot';
import { useSelector } from "react-redux";
import { getSpot } from "@/app/GlobalRedux/Features/currentSpot";


const Map = dynamic(() => import('@/components/map/Map'), {ssr: false});

const MapPage = () => {

    const currentSpot = useSelector(getSpot);

    return (
        <>
            <Map/>
            <TopMapMenu/>
            {currentSpot && <Spot/>}
        </>
    );
}

export default MapPage;

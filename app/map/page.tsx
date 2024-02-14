"use client";
import React, { useState } from 'react'
import dynamic from "next/dynamic";
import TopMapMenu from '@/components/map/TopMapMenu';
import Slider from '@/components/map/Slider';
import logo from "@/public/logo.png";
import Image from "next/image";
import BottomBar from "@/components/helpers/BottomBar";
import Spot from '@/components/map/Spot';


const Map = dynamic(() => import('@/components/map/Map'), {ssr: false});

// @ts-ignore
const MapPage = ({ searchParams }) => {

    const [timeframes, setTimeframes] = useState({Hourly: false, Weekly: false, Monthly: true});
    const [spotInfo, setSpotInfo] = useState();

    // Filters
    const range = searchParams.range ?? 30;
    const price = searchParams.price ?? [0, 200];
    const amenities = (typeof searchParams.amenities === 'string' ? [searchParams.amenities] : searchParams.amenities) ?? [];

    return (
        <>
            <Map
                timeframes={timeframes}
                range={range}
                price={price}
                amenities={amenities}
                currentSpotInfo={spotInfo}
                onMarkerClick={setSpotInfo}
            />
            <TopMapMenu
                location="Queen's University"
                range={range}
                price={price}
                amenities={amenities}
            />
            { spotInfo ? <Spot spot={spotInfo} /> : null }
        </>
    );
}

export default MapPage;

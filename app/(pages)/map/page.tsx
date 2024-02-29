"use client";
import React, { useState } from 'react'
import dynamic from "next/dynamic";
import TopMapMenu from '@/components/map/TopMapMenu';
import Spot from '@/components/map/Spot';
import { useSelector } from "react-redux";
import { currentSpotExists } from "@/app/GlobalRedux/Features/currentSpot";
import Search from "@/app/(pages)/map/search";
import Filter from "@/app/(pages)/map/filter";


const Map = dynamic(() => import('@/components/map/Map'), {ssr: false});

const MapPage = () => {

    const currentSpotSelected = useSelector(currentSpotExists);

    const [pageState, setPageState] = useState("map");
    const [search, setSearch] = useState(null);

    const renderPage = () => {
        switch (pageState) {
            case "map":
                return (
                    <>
                        <Map search={search}/>
                        <TopMapMenu setPageState={setPageState} location={search}/>
                        {currentSpotSelected && <Spot/>}
                    </>
                );
            case "search":
                return <Search setPageState={setPageState} location={search} setLocation={setSearch}/>;
            case "filter":
                return <Filter setPageState={setPageState}/>;
            default:
                throw new Error("Invalid page state in map/page.tsx");
        }
    }

    return renderPage();
}

export default MapPage;

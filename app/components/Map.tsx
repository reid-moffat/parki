"use client";
import React, { useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import style from '@/app/styles/Map.module.css'
import CustomMarker from './CustomMarker';
import dummyData from "@/app/pages/map/dummyData";


function Maps() {
    const center = {lat: 44.226795, lng: -76.495151};
    const ZOOM_LEVEL = 14.5;
    const mapRef = useRef();

    const renderPins = () => {
        return dummyData.map((data, index) => (
            <CustomMarker key={index} address={data.address} price={data.price} lat={data.latitude}
                          long={data.longitude} active={true}/>
        ));
    }

    return (
        <>
            <MapContainer 
                className="absolute mt-[15vh] ml-[2vw] h-[76vh] w-[96vw] rounded-xl -z-50" 
                center={center} 
                zoom={ZOOM_LEVEL}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />

                {renderPins()}
            </MapContainer>
        </>
    )
}

export default Maps;

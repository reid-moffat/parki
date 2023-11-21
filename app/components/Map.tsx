"use client";
import React, { useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import style from '@/app/styles/Map.module.css'
import CustomMarker from './CustomMarker';
import dummyData from "@/app/pages/map/dummyData";


function Maps() {
    const center = { lat: 44.226795, lng: -76.495151 };
    const ZOOM_LEVEL = 14.5;
    const mapRef = useRef();

    return (
        <>
            <div className={style.header}>
                <text className={style.headerText}>PARKI</text>
            </div>

            <MapContainer className={style.map} center={center} zoom={ZOOM_LEVEL}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />


                {/* This creates a custom marker at specified location points using props with latitute and longitute locations
                We can take this further by using a database or json file and looping through to create components and
                and display as many marker components as there are latitute and longitutde pairs in the json file/database
                */}

                {
                    dummyData.map((data, index) => <CustomMarker key={index} address={data.address} price={data.price} lat={data.latitude} long={data.longitude}/>)
                }

            </MapContainer>
        </>
    )
}

export default Maps;

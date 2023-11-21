"use client";
import React, { useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import style from '@/app/styles/Map.module.css'
import CustomMarker from './CustomMarker';


function Maps() {
    const center = { lat: 44.226795, lng: -76.498151 };
    const ZOOM_LEVEL = 16;
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
                <CustomMarker lat={44.222960} long={-76.504143}/>

                <CustomMarker lat={44.225674} long={-76.498060}/>

                <CustomMarker lat={44.224090} long={-76.496772}/>

                <CustomMarker lat={44.226735} long={-76.499369}/>

                <CustomMarker lat={44.226739} long={-76.501799}/>

            </MapContainer>
        </>
    )
}

export default Maps;

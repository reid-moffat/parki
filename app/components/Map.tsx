"use client";
import React, { useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import style from '@/app/styles/Map.module.css'

function Maps() {
    const center = { lat: 44.226795, lng: -76.498151 };
    const ZOOM_LEVEL = 16;
    const mapRef = useRef();

    return (
        <MapContainer className={style.map} center={center} zoom={ZOOM_LEVEL}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
        </MapContainer>
    )
}

export default Maps;

"use client";
import React, { useState, useRef } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import style from '../styles/Map.module.css'



function Maps() {
    const [center, setCenter] = useState({ lat: 44.229660, lng: -76.494186 })
    const ZOOM_LEVEL = 17
    const mapRef = useRef()
    return (
        <MapContainer className={style.map} center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
        </MapContainer>
    )
}
export default Maps;

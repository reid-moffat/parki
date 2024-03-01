"use client";
import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import CustomMarker from './MiniMarker';

// @ts-ignore
function MiniMaps({lat, lng}) {

    const center = { lat, lng };
    const ZOOM_LEVEL = 14.5;

    return (
        <MapContainer
            className="w-full h-[110%] rounded-xl z-0"
            center={center}
            zoom={ZOOM_LEVEL}
            zoomControl={false}
            scrollWheelZoom={false}
            keyboard={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png'

                // Original style - ugly, but free
                // url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'

                // Stadia map style - pretty, but paid
                // url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png'
            />

            <CustomMarker
                key={1}
                lat={center.lat}
                long={center.lng}
                address={null}
                price={null}
                onClick={()=>{}}
            />
        </MapContainer>
    )
}

export default MiniMaps;

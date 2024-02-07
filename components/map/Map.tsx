"use client";
import React, { useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import CustomMarker from './CustomMarker';
import dummyData from "@/config/dummyData";

// @ts-ignore
function Maps({timeframes, range, price, amenities, onMarkerClick}) {
    const center = { lat: 44.236524, lng: -76.495791 };
    const ZOOM_LEVEL = 14.5;
    const mapRef = useRef();

    //@ts-ignore
    const handleMarkerClick = (address) => {
        const spotData = dummyData.find((spot) => {
            return spot.address === address
        })
        // function sets spotInfo state variable in map/page.tsx
        if (spotData)
            onMarkerClick(spotData)
    }

    const renderPins = () => {
        return dummyData
            .filter((item) => {
                return timeframes[item.period] === true &&
                    (range === 30 || item.distance <= range * 100) &&
                    (price[1] === 200 || (item.price >= price[0] && item.price <= price[1])) &&
                    amenities.every((amenity: string) => item.amenities.includes(amenity));
            })
            .map((data, index) => {
                return (
                    <CustomMarker key={index} lat={data.latitude} long={data.longitude}
                              address={data.address} price={data.price} period={data.period} onClick={handleMarkerClick}/>
                );
            });
    }

    return (
        <MapContainer
            className="absolute ml-[2vw] h-[79.5vh] w-[96vw] rounded-xl -z-50"
            center={center}
            zoom={ZOOM_LEVEL}
            zoomControl={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png'

                // Original style - ugly, but free
                // url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'

                // Stadia map style - pretty, but paid
                // url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png'
            />

            {renderPins()}
        </MapContainer>
    )
}

export default Maps;

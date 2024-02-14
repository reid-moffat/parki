"use client";
import React, { useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import CustomMarker from './CustomMarker';
import dummyData from "@/config/dummyData";
import { useSelector } from "react-redux";
import { getRange, getPrice, getAmenities } from "@/app/GlobalRedux/Features/filtersSlice";

// @ts-ignore
function Maps({ currentSpotInfo, onMarkerClick }) {
    const center = { lat: 44.236524, lng: -76.495791 };
    const ZOOM_LEVEL = 14.5;
    const mapRef = useRef();

    // Filters
    const range = useSelector(getRange);
    const price = useSelector(getPrice);
    const amenities = useSelector(getAmenities);

    const handleMarkerClick = (address: string) => {
        const spotData = dummyData.find((spot) => spot.address === address);

        // Closes the map marker if the current spot is clicked, or opens/updates it if a new spot is clicked
        if (spotData && spotData.address === currentSpotInfo?.address) {
            onMarkerClick(undefined);
        } else if (spotData) {
            onMarkerClick(spotData);
        }
    }

    const renderPins = () => {
        return dummyData
            .filter((item) => {
                return (range === 30 || item.distance <= range * 100) &&
                    (price[1] === 200 || (item.price >= price[0] && item.price <= price[1])) &&
                    Object.entries(amenities).every((amenity: [string, boolean]) => !amenity[1] || item.amenities.includes(amenity[0]));
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
            className="absolute h-[79.5vh] w-[96vw] rounded-xl z-10"
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

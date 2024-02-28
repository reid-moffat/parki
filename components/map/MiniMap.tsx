"use client";
import React, { useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import CustomMarker from './CustomMarker';
import dummyData from "@/config/dummyData";
import { useDispatch, useSelector } from "react-redux";
import { getRange, getPrice, getAmenities } from "@/app/GlobalRedux/Features/filters";
import { getSpot, updateSpot, clearSpot } from "@/app/GlobalRedux/Features/currentSpot";
import { useAsync } from "react-async-hook";
import { callApi } from '@/config/firebase';

// @ts-ignore
function Maps({lat, lng}) {
    const center = { lat, lng };
    const ZOOM_LEVEL = 14.5;
    const mapRef = useRef();

    // Filters
    const range = useSelector(getRange);
    const price = useSelector(getPrice);
    const amenities = useSelector(getAmenities);

    const dispatch = useDispatch();
    const currentSpot = useSelector(getSpot);

    const spots = useAsync(callApi('getSpots'), []);

    const handleMarkerClick = (address: string) => {
        // @ts-ignore
        const spotData = spots.result.data.find((spot) => spot.address === address);

        // Closes the map marker if the current spot is clicked, or opens/updates it if a new spot is clicked
        if (spotData && spotData.address === currentSpot?.address) {
            dispatch(clearSpot());
        } else if (spotData) {
            dispatch(updateSpot(spotData));
        }
    }

    const renderPins = () => {
        if (!spots.result) return;

        // @ts-ignore
        return spots.result.data
            .filter((item: any) => {
                return (range === 30 || item.distance <= range * 100) &&
                    (price[1] === 200 || (item.price >= price[0] && item.price <= price[1])) &&
                    Object.entries(amenities).every((amenity: [string, boolean]) => !amenity[1] || item.amenities.includes(amenity[0]));
            })
            .map((data: any, index: any) => {
                return (
                    <CustomMarker key={index} lat={data.latitude} long={data.longitude}
                              address={data.address} price={data.price} onClick={handleMarkerClick}/>
                );
            });
    }

    return (
        <MapContainer
            className="relative h-[79.5vh] w-[96vw] rounded-xl z-0"
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

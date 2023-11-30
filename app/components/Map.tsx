"use client";
import React, { useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import CustomMarker from './CustomMarker';
import dummyData from "@/app/pages/map/dummyData";

// @ts-ignore
function Maps({ timeframes, range, price, amenities }) {
    const center = { lat: 44.236524, lng: -76.495791 };
    const ZOOM_LEVEL = 14.5;
    const mapRef = useRef();

    const renderPins = () => {
        return dummyData
            .filter((item) => {
                return item.period.some((period) => timeframes[period]) &&
                    item.distance <= range * 100 &&
                    item.price >= price[0] && item.price <= price[1] &&
                    Object.keys(amenities).every((amenity: string) => amenities[amenity] !== true || item.amenities.includes(amenity));
            })
            .map((data, index) => (
                <CustomMarker key={index} address={data.address} price={data.price} lat={data.latitude}
                          long={data.longitude} active={true}/>
        ));
    }

    return (
        <>
            <MapContainer
                className="absolute ml-[2vw] h-[86.5vh] w-[96vw] rounded-xl -z-50"
                center={center}
                zoom={ZOOM_LEVEL}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png'

                    // this is the original we need to use this for remote deployemnt all other works locally
                    // url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png'

                    // uncoment this and comment out the line above these are mulitple styles we must pay for some of this if we wish to publish this
                    // url='https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}.png'
                    // url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png'
                    // url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png'
                />

                {renderPins()}
            </MapContainer>
        </>
    )
}

export default Maps;

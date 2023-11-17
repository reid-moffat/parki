import Image from 'next/image'
import './firebase/config';
import Link from 'next/link';
import type { Route } from 'next';
import ParkingSpot from './components/ParkingSpot';
import MapViewButton from './components/buttons/MapView';
import Maps from "@/app/components/Map";
import React from "react";

export default function Home() {
    return (
        <>
            <Maps />
        </>
    );
}

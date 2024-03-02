import { MdChevronLeft } from "react-icons/md";
import { useAsync } from "react-async-hook";
import { callApi } from "@/config/firebase";
import { MapContainer, TileLayer } from "react-leaflet";
import React from "react";
import CustomMarker from "@/components/map/CustomMarker";
import dynamic from "next/dynamic";

const MiniMap = dynamic(() => import('@/components/map/MiniMap'), { ssr: false });

// @ts-ignore
const ConfirmLocation = ({ setStep, address }) => {

    const latLng = useAsync(() => callApi("getLatLngFromAddress")({ address }), []);

    const renderMap = () => {

        if (latLng.loading) {
            return <div>Loading...</div>;
        }

        if (!latLng.result) {
            return <div>Error loading map</div>;
        }

        // @ts-ignore
        const { lat, lng } = latLng.result.data;

        return (
            <div className='w-[80vw] h-[40vh] border-0 rounded-xl overflow-hidden mb-3 relative z-1'>
                <MiniMap lat={lat} lng={lng}/>
            </div>
        );
    }

    return (
        <>
            <div className="pt-10">
                <MdChevronLeft size={42} onClick={() => setStep("getAddress")}/>
            </div>
            <div className="text-3xl font-bold mt-8">
                Confirm Location
            </div>

            <div className="mt-4">
                Adjust map to the exact location
            </div>

            {renderMap()}

            <div
                className="absolute w-full bottom-8 bg-[#FF4251] text-center text-white text-2xl font-semibold rounded-2xl p-3"
                onClick={() => setStep("confirmFeatures")}
            >
                Confirm
            </div>
        </>
    );
}

export default ConfirmLocation;

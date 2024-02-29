import { MdChevronLeft } from "react-icons/md";
import { useAsync } from "react-async-hook";
import { callApi } from "@/config/firebase";
import { MapContainer, TileLayer } from "react-leaflet";
import React from "react";

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

        console.log(`Data: ${JSON.stringify(latLng.result.data, null, 4)}`);

        // @ts-ignore
        const { lat, lng } = latLng.result.data;

        return (
            <div className='w-[80vw] h-[40vh] border-0 rounded-xl overflow-hidden mb-3 relative z-1'>
                <MapContainer
                    className="relative h-[79.5vh] w-[96vw] rounded-xl z-0"
                    center={{ lat, lng }}
                    zoom={15}
                    zoomControl={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}.png'
                        minZoom={15}
                        maxZoom={15}
                    />
                </MapContainer>
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

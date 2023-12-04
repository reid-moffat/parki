import L from "leaflet";
import { Marker, Popup } from "react-leaflet";

interface MarkerProps {
    lat: number,
    long: number,
    address: string,
    price: number,
    active: boolean, // If this is the pin the user is currently on
}

function CustomMarker({ lat, long, address, price }: MarkerProps) {

    const customMarkerIcon = L.divIcon({
        className: 'my-div-icon',
        html: `<div style="position: relative;height: 38px; width: 39px;transform: translateY(-20px) ;">\
         <img style="height: 38px; width: 39px;" src="pins/ActiveSpot.png" alt="Active Spot"> \
         <div style="position: absolute; top: 18%; width: 80%; text-align: center; color:white; font-family: sans-serif;">\
         $${price}</div> </div>`
    });

    return (
        <Marker position={[lat, long]} icon={customMarkerIcon}>
            <Popup>
                {address}
                <br/>
                ${price}
            </Popup>
        </Marker>
    )
}

export default CustomMarker

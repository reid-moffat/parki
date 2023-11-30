import L from "leaflet";
import { Marker, Popup } from "react-leaflet";

interface MarkerProps {
    lat: number,
    long: number,
    address: string,
    price: number,
    active: boolean, // If this is the pin the user is currently on
}

function CustomMarker({ lat, long, address, price, active } : MarkerProps) {

    L.Marker.prototype.options.icon = L.icon({
        iconUrl: active ? '/pins/ActiveSpot.png' : '/pins/OtherSpot.png',
        iconSize: [38, 39],
    });

    return (
        <Marker position={[lat, long]}>
            <Popup>
                {address}
                <br/>
                ${price}
            </Popup>
        </Marker>
    )
}

export default CustomMarker

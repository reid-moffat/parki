import L from "leaflet";
import { Marker, Popup } from "react-leaflet";


function CustomMarker(props: any) {
    const lat = props.lat;
    const long = props.long;

    L.Marker.prototype.options.icon = L.icon({
        iconUrl: '/pins/PIN.png',
        iconSize: [38, 39],
    });

    return (
        <Marker position={[lat, long]}>
            <Popup>
                {props.address}
                <br/>
                ${props.price}
            </Popup>
        </Marker>
    )
}

export default CustomMarker

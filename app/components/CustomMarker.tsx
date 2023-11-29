import L from "leaflet";
import { Marker, Popup } from "react-leaflet";


function CustomMarker(props: any) {
    const lat = props.lat;
    const long = props.long;


    let DefaultIcon = L.icon({
        iconUrl: '/pins/PIN.png',
        iconSize: [38, 39],
    });

    L.Marker.prototype.options.icon = DefaultIcon;

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

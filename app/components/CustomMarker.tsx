import L, { divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { Marker, Popup } from "react-leaflet";

interface MarkerProps {
    lat: number,
    long: number,
    address: string,
    price: number,
    active: boolean, // If this is the pin the user is currently on
}

const text = L.divIcon({html: 'Your HTML text here'});


function CustomMarker({ lat, long, address, price, active } : MarkerProps) {

    // L.Marker.prototype.options.icon = L.icon({
    //     iconUrl: active ? '/pins/ActiveSpot.png' : '/pins/OtherSpot.png',
    //     iconSize: [38, 39],
       
    // });


    const iconMarkup = renderToStaticMarkup(<i className=" fa fa-map-marker-alt fa-3x" />);
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
